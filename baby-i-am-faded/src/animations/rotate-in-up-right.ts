
import { rotate3d } from './utils';
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const rotateInUpRight: Animation = {
  from: {
    transformOrigin: 'right bottom',
    transform: rotate3d(0, 0, 1, -90),
    opacity: 0
  },
  to: {
    transformOrigin: 'right bottom',
    transform: 'none',
    opacity: 1
  }
};

export default keyframes`${rotateInUpRight}`
