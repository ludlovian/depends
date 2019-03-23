'use strict'

import test from 'ava'
import { getDependencies, setDependencies } from '../src'

test('basic passthrough', t => {
  const deps = {}
  const key = {}
  t.is(getDependencies(key, deps), deps)
})

test('returns default if no key', t => {
  const deps = {}
  const key = undefined
  t.is(getDependencies(key, deps), deps)
})

test('returns new deps if registered', t => {
  const defaultDeps = {}
  const key = {}
  const mockDeps = {}
  setDependencies(key, mockDeps)
  t.is(getDependencies(key, defaultDeps), mockDeps)
})

test('returns default if registered for a different key', t =>  {
  const defaultDeps = {}
  const key1 = {}
  const key2 = {}
  const mockDeps = {}
  setDependencies(key1, mockDeps)
  t.is(getDependencies(key2, defaultDeps), defaultDeps)
})
