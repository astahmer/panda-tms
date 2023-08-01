import { useEffect } from 'react';
import { Box, Flex } from '@tasty-maker-studio/styled-system/jsx';
import useEmblaCarousel from 'embla-carousel-react';

import { CarouselProvider } from '../CarouselProvider';

export type ThumbCarouselProps = {
  children: React.ReactNode;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  thumbOrientation?: string | undefined;
  isStatic?: boolean;
};

/** A Queue thumbnail images for selecting Carousel Slide image */
const ThumbCarousel: React.FC<ThumbCarouselProps> = (props) => {
  const {
    children,
    selectedIndex,
    setSelectedIndex,
    thumbOrientation = 'horizontal',
    isStatic = false
  } = props;

  const [emblaThumbRef, emblaThumbApi] = useEmblaCarousel({
    axis: thumbOrientation === 'horizontal' ? 'x' : 'y',
    // keep direction undefined for vertical orientation if the current theme is RTL
    direction: thumbOrientation === 'horizontal' ? 'ltr' : undefined,
    containScroll: 'keepSnaps',
    dragFree: false
  });

  useEffect(() => {
    if (!emblaThumbApi) {
      return;
    }

    emblaThumbApi.scrollTo(selectedIndex);
  }, [emblaThumbApi, selectedIndex]);

  const isVerticalViewport = thumbOrientation !== 'horizontal';

  const setUpQueueType = () => {
    if (!isStatic) {
      return (
        <Flex
          flexDirection={isVerticalViewport ? 'column' : 'row'}
          ml={isVerticalViewport ? '' : 'calc(0.8rem * -1)'}
          mt={isVerticalViewport ? 'calc(0.8rem * -1)' : ''}
          w={isVerticalViewport ? '' : '100%)'}
          h={isVerticalViewport ? '100%' : '100px'}
          p={isVerticalViewport ? '0.4em' : '0'}
        >
          {children}
        </Flex>
      );
    }

    return (
      <Flex
        flexDirection="row"
        flexWrap="wrap"
        ml={isVerticalViewport ? '' : 'calc(0.8rem * -1)'}
        mt={isVerticalViewport ? 'calc(0.8rem * -1)' : ''}
        w={isVerticalViewport ? '' : '100%)'}
        h={isVerticalViewport ? '100%' : 'auto'}
        p={isVerticalViewport ? '0.4em' : '0'}
      >
        {children}
      </Flex>
    );
  };

  return (
    <CarouselProvider
      value={{
        selectedSlide: selectedIndex,
        setSelectedSlide: setSelectedIndex
      }}
    >
      <Box
        overflow={'hidden'}
        height={isVerticalViewport ? '100%' : 'auto'}
        ref={emblaThumbRef}
      >
        {setUpQueueType()}
      </Box>
    </CarouselProvider>
  );
};

export { ThumbCarousel };
