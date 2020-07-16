import { IObject } from './global';
import * as _ from 'lodash';

/**
 * @description 从目标对象删除传入的字段并返回删除后的object
 * @param target 目标对象
 * @param keys 要删除的字段的key的数组
 */
export const deleteFieldsFromObj = <T = IObject>(target:T, keys:(keyof T)[]):T|{} => {
  if (!_.isPlainObject(target)) {
    return {};
  }
  if (!_.isArray(keys)) {
    return {};
  }
  keys.forEach((key) => {
    delete target[key];
  });
  return target;
};

export default deleteFieldsFromObj;
deleteFieldsFromObj({
  a: 1,
  b: 2,
}, ['a', 'b']);
