export type ClassType<T = any> = new (...args: any[]) => T

export type AbstractClassType<T = any> = abstract new (...args: any[]) => T

export type FactoryFunction<T = any> = (...args: any[]) => T

export type AsyncFactoryFunction<T = any> = (...args: any[]) => Promise<T>
