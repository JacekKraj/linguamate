import { Link } from '@/components/common/link/Link';
import { PATHS } from '@/utils/common/urls';
import Image from 'next/image';

export const MiniLogo = () => {
  return (
    <Link href={PATHS.HOME}>
      <Image src="/images/logoMini.png" alt="LinguoLog" width={34} height={24} />
    </Link>
  );
};
