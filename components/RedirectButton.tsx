// RedirectButton.tsx
import React from 'react';
import Link from 'next/link';

interface RedirectButtonProps {
  to: string;
  children: React.ReactNode;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ to, children }) => {
  return (
    <Link href={to} passHref>
      {React.cloneElement(React.Children.only(children) as React.ReactElement, { href: to })}
    </Link>
  );
};

export default RedirectButton;
