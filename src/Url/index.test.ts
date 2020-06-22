import { getUrlQuery } from './index';

describe('getUrlQuery', () => {
  it('null', () => {
    expect(getUrlQuery()).toEqual({});
  });
  it('space string', () => {
    expect(getUrlQuery('')).toEqual({});
  });
  it('https://example', () => {
    expect(getUrlQuery('https://example')).toEqual({});
  });
  it('https://example?', () => {
    expect(getUrlQuery('https://example?')).toEqual({});
  });
  it('https://example?a=123', () => {
    expect(getUrlQuery('https://example?a=123')).toEqual({ a: '123' });
  });
  it('https://example?a=123&b=321', () => {
    expect(getUrlQuery('https://example?a=123&b=321')).toEqual({
      a: '123',
      b: '321',
    });
  });
  it('https://example?a=123&b=321&', () => {
    expect(getUrlQuery('https://example?a=123&b=321&')).toEqual({
      a: '123',
      b: '321',
    });
  });
});
