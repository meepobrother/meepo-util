import * as util from "../src/meepo-util"

/**
 * Dummy test
 */
describe("Util test", () => {

  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("Util clamp", () => {
    let r = util.clamp(1, 2, 3);
    expect(r).toEqual(2);
  })

  it('Util deepCopy', () => {
    let d = { title: '1' };
    let t = util.deepCopy(d);
    expect(t).toEqual({ title: '1' })
  })

  it('Util deepEqual', () => {
    let d1 = { title: { t: 1 } };
    let d2 = { title: { t: '1' } };
    let d3 = { title: { t: '1' } };
    expect(util.deepEqual(d1, d2)).toEqual(false);
    expect(util.deepEqual(1, 1)).toEqual(true);
  })

  it('Util isBoolean', () => {
    expect(util.isBoolean('false')).toEqual(false);
  })

  it('Util isString', () => {
    expect(util.isString('false')).toEqual(true);
  })

  it('Util isNumber', () => {
    expect(util.isNumber(1)).toEqual(true);
  })

  it('Util isFunction', () => {
    expect(util.isFunction(1)).toEqual(false);
  })

  it('Util isDefined', () => {
    expect(util.isDefined(1)).toEqual(true);
  })

  it('Util isUndefined', () => {
    expect(util.isUndefined(1)).toEqual(false);
  })

  it('Util isPresent', () => {
    expect(util.isPresent(1)).toEqual(true);
    let item;
    expect(util.isPresent(item)).toEqual(false);
  })

  it('Util isBlank', () => {
    expect(util.isBlank(1)).toEqual(false);
  })

  it('Util isObject', () => {
    expect(util.isObject(1)).toEqual(false);
  })

  it('Util isArray', () => {
    expect(util.isArray([1])).toEqual(true);
  })

  it('Util isPrimitive', () => {
    expect(util.isPrimitive(1)).toEqual(true);
  })

  it('Util isTrueProperty', () => {
    expect(util.isTrueProperty('')).toEqual(true);
    expect(util.isTrueProperty('true')).toEqual(true);
    expect(util.isTrueProperty('on')).toEqual(true);
    expect(util.isTrueProperty(false)).toEqual(false);
  })

  it('Util isCheckedProperty', () => {
    expect(util.isCheckedProperty('true', true)).toEqual(true);
    expect(util.isCheckedProperty(undefined, undefined)).toEqual(true);
    expect(util.isCheckedProperty(undefined, null)).toEqual(true);
    expect(util.isCheckedProperty(undefined, '')).toEqual(true);

    expect(util.isCheckedProperty(true, 'true')).toEqual(true);
    expect(util.isCheckedProperty('true', true)).toEqual(true);

    expect(util.isCheckedProperty(false, 'false')).toEqual(true);
    expect(util.isCheckedProperty('false', false)).toEqual(true);

    expect(util.isCheckedProperty('0', 0)).toEqual(true);
    expect(util.isCheckedProperty(0, '0')).toEqual(true);

    expect(util.isCheckedProperty(1, 1)).toEqual(true);
  })

  it('Util reorderArray', () => {
    let items = [1, 2, 3, 4, 5];
    expect(util.reorderArray(items, { from: 1, to: 3 })).toEqual([1, 3, 4, 2, 5]);
  })

  it('Util removeArrayItem', () => {
    let items = [1, 2];
    expect(util.removeArrayItem(items, 1)).toEqual(true);
  })
})
