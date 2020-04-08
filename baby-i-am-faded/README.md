# baby-i-am-faded

Animates react components when in view

## Install

`yarn add baby-i-am-faded @emotion/core`

## Usage

```tsx
import { Faded } from 'baby-i-am-faded'

export const App = () => (
    <Faded damping={0.8}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
    </Faded>
)

```

## With custom animation

```tsx
import { wobble } from 'baby-i-am-faded/animations' // here are all the animate.css animaitons

export const WithWobble = () => (
    // @ts-ignore
    <Faded animation={wobble}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
    </Faded>
)
```