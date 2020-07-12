import { getUrlQuery } from '../src/getUrlQuery';

describe('getUrlQuery', () => {
  it('null', () => {
    expect(getUrlQuery(null)).toEqual({});
  });
  it('empty string', () => {
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
    expect(getUrlQuery('https://example?a=123&b=321')).toEqual({ a: '123', b: '321' });
  });
  it('https://example?a=123&b=321&', () => {
    expect(getUrlQuery('https://example?a=123&b=321&')).toEqual({ a: '123', b: '321' });
  });
});
