
import { translate3d } from './utils';
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const slideInDown: Animation = {
  from: {
    transform: translate3d(0, '-100%', 0),
    visibility: 'visible'
  },
  to: {
    transform: translate3d(0, 0, 0)
  }
};

export default keyframes`${slideInDown}`
