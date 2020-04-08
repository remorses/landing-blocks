
import { translate3d } from './utils';
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const fadeOutRight: Animation = {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0,
    transform: translate3d('100%', 0, 0)
  }
};

export default keyframes`${fadeOutRight}`
