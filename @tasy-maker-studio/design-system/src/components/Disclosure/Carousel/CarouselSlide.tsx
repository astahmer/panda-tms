import { forwardRef, useCallback } from 'react';
import { Flex } from '@tasty-maker-studio/styled-system/jsx';

export interface CarouselSlideProps {
  /** Slide content */
  children?: React.ReactNode;
}

const _CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ children }, ref) => {
    return (
      <Flex
        flexGrow={0}
        flexShrink={0}
        flexBasis={'100%'}
        position="relative"
        ref={ref}
      >
        {children}
      </Flex>
    );
  }
);

_CarouselSlide.displayName = 'CarouselSlide';

export { _CarouselSlide as CarouselSlide };
