import { useCallback } from 'react';
import { Button } from '@/components/Forms/Button';
import { Flex } from '@tasty-maker-studio/styled-system/jsx';

import { useCarouselContext } from '../CarouselProvider';

export type ThumbSlideType = {
  children: React.ReactNode;
  thumbSlideOrientation?: string | undefined;
  slideIndex: number;
};

const ThumbSlide: React.FC<ThumbSlideType> = (props) => {
  const { children, slideIndex, thumbSlideOrientation = 'horizontal' } = props;
  const { selectedSlide, setSelectedSlide } = useCarouselContext();

  const handleClick = useCallback(() => {
    setSelectedSlide(slideIndex);
  }, [setSelectedSlide]);

  const isVerticalSlide = thumbSlideOrientation !== 'horizontal';
  const isSlideSelected = slideIndex === selectedSlide;
  return (
    <Flex
      mt={isVerticalSlide ? '' : '15px'}
      position="relative"
      flexGrow={0}
      flexShrink={0}
      flexBasis={isVerticalSlide ? '10%' : '15%'}
      minHeight={isVerticalSlide ? 0 : 'auto'}
      minWidth={isVerticalSlide ? 'auto' : 0}
      pt={isVerticalSlide ? '0.8rem' : ''}
      pl={isVerticalSlide ? '' : '0.8rem'}
    >
      <Button
        bg={isSlideSelected ? 'primary' : 'transparent'}
        touchAction="manipulation"
        border="none"
        h={'100px'}
        p={'5px'}
        m={0}
        onClick={() => handleClick()}
        type="button"
      >
        {children}
      </Button>
    </Flex>
  );
};
export { ThumbSlide };
