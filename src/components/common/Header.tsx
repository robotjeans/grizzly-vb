import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/common/Button';

const Header = ({ onOpen }: any) => {
  return (
    <header
      role="banner"
      className="sticky top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out bg-white"
    >
      <Container>
        <nav className="flex items-center justify-between h-[60px]">
          <Link passHref href="/">
            <Image
              loader={() => '/images/logo.png'}
              src="/images/logo.png"
              alt="Grizzly Hauling Logo"
              width={35}
              height={35}
              className="cursor-pointer rounded"
            />
          </Link>
          <div className="flex items-baseline space-x-4"></div>
          <div className="flex flex-row justify-center items-center w-28">
            <Link href="/login">
              <a className="uppercase text-xs font-medium p-[0 12px] mr-4 leading-[60px] text-slate-500">
                login
              </a>
            </Link>
            <Button onClick={onOpen} variant="inverse">
              Register
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
