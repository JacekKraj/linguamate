import { Link } from '@/components/common/link/Link';
import { ComponentProps } from 'react';
import styles from '../button/button.module.css';
import clsx from 'clsx';
import { ButtonProps, getButtonVariantClassName } from '@/components/common/button/Button';

interface LinkButtonProps extends ComponentProps<typeof Link> {
  variant: ButtonProps['variant'];
}

export const LinkButton = ({ children, className, variant, ...props }: LinkButtonProps) => {
  return (
    <Link className={clsx(styles.button, className, getButtonVariantClassName(variant))} {...props}>
      {children}
    </Link>
  );
};
