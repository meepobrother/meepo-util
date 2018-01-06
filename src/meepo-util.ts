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
/**
 * 是否为boolean类型
 * @param val 
 */
export function isBoolean(val: any): val is boolean { return typeof val === 'boolean'; }
/**
 * 是否为string类型
 * @param val 
 */
export function isString(val: any): val is string { return typeof val === 'string'; }
/**
 * 是否为number类型
 * @param val 
 */
export function isNumber(val: any): val is number { return typeof val === 'number'; }
/**
 * 是否为function类型
 * @param val 
 */
export function isFunction(val: any): val is Function { return typeof val === 'function'; }
/**
 * 不是undefined类型
 * @param val 
 */
export function isDefined(val: any): boolean { return typeof val !== 'undefined'; }
/**
 * 是undefined
 * @param val 
 */
export function isUndefined(val: any): val is undefined { return typeof val === 'undefined'; }
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
/**
 * 是Object
 * @param val 
 */
export function isObject(val: any): val is Object { return typeof val === 'object'; }
/**
 * 是Array
 * @param val 
 */
export function isArray(val: any): val is any[] { return Array.isArray(val); }

export function isPrimitive(val: any) {
  return isString(val) || isBoolean(val) || (isNumber(val) && !isNaN(val));
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