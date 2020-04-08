
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const fadeIn: Animation = {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
};

export default keyframes`${fadeIn}`
