import Link from 'next/link';

type MainLogo = {
  toggleMenu?: () => void;
};

export const MainLogo = ({ toggleMenu }: MainLogo) => {
  return (
    <Link href='/' className='group text-3xl font-bold' onClick={toggleMenu}>
      <span className='text-darkBlue  transition-colors group-hover:text-logoBlue'>web</span>
      <span className='text-logoRed'>dev</span>
    </Link>
  );
};
