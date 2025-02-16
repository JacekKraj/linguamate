import styles from './button.module.css';

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline';
}

export const getButtonVariantClassName = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return styles.buttonPrimary;
    case 'secondary':
      return styles.buttonSecondary;
    case 'primary-outline':
      return styles.buttonPrimaryOutline;
    case 'secondary-outline':
      return styles.buttonSecondaryOutline;
  }
};
