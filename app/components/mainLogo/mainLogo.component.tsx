import Link from 'next/link';

export const MainLogo = () => {
  return (
    <section>
      <Link href='/' className='group text-3xl font-bold'>
        <span className='text-darkBlue  transition-colors group-hover:text-logoBlue'>web</span>
        <span className='text-logoRed'>dev</span>
      </Link>
    </section>
  );
};
