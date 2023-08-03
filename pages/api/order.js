// api/users.js

import dbConnect from '@/lib/dbConnect';
import Order from '@/models/Order.model';

const Insta = require('instamojo-nodejs');
// const url = require('url');

// /**
//  * @route GET api/bid/callback/
//  * @desc Call back url for instamojo
//  * @access public
//  */
// router.get( '/callback/', ( req, res ) => {
// 	let url_parts = url.parse( req.url, true),
// 		responseData = url_parts.query;

// 	if ( responseData.payment_id ) {
// 		let userId = responseData.user_id;

// 		// Save the info that user has purchased the bid.
// 		const bidData = {};
// 		bidData.package = 'Bid100';
// 		bidData.bidCountInPack = '10';

// 		User.findOneAndUpdate( { _id: userId }, { $set: bidData }, { new: true } )
// 			.then( ( user ) => res.json( user ) )
// 			.catch( ( errors ) => res.json( errors ) );

// 		// Redirect the user to payment complete page.
// 		return res.redirect('http://localhost:3000/payment-complete' );
// 	}

// } );

export default async function handler(req, res) {
  await dbConnect();

  const order = new Order({
    fullName: req.body.fullName,
    gender: req.body.gender,
    day: req.body.day,
    month: req.body.month,
    year: req.body.year,
    hours: req.body.hours,
    minutes: req.body.minutes,
    period: req.body.period,
    birthCity: req.body.birthCity,
    state: req.body.state,
    language: req.body.language,
    whatsapp: req.body.whatsapp,
    email: req.body.email,
    payment_status: 'initialized'
  });
  await order.save();
  Insta.setKeys(
    process.env.INSTA_MOJO_API_KEY,
    process.env.INSTA_MOJO_AUTH_KEY
  );

  const data = new Insta.PaymentData();
  Insta.isSandboxMode(true);

  data.purpose = req.body.purpose;
  data.amount = req.body.amount;
  data.buyer_name = req.body.fullName;
  data.redirect_url = `https://astro-faisalnawaz953.vercel.app/api/order-complete?order_id=${order._id}`;
  data.email = req.body.email;
  data.phone = req.body.whatsapp;
  data.send_email = false;
  data.webhook = 'https://www.instamojo.com/webhook-testing-tool/';
  data.send_sms = false;
  data.allow_repeated_payments = false;

  await Order.findByIdAndUpdate(
    { _id: order._id },
    {
      payment_status: 'pending'
    }
  );

  Insta.createPayment(data, function (error, response) {
    if (error) {
      // some error
      res.status(400).json(error);
    } else {
      // Payment redirection link at response.payment_request.longurl
      const responseData = JSON.parse(response);

      const redirectUrl = responseData?.payment_request?.longurl;

      res.status(200).json(redirectUrl);
    }
  });
}
