import { STYLING_CONFIGS } from '../constants';

function pxToRem(size) {
  if (typeof size === "number") {
    return `${Number(size / STYLING_CONFIGS.ROOT_SIZE)}rem`;
  }
  throw new Error('size is not a number. Type numbers only');
};

export { pxToRem };