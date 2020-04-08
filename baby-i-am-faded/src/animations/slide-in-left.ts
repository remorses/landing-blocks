
import { translate3d } from './utils';
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const slideInLeft: Animation = {
  from: {
    transform: translate3d('-100%', 0, 0),
    visibility: 'visible'
  },
  to: {
    transform: translate3d(0, 0, 0)
  }
};

export default keyframes`${slideInLeft}`
