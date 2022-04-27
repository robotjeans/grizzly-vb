import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Container from '@/components/Container';

type IconItemProp = {
  icon: IconProp;
  href?: string;
};

export const FooterIconItem = (props: IconItemProp) => (
  <a href={props.href} target="_blank" rel="noreferrer">
    <FontAwesomeIcon
      className="hover:text-white text-gray-400 transition"
      icon={props.icon}
      size="lg"
    />
  </a>
);

const Footer = () => (
  <footer className="py-12 bg-neutral-800">
    <div className="border-b border-b-gray-500 pb-12">
      <Container>
        <div className="flex gap-x-4 justify-center">
          <FooterIconItem
            icon={faTwitter}
            href="https://twitter.com/grizzlyhaulingvb"
          />
          <FooterIconItem
            icon={faFacebook}
            href="https://www.facebook.com/grizzlyhaulingvb"
          />
          <FooterIconItem
            icon={faInstagram}
            href="https://www.instagram.com/grizzlyhaulingvb"
          />
        </div>
      </Container>
    </div>
    <div className="pt-8">
      <Container>
        <div className="flex flex-row items-center justify-center">
          <div className="flex gap-x-4 justify-center text-center text-gray-400">
            <span className="border-2 border-transparent hover:border-b-2 hover:border-gray-400  cursor-pointer pb-1">
              <Link href="/tos">Terms of Service</Link>
            </span>
            <span className="border-2 border-transparent hover:border-b-2 hover:border-gray-400 cursor-pointer pb-1">
              <Link href="/privacy">Privacy Policy</Link>
            </span>
            <span>&copy;Grizzly Hauling 2022</span>
          </div>
        </div>
      </Container>
    </div>
  </footer>
);

export default Footer;
