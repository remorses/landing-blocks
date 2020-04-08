
import {
  compose,
  perspective,
  rotate3d
} from './utils';
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const perspectiveAndRotate = compose(
  perspective,
  rotate3d
);

const flipOutY: Animation = {
  from: {
    transform: perspective('400px')
  },
  '30%': {
    transform: perspectiveAndRotate('400px', [0, 1, 0, -15]),
    opacity: 1
  },
  to: {
    transform: perspectiveAndRotate('400px', [0, 1, 0, 90]),
    opacity: 0
  }
};

export default keyframes`${flipOutY}`
