import React, { FC, useContext, useEffect, Props } from 'react'
import styled from '@emotion/styled'
import {
    Box,
    FlexProps,
    Stack,
    Text,
    Flex,
    Button,
    StackProps,
    BoxProps,
    ButtonProps,
} from '@chakra-ui/core'
import { useField, FieldProps, FieldInputProps } from 'react-final-form'

export interface CardOptionsOption {
    isDisabled?: boolean
    label?: string
    sublabel?: any
    disabled?: boolean
    value: any
    icon?: any
}

function addDefaults(x: CardOptionsOption) {
    const newoption = { ...x }
    if (!x.label) {
        newoption.label = x.value
    }
    return newoption
}

function Option(
    props: {
        option: CardOptionsOption
        input: FieldInputProps<string>
    } & Omit<ButtonProps, 'children'>,
) {
    let { option, input, ...rest } = props
    option = addDefaults(option)
    const onClick = () => {
        input.onChange(option.value)
    }
    const selected = input.value === option.value
    return (
        <Button
            border={selected ? '2px solid' : 'none'}
            borderColor={selected ? 'gray.400' : 'gray.200'}
            height='auto'
            variant='outline'
            onClick={onClick}
            p='20px'
            flex='1'
            minW='100px'
            d='flex'
            flexDir='column'
            justifyContent='flex-start'
            alignItems='center'
            // wordBreak='break-word'
            whiteSpace='normal'
            {...rest}
        >
            <Stack
                minH='100%'
                align='center'
                justify='flex-start'
                spacing='10px'
                // fontWeight='normal'
            >
                <Flex fontSize='32px' w='100%' align='center' justify='center'>
                    {option.icon}
                </Flex>
                <Text>{option.label}</Text>
                <Text opacity={0.6} fontSize='14px'>
                    {option.sublabel}
                </Text>
                <Box flex='1' />
            </Stack>
        </Button>
    )
}

export function CardOptions({
    name,
    options,
    defaultValue = null,
    ...rest
}: {
    name: string
    defaultValue?: string
    options: CardOptionsOption[]
} & StackProps) {
    const {
        meta: { invalid },
        input,
    } = useField(name, { initialValue: defaultValue })
    return (
        <Stack spacing='20px' direction='row' {...rest}>
            {options.map((option) => (
                <Option key={option.value} option={option} input={input} />
            ))}
        </Stack>
    )
}
