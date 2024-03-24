import { MainLogo } from '@/app/components/mainLogo';
import { Container } from '@/app/components/container';
export const Header = () => {
  return (
    <Container>
      <div className='flex justify-between items-center mt-10'>
        <MainLogo />
      </div>
    </Container>
  );
};
