
import { keyframes } from '@emotion/core';
import { Animation, Keyframe } from './types';
import { translate3d } from './utils';

const noShake: Keyframe = {
  transform: translate3d(0, 0, 0)
};

const downShake: Keyframe = {
  transform: translate3d('-10px', 0, 0)
};

const upShake: Keyframe = {
  transform: translate3d('10px', 0, 0)
};

const shake: Animation = {
  from: noShake,
  '10%': downShake,
  '20%': upShake,
  '30%': downShake,
  '40%': upShake,
  '50%': downShake,
  '60%': upShake,
  '70%': downShake,
  '80%': upShake,
  '90%': downShake,
  to: noShake
};

export default keyframes`${shake}`
