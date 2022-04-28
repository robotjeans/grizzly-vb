import { FunctionComponent } from 'react';

const CustomerInsights: FunctionComponent = () => {
  return (
    <section
      id="customer"
      className="flex flex-col justify-between items-center text-blue-dark-contrast bg-gray-50 lg:flex-row"
    >
      <div className="container flex flex-col py-12 max-w-6xl lg:px-24">
        <span className="mb-3 w-24 h-2 bg-teal-light-contrast rounded-full" />
        <h1>Customer Insights</h1>
        <p className="max-w-prose text-gray-800">
          Discover what our customers have to say.
        </p>
      </div>
      <div className="relative z-10 w-full h-144 lg:w-1/2 lg:h-200"></div>
    </section>
  );
};

export default CustomerInsights;
