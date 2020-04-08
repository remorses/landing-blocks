
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const fadeOut: Animation = {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
};

export default keyframes`${fadeOut}`
