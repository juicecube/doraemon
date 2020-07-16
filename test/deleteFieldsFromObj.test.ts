import { deleteFieldsFromObj } from '../src/deleteFieldsFromObj';

describe('deleteFieldsFromObj', () => {
  const ex = {
    a: 1,
    b: '2',
    c: null,
    d: undefined,
  };
  it('targe=[1, 2], key=[0]', () => {
    expect(deleteFieldsFromObj([1, 2], [0])).toEqual({});
  });
  it('null', () => {
    expect(deleteFieldsFromObj(null, [0])).toEqual({});
  });
  it('undefined', () => {
    expect(deleteFieldsFromObj(undefined, [0])).toEqual({});
  });
  it('Empty object', () => {
    expect(deleteFieldsFromObj({}, ['a'] as any)).toEqual({});
  });
  it('Keys are not an array', () => {
    expect(deleteFieldsFromObj(ex, { a: 1 } as any)).toEqual({});
  });
  it('An object', () => {
    expect(deleteFieldsFromObj(ex, ['a', 'c'])).toEqual({
      b: '2',
      d: undefined,
    });
  });
});
