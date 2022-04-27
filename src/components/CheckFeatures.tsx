import { FunctionComponent } from 'react';

type CheckFeaturesProps = {
  className?: string;
};

const features = [
  { title: 'same day junk removal' },
  { title: '100% satisfaction' },
  { title: 'price assurance' },
];

const CheckFeatures: FunctionComponent<CheckFeaturesProps> = ({
  className = 'text-base font-semibold',
}) => {
  return (
    <div className={`flex flex-wrap justify-center lg:justify-start`}>
      {features?.map(({ title }, i) => (
        <li
          key={`home_hero_check${i}`}
          className={`flex items-center pl-8 first-of-type:pl-0 mb-2 list-none font-bold capitalize ${className}`}
        >
          <div className="mr-3">
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.46998 6.69698L5.46519 10.0354C5.46519 10.0354 6.90169 5.01243 13.7888 1.36218"
                stroke="#2047F4"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {title}
        </li>
      ))}
    </div>
  );
};

export default CheckFeatures;
