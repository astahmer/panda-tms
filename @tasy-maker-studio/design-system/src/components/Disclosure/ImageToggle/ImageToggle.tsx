'use client';

import React, { forwardRef, useState } from 'react';
import { css } from '@tasty-maker-studio/styled-system/css';
import { Box, Flex } from '@tasty-maker-studio/styled-system/jsx';

export type ImageRevealType = {
  children: React.ReactNode;
};
/** This component provide a way to shuffle between to image on a mouse enter  */
const _ImageToggle = forwardRef<HTMLDivElement, ImageRevealType>(
  (props, ref) => {
    const [isShowing, setIsShowing] = useState(true);
    const handleMouseEvent = () => {
      setIsShowing(!isShowing);
    };

    return (
      <Box ref={ref} p={'1.6rem'} onMouseEnter={() => handleMouseEvent()}>
        <Box
          h={'100%'}
          w={'100%'}
          bg={'white'}
          objectFit={'cover'}
          opacity={1}
          zIndex={1}
          position={'relative'}
          onMouseLeave={() => handleMouseEvent()}
        >
          <Box h={'100%'} overflow={'hidden'}>
            <Box
              className={css({
                transition: isShowing
                  ? 'transform 0.6s cubic-bezier(0.87, 0, 0.13, 1) '
                  : 'transform 0.4s ease-out',
                transform: isShowing ? 'translateX(0)' : 'translateX(-100%)'
              })}
            >
              <Flex
                flexDirection={'row'}
                backfaceVisibility={'hidden'}
                h={'auto'}
                touchAction={'pan-up'}
                ml={'calc(1rem * -2)'}
              >
                <Flex
                  flexGrow={0}
                  flexShrink={0}
                  flexBasis={'100%'}
                  minWidth={0}
                  position={'relative'}
                >
                  {props.children}
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
);

_ImageToggle.displayName = 'ImageToggle';

export { _ImageToggle as ImageToggle };
