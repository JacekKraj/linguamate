import NextLink from 'next/link';
import { ComponentProps } from 'react';

interface LinkProps extends ComponentProps<typeof NextLink> {
  children: React.ReactNode;
}

export const Link = ({ children, ...props }: LinkProps) => {
  return <NextLink {...props}>{children}</NextLink>;
};
