import React from 'react'
import { FiAirplay, FiAlertOctagon, FiAnchor } from 'react-icons/fi'
import { CardOptions } from '../src/CardOptions'
import { Form } from 'react-final-form'
import {
    ThemeProvider,
    CSSReset,
    Box,
    ColorModeProvider,
} from '@chakra-ui/core'

export default {
    title: 'CardOptions',
    component: CardOptions,
    decorators: [
        (storyFn) => (
            <ThemeProvider>
                <Box maxW='600px' p='30px' border='1px solid red'>
                    <CSSReset />
                    <Form onSubmit={() => null}>
                        {({ values }) => (
                            <Box>
                                {storyFn()}
                                <Box mt='100px' as='pre'>
                                    {JSON.stringify(values, null, 4)}
                                </Box>
                            </Box>
                        )}
                    </Form>
                </Box>
            </ThemeProvider>
        ),
    ],
}

export const Default = () => (
    <CardOptions
        options={[{ value: 'x' }, { value: 'y' }, { value: 'z' }]}
        name='sdf'
    />
)

export const WithLabels = () => (
    <CardOptions
        options={[
            { value: 'x', label: 'The x option is the first' },
            { value: 'y', label: 'The y option' },
            { value: 'z', label: 'The Z makes sleep' },
        ]}
        name='sdf'
    />
)

export const WithSubLabels = () => (
    <CardOptions
        options={[
            {
                value: 'x',
                label: 'The x option is the first',
                sublabel: 'Sublabels add text no one reads',
            },
            {
                value: 'y',
                label: 'The y option',
                sublabel: 'maybe true',
            },
            {
                value: 'z',
                label: 'The Z makes sleep',
                sublabel: 'Sublabels add text no one reads',
            },
        ]}
        name='sdf'
    />
)

export const WithIcons = () => (
    <CardOptions
        options={[
            {
                icon: <FiAirplay />,
                value: 'x',
                label: 'The x option is the first',
                sublabel: 'Sublabels add text no one reads',
            },
            {
                icon: <FiAlertOctagon />,
                value: 'y',
                label: 'The y option',
                sublabel: 'maybe true',
            },
            {
                icon: <FiAnchor />,
                value: 'z',
                label: 'The Z makes sleep',
                sublabel: 'Sublabels add text no one reads',
            },
        ]}
        name='sdf'
    />
)

export const DarkMode = () => (
    <ColorModeProvider value='dark'>
        <Box bg='black' m='-30px' p='20px'>
            <CardOptions
                options={[
                    {
                        icon: <FiAirplay />,
                        value: 'x',
                        label: 'The x option is the first',
                        sublabel: 'Sublabels add text no one reads',
                    },
                    {
                        icon: <FiAlertOctagon />,
                        value: 'y',
                        label: 'The y option',
                        sublabel: 'maybe true',
                    },
                    {
                        icon: <FiAnchor />,
                        value: 'z',
                        label: 'The Z makes sleep',
                        sublabel: 'Sublabels add text no one reads',
                    },
                ]}
                name='sdf'
            />
        </Box>
    </ColorModeProvider>
)
