import { FunctionComponent } from 'react';
import Image from 'next/image';

const ServiceArea: FunctionComponent = () => {
  return (
    <Image
      src="/images/service_area.svg"
      alt="Service Area"
      height={482}
      width={570}
      className="block fill-red-600 color-red-600"
    />
  );
};

export default ServiceArea;
