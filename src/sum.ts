/** 两数相加 */
export const sum = (a?:number, b?:number) => {
  if (typeof a === 'number' && typeof b === 'number' && !isNaN(a) && !isNaN(b)) {
    return a + b;
  }
  return 0;
};
