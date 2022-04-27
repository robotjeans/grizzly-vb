import { FunctionComponent } from 'react';

type BookingFormProps = {
  heading?: string;
};

const BookingForm: FunctionComponent<BookingFormProps> = ({ heading }) => {
  return (
    <div className="flex flex-col items-start w-full p-8 bg-white md:p-20">
      <h3>{heading}</h3>
      <form className="flex flex-col w-full font-medium">
        <label htmlFor="relative flex flex-col mb-8"></label>
      </form>
    </div>
  );
};

export default BookingForm;
