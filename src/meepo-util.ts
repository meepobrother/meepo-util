const _: any = require('underscore');

export function clamp(min: number, n: number, max: number) {
  return Math.max(min, Math.min(n, max));
}

export function deepCopy(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

export function deepEqual(a: any, b: any) {
  if (a === b) {
    return true;
  }
  return JSON.stringify(a) === JSON.stringify(b);
}

export function isDefined(val: any): boolean { return typeof val !== 'undefined'; }
/**
 * 不为undefined 并且 不为null
 * @param val 
 */
export function isPresent(val: any): val is any { return val !== undefined && val !== null; }
/**
 * 是undefined或者是null
 * @param val 
 */
export function isBlank(val: any): val is null { return val === undefined || val === null; }

export function isPrimitive(val: any) {
  return _.isString(val) || _.isBoolean(val) || (_.isNumber(val) && !isNaN(val));
}

export function isTrueProperty(val: any): boolean {
  if (typeof val === 'string') {
    val = val.toLowerCase().trim();
    return (val === 'true' || val === 'on' || val === '');
  }
  return !!val;
}

export function isCheckedProperty(a: any, b: any): boolean {
  if (a === undefined || a === null || a === '') {
    return (b === undefined || b === null || b === '');
  } else if (a === true || a === 'true') {
    return (b === true || b === 'true');
  } else if (a === false || a === 'false') {
    return (b === false || b === 'false');
  } else if (a === 0 || a === '0') {
    return (b === 0 || b === '0');
  }
  return (a === b);
}

export function reorderArray(array: any[], indexes: { from: number, to: number }): any[] {
  const element = array[indexes.from];
  array.splice(indexes.from, 1);
  array.splice(indexes.to, 0, element);
  return array;
}

export function removeArrayItem(array: any[], item: any) {
  const index = array.indexOf(item);
  return !!~index && !!array.splice(index, 1);
}