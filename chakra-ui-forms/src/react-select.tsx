import React, { ComponentProps, useEffect } from 'react'
import { default as S } from 'react-select'
import { useField } from 'react-final-form'
import Color from 'color-js'

type Props = { name: string } & ComponentProps<typeof S>

export type SelectOptionType = { value: string; label: string }

export type SelectOptionTypeWithColor = SelectOptionType & { color }

const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        if (!data.color) {
            return styles
        }
        const color = Color(data.color)
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected
                ? data.color
                : isFocused
                ? color.setAlpha(0.1).toCSS()
                : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                ? color.getLightness() < 0.5
                    ? 'white'
                    : 'black'
                : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',
            ':active': {
                ...styles[':active'],
                backgroundColor:
                    !isDisabled &&
                    (isSelected ? data.color : color.setAlpha(0.3).toCSS()),
            },
        }
    },
    multiValue: (styles, { data }) => {
        if (!data.color) {
            return styles
        }
        const color = Color(data.color)
        return {
            ...styles,
            backgroundColor: color.setAlpha(0.7).toCSS(),
        }
    },
    multiValueLabel: (styles, { data }) => {
        if (!data.color) {
            return styles
        }
        return {
            ...styles,
            color: 'black',
        }
    },
    multiValueRemove: (styles, { data }) => {
        if (!data.color) {
            return styles
        }
        return {
            ...styles,
            color: 'black',
            ':hover': {
                backgroundColor: 'rgba(0,0,0,.2)',
                color: 'black',
            },
        }
    },
}

export const Select = ({ name, defaultValue = undefined, ...rest }: Props) => {
    const parse = (value) => {
        // console.log({ parse: value })
        if (!value) {
            return value
        }
        if (Array.isArray(value)) {
            return value.map((x) => x.value)
        }
        return value.value
    }
    const format = (value) => {
        // console.log({ format: value })
        const options = rest.options || []
        if (Array.isArray(value)) {
            return value.map(format)
        }
        if (value) {
            return {
                value,
                ...options.find((x) => x.value === value),
            }
        }
        return value
    }
    if (!defaultValue) {
        defaultValue = undefined
    }
    if (rest.isMulti && defaultValue && !defaultValue.length) {
        defaultValue = undefined
    }
    const { input, meta } = useField(name, {
        parse,
        initialValue: defaultValue,
        format,
    })

    return (
        <S
            styles={colourStyles}
            isSearchable={false}
            isClearable={false}
            {...rest}
            {...input}
        />
    )
}
