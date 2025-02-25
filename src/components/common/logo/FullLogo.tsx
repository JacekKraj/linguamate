import { Link } from '@/components/common/link/Link';
import Image from 'next/image';
import { PATHS } from '@/utils/common/urls';
import { isMobileServer } from '@/utils/common/isMobile';
import styles from './logo.module.css';

export const FullLogo = async () => {
  const isMobile = await isMobileServer();
  const width = isMobile ? 108 : 138;
  const height = isMobile ? 22 : 28;

  return (
    <Link href={PATHS.HOME}>
      <Image
        src="/images/logoFull.png"
        className={styles.fullLogoImage}
        alt="LinguoLog"
        width={width}
        height={height}
      />
    </Link>
  );
};
