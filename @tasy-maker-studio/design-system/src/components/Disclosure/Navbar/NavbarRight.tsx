import {
  Box,
  type HTMLStyledProps
} from '@tasty-maker-studio/styled-system/jsx';
import { navbarRight } from '@tasty-maker-studio/styled-system/recipes';

const NavbarRight = (props: HTMLStyledProps<'div'>) => {
  const { children, ...rest } = props;
  return (
    <Box className={navbarRight()} {...rest}>
      {children}
    </Box>
  );
};

export { NavbarRight };
