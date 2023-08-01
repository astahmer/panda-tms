import {
  Box,
  type HTMLStyledProps
} from '@tasty-maker-studio/styled-system/jsx';
import { stickySection } from '@tasty-maker-studio/styled-system/recipes';

const StickySection = (props: HTMLStyledProps<'div'>) => {
  const { children, ...rest } = props;
  return (
    <Box className={stickySection()} {...rest}>
      {children}
    </Box>
  );
};

export { StickySection };
