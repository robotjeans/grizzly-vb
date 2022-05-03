import { FunctionComponent } from 'react';

const ContactForm: FunctionComponent = () => {
  return (
    <form className='class="mt-12 sm:max-w-lg sm:w-full sm:flex mb-12"'>
      <div className="min-w-0S flex flex-col">
        <label htmlFor="name_field" className="sr-only">
          Name*
        </label>
        <input
          type="text"
          name="name"
          id="name_field"
          className='class="block w-full border border-gray-500 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-red-600 focus:ring-red-600"'
          placeholder="Name"
        />
      </div>
      <div className="min-w-0 flex-1">
        <label htmlFor="phone_field" className="sr-only">
          Phone*
        </label>
        <input
          type="phone"
          name="phone"
          id="phone_field"
          className='class="block w-full border border-gray-500 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-red-600 focus:ring-red-600"'
          placeholder="Phone"
        />
      </div>
      <div className="min-w-0 flex-1">
        <label htmlFor="email_field" className="sr-only">
          Email*
        </label>
        <input
          type="email"
          name="email"
          id="email_field"
          className='class="block w-full border border-gray-500 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-red-600 focus:ring-red-600"'
          placeholder="Email"
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-3">
        <button
          type="submit"
          className="block w-full rounded-md border border-transparent px-5 py-3 bg-red-600 text-base font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:px-10"
        >
          Send →
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
