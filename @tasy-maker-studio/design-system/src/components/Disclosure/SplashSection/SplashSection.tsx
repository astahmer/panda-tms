import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Forms/Button';
import { Text } from '@/components/Typography/Text';
import {
  Box,
  type HTMLStyledProps
} from '@tasty-maker-studio/styled-system/jsx';

// Merging div props with SplashSectionProps
interface SplashSectionProps extends HTMLStyledProps<'div'> {
  imageUrl: string;
  imageAltText: string;
  title: string;
  exploreUrl: string;
  exploreButtonText: string;
}

/**
 * SplashSection component definition - Handles the display of the splash image
 * some text and a button to explore a part of the site. To be displayed within the
 * home page component
 *
 * @param props: SplashSectionProps - The props for the component
 * @param props.imageUrl: string - The url of the image to display
 * @param props.imageAltText: string - The alt text for the image
 * @param props.title: string - The title text to display
 * @param props.exploreUrl: string - The url to navigate to when the explore button is clicked
 * @param props.exploreButtonText: string - The text to display on the explore button
 *
 * @returns SplashSection component: React.FC<SplashSectionProps>
 */
const SplashSection = (props: SplashSectionProps) => {
  const { imageUrl, imageAltText, title, exploreUrl, exploreButtonText } =
    props;
  return (
    <Box>
      <Image
        src={imageUrl}
        alt={imageAltText}
        fill={true}
        style={{
          aspectRatio: 'widescreen',
          position: 'absolute',
          top: '0px',
          left: '0px',
          objectFit: 'cover',
          objectPosition: 'center center',
          opacity: 1,
          transition: 'opacity 500ms ease 0s',
          overscrollBehavior: 'contain',
          overflowClipMargin: 'content-box',
          boxSizing: 'border-box',
          overflow: 'clip'
        }}
      />
      <Box position="absolute" bottom="0" width="98%">
        <Box
          padding="3rem"
          position="relative"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          fontFamily='"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
        >
          <Box>
            <Text color="#222" fontWeight="bold" fontSize="20px">
              {title}
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Button variant="outline">
              <Link
                href={exploreUrl}
                style={{
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                {exploreButtonText}
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// exporting the SplashSection component and the types for the props
export { SplashSection, type SplashSectionProps };
