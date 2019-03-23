'use strict'

const registeredDependencies = new WeakMap()

export function getDependencies (keyObj, defaultDeps) {
  if (!(keyObj && typeof keyObj === 'object')) {
    return defaultDeps
  }
  const storedDeps = registeredDependencies.get(keyObj)
  return storedDeps !== undefined ? storedDeps : defaultDeps
}

export function setDependencies (keyObj, deps) {
  registeredDependencies.set(keyObj, deps)
}
