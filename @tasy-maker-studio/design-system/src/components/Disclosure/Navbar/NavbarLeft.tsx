import {
  Box,
  type HTMLStyledProps
} from '@tasty-maker-studio/styled-system/jsx';
import { navbarLeft } from '@tasty-maker-studio/styled-system/recipes';

const NavbarLeft = (props: HTMLStyledProps<'div'>) => {
  const { children, ...rest } = props;
  return (
    <Box className={navbarLeft()} {...rest}>
      {children}
    </Box>
  );
};

export { NavbarLeft };

// TODO: Check padding top, the manual version of this needed some
// TODO: add in styling based on the screen size, specifically, this one
// needs to be centered and smaller in height on mobile (phone) screens
//
