import { type ReactNode } from 'react';
import {
  styled,
  type HTMLStyledProps
} from '@tasty-maker-studio/styled-system/jsx';
import {
  header,
  type HeaderVariantProps
} from '@tasty-maker-studio/styled-system/recipes';

type HeaderContentProps = {
  type?: 'h1' | 'h2' | 'h3' | 'h4';
  children: ReactNode;
  HTMLStyledProps?: HTMLStyledProps<'h1' | 'h2' | 'h3' | 'h4'>;
};

export type HeaderProps = HeaderVariantProps &
  HeaderContentProps &
  HTMLStyledProps<'h1' | 'h2' | 'h3' | 'h4'>;

const renderHeader = (props: HeaderProps) => {
  const { type, children, ...rest } = props;
  switch (type + '') {
    case 'h1':
      return (
        <styled.h1 {...rest} className={header({ type })} data-scope="h1">
          {children}
        </styled.h1>
      );
    case 'h2':
      return (
        <styled.h2 {...rest} data-scope="h2">
          {children}
        </styled.h2>
      );
    case 'h3':
      return (
        <styled.h3 {...rest} data-scope="h3">
          {children}
        </styled.h3>
      );
    case 'h4':
      return (
        <styled.h4 {...rest} data-scope="h4">
          {children}
        </styled.h4>
      );
    default:
      return (
        <styled.h1 {...rest} data-scope="h1">
          {children}
        </styled.h1>
      );
  }
};

export const Header = (props: HeaderProps) => {
  const { type, children, ...rest } = props;
  return <>{renderHeader(props)}</>;
};
