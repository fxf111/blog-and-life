---
title: Vuex中的深拷贝
date: 2020-04-25
tags:
 - 深拷贝
 - vuex
categories:
 - js
---

今天在学习vuex源码时（[vuex原理，这篇讲的不错](https://www.jianshu.com/p/d95a7b8afa06)），发现工具函数有一个深拷贝的方法，它对于存在对环引用的对象，也同样适用，如下所示。

`find`的功能和和数组的`find`方法功能一致。

```js
/**
 * Get the first item that pass the test
 * 找到数组中满足条件的第一项
 * 
 * by second argument function
 * 第二个参数是函数
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
export function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 * 深拷贝给定的对象（包括具有循环引用的对象）
 * 这个函数缓存所有嵌套的对象及其副本。
 * 如果检测到了循环结构，那么使用缓存里的副本，阻止无限循环
 * 
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy (obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  // 如果在cache中，命中了obj，那么说明进入了循环结构
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}
```