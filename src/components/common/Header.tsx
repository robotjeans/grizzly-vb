import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/common/Button';

const Header = ({ onOpen }: any) => {
  return (
    <header
      role="banner"
      className="sticky top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out bg-white shadow-lg"
    >
      <div className="relative flex items-center justify-center bg-red-600 h-[44px] mt-[-8px]">
        <p className="text-white text-base">(757) 993 7283</p>
      </div>
      <Container>
        <nav className="flex items-center justify-between h-[60px]">
          <Link passHref href="/">
            <Image
              loader={() => '/images/logo.svg'}
              src="/images/logo.svg"
              alt="Grizzly Hauling Logo"
              width={96}
              height={48}
              className="cursor-pointer rounded"
            />
          </Link>
          <div className="flex items-baseline space-x-4"></div>
          <div className="flex flex-row justify-center items-center min-w-28">
            <Button variant="primary">Book Pickup</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
