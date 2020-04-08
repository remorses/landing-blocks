
import { translate3d } from './utils';
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const fadeInDown: Animation = {
  from: {
    opacity: 0,
    transform: translate3d(0, '-100%', 0)
  },
  to: {
    opacity: 1,
    transform: 'none'
  }
};

export default keyframes`${fadeInDown}`
