'use client';

import {
  styled,
  type HTMLStyledProps
} from '@tasty-maker-studio/styled-system/jsx';
import {
  button,
  type ButtonVariantProps
} from '@tasty-maker-studio/styled-system/recipes';

// Combine the ButtonVariantProps with the HTMLStyledProps
type ButtonProps = ButtonVariantProps &
  HTMLStyledProps<'button'> &
  HTMLStyledProps<'a'>;

/**
 * Button component definition
 *
 * @param props:ButtonProps  The props for the Button component
 * @param props.variant      The variant of the button (primary, secondary,
 *                           tertiary, accent, info, danger, link, icon, outline)
 * @param props.shape        The shape of the button (rounded, square)
 * @param props.children     The children of the button, can be text or JSX
 * @param rest               The rest of the passed in props for the button
 *                             component  (e.g. onClick, onMouseOver, etc.)
 *
 * @returns React.Element     The Button component JSX element
 */
const Button = (props: ButtonProps) => {
  const { variant, shape, children, ...rest } = props;

  return (
    <styled.button {...rest} className={button({ variant, shape })}>
      {children}
    </styled.button>
  );
};

export { Button, type ButtonProps };
