import { Box, HTMLStyledProps } from '@tasty-maker-studio/styled-system/jsx';
import { navbarMiddle } from '@tasty-maker-studio/styled-system/recipes';

const NavbarMiddle = (props: HTMLStyledProps<'div'>) => {
  const { children, ...rest } = props;
  return (
    <Box className={navbarMiddle()} {...rest}>
      {children}
    </Box>
  );
};

export { NavbarMiddle };
