// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export class Util {
  clamp(min: number, n: number, max: number) {
    return Math.max(min, Math.min(n, max));
  }

  deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  deepEqual(a: any, b: any) {
    if (a === b) {
      return true;
    }
    return JSON.stringify(a) === JSON.stringify(b);
  }
  /**
   * 是否为boolean类型
   * @param val 
   */
  isBoolean(val: any): val is boolean { return typeof val === 'boolean'; }
  /**
   * 是否为string类型
   * @param val 
   */
  isString(val: any): val is string { return typeof val === 'string'; }
  /**
   * 是否为number类型
   * @param val 
   */
  isNumber(val: any): val is number { return typeof val === 'number'; }
  /**
   * 是否为function类型
   * @param val 
   */
  isFunction(val: any): val is Function { return typeof val === 'function'; }
  /**
   * 不是undefined类型
   * @param val 
   */
  isDefined(val: any): boolean { return typeof val !== 'undefined'; }
  /**
   * 是undefined
   * @param val 
   */
  isUndefined(val: any): val is undefined { return typeof val === 'undefined'; }
  /**
   * 不为undefined 并且 不为null
   * @param val 
   */
  isPresent(val: any): val is any { return val !== undefined && val !== null; }
  /**
   * 是undefined或者是null
   * @param val 
   */
  isBlank(val: any): val is null { return val === undefined || val === null; }
  /**
   * 是Object
   * @param val 
   */
  isObject(val: any): val is Object { return typeof val === 'object'; }
  /**
   * 是Array
   * @param val 
   */
  isArray(val: any): val is any[] { return Array.isArray(val); }

  isPrimitive(val: any) {
    return this.isString(val) || this.isBoolean(val) || (this.isNumber(val) && !isNaN(val));
  }

  isTrueProperty(val: any): boolean {
    if (typeof val === 'string') {
      val = val.toLowerCase().trim();
      return (val === 'true' || val === 'on' || val === '');
    }
    return !!val;
  }

  isCheckedProperty(a: any, b: any): boolean {
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

  reorderArray(array: any[], indexes: { from: number, to: number }): any[] {
    const element = array[indexes.from];
    array.splice(indexes.from, 1);
    array.splice(indexes.to, 0, element);
    return array;
  }

  removeArrayItem(array: any[], item: any) {
    const index = array.indexOf(item);
    return !!~index && !!array.splice(index, 1);
  }
}
