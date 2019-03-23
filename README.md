# depends
Simple mockable dependency injection

## API

### getDependencies

`const deps = getDependencies(this, defaultDependencies)

...doSomethingWith(deps)
`

Used in the live function to be tested.

This gets the external dependencies to use. You provide the default set, but you may get back overridden ones,
if overrides have been set for the given key (we are using `this` in this example).

The choice of key is up to you, but it must be `typeof === 'object'`.

Similarly, the shape of the dependencies is up to you.

### setDependencies

`setDependencies(key, mockDependencies)

functionToBeTested.call(key, args)
`

Used in the test harness.

Registers the alternative (usually mock) dependencies for that object/key.

## Notes

And that's it.

This uses a `WeakMap` if it can, so no cleanup.
