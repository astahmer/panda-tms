'use client';

import React, { createContext, useContext } from 'react';

//Context Type
export type CarouselContextType = {
  selectedSlide: number;
  setSelectedSlide: (index: number) => void;
};

// create context
const CarouselContext = createContext<CarouselContextType>({
  selectedSlide: 0,
  setSelectedSlide: (selected) => {}
});

// Provider
const CarouselProvider = CarouselContext.Provider;

const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (context === undefined) {
    throw new Error(
      'useCarouselContext must be used within a CarouselProvider'
    );
  }
  return { ...context };
};

export { CarouselProvider, useCarouselContext };
