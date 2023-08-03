import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Select({
  htmlFor,
  text,
  placeholder,
  type,
  className,
  divclass,
  value,
  setValue,options
}) {
  return (
    <div>
      <label className='block text-sm font-medium text-gray-700'>
        {text} <span className='str ml-2'>*</span>
      </label>
      <div
        className={classNames(
          !divclass ? 'mt-1 sm:col-span-3 sm:mt-0' : divclass
        )}
      >
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={classNames(
            !className
              ? 'block w-full max-w-3xl mt-1  focus:border-none active:border-none p-2  border-slate-200 border shadow-sm rounded-md focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
              : className,
            ' mt-1  focus:border-none active:border-none p-2  border-slate-200 border shadow-sm rounded-md focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
          )}
        >
          {options?.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        {/* <input
          type={type}
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className={classNames(
            !className
              ? 'block w-full max-w-3xl mt-1  focus:border-none active:border-none p-2  border-slate-200 border shadow-sm rounded-md focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
              : className,
            ' mt-1  focus:border-none active:border-none p-2  border-slate-200 border shadow-sm rounded-md focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
          )}
        /> */}
      </div>
    </div>
  );
}
