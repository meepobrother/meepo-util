export function getClientHeightByDom(dom: any) {
  let height = dom.clientHeight;
  if (dom === document.body && document.compatMode === 'CSS1Compat') {
    height = document.documentElement.clientHeight;
  }
  return height;
}
/**
 * 设置一个Util对象下的命名空间
 * @param {Object} parent 需要绑定到哪一个对象上
 * @param {String} namespace 需要绑定的命名空间名
 * @param {Object} target 需要绑定的目标对象
 * @return {Object} 返回最终的对象
 */
export function namespace(parent: any, namespaceStr: string, target: any) {
  if (!namespaceStr) {
    return parent;
  }
  const namespaceArr = namespaceStr.split('.');
  const len = namespaceArr.length;
  let res = parent;
  for (let i = 0; i < len - 1; i += 1) {
    const tmp = namespaceArr[i];
    res[tmp] = res[tmp] || {};
    res = res[tmp];
  }
  res[namespaceArr[len - 1]] = target;
  return target;
}