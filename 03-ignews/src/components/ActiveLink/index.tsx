
import Link, { LinkProps } from 'next/link'
import { ReactElement, cloneElement } from 'react'

import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}