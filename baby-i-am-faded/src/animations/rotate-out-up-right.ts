
import { rotate3d } from './utils';
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const rotateOutUpRight: Animation = {
  from: {
    transformOrigin: 'right bottom',
    opacity: 1
  },
  to: {
    transformOrigin: 'right bottom',
    transform: rotate3d(0, 0, 1, 90),
    opacity: 0
  }
};

export default keyframes`${rotateOutUpRight}`
