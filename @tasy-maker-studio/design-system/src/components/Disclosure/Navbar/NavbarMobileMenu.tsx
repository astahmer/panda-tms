import {
  Box,
  type HTMLStyledProps
} from '@tasty-maker-studio/styled-system/jsx';
import { navbarMobileMenu } from '@tasty-maker-studio/styled-system/recipes';

const NavbarMobileMenu = (props: HTMLStyledProps<'div'>) => {
  const { children, ...rest } = props;
  return (
    <Box className={navbarMobileMenu()} {...rest}>
      {children}
    </Box>
  );
};

export { NavbarMobileMenu };
