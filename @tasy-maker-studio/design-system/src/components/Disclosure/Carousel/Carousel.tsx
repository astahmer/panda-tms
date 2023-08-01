import { forwardRef, useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/Forms/Button';
import { ChevronLeft, ChevronRight } from '@/icons';
import { Box, Flex } from '@tasty-maker-studio/styled-system/jsx';
import useEmblaCarousel, { EmblaPluginType } from 'embla-carousel-react';

import { ThumbCarousel } from './ThumbCarousel';

export type CarouselOrientationType = 'vertical' | 'horizontal';
export type VerticalQueueSideType = 'top' | 'bottom';
export type HorizontalQueueSideType = 'left' | 'right';

export interface CarouselProps {
  /** <Carousel.Slide /> components */
  children?: React.ReactNode;

  /** current numeric id  (index) of  visible slide  */
  currentSlideIndex?: number;

  /** action to set the  numeric id  (index) of  visible slide  */
  setCurrentSlideIndex?: React.Dispatch<React.SetStateAction<number>>;

  /** carouse of thumbs for selecting slide **/
  carouselThumbSlot?: React.ReactNode | undefined;

  /** vertical queue of thumbs for selecting slide **/
  verticalQueueSide?: VerticalQueueSideType | undefined;

  /** horizontal queue of thumbs for selecting slide **/
  horizontalQueueSide?: HorizontalQueueSideType | undefined;

  /** if isStatic true, then thumb queue will not be a carousel **/
  isStatic?: boolean | undefined;

  /** Called when user clicks next button */
  //  onNextSlide?(): void;

  /** Called when user clicks previous button */
  //  onPreviousSlide?(): void;

  /** Called with slide index when slide changes */
  //  onSlideChange?(index: number): void;

  /** Previous/next controls size */
  // controlSize?: number;

  /** Slide width, defaults to 100%, examples: 40rem 50% */
  slideSize?: string | number;

  /** Key of theme.spacing or number to set gap between slides */
  slideGap?: number;

  /** Control slideSize and slideGap at different viewport sizes */
  //breakpoints?: CarouselBreakpoint[];

  /** Carousel  orientation, horizontal by default */
  carouselOrientation?: CarouselOrientationType | undefined;

  /** Slides container height, required for vertical orientation */
  // height?: React.CSSProperties['height'];

  /** Determines how slides will be aligned relative to the container. Use number between 0-1 to align slides based on percentage, where 0.5 equals 50% */
  align?: 'start' | 'center' | 'end' | number;

  /** Number of slides that should be scrolled with next/previous buttons */
  slidesToScroll?: number | 'auto';

  /** Determines whether gap should be treated as part of the slide size, true by default */
  includeGapInSize?: boolean;

  /** Determines whether carousel can be scrolled with mouse and touch interactions, true by default */
  // draggable?: boolean;

  /** Determines whether momentum scrolling should be enabled, false by default */
  dragFree?: boolean;

  /** Enables infinite looping. Automatically falls back to false if slide content isn't enough to loop. */
  loop?: boolean;

  /** Adjusts scroll speed when triggered by any of the methods. Higher numbers enables faster scrolling. */
  speed?: number;

  /** Index of initial slide */
  initialSlide?: number;

  /** Choose a fraction representing the percentage portion of a slide that needs to be visible in order to be considered in view. For example, 0.5 equals 50%. */
  inViewThreshold?: number;

  /** Determines whether next/previous controls should be displayed, true by default */
  withControls?: boolean;

  /** An array of embla plugins */
  plugins?: EmblaPluginType[];

  /** Allow the carousel to skip scroll snaps if it's dragged vigorously. Note that this option will be ignored if the dragFree option is set to true, false by default */
  skipSnaps?: boolean;

  /** Clear leading and trailing empty space that causes excessive scrolling. Use trimSnaps to only use snap points that trigger scrolling or keepSnaps to keep them. */
  containScroll?: 'trimSnaps' | 'keepSnaps' | undefined;
}

const defaultProps: Partial<CarouselProps> = {
  slideSize: '100%',
  slideGap: 0,
  carouselOrientation: 'horizontal',
  align: 'center',
  slidesToScroll: 1,
  includeGapInSize: true,
  //draggable: true,
  dragFree: false,
  loop: false,
  initialSlide: 0,
  inViewThreshold: 0,
  withControls: false,
  skipSnaps: false,
  containScroll: undefined,
  verticalQueueSide: 'bottom',
  horizontalQueueSide: 'left',
  isStatic: false
};

/** Using  Embla-Carouse:  https://www.embla-carousel.com   to create Carousel to traverse product images*/
export const _Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (props: CarouselProps, ref) => {
    const {
      children,
      slideSize,
      slideGap,
      carouselOrientation,
      align,
      slidesToScroll,
      includeGapInSize,
      //draggable,
      dragFree,
      loop,
      initialSlide,
      inViewThreshold,
      withControls,
      plugins,
      skipSnaps,
      containScroll,
      currentSlideIndex,
      setCurrentSlideIndex,
      carouselThumbSlot,
      verticalQueueSide,
      horizontalQueueSide,
      isStatic
    } = { ...defaultProps, ...props };

    const [emblaRefElement, emblaApi] = useEmblaCarousel(
      {
        axis: carouselOrientation === 'horizontal' ? 'x' : 'y',
        // keep direction undefined for vertical orientation if the current theme is RTL
        direction: carouselOrientation === 'horizontal' ? 'ltr' : undefined,
        startIndex: initialSlide,
        loop,
        align,
        slidesToScroll,
        dragFree,
        inViewThreshold,
        skipSnaps,
        containScroll
      },
      plugins
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
      if (!emblaApi) {
        return;
      }
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    const handlePrevious = useCallback(() => {
      emblaApi?.scrollPrev();
      onSelect();
    }, [emblaApi]);

    const handleNext = useCallback(() => {
      emblaApi?.scrollNext();
      onSelect();
    }, [emblaApi]);

    const thumbClick = useCallback(
      (index: number) => {
        if (!emblaApi) {
          return;
        }
        emblaApi.scrollTo(index);
        onSelect();
      },
      [emblaApi]
    );

    useEffect(() => {
      if (!emblaApi) {
        return;
      }

      emblaApi.on('select', onSelect);
      emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    const canScrollPrev = emblaApi?.canScrollPrev() || false;
    const canScrollNext = emblaApi?.canScrollNext() || false;
    const isHorizontalContainer = carouselOrientation === 'horizontal';
    const isHorizontalSideDefault =
      horizontalQueueSide === 'right' && !isHorizontalContainer;
    const isVerticalSideDefault =
      verticalQueueSide === 'bottom' && isHorizontalContainer;
    return (
      <Box
        display={'flex'}
        flexDirection={
          isHorizontalContainer
            ? !isVerticalSideDefault
              ? 'column'
              : 'column-reverse'
            : !isHorizontalSideDefault
            ? 'row'
            : 'row-reverse'
        }
        p={isHorizontalContainer ? '1.6rem' : 'auto'}
        height={isHorizontalContainer ? 'auto' : '100%'}
      >
        {carouselThumbSlot && (
          <Box
            w={isHorizontalContainer ? 'auto' : '15%'}
            minW={isHorizontalContainer ? 'auto' : '100px'}
            m={'0.9rem'}
            mr={isHorizontalContainer ? '0.5rem' : 'auto'}
          >
            <ThumbCarousel
              isStatic={isStatic}
              selectedIndex={selectedIndex}
              setSelectedIndex={thumbClick}
              thumbOrientation={carouselOrientation}
            >
              {carouselThumbSlot}
            </ThumbCarousel>
          </Box>
        )}
        <Box
          overflow="hidden"
          height="100%"
          width="100%"
          position="relative"
          ref={emblaRefElement}
        >
          <Flex
            backfaceVisibility="hidden"
            h={isHorizontalContainer ? 'auto' : '100%'}
            flexDirection={isHorizontalContainer ? 'row' : 'column'}
            touchAction={isHorizontalContainer ? 'pan-y' : 'pan-x'}
            ml={isHorizontalContainer ? `calc(1rem * -1)` : ''}
          >
            {children}
          </Flex>
          {withControls && (
            <Button
              bg="transparent"
              border={0}
              p={0}
              zIndex={1}
              top="50%"
              position="absolute"
              transform="translateY(-50%)"
              touchAction="none"
              cursor="pointer"
              onClick={handlePrevious}
              disabled={!canScrollPrev}
              visibility={canScrollPrev ? 'visible' : 'hidden'}
              aria-label="Previous Slide"
              left={'0.5rem'}
              variant="icon"
            >
              <ChevronLeft width={'3rem'} height={'3rem'} color={'white'} />
            </Button>
          )}
          {withControls && (
            <Button
              bg="transparent"
              border={0}
              p={0}
              zIndex={1}
              top="50%"
              right={'0.5rem'}
              position="absolute"
              transform="translateY(-50%)"
              touchAction="none"
              cursor="pointer"
              onClick={handleNext}
              disabled={!canScrollNext}
              visibility={canScrollNext ? 'visible' : 'hidden'}
              aria-label="Next Slide"
              variant="icon"
            >
              <ChevronRight width={'3rem'} height={'3rem'} color={'white'} />
            </Button>
          )}
        </Box>
      </Box>
    );
  }
) as any;

_Carousel.displayName = 'Carousel';

export { _Carousel as Carousel };
