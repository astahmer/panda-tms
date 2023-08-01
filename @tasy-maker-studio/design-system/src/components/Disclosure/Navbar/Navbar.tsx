import {
  Box,
  type HTMLStyledProps
} from '@tasty-maker-studio/styled-system/jsx';
import {
  navbar,
  type NavbarVariantProps
} from '@tasty-maker-studio/styled-system/recipes';

// combine the props for the Navbar component
type NavbarProps = NavbarVariantProps & HTMLStyledProps<'div'>;

/**
 * Navbar component definition
 *
 * @param props: NavbarProps  Props for the Navbar component
 * @param props.variant: NavbarVariantProps  Variant for the Navbar component
 * @param props.children: React.ReactNode  Children for the Navbar component
 * @param props.rest: HTMLStyledProps<'div'>  Rest of the props for the Navbar component
 *
 * @returns JSX.Element  JSX Element for the Navbar component
 */
const Navbar = (props: NavbarProps) => {
  const { variant, children, ...rest } = props;

  return (
    <Box className={navbar({ variant })} {...rest}>
      {children}
    </Box>
  );
};

export { Navbar, type NavbarProps };
