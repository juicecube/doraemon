import * as utils from '../src/typeChecker';

describe('utils', () => {
  it('isNumber', () => {
    expect(utils.isNumber(2)).toBeTruthy();
    expect(utils.isNumber(true)).toBeFalsy();
  });
  it('isArray', () => {
    expect(utils.isArray([1])).toBeTruthy();
    expect(utils.isArray(true)).toBeFalsy();
  });
  it('isBoolean', () => {
    expect(utils.isBoolean(true)).toBeTruthy();
    expect(utils.isBoolean('true')).toBeFalsy();
  });
  it('isDate', () => {
    expect(utils.isDate(new Date)).toBeTruthy();
    expect(utils.isDate(true)).toBeFalsy();
  });
  it('isFunction', () => {
    expect(utils.isFunction(() => true)).toBeTruthy();
    expect(utils.isFunction(true)).toBeFalsy();
  });
  it('isNull', () => {
    expect(utils.isNull(null)).toBeTruthy();
    expect(utils.isNull(true)).toBeFalsy();
  });
  it('isObject', () => {
    expect(utils.isObject({})).toBeTruthy();
    expect(utils.isObject([1])).toBeFalsy();
  });
  it('isRegExp', () => {
    expect(utils.isRegExp(/a/g)).toBeTruthy();
    expect(utils.isRegExp(true)).toBeFalsy();
  });
  it('isString', () => {
    expect(utils.isString('2')).toBeTruthy();
    expect(utils.isString(true)).toBeFalsy();
  });
  it('isUndefined', () => {
    expect(utils.isUndefined(undefined)).toBeTruthy();
    expect(utils.isUndefined(true)).toBeFalsy();
  });
});
