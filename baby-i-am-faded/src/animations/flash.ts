
import  { Keyframe, Animation } from './types';
import  { keyframes } from '@emotion/core';

const visible: Keyframe = {
  opacity: 1
};

const invisible: Keyframe = {
  opacity: 0
};

const flash: Animation = {
  from: visible,
  '25%': invisible,
  '50%': visible,
  '75%': invisible,
  to: visible
};

export default keyframes`${flash}`
