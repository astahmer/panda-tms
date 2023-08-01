"use client"
import {useState} from 'react';
import {
    Box,
    Flex,
    HStack,
} from '@tasty-maker-studio/styled-system/jsx';
import {
    Button,
    PromoBar,
    LateralDrawer,
    Text,
} from '@tasty-maker-studio/design-system';
import { LuX } from 'react-icons/lu'


export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonLeftLabel = isOpen ? 'Close Left  Drawer' : 'Open Left Drawer';

    return (
    <Box h={'100vh'} w={'90vw'} p={'2rem'}>
        <PromoBar message="Hello World" variant="accent" />
        <Flex direction="row-reverse" alignItems={'left'} zIndex={'9999'}>
            <Button
                variant={'primary'}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                {buttonLeftLabel}
            </Button>
        </Flex>
        <LateralDrawer
            closeIcon={<LuX />}
            headerText={'This is the Header'}
            variant={'left'}
            size={'full'}
            isOpen={isOpen}
            updateIsOpen={setIsOpen}
        >

            <HStack h={'100%'} gap={'6'} mt="12px">
                <Text size={'3xl'} lineClamp={2} pl={'5rem'} pr={'5rem'}>
                    The Dialog component is a powerful and highly customizable tool
                    for creating dialog windows, also known as modals, in your
                    application. It includes essential elements such as triggers,
                    content, and close triggers.
                </Text>
            </HStack>
        </LateralDrawer>
    </Box>
  )
}
