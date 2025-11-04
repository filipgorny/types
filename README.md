# @filipgorny/types

Shared TypeScript types for the monorepo.

## Warning

This package is under development. APIs may change without notice.

## Installation

```bash
npm install @filipgorny/types
```

## Exported Types

- `ClassType<T = any>`
- `AbstractClassType<T = any>`
- `FactoryFunction<T = any>`
- `AsyncFactoryFunction<T = any>`

## Usage Examples

### ClassType

```typescript
import { ClassType } from '@filipgorny/types';

class MyClass {
  constructor(value: string) {}
}

const MyClassType: ClassType<MyClass> = MyClass;
const instance = new MyClassType('hello');
```

### AbstractClassType

```typescript
import { AbstractClassType } from '@filipgorny/types';

abstract class AbstractClass {
  abstract method(): void;
}

const AbstractType: AbstractClassType<AbstractClass> = AbstractClass;
// Cannot instantiate directly, used for typing abstract constructors
```

### FactoryFunction

```typescript
import { FactoryFunction } from '@filipgorny/types';

const createString: FactoryFunction<string> = (prefix: string) => `${prefix} world`;
const result = createString('hello'); // 'hello world'
```

### AsyncFactoryFunction

```typescript
import { AsyncFactoryFunction } from '@filipgorny/types';

const createAsyncString: AsyncFactoryFunction<string> = async (prefix: string) => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return `${prefix} world`;
};

const result = await createAsyncString('hello'); // 'hello world'
```

## API Documentation

### ClassType<T = any>

A type representing a constructor function that creates instances of type `T`.

- **Type Parameters**: `T` - The type of the instance created by the constructor.
- **Signature**: `new (...args: any[]) => T`

### AbstractClassType<T = any>

A type representing an abstract constructor function for abstract classes.

- **Type Parameters**: `T` - The type of the abstract class.
- **Signature**: `abstract new (...args: any[]) => T`

### FactoryFunction<T = any>

A type representing a synchronous factory function that returns an instance of type `T`.

- **Type Parameters**: `T` - The return type of the factory function.
- **Signature**: `(...args: any[]) => T`

### AsyncFactoryFunction<T = any>

A type representing an asynchronous factory function that returns a promise resolving to type `T`.

- **Type Parameters**: `T` - The resolved type of the promise.
- **Signature**: `(...args: any[]) => Promise<T>`
