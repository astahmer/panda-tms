'use client';

import { useState } from 'react';
import { Box } from '@tasty-maker-studio/styled-system/jsx';
import {
  promoBar,
  type PromoBarVariantProps
} from '@tasty-maker-studio/styled-system/recipes';
import { LuX } from 'react-icons/lu';

import { Button } from '../../Forms/Button';

// Add message to the PromoBarVariantProps
interface PromoBarProps extends PromoBarVariantProps {
  message: string | undefined;
}

/**
 * PromoBar component definition
 *
 * @param props:PromoBarProps  The props for the PromoBar component
 * @param props.variant        The variant of the promo bar (primary, secondary)
 * @param props.message        The message to display in the promo bar
 * @param rest                 The rest of the passed in props for the promo bar component
 *
 * @returns React.Element       The PromoBar component JSX element
 */
const PromoBar = (props: PromoBarProps) => {
  const { variant, message, ...rest } = props;
  const [show, setShow] = useState(true);

  if (!show) {
    return null;
  } else {
    return (
      <Box className={promoBar({ variant })} {...rest}>
        {message}
        <div
          style={{
            float: 'right',
            marginRight: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <Button variant="icon" onClick={() => setShow(false)}>
            <LuX size="14px" display="block" />
          </Button>
        </div>
      </Box>
    );
  }
};

export { PromoBar, type PromoBarProps };
