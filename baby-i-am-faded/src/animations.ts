import { keyframes, jsx, css } from '@emotion/core'

export const FadeInUpAnimation = keyframes`
  from {
   opacity: 0;
   transform: translate3d(0, 100%, 0);
  }
  to {
   opacity: 1;
   transform: none;
  }
`