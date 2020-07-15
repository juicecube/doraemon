import * as _ from 'lodash';

export const checkPhoneNumber = (phoneNumber:string|number) => {
  if (_.isNull(phoneNumber) || _.isUndefined(phoneNumber)) {
    return false;
  }
  return /^1(3|4|5|6|7|8|9)\d{9}$/.test(phoneNumber.toString());
};

export default checkPhoneNumber;
