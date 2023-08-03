// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Order from "@/models/Order.model";



export default async function handler(req, res) {
  const { payment_id, order_id, payment_request_id } = req.query;


  if (payment_id) {
    await Order.findOneAndUpdate(
      { _id: order_id },
      { payment_id, payment_request_id, payment_status: 'success' },
      { new: true }
    );

    // Redirect the user to payment complete page.
    return res.redirect('https://astro-faisalnawaz953.vercel.app/payment-success');
  }
}
