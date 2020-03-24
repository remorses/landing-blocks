import React from 'react'
import { Image, Flex, Box } from '@chakra-ui/core'

export const Hero = ({
    bg = 'white',
    backgroundImage = null,
    bgOpacity = 1,
    style = {},
    children = [],
    ...props
}) => (
    <Box display='relative'>
        {backgroundImage && (
            <Box
                display='absolute'
                top={0}
                right={0}
                bottom={0}
                left={0}
                zIndex={-2}
                style={{ height: '100%' }}
            >
                <Image
                    src={backgroundImage}
                    alt=''
                    width={1}
                    style={{ height: '100%', objectFit: 'cover' }}
                />
            </Box>
        )}
        <Box
            top={0}
            right={0}
            bottom={0}
            left={0}
            zIndex={-1}
            bg={bg}
            style={{ opacity: backgroundImage ? bgOpacity : 1, height: '100%' }}
        />
        <Flex
            style={{
                minHeight: '100vh',
                ...style,
            }}
            {...props}
        >
            {children}
        </Flex>
    </Box>
)
