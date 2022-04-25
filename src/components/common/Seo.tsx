import Head from 'next/head';
import { FunctionComponent } from 'react';

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
};

const SEO: FunctionComponent<SeoProps> = ({
  title = 'Grizzly Hauling',
  description,
  image,
}) => {
  return (
    <Head>
      <title>{title} | Hampton Roads</title>
      <meta name="description" content={description} />
      <meta name="name" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
    </Head>
  );
};

export default SEO;
