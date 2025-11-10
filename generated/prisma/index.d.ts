
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Conversations
 * 
 */
export type Conversations = $Result.DefaultSelection<Prisma.$ConversationsPayload>
/**
 * Model ConversationMembers
 * 
 */
export type ConversationMembers = $Result.DefaultSelection<Prisma.$ConversationMembersPayload>
/**
 * Model Messages
 * 
 */
export type Messages = $Result.DefaultSelection<Prisma.$MessagesPayload>
/**
 * Model GroupRequests
 * 
 */
export type GroupRequests = $Result.DefaultSelection<Prisma.$GroupRequestsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ConversationTypes: {
  direct: 'direct',
  group: 'group'
};

export type ConversationTypes = (typeof ConversationTypes)[keyof typeof ConversationTypes]


export const ConversationRoles: {
  member: 'member',
  admin: 'admin'
};

export type ConversationRoles = (typeof ConversationRoles)[keyof typeof ConversationRoles]


export const MessageTypes: {
  text: 'text',
  image: 'image'
};

export type MessageTypes = (typeof MessageTypes)[keyof typeof MessageTypes]


export const RequestStatus: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]

}

export type ConversationTypes = $Enums.ConversationTypes

export const ConversationTypes: typeof $Enums.ConversationTypes

export type ConversationRoles = $Enums.ConversationRoles

export const ConversationRoles: typeof $Enums.ConversationRoles

export type MessageTypes = $Enums.MessageTypes

export const MessageTypes: typeof $Enums.MessageTypes

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **Conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.ConversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversationMembers`: Exposes CRUD operations for the **ConversationMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversationMembers
    * const conversationMembers = await prisma.conversationMembers.findMany()
    * ```
    */
  get conversationMembers(): Prisma.ConversationMembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupRequests`: Exposes CRUD operations for the **GroupRequests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupRequests
    * const groupRequests = await prisma.groupRequests.findMany()
    * ```
    */
  get groupRequests(): Prisma.GroupRequestsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Conversations: 'Conversations',
    ConversationMembers: 'ConversationMembers',
    Messages: 'Messages',
    GroupRequests: 'GroupRequests'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "conversations" | "conversationMembers" | "messages" | "groupRequests"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Conversations: {
        payload: Prisma.$ConversationsPayload<ExtArgs>
        fields: Prisma.ConversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          findFirst: {
            args: Prisma.ConversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          findMany: {
            args: Prisma.ConversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>[]
          }
          create: {
            args: Prisma.ConversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          createMany: {
            args: Prisma.ConversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>[]
          }
          delete: {
            args: Prisma.ConversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          update: {
            args: Prisma.ConversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          deleteMany: {
            args: Prisma.ConversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>[]
          }
          upsert: {
            args: Prisma.ConversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          aggregate: {
            args: Prisma.ConversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversations>
          }
          groupBy: {
            args: Prisma.ConversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationsCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationsCountAggregateOutputType> | number
          }
        }
      }
      ConversationMembers: {
        payload: Prisma.$ConversationMembersPayload<ExtArgs>
        fields: Prisma.ConversationMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMembersPayload>
          }
          findFirst: {
            args: Prisma.ConversationMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMembersPayload>
          }
          findMany: {
            args: Prisma.ConversationMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMembersPayload>[]
          }
          create: {
            args: Prisma.ConversationMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMembersPayload>
          }
          createMany: {
            args: Prisma.ConversationMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationMembersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMembersPayload>[]
          }
          delete: {
            args: Prisma.ConversationMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMembersPayload>
          }
          update: {
            args: Prisma.ConversationMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMembersPayload>
          }
          deleteMany: {
            args: Prisma.ConversationMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationMembersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMembersPayload>[]
          }
          upsert: {
            args: Prisma.ConversationMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMembersPayload>
          }
          aggregate: {
            args: Prisma.ConversationMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversationMembers>
          }
          groupBy: {
            args: Prisma.ConversationMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationMembersCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationMembersCountAggregateOutputType> | number
          }
        }
      }
      Messages: {
        payload: Prisma.$MessagesPayload<ExtArgs>
        fields: Prisma.MessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findFirst: {
            args: Prisma.MessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findMany: {
            args: Prisma.MessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          create: {
            args: Prisma.MessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          createMany: {
            args: Prisma.MessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          delete: {
            args: Prisma.MessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          update: {
            args: Prisma.MessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          deleteMany: {
            args: Prisma.MessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          upsert: {
            args: Prisma.MessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.MessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      GroupRequests: {
        payload: Prisma.$GroupRequestsPayload<ExtArgs>
        fields: Prisma.GroupRequestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupRequestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupRequestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupRequestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupRequestsPayload>
          }
          findFirst: {
            args: Prisma.GroupRequestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupRequestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupRequestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupRequestsPayload>
          }
          findMany: {
            args: Prisma.GroupRequestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupRequestsPayload>[]
          }
          create: {
            args: Prisma.GroupRequestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupRequestsPayload>
          }
          createMany: {
            args: Prisma.GroupRequestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupRequestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupRequestsPayload>[]
          }
          delete: {
            args: Prisma.GroupRequestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupRequestsPayload>
          }
          update: {
            args: Prisma.GroupRequestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupRequestsPayload>
          }
          deleteMany: {
            args: Prisma.GroupRequestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupRequestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupRequestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupRequestsPayload>[]
          }
          upsert: {
            args: Prisma.GroupRequestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupRequestsPayload>
          }
          aggregate: {
            args: Prisma.GroupRequestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupRequests>
          }
          groupBy: {
            args: Prisma.GroupRequestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupRequestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupRequestsCountArgs<ExtArgs>
            result: $Utils.Optional<GroupRequestsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    conversations?: ConversationsOmit
    conversationMembers?: ConversationMembersOmit
    messages?: MessagesOmit
    groupRequests?: GroupRequestsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    conversations: number
    conversationMembers: number
    messages: number
    groupRequests: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | UsersCountOutputTypeCountConversationsArgs
    conversationMembers?: boolean | UsersCountOutputTypeCountConversationMembersArgs
    messages?: boolean | UsersCountOutputTypeCountMessagesArgs
    groupRequests?: boolean | UsersCountOutputTypeCountGroupRequestsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountConversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationMembersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGroupRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupRequestsWhereInput
  }


  /**
   * Count Type ConversationsCountOutputType
   */

  export type ConversationsCountOutputType = {
    members: number
    messages: number
    groupRequests: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ConversationsCountOutputTypeCountMembersArgs
    messages?: boolean | ConversationsCountOutputTypeCountMessagesArgs
    groupRequests?: boolean | ConversationsCountOutputTypeCountGroupRequestsArgs
  }

  // Custom InputTypes
  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationMembersWhereInput
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountGroupRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupRequestsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    bio: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    bio: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    bio: number
    profileImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    bio?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    bio?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    bio?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    bio: string
    profileImage: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversations?: boolean | Users$conversationsArgs<ExtArgs>
    conversationMembers?: boolean | Users$conversationMembersArgs<ExtArgs>
    messages?: boolean | Users$messagesArgs<ExtArgs>
    groupRequests?: boolean | Users$groupRequestsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "bio" | "profileImage" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | Users$conversationsArgs<ExtArgs>
    conversationMembers?: boolean | Users$conversationMembersArgs<ExtArgs>
    messages?: boolean | Users$messagesArgs<ExtArgs>
    groupRequests?: boolean | Users$groupRequestsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      conversations: Prisma.$ConversationsPayload<ExtArgs>[]
      conversationMembers: Prisma.$ConversationMembersPayload<ExtArgs>[]
      messages: Prisma.$MessagesPayload<ExtArgs>[]
      groupRequests: Prisma.$GroupRequestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      bio: string
      profileImage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends Users$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversationMembers<T extends Users$conversationMembersArgs<ExtArgs> = {}>(args?: Subset<T, Users$conversationMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Users$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Users$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupRequests<T extends Users$groupRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Users$groupRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly bio: FieldRef<"Users", 'String'>
    readonly profileImage: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.conversations
   */
  export type Users$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    cursor?: ConversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Users.conversationMembers
   */
  export type Users$conversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersInclude<ExtArgs> | null
    where?: ConversationMembersWhereInput
    orderBy?: ConversationMembersOrderByWithRelationInput | ConversationMembersOrderByWithRelationInput[]
    cursor?: ConversationMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationMembersScalarFieldEnum | ConversationMembersScalarFieldEnum[]
  }

  /**
   * Users.messages
   */
  export type Users$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Users.groupRequests
   */
  export type Users$groupRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsInclude<ExtArgs> | null
    where?: GroupRequestsWhereInput
    orderBy?: GroupRequestsOrderByWithRelationInput | GroupRequestsOrderByWithRelationInput[]
    cursor?: GroupRequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupRequestsScalarFieldEnum | GroupRequestsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Conversations
   */

  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsMinAggregateOutputType = {
    id: string | null
    createrId: string | null
    type: $Enums.ConversationTypes | null
    name: string | null
    bio: string | null
    bannerImage: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationsMaxAggregateOutputType = {
    id: string | null
    createrId: string | null
    type: $Enums.ConversationTypes | null
    name: string | null
    bio: string | null
    bannerImage: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationsCountAggregateOutputType = {
    id: number
    createrId: number
    type: number
    name: number
    bio: number
    bannerImage: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversationsMinAggregateInputType = {
    id?: true
    createrId?: true
    type?: true
    name?: true
    bio?: true
    bannerImage?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationsMaxAggregateInputType = {
    id?: true
    createrId?: true
    type?: true
    name?: true
    bio?: true
    bannerImage?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationsCountAggregateInputType = {
    id?: true
    createrId?: true
    type?: true
    name?: true
    bio?: true
    bannerImage?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to aggregate.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type ConversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithAggregationInput | ConversationsOrderByWithAggregationInput[]
    by: ConversationsScalarFieldEnum[] | ConversationsScalarFieldEnum
    having?: ConversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }

  export type ConversationsGroupByOutputType = {
    id: string
    createrId: string | null
    type: $Enums.ConversationTypes
    name: string | null
    bio: string | null
    bannerImage: string | null
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends ConversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type ConversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createrId?: boolean
    type?: boolean
    name?: boolean
    bio?: boolean
    bannerImage?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Conversations$userArgs<ExtArgs>
    members?: boolean | Conversations$membersArgs<ExtArgs>
    messages?: boolean | Conversations$messagesArgs<ExtArgs>
    groupRequests?: boolean | Conversations$groupRequestsArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type ConversationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createrId?: boolean
    type?: boolean
    name?: boolean
    bio?: boolean
    bannerImage?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Conversations$userArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type ConversationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createrId?: boolean
    type?: boolean
    name?: boolean
    bio?: boolean
    bannerImage?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Conversations$userArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type ConversationsSelectScalar = {
    id?: boolean
    createrId?: boolean
    type?: boolean
    name?: boolean
    bio?: boolean
    bannerImage?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createrId" | "type" | "name" | "bio" | "bannerImage" | "isPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["conversations"]>
  export type ConversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Conversations$userArgs<ExtArgs>
    members?: boolean | Conversations$membersArgs<ExtArgs>
    messages?: boolean | Conversations$messagesArgs<ExtArgs>
    groupRequests?: boolean | Conversations$groupRequestsArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Conversations$userArgs<ExtArgs>
  }
  export type ConversationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Conversations$userArgs<ExtArgs>
  }

  export type $ConversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversations"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs> | null
      members: Prisma.$ConversationMembersPayload<ExtArgs>[]
      messages: Prisma.$MessagesPayload<ExtArgs>[]
      groupRequests: Prisma.$GroupRequestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createrId: string | null
      type: $Enums.ConversationTypes
      name: string | null
      bio: string | null
      bannerImage: string | null
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversations"]>
    composites: {}
  }

  type ConversationsGetPayload<S extends boolean | null | undefined | ConversationsDefaultArgs> = $Result.GetResult<Prisma.$ConversationsPayload, S>

  type ConversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface ConversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversations'], meta: { name: 'Conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {ConversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationsFindUniqueArgs>(args: SelectSubset<T, ConversationsFindUniqueArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationsFindFirstArgs>(args?: SelectSubset<T, ConversationsFindFirstArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationsFindManyArgs>(args?: SelectSubset<T, ConversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversations.
     * @param {ConversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
     */
    create<T extends ConversationsCreateArgs>(args: SelectSubset<T, ConversationsCreateArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationsCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationsCreateManyArgs>(args?: SelectSubset<T, ConversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationsCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationsCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversations.
     * @param {ConversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
     */
    delete<T extends ConversationsDeleteArgs>(args: SelectSubset<T, ConversationsDeleteArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversations.
     * @param {ConversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationsUpdateArgs>(args: SelectSubset<T, ConversationsUpdateArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationsDeleteManyArgs>(args?: SelectSubset<T, ConversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationsUpdateManyArgs>(args: SelectSubset<T, ConversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationsUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationsUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversations.
     * @param {ConversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
     */
    upsert<T extends ConversationsUpsertArgs>(args: SelectSubset<T, ConversationsUpsertArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationsCountArgs>(
      args?: Subset<T, ConversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationsGroupByArgs['orderBy'] }
        : { orderBy?: ConversationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversations model
   */
  readonly fields: ConversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Conversations$userArgs<ExtArgs> = {}>(args?: Subset<T, Conversations$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends Conversations$membersArgs<ExtArgs> = {}>(args?: Subset<T, Conversations$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Conversations$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversations$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupRequests<T extends Conversations$groupRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Conversations$groupRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversations model
   */
  interface ConversationsFieldRefs {
    readonly id: FieldRef<"Conversations", 'String'>
    readonly createrId: FieldRef<"Conversations", 'String'>
    readonly type: FieldRef<"Conversations", 'ConversationTypes'>
    readonly name: FieldRef<"Conversations", 'String'>
    readonly bio: FieldRef<"Conversations", 'String'>
    readonly bannerImage: FieldRef<"Conversations", 'String'>
    readonly isPublic: FieldRef<"Conversations", 'Boolean'>
    readonly createdAt: FieldRef<"Conversations", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversations findUnique
   */
  export type ConversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations findUniqueOrThrow
   */
  export type ConversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations findFirst
   */
  export type ConversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Conversations findFirstOrThrow
   */
  export type ConversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Conversations findMany
   */
  export type ConversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Conversations create
   */
  export type ConversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversations.
     */
    data: XOR<ConversationsCreateInput, ConversationsUncheckedCreateInput>
  }

  /**
   * Conversations createMany
   */
  export type ConversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationsCreateManyInput | ConversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversations createManyAndReturn
   */
  export type ConversationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationsCreateManyInput | ConversationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversations update
   */
  export type ConversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversations.
     */
    data: XOR<ConversationsUpdateInput, ConversationsUncheckedUpdateInput>
    /**
     * Choose, which Conversations to update.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations updateMany
   */
  export type ConversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationsWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversations updateManyAndReturn
   */
  export type ConversationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationsWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversations upsert
   */
  export type ConversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversations to update in case it exists.
     */
    where: ConversationsWhereUniqueInput
    /**
     * In case the Conversations found by the `where` argument doesn't exist, create a new Conversations with this data.
     */
    create: XOR<ConversationsCreateInput, ConversationsUncheckedCreateInput>
    /**
     * In case the Conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationsUpdateInput, ConversationsUncheckedUpdateInput>
  }

  /**
   * Conversations delete
   */
  export type ConversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter which Conversations to delete.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations deleteMany
   */
  export type ConversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationsWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversations.user
   */
  export type Conversations$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Conversations.members
   */
  export type Conversations$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersInclude<ExtArgs> | null
    where?: ConversationMembersWhereInput
    orderBy?: ConversationMembersOrderByWithRelationInput | ConversationMembersOrderByWithRelationInput[]
    cursor?: ConversationMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationMembersScalarFieldEnum | ConversationMembersScalarFieldEnum[]
  }

  /**
   * Conversations.messages
   */
  export type Conversations$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Conversations.groupRequests
   */
  export type Conversations$groupRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsInclude<ExtArgs> | null
    where?: GroupRequestsWhereInput
    orderBy?: GroupRequestsOrderByWithRelationInput | GroupRequestsOrderByWithRelationInput[]
    cursor?: GroupRequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupRequestsScalarFieldEnum | GroupRequestsScalarFieldEnum[]
  }

  /**
   * Conversations without action
   */
  export type ConversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
  }


  /**
   * Model ConversationMembers
   */

  export type AggregateConversationMembers = {
    _count: ConversationMembersCountAggregateOutputType | null
    _min: ConversationMembersMinAggregateOutputType | null
    _max: ConversationMembersMaxAggregateOutputType | null
  }

  export type ConversationMembersMinAggregateOutputType = {
    id: string | null
    role: $Enums.ConversationRoles | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    conversationId: string | null
    userId: string | null
  }

  export type ConversationMembersMaxAggregateOutputType = {
    id: string | null
    role: $Enums.ConversationRoles | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    conversationId: string | null
    userId: string | null
  }

  export type ConversationMembersCountAggregateOutputType = {
    id: number
    role: number
    joinedAt: number
    createdAt: number
    updatedAt: number
    conversationId: number
    userId: number
    _all: number
  }


  export type ConversationMembersMinAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
    conversationId?: true
    userId?: true
  }

  export type ConversationMembersMaxAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
    conversationId?: true
    userId?: true
  }

  export type ConversationMembersCountAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
    conversationId?: true
    userId?: true
    _all?: true
  }

  export type ConversationMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationMembers to aggregate.
     */
    where?: ConversationMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMembers to fetch.
     */
    orderBy?: ConversationMembersOrderByWithRelationInput | ConversationMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversationMembers
    **/
    _count?: true | ConversationMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMembersMaxAggregateInputType
  }

  export type GetConversationMembersAggregateType<T extends ConversationMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateConversationMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversationMembers[P]>
      : GetScalarType<T[P], AggregateConversationMembers[P]>
  }




  export type ConversationMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationMembersWhereInput
    orderBy?: ConversationMembersOrderByWithAggregationInput | ConversationMembersOrderByWithAggregationInput[]
    by: ConversationMembersScalarFieldEnum[] | ConversationMembersScalarFieldEnum
    having?: ConversationMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationMembersCountAggregateInputType | true
    _min?: ConversationMembersMinAggregateInputType
    _max?: ConversationMembersMaxAggregateInputType
  }

  export type ConversationMembersGroupByOutputType = {
    id: string
    role: $Enums.ConversationRoles
    joinedAt: Date
    createdAt: Date
    updatedAt: Date
    conversationId: string
    userId: string
    _count: ConversationMembersCountAggregateOutputType | null
    _min: ConversationMembersMinAggregateOutputType | null
    _max: ConversationMembersMaxAggregateOutputType | null
  }

  type GetConversationMembersGroupByPayload<T extends ConversationMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationMembersGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationMembersGroupByOutputType[P]>
        }
      >
    >


  export type ConversationMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversationId?: boolean
    userId?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationMembers"]>

  export type ConversationMembersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversationId?: boolean
    userId?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationMembers"]>

  export type ConversationMembersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversationId?: boolean
    userId?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationMembers"]>

  export type ConversationMembersSelectScalar = {
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversationId?: boolean
    userId?: boolean
  }

  export type ConversationMembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "joinedAt" | "createdAt" | "updatedAt" | "conversationId" | "userId", ExtArgs["result"]["conversationMembers"]>
  export type ConversationMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ConversationMembersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ConversationMembersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ConversationMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversationMembers"
    objects: {
      conversation: Prisma.$ConversationsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.ConversationRoles
      joinedAt: Date
      createdAt: Date
      updatedAt: Date
      conversationId: string
      userId: string
    }, ExtArgs["result"]["conversationMembers"]>
    composites: {}
  }

  type ConversationMembersGetPayload<S extends boolean | null | undefined | ConversationMembersDefaultArgs> = $Result.GetResult<Prisma.$ConversationMembersPayload, S>

  type ConversationMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationMembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationMembersCountAggregateInputType | true
    }

  export interface ConversationMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversationMembers'], meta: { name: 'ConversationMembers' } }
    /**
     * Find zero or one ConversationMembers that matches the filter.
     * @param {ConversationMembersFindUniqueArgs} args - Arguments to find a ConversationMembers
     * @example
     * // Get one ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationMembersFindUniqueArgs>(args: SelectSubset<T, ConversationMembersFindUniqueArgs<ExtArgs>>): Prisma__ConversationMembersClient<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversationMembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationMembersFindUniqueOrThrowArgs} args - Arguments to find a ConversationMembers
     * @example
     * // Get one ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationMembersClient<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMembersFindFirstArgs} args - Arguments to find a ConversationMembers
     * @example
     * // Get one ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationMembersFindFirstArgs>(args?: SelectSubset<T, ConversationMembersFindFirstArgs<ExtArgs>>): Prisma__ConversationMembersClient<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMembersFindFirstOrThrowArgs} args - Arguments to find a ConversationMembers
     * @example
     * // Get one ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationMembersClient<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.findMany()
     * 
     * // Get first 10 ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationMembersWithIdOnly = await prisma.conversationMembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationMembersFindManyArgs>(args?: SelectSubset<T, ConversationMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversationMembers.
     * @param {ConversationMembersCreateArgs} args - Arguments to create a ConversationMembers.
     * @example
     * // Create one ConversationMembers
     * const ConversationMembers = await prisma.conversationMembers.create({
     *   data: {
     *     // ... data to create a ConversationMembers
     *   }
     * })
     * 
     */
    create<T extends ConversationMembersCreateArgs>(args: SelectSubset<T, ConversationMembersCreateArgs<ExtArgs>>): Prisma__ConversationMembersClient<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversationMembers.
     * @param {ConversationMembersCreateManyArgs} args - Arguments to create many ConversationMembers.
     * @example
     * // Create many ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationMembersCreateManyArgs>(args?: SelectSubset<T, ConversationMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConversationMembers and returns the data saved in the database.
     * @param {ConversationMembersCreateManyAndReturnArgs} args - Arguments to create many ConversationMembers.
     * @example
     * // Create many ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConversationMembers and only return the `id`
     * const conversationMembersWithIdOnly = await prisma.conversationMembers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationMembersCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationMembersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConversationMembers.
     * @param {ConversationMembersDeleteArgs} args - Arguments to delete one ConversationMembers.
     * @example
     * // Delete one ConversationMembers
     * const ConversationMembers = await prisma.conversationMembers.delete({
     *   where: {
     *     // ... filter to delete one ConversationMembers
     *   }
     * })
     * 
     */
    delete<T extends ConversationMembersDeleteArgs>(args: SelectSubset<T, ConversationMembersDeleteArgs<ExtArgs>>): Prisma__ConversationMembersClient<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversationMembers.
     * @param {ConversationMembersUpdateArgs} args - Arguments to update one ConversationMembers.
     * @example
     * // Update one ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationMembersUpdateArgs>(args: SelectSubset<T, ConversationMembersUpdateArgs<ExtArgs>>): Prisma__ConversationMembersClient<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversationMembers.
     * @param {ConversationMembersDeleteManyArgs} args - Arguments to filter ConversationMembers to delete.
     * @example
     * // Delete a few ConversationMembers
     * const { count } = await prisma.conversationMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationMembersDeleteManyArgs>(args?: SelectSubset<T, ConversationMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationMembersUpdateManyArgs>(args: SelectSubset<T, ConversationMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationMembers and returns the data updated in the database.
     * @param {ConversationMembersUpdateManyAndReturnArgs} args - Arguments to update many ConversationMembers.
     * @example
     * // Update many ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConversationMembers and only return the `id`
     * const conversationMembersWithIdOnly = await prisma.conversationMembers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationMembersUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationMembersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConversationMembers.
     * @param {ConversationMembersUpsertArgs} args - Arguments to update or create a ConversationMembers.
     * @example
     * // Update or create a ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.upsert({
     *   create: {
     *     // ... data to create a ConversationMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversationMembers we want to update
     *   }
     * })
     */
    upsert<T extends ConversationMembersUpsertArgs>(args: SelectSubset<T, ConversationMembersUpsertArgs<ExtArgs>>): Prisma__ConversationMembersClient<$Result.GetResult<Prisma.$ConversationMembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMembersCountArgs} args - Arguments to filter ConversationMembers to count.
     * @example
     * // Count the number of ConversationMembers
     * const count = await prisma.conversationMembers.count({
     *   where: {
     *     // ... the filter for the ConversationMembers we want to count
     *   }
     * })
    **/
    count<T extends ConversationMembersCountArgs>(
      args?: Subset<T, ConversationMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationMembersAggregateArgs>(args: Subset<T, ConversationMembersAggregateArgs>): Prisma.PrismaPromise<GetConversationMembersAggregateType<T>>

    /**
     * Group by ConversationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMembersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationMembersGroupByArgs['orderBy'] }
        : { orderBy?: ConversationMembersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversationMembers model
   */
  readonly fields: ConversationMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversationMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationsDefaultArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConversationMembers model
   */
  interface ConversationMembersFieldRefs {
    readonly id: FieldRef<"ConversationMembers", 'String'>
    readonly role: FieldRef<"ConversationMembers", 'ConversationRoles'>
    readonly joinedAt: FieldRef<"ConversationMembers", 'DateTime'>
    readonly createdAt: FieldRef<"ConversationMembers", 'DateTime'>
    readonly updatedAt: FieldRef<"ConversationMembers", 'DateTime'>
    readonly conversationId: FieldRef<"ConversationMembers", 'String'>
    readonly userId: FieldRef<"ConversationMembers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConversationMembers findUnique
   */
  export type ConversationMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMembers to fetch.
     */
    where: ConversationMembersWhereUniqueInput
  }

  /**
   * ConversationMembers findUniqueOrThrow
   */
  export type ConversationMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMembers to fetch.
     */
    where: ConversationMembersWhereUniqueInput
  }

  /**
   * ConversationMembers findFirst
   */
  export type ConversationMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMembers to fetch.
     */
    where?: ConversationMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMembers to fetch.
     */
    orderBy?: ConversationMembersOrderByWithRelationInput | ConversationMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationMembers.
     */
    cursor?: ConversationMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationMembers.
     */
    distinct?: ConversationMembersScalarFieldEnum | ConversationMembersScalarFieldEnum[]
  }

  /**
   * ConversationMembers findFirstOrThrow
   */
  export type ConversationMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMembers to fetch.
     */
    where?: ConversationMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMembers to fetch.
     */
    orderBy?: ConversationMembersOrderByWithRelationInput | ConversationMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationMembers.
     */
    cursor?: ConversationMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationMembers.
     */
    distinct?: ConversationMembersScalarFieldEnum | ConversationMembersScalarFieldEnum[]
  }

  /**
   * ConversationMembers findMany
   */
  export type ConversationMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMembers to fetch.
     */
    where?: ConversationMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMembers to fetch.
     */
    orderBy?: ConversationMembersOrderByWithRelationInput | ConversationMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversationMembers.
     */
    cursor?: ConversationMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMembers.
     */
    skip?: number
    distinct?: ConversationMembersScalarFieldEnum | ConversationMembersScalarFieldEnum[]
  }

  /**
   * ConversationMembers create
   */
  export type ConversationMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversationMembers.
     */
    data: XOR<ConversationMembersCreateInput, ConversationMembersUncheckedCreateInput>
  }

  /**
   * ConversationMembers createMany
   */
  export type ConversationMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversationMembers.
     */
    data: ConversationMembersCreateManyInput | ConversationMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversationMembers createManyAndReturn
   */
  export type ConversationMembersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * The data used to create many ConversationMembers.
     */
    data: ConversationMembersCreateManyInput | ConversationMembersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversationMembers update
   */
  export type ConversationMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversationMembers.
     */
    data: XOR<ConversationMembersUpdateInput, ConversationMembersUncheckedUpdateInput>
    /**
     * Choose, which ConversationMembers to update.
     */
    where: ConversationMembersWhereUniqueInput
  }

  /**
   * ConversationMembers updateMany
   */
  export type ConversationMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversationMembers.
     */
    data: XOR<ConversationMembersUpdateManyMutationInput, ConversationMembersUncheckedUpdateManyInput>
    /**
     * Filter which ConversationMembers to update
     */
    where?: ConversationMembersWhereInput
    /**
     * Limit how many ConversationMembers to update.
     */
    limit?: number
  }

  /**
   * ConversationMembers updateManyAndReturn
   */
  export type ConversationMembersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * The data used to update ConversationMembers.
     */
    data: XOR<ConversationMembersUpdateManyMutationInput, ConversationMembersUncheckedUpdateManyInput>
    /**
     * Filter which ConversationMembers to update
     */
    where?: ConversationMembersWhereInput
    /**
     * Limit how many ConversationMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversationMembers upsert
   */
  export type ConversationMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversationMembers to update in case it exists.
     */
    where: ConversationMembersWhereUniqueInput
    /**
     * In case the ConversationMembers found by the `where` argument doesn't exist, create a new ConversationMembers with this data.
     */
    create: XOR<ConversationMembersCreateInput, ConversationMembersUncheckedCreateInput>
    /**
     * In case the ConversationMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationMembersUpdateInput, ConversationMembersUncheckedUpdateInput>
  }

  /**
   * ConversationMembers delete
   */
  export type ConversationMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersInclude<ExtArgs> | null
    /**
     * Filter which ConversationMembers to delete.
     */
    where: ConversationMembersWhereUniqueInput
  }

  /**
   * ConversationMembers deleteMany
   */
  export type ConversationMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationMembers to delete
     */
    where?: ConversationMembersWhereInput
    /**
     * Limit how many ConversationMembers to delete.
     */
    limit?: number
  }

  /**
   * ConversationMembers without action
   */
  export type ConversationMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMembers
     */
    select?: ConversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMembers
     */
    omit?: ConversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMembersInclude<ExtArgs> | null
  }


  /**
   * Model Messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    id: string | null
    type: $Enums.MessageTypes | null
    content: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    conversationId: string | null
    senderId: string | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: string | null
    type: $Enums.MessageTypes | null
    content: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    conversationId: string | null
    senderId: string | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    type: number
    content: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    conversationId: number
    senderId: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    id?: true
    type?: true
    content?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    conversationId?: true
    senderId?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    type?: true
    content?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    conversationId?: true
    senderId?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    type?: true
    content?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    conversationId?: true
    senderId?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithAggregationInput | MessagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: string
    type: $Enums.MessageTypes
    content: string
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    conversationId: string
    senderId: string
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversationId?: boolean
    senderId?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    sender?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversationId?: boolean
    senderId?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    sender?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversationId?: boolean
    senderId?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    sender?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectScalar = {
    id?: boolean
    type?: boolean
    content?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversationId?: boolean
    senderId?: boolean
  }

  export type MessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "content" | "imageUrl" | "createdAt" | "updatedAt" | "conversationId" | "senderId", ExtArgs["result"]["messages"]>
  export type MessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    sender?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    sender?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    sender?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $MessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messages"
    objects: {
      conversation: Prisma.$ConversationsPayload<ExtArgs>
      sender: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.MessageTypes
      content: string
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
      conversationId: string
      senderId: string
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = $Result.GetResult<Prisma.$MessagesPayload, S>

  type MessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface MessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messages'], meta: { name: 'Messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessagesFindManyArgs>(args?: SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends MessagesCreateArgs>(args: SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagesCreateManyArgs>(args?: SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends MessagesDeleteArgs>(args: SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagesUpdateArgs>(args: SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messages model
   */
  readonly fields: MessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationsDefaultArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Messages model
   */
  interface MessagesFieldRefs {
    readonly id: FieldRef<"Messages", 'String'>
    readonly type: FieldRef<"Messages", 'MessageTypes'>
    readonly content: FieldRef<"Messages", 'String'>
    readonly imageUrl: FieldRef<"Messages", 'String'>
    readonly createdAt: FieldRef<"Messages", 'DateTime'>
    readonly updatedAt: FieldRef<"Messages", 'DateTime'>
    readonly conversationId: FieldRef<"Messages", 'String'>
    readonly senderId: FieldRef<"Messages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Messages findUnique
   */
  export type MessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findFirst
   */
  export type MessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages create
   */
  export type MessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Messages.
     */
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
  }

  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages createManyAndReturn
   */
  export type MessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages update
   */
  export type MessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Messages.
     */
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Messages updateManyAndReturn
   */
  export type MessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
  }

  /**
   * Messages delete
   */
  export type MessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter which Messages to delete.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Messages without action
   */
  export type MessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
  }


  /**
   * Model GroupRequests
   */

  export type AggregateGroupRequests = {
    _count: GroupRequestsCountAggregateOutputType | null
    _min: GroupRequestsMinAggregateOutputType | null
    _max: GroupRequestsMaxAggregateOutputType | null
  }

  export type GroupRequestsMinAggregateOutputType = {
    id: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    conversationId: string | null
    userId: string | null
  }

  export type GroupRequestsMaxAggregateOutputType = {
    id: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    conversationId: string | null
    userId: string | null
  }

  export type GroupRequestsCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    conversationId: number
    userId: number
    _all: number
  }


  export type GroupRequestsMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    conversationId?: true
    userId?: true
  }

  export type GroupRequestsMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    conversationId?: true
    userId?: true
  }

  export type GroupRequestsCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    conversationId?: true
    userId?: true
    _all?: true
  }

  export type GroupRequestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupRequests to aggregate.
     */
    where?: GroupRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupRequests to fetch.
     */
    orderBy?: GroupRequestsOrderByWithRelationInput | GroupRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupRequests
    **/
    _count?: true | GroupRequestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupRequestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupRequestsMaxAggregateInputType
  }

  export type GetGroupRequestsAggregateType<T extends GroupRequestsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupRequests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupRequests[P]>
      : GetScalarType<T[P], AggregateGroupRequests[P]>
  }




  export type GroupRequestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupRequestsWhereInput
    orderBy?: GroupRequestsOrderByWithAggregationInput | GroupRequestsOrderByWithAggregationInput[]
    by: GroupRequestsScalarFieldEnum[] | GroupRequestsScalarFieldEnum
    having?: GroupRequestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupRequestsCountAggregateInputType | true
    _min?: GroupRequestsMinAggregateInputType
    _max?: GroupRequestsMaxAggregateInputType
  }

  export type GroupRequestsGroupByOutputType = {
    id: string
    status: $Enums.RequestStatus
    createdAt: Date
    conversationId: string
    userId: string
    _count: GroupRequestsCountAggregateOutputType | null
    _min: GroupRequestsMinAggregateOutputType | null
    _max: GroupRequestsMaxAggregateOutputType | null
  }

  type GetGroupRequestsGroupByPayload<T extends GroupRequestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupRequestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupRequestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupRequestsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupRequestsGroupByOutputType[P]>
        }
      >
    >


  export type GroupRequestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    conversationId?: boolean
    userId?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupRequests"]>

  export type GroupRequestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    conversationId?: boolean
    userId?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupRequests"]>

  export type GroupRequestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    conversationId?: boolean
    userId?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupRequests"]>

  export type GroupRequestsSelectScalar = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
    conversationId?: boolean
    userId?: boolean
  }

  export type GroupRequestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "createdAt" | "conversationId" | "userId", ExtArgs["result"]["groupRequests"]>
  export type GroupRequestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type GroupRequestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type GroupRequestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $GroupRequestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupRequests"
    objects: {
      conversation: Prisma.$ConversationsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.RequestStatus
      createdAt: Date
      conversationId: string
      userId: string
    }, ExtArgs["result"]["groupRequests"]>
    composites: {}
  }

  type GroupRequestsGetPayload<S extends boolean | null | undefined | GroupRequestsDefaultArgs> = $Result.GetResult<Prisma.$GroupRequestsPayload, S>

  type GroupRequestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupRequestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupRequestsCountAggregateInputType | true
    }

  export interface GroupRequestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupRequests'], meta: { name: 'GroupRequests' } }
    /**
     * Find zero or one GroupRequests that matches the filter.
     * @param {GroupRequestsFindUniqueArgs} args - Arguments to find a GroupRequests
     * @example
     * // Get one GroupRequests
     * const groupRequests = await prisma.groupRequests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupRequestsFindUniqueArgs>(args: SelectSubset<T, GroupRequestsFindUniqueArgs<ExtArgs>>): Prisma__GroupRequestsClient<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupRequests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupRequestsFindUniqueOrThrowArgs} args - Arguments to find a GroupRequests
     * @example
     * // Get one GroupRequests
     * const groupRequests = await prisma.groupRequests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupRequestsFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupRequestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupRequestsClient<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupRequestsFindFirstArgs} args - Arguments to find a GroupRequests
     * @example
     * // Get one GroupRequests
     * const groupRequests = await prisma.groupRequests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupRequestsFindFirstArgs>(args?: SelectSubset<T, GroupRequestsFindFirstArgs<ExtArgs>>): Prisma__GroupRequestsClient<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupRequests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupRequestsFindFirstOrThrowArgs} args - Arguments to find a GroupRequests
     * @example
     * // Get one GroupRequests
     * const groupRequests = await prisma.groupRequests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupRequestsFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupRequestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupRequestsClient<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupRequestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupRequests
     * const groupRequests = await prisma.groupRequests.findMany()
     * 
     * // Get first 10 GroupRequests
     * const groupRequests = await prisma.groupRequests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupRequestsWithIdOnly = await prisma.groupRequests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupRequestsFindManyArgs>(args?: SelectSubset<T, GroupRequestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupRequests.
     * @param {GroupRequestsCreateArgs} args - Arguments to create a GroupRequests.
     * @example
     * // Create one GroupRequests
     * const GroupRequests = await prisma.groupRequests.create({
     *   data: {
     *     // ... data to create a GroupRequests
     *   }
     * })
     * 
     */
    create<T extends GroupRequestsCreateArgs>(args: SelectSubset<T, GroupRequestsCreateArgs<ExtArgs>>): Prisma__GroupRequestsClient<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupRequests.
     * @param {GroupRequestsCreateManyArgs} args - Arguments to create many GroupRequests.
     * @example
     * // Create many GroupRequests
     * const groupRequests = await prisma.groupRequests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupRequestsCreateManyArgs>(args?: SelectSubset<T, GroupRequestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupRequests and returns the data saved in the database.
     * @param {GroupRequestsCreateManyAndReturnArgs} args - Arguments to create many GroupRequests.
     * @example
     * // Create many GroupRequests
     * const groupRequests = await prisma.groupRequests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupRequests and only return the `id`
     * const groupRequestsWithIdOnly = await prisma.groupRequests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupRequestsCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupRequestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupRequests.
     * @param {GroupRequestsDeleteArgs} args - Arguments to delete one GroupRequests.
     * @example
     * // Delete one GroupRequests
     * const GroupRequests = await prisma.groupRequests.delete({
     *   where: {
     *     // ... filter to delete one GroupRequests
     *   }
     * })
     * 
     */
    delete<T extends GroupRequestsDeleteArgs>(args: SelectSubset<T, GroupRequestsDeleteArgs<ExtArgs>>): Prisma__GroupRequestsClient<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupRequests.
     * @param {GroupRequestsUpdateArgs} args - Arguments to update one GroupRequests.
     * @example
     * // Update one GroupRequests
     * const groupRequests = await prisma.groupRequests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupRequestsUpdateArgs>(args: SelectSubset<T, GroupRequestsUpdateArgs<ExtArgs>>): Prisma__GroupRequestsClient<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupRequests.
     * @param {GroupRequestsDeleteManyArgs} args - Arguments to filter GroupRequests to delete.
     * @example
     * // Delete a few GroupRequests
     * const { count } = await prisma.groupRequests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupRequestsDeleteManyArgs>(args?: SelectSubset<T, GroupRequestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupRequestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupRequests
     * const groupRequests = await prisma.groupRequests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupRequestsUpdateManyArgs>(args: SelectSubset<T, GroupRequestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupRequests and returns the data updated in the database.
     * @param {GroupRequestsUpdateManyAndReturnArgs} args - Arguments to update many GroupRequests.
     * @example
     * // Update many GroupRequests
     * const groupRequests = await prisma.groupRequests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupRequests and only return the `id`
     * const groupRequestsWithIdOnly = await prisma.groupRequests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupRequestsUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupRequestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupRequests.
     * @param {GroupRequestsUpsertArgs} args - Arguments to update or create a GroupRequests.
     * @example
     * // Update or create a GroupRequests
     * const groupRequests = await prisma.groupRequests.upsert({
     *   create: {
     *     // ... data to create a GroupRequests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupRequests we want to update
     *   }
     * })
     */
    upsert<T extends GroupRequestsUpsertArgs>(args: SelectSubset<T, GroupRequestsUpsertArgs<ExtArgs>>): Prisma__GroupRequestsClient<$Result.GetResult<Prisma.$GroupRequestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupRequestsCountArgs} args - Arguments to filter GroupRequests to count.
     * @example
     * // Count the number of GroupRequests
     * const count = await prisma.groupRequests.count({
     *   where: {
     *     // ... the filter for the GroupRequests we want to count
     *   }
     * })
    **/
    count<T extends GroupRequestsCountArgs>(
      args?: Subset<T, GroupRequestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupRequestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupRequestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupRequestsAggregateArgs>(args: Subset<T, GroupRequestsAggregateArgs>): Prisma.PrismaPromise<GetGroupRequestsAggregateType<T>>

    /**
     * Group by GroupRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupRequestsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupRequestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupRequestsGroupByArgs['orderBy'] }
        : { orderBy?: GroupRequestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupRequestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupRequestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupRequests model
   */
  readonly fields: GroupRequestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupRequests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupRequestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationsDefaultArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupRequests model
   */
  interface GroupRequestsFieldRefs {
    readonly id: FieldRef<"GroupRequests", 'String'>
    readonly status: FieldRef<"GroupRequests", 'RequestStatus'>
    readonly createdAt: FieldRef<"GroupRequests", 'DateTime'>
    readonly conversationId: FieldRef<"GroupRequests", 'String'>
    readonly userId: FieldRef<"GroupRequests", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GroupRequests findUnique
   */
  export type GroupRequestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsInclude<ExtArgs> | null
    /**
     * Filter, which GroupRequests to fetch.
     */
    where: GroupRequestsWhereUniqueInput
  }

  /**
   * GroupRequests findUniqueOrThrow
   */
  export type GroupRequestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsInclude<ExtArgs> | null
    /**
     * Filter, which GroupRequests to fetch.
     */
    where: GroupRequestsWhereUniqueInput
  }

  /**
   * GroupRequests findFirst
   */
  export type GroupRequestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsInclude<ExtArgs> | null
    /**
     * Filter, which GroupRequests to fetch.
     */
    where?: GroupRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupRequests to fetch.
     */
    orderBy?: GroupRequestsOrderByWithRelationInput | GroupRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupRequests.
     */
    cursor?: GroupRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupRequests.
     */
    distinct?: GroupRequestsScalarFieldEnum | GroupRequestsScalarFieldEnum[]
  }

  /**
   * GroupRequests findFirstOrThrow
   */
  export type GroupRequestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsInclude<ExtArgs> | null
    /**
     * Filter, which GroupRequests to fetch.
     */
    where?: GroupRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupRequests to fetch.
     */
    orderBy?: GroupRequestsOrderByWithRelationInput | GroupRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupRequests.
     */
    cursor?: GroupRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupRequests.
     */
    distinct?: GroupRequestsScalarFieldEnum | GroupRequestsScalarFieldEnum[]
  }

  /**
   * GroupRequests findMany
   */
  export type GroupRequestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsInclude<ExtArgs> | null
    /**
     * Filter, which GroupRequests to fetch.
     */
    where?: GroupRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupRequests to fetch.
     */
    orderBy?: GroupRequestsOrderByWithRelationInput | GroupRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupRequests.
     */
    cursor?: GroupRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupRequests.
     */
    skip?: number
    distinct?: GroupRequestsScalarFieldEnum | GroupRequestsScalarFieldEnum[]
  }

  /**
   * GroupRequests create
   */
  export type GroupRequestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupRequests.
     */
    data: XOR<GroupRequestsCreateInput, GroupRequestsUncheckedCreateInput>
  }

  /**
   * GroupRequests createMany
   */
  export type GroupRequestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupRequests.
     */
    data: GroupRequestsCreateManyInput | GroupRequestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupRequests createManyAndReturn
   */
  export type GroupRequestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * The data used to create many GroupRequests.
     */
    data: GroupRequestsCreateManyInput | GroupRequestsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupRequests update
   */
  export type GroupRequestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupRequests.
     */
    data: XOR<GroupRequestsUpdateInput, GroupRequestsUncheckedUpdateInput>
    /**
     * Choose, which GroupRequests to update.
     */
    where: GroupRequestsWhereUniqueInput
  }

  /**
   * GroupRequests updateMany
   */
  export type GroupRequestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupRequests.
     */
    data: XOR<GroupRequestsUpdateManyMutationInput, GroupRequestsUncheckedUpdateManyInput>
    /**
     * Filter which GroupRequests to update
     */
    where?: GroupRequestsWhereInput
    /**
     * Limit how many GroupRequests to update.
     */
    limit?: number
  }

  /**
   * GroupRequests updateManyAndReturn
   */
  export type GroupRequestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * The data used to update GroupRequests.
     */
    data: XOR<GroupRequestsUpdateManyMutationInput, GroupRequestsUncheckedUpdateManyInput>
    /**
     * Filter which GroupRequests to update
     */
    where?: GroupRequestsWhereInput
    /**
     * Limit how many GroupRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupRequests upsert
   */
  export type GroupRequestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupRequests to update in case it exists.
     */
    where: GroupRequestsWhereUniqueInput
    /**
     * In case the GroupRequests found by the `where` argument doesn't exist, create a new GroupRequests with this data.
     */
    create: XOR<GroupRequestsCreateInput, GroupRequestsUncheckedCreateInput>
    /**
     * In case the GroupRequests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupRequestsUpdateInput, GroupRequestsUncheckedUpdateInput>
  }

  /**
   * GroupRequests delete
   */
  export type GroupRequestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsInclude<ExtArgs> | null
    /**
     * Filter which GroupRequests to delete.
     */
    where: GroupRequestsWhereUniqueInput
  }

  /**
   * GroupRequests deleteMany
   */
  export type GroupRequestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupRequests to delete
     */
    where?: GroupRequestsWhereInput
    /**
     * Limit how many GroupRequests to delete.
     */
    limit?: number
  }

  /**
   * GroupRequests without action
   */
  export type GroupRequestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupRequests
     */
    select?: GroupRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupRequests
     */
    omit?: GroupRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupRequestsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    bio: 'bio',
    profileImage: 'profileImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    id: 'id',
    createrId: 'createrId',
    type: 'type',
    name: 'name',
    bio: 'bio',
    bannerImage: 'bannerImage',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const ConversationMembersScalarFieldEnum: {
    id: 'id',
    role: 'role',
    joinedAt: 'joinedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    conversationId: 'conversationId',
    userId: 'userId'
  };

  export type ConversationMembersScalarFieldEnum = (typeof ConversationMembersScalarFieldEnum)[keyof typeof ConversationMembersScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    type: 'type',
    content: 'content',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    conversationId: 'conversationId',
    senderId: 'senderId'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const GroupRequestsScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt',
    conversationId: 'conversationId',
    userId: 'userId'
  };

  export type GroupRequestsScalarFieldEnum = (typeof GroupRequestsScalarFieldEnum)[keyof typeof GroupRequestsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ConversationTypes'
   */
  export type EnumConversationTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationTypes'>
    


  /**
   * Reference to a field of type 'ConversationTypes[]'
   */
  export type ListEnumConversationTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationTypes[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ConversationRoles'
   */
  export type EnumConversationRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationRoles'>
    


  /**
   * Reference to a field of type 'ConversationRoles[]'
   */
  export type ListEnumConversationRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationRoles[]'>
    


  /**
   * Reference to a field of type 'MessageTypes'
   */
  export type EnumMessageTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageTypes'>
    


  /**
   * Reference to a field of type 'MessageTypes[]'
   */
  export type ListEnumMessageTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageTypes[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    bio?: StringFilter<"Users"> | string
    profileImage?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    conversations?: ConversationsListRelationFilter
    conversationMembers?: ConversationMembersListRelationFilter
    messages?: MessagesListRelationFilter
    groupRequests?: GroupRequestsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversations?: ConversationsOrderByRelationAggregateInput
    conversationMembers?: ConversationMembersOrderByRelationAggregateInput
    messages?: MessagesOrderByRelationAggregateInput
    groupRequests?: GroupRequestsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    bio?: StringFilter<"Users"> | string
    profileImage?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    conversations?: ConversationsListRelationFilter
    conversationMembers?: ConversationMembersListRelationFilter
    messages?: MessagesListRelationFilter
    groupRequests?: GroupRequestsListRelationFilter
  }, "id" | "username" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    bio?: StringWithAggregatesFilter<"Users"> | string
    profileImage?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type ConversationsWhereInput = {
    AND?: ConversationsWhereInput | ConversationsWhereInput[]
    OR?: ConversationsWhereInput[]
    NOT?: ConversationsWhereInput | ConversationsWhereInput[]
    id?: StringFilter<"Conversations"> | string
    createrId?: StringNullableFilter<"Conversations"> | string | null
    type?: EnumConversationTypesFilter<"Conversations"> | $Enums.ConversationTypes
    name?: StringNullableFilter<"Conversations"> | string | null
    bio?: StringNullableFilter<"Conversations"> | string | null
    bannerImage?: StringNullableFilter<"Conversations"> | string | null
    isPublic?: BoolFilter<"Conversations"> | boolean
    createdAt?: DateTimeFilter<"Conversations"> | Date | string
    updatedAt?: DateTimeFilter<"Conversations"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    members?: ConversationMembersListRelationFilter
    messages?: MessagesListRelationFilter
    groupRequests?: GroupRequestsListRelationFilter
  }

  export type ConversationsOrderByWithRelationInput = {
    id?: SortOrder
    createrId?: SortOrderInput | SortOrder
    type?: SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    bannerImage?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    members?: ConversationMembersOrderByRelationAggregateInput
    messages?: MessagesOrderByRelationAggregateInput
    groupRequests?: GroupRequestsOrderByRelationAggregateInput
  }

  export type ConversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationsWhereInput | ConversationsWhereInput[]
    OR?: ConversationsWhereInput[]
    NOT?: ConversationsWhereInput | ConversationsWhereInput[]
    createrId?: StringNullableFilter<"Conversations"> | string | null
    type?: EnumConversationTypesFilter<"Conversations"> | $Enums.ConversationTypes
    name?: StringNullableFilter<"Conversations"> | string | null
    bio?: StringNullableFilter<"Conversations"> | string | null
    bannerImage?: StringNullableFilter<"Conversations"> | string | null
    isPublic?: BoolFilter<"Conversations"> | boolean
    createdAt?: DateTimeFilter<"Conversations"> | Date | string
    updatedAt?: DateTimeFilter<"Conversations"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    members?: ConversationMembersListRelationFilter
    messages?: MessagesListRelationFilter
    groupRequests?: GroupRequestsListRelationFilter
  }, "id">

  export type ConversationsOrderByWithAggregationInput = {
    id?: SortOrder
    createrId?: SortOrderInput | SortOrder
    type?: SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    bannerImage?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversationsCountOrderByAggregateInput
    _max?: ConversationsMaxOrderByAggregateInput
    _min?: ConversationsMinOrderByAggregateInput
  }

  export type ConversationsScalarWhereWithAggregatesInput = {
    AND?: ConversationsScalarWhereWithAggregatesInput | ConversationsScalarWhereWithAggregatesInput[]
    OR?: ConversationsScalarWhereWithAggregatesInput[]
    NOT?: ConversationsScalarWhereWithAggregatesInput | ConversationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversations"> | string
    createrId?: StringNullableWithAggregatesFilter<"Conversations"> | string | null
    type?: EnumConversationTypesWithAggregatesFilter<"Conversations"> | $Enums.ConversationTypes
    name?: StringNullableWithAggregatesFilter<"Conversations"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Conversations"> | string | null
    bannerImage?: StringNullableWithAggregatesFilter<"Conversations"> | string | null
    isPublic?: BoolWithAggregatesFilter<"Conversations"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Conversations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversations"> | Date | string
  }

  export type ConversationMembersWhereInput = {
    AND?: ConversationMembersWhereInput | ConversationMembersWhereInput[]
    OR?: ConversationMembersWhereInput[]
    NOT?: ConversationMembersWhereInput | ConversationMembersWhereInput[]
    id?: StringFilter<"ConversationMembers"> | string
    role?: EnumConversationRolesFilter<"ConversationMembers"> | $Enums.ConversationRoles
    joinedAt?: DateTimeFilter<"ConversationMembers"> | Date | string
    createdAt?: DateTimeFilter<"ConversationMembers"> | Date | string
    updatedAt?: DateTimeFilter<"ConversationMembers"> | Date | string
    conversationId?: StringFilter<"ConversationMembers"> | string
    userId?: StringFilter<"ConversationMembers"> | string
    conversation?: XOR<ConversationsScalarRelationFilter, ConversationsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ConversationMembersOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    conversation?: ConversationsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type ConversationMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    conversationId_userId?: ConversationMembersConversationIdUserIdCompoundUniqueInput
    AND?: ConversationMembersWhereInput | ConversationMembersWhereInput[]
    OR?: ConversationMembersWhereInput[]
    NOT?: ConversationMembersWhereInput | ConversationMembersWhereInput[]
    role?: EnumConversationRolesFilter<"ConversationMembers"> | $Enums.ConversationRoles
    joinedAt?: DateTimeFilter<"ConversationMembers"> | Date | string
    createdAt?: DateTimeFilter<"ConversationMembers"> | Date | string
    updatedAt?: DateTimeFilter<"ConversationMembers"> | Date | string
    conversationId?: StringFilter<"ConversationMembers"> | string
    userId?: StringFilter<"ConversationMembers"> | string
    conversation?: XOR<ConversationsScalarRelationFilter, ConversationsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "conversationId_userId">

  export type ConversationMembersOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    _count?: ConversationMembersCountOrderByAggregateInput
    _max?: ConversationMembersMaxOrderByAggregateInput
    _min?: ConversationMembersMinOrderByAggregateInput
  }

  export type ConversationMembersScalarWhereWithAggregatesInput = {
    AND?: ConversationMembersScalarWhereWithAggregatesInput | ConversationMembersScalarWhereWithAggregatesInput[]
    OR?: ConversationMembersScalarWhereWithAggregatesInput[]
    NOT?: ConversationMembersScalarWhereWithAggregatesInput | ConversationMembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConversationMembers"> | string
    role?: EnumConversationRolesWithAggregatesFilter<"ConversationMembers"> | $Enums.ConversationRoles
    joinedAt?: DateTimeWithAggregatesFilter<"ConversationMembers"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ConversationMembers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConversationMembers"> | Date | string
    conversationId?: StringWithAggregatesFilter<"ConversationMembers"> | string
    userId?: StringWithAggregatesFilter<"ConversationMembers"> | string
  }

  export type MessagesWhereInput = {
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    id?: StringFilter<"Messages"> | string
    type?: EnumMessageTypesFilter<"Messages"> | $Enums.MessageTypes
    content?: StringFilter<"Messages"> | string
    imageUrl?: StringNullableFilter<"Messages"> | string | null
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    updatedAt?: DateTimeFilter<"Messages"> | Date | string
    conversationId?: StringFilter<"Messages"> | string
    senderId?: StringFilter<"Messages"> | string
    conversation?: XOR<ConversationsScalarRelationFilter, ConversationsWhereInput>
    sender?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type MessagesOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    conversation?: ConversationsOrderByWithRelationInput
    sender?: UsersOrderByWithRelationInput
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    type?: EnumMessageTypesFilter<"Messages"> | $Enums.MessageTypes
    content?: StringFilter<"Messages"> | string
    imageUrl?: StringNullableFilter<"Messages"> | string | null
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    updatedAt?: DateTimeFilter<"Messages"> | Date | string
    conversationId?: StringFilter<"Messages"> | string
    senderId?: StringFilter<"Messages"> | string
    conversation?: XOR<ConversationsScalarRelationFilter, ConversationsWhereInput>
    sender?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type MessagesOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    OR?: MessagesScalarWhereWithAggregatesInput[]
    NOT?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Messages"> | string
    type?: EnumMessageTypesWithAggregatesFilter<"Messages"> | $Enums.MessageTypes
    content?: StringWithAggregatesFilter<"Messages"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
    conversationId?: StringWithAggregatesFilter<"Messages"> | string
    senderId?: StringWithAggregatesFilter<"Messages"> | string
  }

  export type GroupRequestsWhereInput = {
    AND?: GroupRequestsWhereInput | GroupRequestsWhereInput[]
    OR?: GroupRequestsWhereInput[]
    NOT?: GroupRequestsWhereInput | GroupRequestsWhereInput[]
    id?: StringFilter<"GroupRequests"> | string
    status?: EnumRequestStatusFilter<"GroupRequests"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"GroupRequests"> | Date | string
    conversationId?: StringFilter<"GroupRequests"> | string
    userId?: StringFilter<"GroupRequests"> | string
    conversation?: XOR<ConversationsScalarRelationFilter, ConversationsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type GroupRequestsOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    conversation?: ConversationsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type GroupRequestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    conversationId_userId?: GroupRequestsConversationIdUserIdCompoundUniqueInput
    AND?: GroupRequestsWhereInput | GroupRequestsWhereInput[]
    OR?: GroupRequestsWhereInput[]
    NOT?: GroupRequestsWhereInput | GroupRequestsWhereInput[]
    status?: EnumRequestStatusFilter<"GroupRequests"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"GroupRequests"> | Date | string
    conversationId?: StringFilter<"GroupRequests"> | string
    userId?: StringFilter<"GroupRequests"> | string
    conversation?: XOR<ConversationsScalarRelationFilter, ConversationsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "conversationId_userId">

  export type GroupRequestsOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    _count?: GroupRequestsCountOrderByAggregateInput
    _max?: GroupRequestsMaxOrderByAggregateInput
    _min?: GroupRequestsMinOrderByAggregateInput
  }

  export type GroupRequestsScalarWhereWithAggregatesInput = {
    AND?: GroupRequestsScalarWhereWithAggregatesInput | GroupRequestsScalarWhereWithAggregatesInput[]
    OR?: GroupRequestsScalarWhereWithAggregatesInput[]
    NOT?: GroupRequestsScalarWhereWithAggregatesInput | GroupRequestsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupRequests"> | string
    status?: EnumRequestStatusWithAggregatesFilter<"GroupRequests"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"GroupRequests"> | Date | string
    conversationId?: StringWithAggregatesFilter<"GroupRequests"> | string
    userId?: StringWithAggregatesFilter<"GroupRequests"> | string
  }

  export type UsersCreateInput = {
    id?: string
    username: string
    email: string
    password?: string
    bio?: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsCreateNestedManyWithoutUserInput
    conversationMembers?: ConversationMembersCreateNestedManyWithoutUserInput
    messages?: MessagesCreateNestedManyWithoutSenderInput
    groupRequests?: GroupRequestsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password?: string
    bio?: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsUncheckedCreateNestedManyWithoutUserInput
    conversationMembers?: ConversationMembersUncheckedCreateNestedManyWithoutUserInput
    messages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    groupRequests?: GroupRequestsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUpdateManyWithoutUserNestedInput
    conversationMembers?: ConversationMembersUpdateManyWithoutUserNestedInput
    messages?: MessagesUpdateManyWithoutSenderNestedInput
    groupRequests?: GroupRequestsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUncheckedUpdateManyWithoutUserNestedInput
    conversationMembers?: ConversationMembersUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    groupRequests?: GroupRequestsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    username: string
    email: string
    password?: string
    bio?: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationsCreateInput = {
    id?: string
    type: $Enums.ConversationTypes
    name?: string | null
    bio?: string | null
    bannerImage?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UsersCreateNestedOneWithoutConversationsInput
    members?: ConversationMembersCreateNestedManyWithoutConversationInput
    messages?: MessagesCreateNestedManyWithoutConversationInput
    groupRequests?: GroupRequestsCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateInput = {
    id?: string
    createrId?: string | null
    type: $Enums.ConversationTypes
    name?: string | null
    bio?: string | null
    bannerImage?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ConversationMembersUncheckedCreateNestedManyWithoutConversationInput
    messages?: MessagesUncheckedCreateNestedManyWithoutConversationInput
    groupRequests?: GroupRequestsUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutConversationsNestedInput
    members?: ConversationMembersUpdateManyWithoutConversationNestedInput
    messages?: MessagesUpdateManyWithoutConversationNestedInput
    groupRequests?: GroupRequestsUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createrId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ConversationMembersUncheckedUpdateManyWithoutConversationNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutConversationNestedInput
    groupRequests?: GroupRequestsUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsCreateManyInput = {
    id?: string
    createrId?: string | null
    type: $Enums.ConversationTypes
    name?: string | null
    bio?: string | null
    bannerImage?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createrId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMembersCreateInput = {
    id?: string
    role?: $Enums.ConversationRoles
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation: ConversationsCreateNestedOneWithoutMembersInput
    user: UsersCreateNestedOneWithoutConversationMembersInput
  }

  export type ConversationMembersUncheckedCreateInput = {
    id?: string
    role?: $Enums.ConversationRoles
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationId: string
    userId: string
  }

  export type ConversationMembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumConversationRolesFieldUpdateOperationsInput | $Enums.ConversationRoles
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationsUpdateOneRequiredWithoutMembersNestedInput
    user?: UsersUpdateOneRequiredWithoutConversationMembersNestedInput
  }

  export type ConversationMembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumConversationRolesFieldUpdateOperationsInput | $Enums.ConversationRoles
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationMembersCreateManyInput = {
    id?: string
    role?: $Enums.ConversationRoles
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationId: string
    userId: string
  }

  export type ConversationMembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumConversationRolesFieldUpdateOperationsInput | $Enums.ConversationRoles
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumConversationRolesFieldUpdateOperationsInput | $Enums.ConversationRoles
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesCreateInput = {
    id?: string
    type?: $Enums.MessageTypes
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation: ConversationsCreateNestedOneWithoutMessagesInput
    sender: UsersCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateInput = {
    id?: string
    type?: $Enums.MessageTypes
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationId: string
    senderId: string
  }

  export type MessagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypesFieldUpdateOperationsInput | $Enums.MessageTypes
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationsUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UsersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypesFieldUpdateOperationsInput | $Enums.MessageTypes
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesCreateManyInput = {
    id?: string
    type?: $Enums.MessageTypes
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationId: string
    senderId: string
  }

  export type MessagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypesFieldUpdateOperationsInput | $Enums.MessageTypes
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypesFieldUpdateOperationsInput | $Enums.MessageTypes
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupRequestsCreateInput = {
    id?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    conversation: ConversationsCreateNestedOneWithoutGroupRequestsInput
    user: UsersCreateNestedOneWithoutGroupRequestsInput
  }

  export type GroupRequestsUncheckedCreateInput = {
    id?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    conversationId: string
    userId: string
  }

  export type GroupRequestsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationsUpdateOneRequiredWithoutGroupRequestsNestedInput
    user?: UsersUpdateOneRequiredWithoutGroupRequestsNestedInput
  }

  export type GroupRequestsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupRequestsCreateManyInput = {
    id?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    conversationId: string
    userId: string
  }

  export type GroupRequestsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupRequestsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConversationsListRelationFilter = {
    every?: ConversationsWhereInput
    some?: ConversationsWhereInput
    none?: ConversationsWhereInput
  }

  export type ConversationMembersListRelationFilter = {
    every?: ConversationMembersWhereInput
    some?: ConversationMembersWhereInput
    none?: ConversationMembersWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: MessagesWhereInput
    some?: MessagesWhereInput
    none?: MessagesWhereInput
  }

  export type GroupRequestsListRelationFilter = {
    every?: GroupRequestsWhereInput
    some?: GroupRequestsWhereInput
    none?: GroupRequestsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConversationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupRequestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumConversationTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationTypes | EnumConversationTypesFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationTypes[] | ListEnumConversationTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationTypes[] | ListEnumConversationTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationTypesFilter<$PrismaModel> | $Enums.ConversationTypes
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type ConversationsCountOrderByAggregateInput = {
    id?: SortOrder
    createrId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    bannerImage?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    createrId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    bannerImage?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationsMinOrderByAggregateInput = {
    id?: SortOrder
    createrId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    bannerImage?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumConversationTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationTypes | EnumConversationTypesFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationTypes[] | ListEnumConversationTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationTypes[] | ListEnumConversationTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationTypesWithAggregatesFilter<$PrismaModel> | $Enums.ConversationTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConversationTypesFilter<$PrismaModel>
    _max?: NestedEnumConversationTypesFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumConversationRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationRoles | EnumConversationRolesFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationRoles[] | ListEnumConversationRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationRoles[] | ListEnumConversationRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationRolesFilter<$PrismaModel> | $Enums.ConversationRoles
  }

  export type ConversationsScalarRelationFilter = {
    is?: ConversationsWhereInput
    isNot?: ConversationsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ConversationMembersConversationIdUserIdCompoundUniqueInput = {
    conversationId: string
    userId: string
  }

  export type ConversationMembersCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
  }

  export type ConversationMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
  }

  export type ConversationMembersMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
  }

  export type EnumConversationRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationRoles | EnumConversationRolesFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationRoles[] | ListEnumConversationRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationRoles[] | ListEnumConversationRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationRolesWithAggregatesFilter<$PrismaModel> | $Enums.ConversationRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConversationRolesFilter<$PrismaModel>
    _max?: NestedEnumConversationRolesFilter<$PrismaModel>
  }

  export type EnumMessageTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageTypes | EnumMessageTypesFieldRefInput<$PrismaModel>
    in?: $Enums.MessageTypes[] | ListEnumMessageTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageTypes[] | ListEnumMessageTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypesFilter<$PrismaModel> | $Enums.MessageTypes
  }

  export type MessagesCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
  }

  export type EnumMessageTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageTypes | EnumMessageTypesFieldRefInput<$PrismaModel>
    in?: $Enums.MessageTypes[] | ListEnumMessageTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageTypes[] | ListEnumMessageTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypesWithAggregatesFilter<$PrismaModel> | $Enums.MessageTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypesFilter<$PrismaModel>
    _max?: NestedEnumMessageTypesFilter<$PrismaModel>
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type GroupRequestsConversationIdUserIdCompoundUniqueInput = {
    conversationId: string
    userId: string
  }

  export type GroupRequestsCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
  }

  export type GroupRequestsMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
  }

  export type GroupRequestsMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type ConversationsCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationsCreateWithoutUserInput, ConversationsUncheckedCreateWithoutUserInput> | ConversationsCreateWithoutUserInput[] | ConversationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutUserInput | ConversationsCreateOrConnectWithoutUserInput[]
    createMany?: ConversationsCreateManyUserInputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type ConversationMembersCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationMembersCreateWithoutUserInput, ConversationMembersUncheckedCreateWithoutUserInput> | ConversationMembersCreateWithoutUserInput[] | ConversationMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationMembersCreateOrConnectWithoutUserInput | ConversationMembersCreateOrConnectWithoutUserInput[]
    createMany?: ConversationMembersCreateManyUserInputEnvelope
    connect?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type GroupRequestsCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupRequestsCreateWithoutUserInput, GroupRequestsUncheckedCreateWithoutUserInput> | GroupRequestsCreateWithoutUserInput[] | GroupRequestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupRequestsCreateOrConnectWithoutUserInput | GroupRequestsCreateOrConnectWithoutUserInput[]
    createMany?: GroupRequestsCreateManyUserInputEnvelope
    connect?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
  }

  export type ConversationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationsCreateWithoutUserInput, ConversationsUncheckedCreateWithoutUserInput> | ConversationsCreateWithoutUserInput[] | ConversationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutUserInput | ConversationsCreateOrConnectWithoutUserInput[]
    createMany?: ConversationsCreateManyUserInputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type ConversationMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationMembersCreateWithoutUserInput, ConversationMembersUncheckedCreateWithoutUserInput> | ConversationMembersCreateWithoutUserInput[] | ConversationMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationMembersCreateOrConnectWithoutUserInput | ConversationMembersCreateOrConnectWithoutUserInput[]
    createMany?: ConversationMembersCreateManyUserInputEnvelope
    connect?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type GroupRequestsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupRequestsCreateWithoutUserInput, GroupRequestsUncheckedCreateWithoutUserInput> | GroupRequestsCreateWithoutUserInput[] | GroupRequestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupRequestsCreateOrConnectWithoutUserInput | GroupRequestsCreateOrConnectWithoutUserInput[]
    createMany?: GroupRequestsCreateManyUserInputEnvelope
    connect?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConversationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationsCreateWithoutUserInput, ConversationsUncheckedCreateWithoutUserInput> | ConversationsCreateWithoutUserInput[] | ConversationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutUserInput | ConversationsCreateOrConnectWithoutUserInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutUserInput | ConversationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationsCreateManyUserInputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutUserInput | ConversationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutUserInput | ConversationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type ConversationMembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationMembersCreateWithoutUserInput, ConversationMembersUncheckedCreateWithoutUserInput> | ConversationMembersCreateWithoutUserInput[] | ConversationMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationMembersCreateOrConnectWithoutUserInput | ConversationMembersCreateOrConnectWithoutUserInput[]
    upsert?: ConversationMembersUpsertWithWhereUniqueWithoutUserInput | ConversationMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationMembersCreateManyUserInputEnvelope
    set?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    disconnect?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    delete?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    connect?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    update?: ConversationMembersUpdateWithWhereUniqueWithoutUserInput | ConversationMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationMembersUpdateManyWithWhereWithoutUserInput | ConversationMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationMembersScalarWhereInput | ConversationMembersScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderInput | MessagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderInput | MessagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderInput | MessagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type GroupRequestsUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupRequestsCreateWithoutUserInput, GroupRequestsUncheckedCreateWithoutUserInput> | GroupRequestsCreateWithoutUserInput[] | GroupRequestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupRequestsCreateOrConnectWithoutUserInput | GroupRequestsCreateOrConnectWithoutUserInput[]
    upsert?: GroupRequestsUpsertWithWhereUniqueWithoutUserInput | GroupRequestsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupRequestsCreateManyUserInputEnvelope
    set?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    disconnect?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    delete?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    connect?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    update?: GroupRequestsUpdateWithWhereUniqueWithoutUserInput | GroupRequestsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupRequestsUpdateManyWithWhereWithoutUserInput | GroupRequestsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupRequestsScalarWhereInput | GroupRequestsScalarWhereInput[]
  }

  export type ConversationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationsCreateWithoutUserInput, ConversationsUncheckedCreateWithoutUserInput> | ConversationsCreateWithoutUserInput[] | ConversationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutUserInput | ConversationsCreateOrConnectWithoutUserInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutUserInput | ConversationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationsCreateManyUserInputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutUserInput | ConversationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutUserInput | ConversationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type ConversationMembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationMembersCreateWithoutUserInput, ConversationMembersUncheckedCreateWithoutUserInput> | ConversationMembersCreateWithoutUserInput[] | ConversationMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationMembersCreateOrConnectWithoutUserInput | ConversationMembersCreateOrConnectWithoutUserInput[]
    upsert?: ConversationMembersUpsertWithWhereUniqueWithoutUserInput | ConversationMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationMembersCreateManyUserInputEnvelope
    set?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    disconnect?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    delete?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    connect?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    update?: ConversationMembersUpdateWithWhereUniqueWithoutUserInput | ConversationMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationMembersUpdateManyWithWhereWithoutUserInput | ConversationMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationMembersScalarWhereInput | ConversationMembersScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderInput | MessagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderInput | MessagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderInput | MessagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type GroupRequestsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupRequestsCreateWithoutUserInput, GroupRequestsUncheckedCreateWithoutUserInput> | GroupRequestsCreateWithoutUserInput[] | GroupRequestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupRequestsCreateOrConnectWithoutUserInput | GroupRequestsCreateOrConnectWithoutUserInput[]
    upsert?: GroupRequestsUpsertWithWhereUniqueWithoutUserInput | GroupRequestsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupRequestsCreateManyUserInputEnvelope
    set?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    disconnect?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    delete?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    connect?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    update?: GroupRequestsUpdateWithWhereUniqueWithoutUserInput | GroupRequestsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupRequestsUpdateManyWithWhereWithoutUserInput | GroupRequestsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupRequestsScalarWhereInput | GroupRequestsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutConversationsInput = {
    create?: XOR<UsersCreateWithoutConversationsInput, UsersUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutConversationsInput
    connect?: UsersWhereUniqueInput
  }

  export type ConversationMembersCreateNestedManyWithoutConversationInput = {
    create?: XOR<ConversationMembersCreateWithoutConversationInput, ConversationMembersUncheckedCreateWithoutConversationInput> | ConversationMembersCreateWithoutConversationInput[] | ConversationMembersUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationMembersCreateOrConnectWithoutConversationInput | ConversationMembersCreateOrConnectWithoutConversationInput[]
    createMany?: ConversationMembersCreateManyConversationInputEnvelope
    connect?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput> | MessagesCreateWithoutConversationInput[] | MessagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationInput | MessagesCreateOrConnectWithoutConversationInput[]
    createMany?: MessagesCreateManyConversationInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type GroupRequestsCreateNestedManyWithoutConversationInput = {
    create?: XOR<GroupRequestsCreateWithoutConversationInput, GroupRequestsUncheckedCreateWithoutConversationInput> | GroupRequestsCreateWithoutConversationInput[] | GroupRequestsUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: GroupRequestsCreateOrConnectWithoutConversationInput | GroupRequestsCreateOrConnectWithoutConversationInput[]
    createMany?: GroupRequestsCreateManyConversationInputEnvelope
    connect?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
  }

  export type ConversationMembersUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<ConversationMembersCreateWithoutConversationInput, ConversationMembersUncheckedCreateWithoutConversationInput> | ConversationMembersCreateWithoutConversationInput[] | ConversationMembersUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationMembersCreateOrConnectWithoutConversationInput | ConversationMembersCreateOrConnectWithoutConversationInput[]
    createMany?: ConversationMembersCreateManyConversationInputEnvelope
    connect?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput> | MessagesCreateWithoutConversationInput[] | MessagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationInput | MessagesCreateOrConnectWithoutConversationInput[]
    createMany?: MessagesCreateManyConversationInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type GroupRequestsUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<GroupRequestsCreateWithoutConversationInput, GroupRequestsUncheckedCreateWithoutConversationInput> | GroupRequestsCreateWithoutConversationInput[] | GroupRequestsUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: GroupRequestsCreateOrConnectWithoutConversationInput | GroupRequestsCreateOrConnectWithoutConversationInput[]
    createMany?: GroupRequestsCreateManyConversationInputEnvelope
    connect?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
  }

  export type EnumConversationTypesFieldUpdateOperationsInput = {
    set?: $Enums.ConversationTypes
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsersUpdateOneWithoutConversationsNestedInput = {
    create?: XOR<UsersCreateWithoutConversationsInput, UsersUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutConversationsInput
    upsert?: UsersUpsertWithoutConversationsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutConversationsInput, UsersUpdateWithoutConversationsInput>, UsersUncheckedUpdateWithoutConversationsInput>
  }

  export type ConversationMembersUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ConversationMembersCreateWithoutConversationInput, ConversationMembersUncheckedCreateWithoutConversationInput> | ConversationMembersCreateWithoutConversationInput[] | ConversationMembersUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationMembersCreateOrConnectWithoutConversationInput | ConversationMembersCreateOrConnectWithoutConversationInput[]
    upsert?: ConversationMembersUpsertWithWhereUniqueWithoutConversationInput | ConversationMembersUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ConversationMembersCreateManyConversationInputEnvelope
    set?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    disconnect?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    delete?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    connect?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    update?: ConversationMembersUpdateWithWhereUniqueWithoutConversationInput | ConversationMembersUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ConversationMembersUpdateManyWithWhereWithoutConversationInput | ConversationMembersUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ConversationMembersScalarWhereInput | ConversationMembersScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput> | MessagesCreateWithoutConversationInput[] | MessagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationInput | MessagesCreateOrConnectWithoutConversationInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutConversationInput | MessagesUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessagesCreateManyConversationInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutConversationInput | MessagesUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutConversationInput | MessagesUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type GroupRequestsUpdateManyWithoutConversationNestedInput = {
    create?: XOR<GroupRequestsCreateWithoutConversationInput, GroupRequestsUncheckedCreateWithoutConversationInput> | GroupRequestsCreateWithoutConversationInput[] | GroupRequestsUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: GroupRequestsCreateOrConnectWithoutConversationInput | GroupRequestsCreateOrConnectWithoutConversationInput[]
    upsert?: GroupRequestsUpsertWithWhereUniqueWithoutConversationInput | GroupRequestsUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: GroupRequestsCreateManyConversationInputEnvelope
    set?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    disconnect?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    delete?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    connect?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    update?: GroupRequestsUpdateWithWhereUniqueWithoutConversationInput | GroupRequestsUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: GroupRequestsUpdateManyWithWhereWithoutConversationInput | GroupRequestsUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: GroupRequestsScalarWhereInput | GroupRequestsScalarWhereInput[]
  }

  export type ConversationMembersUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ConversationMembersCreateWithoutConversationInput, ConversationMembersUncheckedCreateWithoutConversationInput> | ConversationMembersCreateWithoutConversationInput[] | ConversationMembersUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationMembersCreateOrConnectWithoutConversationInput | ConversationMembersCreateOrConnectWithoutConversationInput[]
    upsert?: ConversationMembersUpsertWithWhereUniqueWithoutConversationInput | ConversationMembersUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ConversationMembersCreateManyConversationInputEnvelope
    set?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    disconnect?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    delete?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    connect?: ConversationMembersWhereUniqueInput | ConversationMembersWhereUniqueInput[]
    update?: ConversationMembersUpdateWithWhereUniqueWithoutConversationInput | ConversationMembersUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ConversationMembersUpdateManyWithWhereWithoutConversationInput | ConversationMembersUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ConversationMembersScalarWhereInput | ConversationMembersScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput> | MessagesCreateWithoutConversationInput[] | MessagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationInput | MessagesCreateOrConnectWithoutConversationInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutConversationInput | MessagesUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessagesCreateManyConversationInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutConversationInput | MessagesUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutConversationInput | MessagesUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type GroupRequestsUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<GroupRequestsCreateWithoutConversationInput, GroupRequestsUncheckedCreateWithoutConversationInput> | GroupRequestsCreateWithoutConversationInput[] | GroupRequestsUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: GroupRequestsCreateOrConnectWithoutConversationInput | GroupRequestsCreateOrConnectWithoutConversationInput[]
    upsert?: GroupRequestsUpsertWithWhereUniqueWithoutConversationInput | GroupRequestsUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: GroupRequestsCreateManyConversationInputEnvelope
    set?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    disconnect?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    delete?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    connect?: GroupRequestsWhereUniqueInput | GroupRequestsWhereUniqueInput[]
    update?: GroupRequestsUpdateWithWhereUniqueWithoutConversationInput | GroupRequestsUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: GroupRequestsUpdateManyWithWhereWithoutConversationInput | GroupRequestsUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: GroupRequestsScalarWhereInput | GroupRequestsScalarWhereInput[]
  }

  export type ConversationsCreateNestedOneWithoutMembersInput = {
    create?: XOR<ConversationsCreateWithoutMembersInput, ConversationsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutMembersInput
    connect?: ConversationsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutConversationMembersInput = {
    create?: XOR<UsersCreateWithoutConversationMembersInput, UsersUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutConversationMembersInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumConversationRolesFieldUpdateOperationsInput = {
    set?: $Enums.ConversationRoles
  }

  export type ConversationsUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ConversationsCreateWithoutMembersInput, ConversationsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutMembersInput
    upsert?: ConversationsUpsertWithoutMembersInput
    connect?: ConversationsWhereUniqueInput
    update?: XOR<XOR<ConversationsUpdateToOneWithWhereWithoutMembersInput, ConversationsUpdateWithoutMembersInput>, ConversationsUncheckedUpdateWithoutMembersInput>
  }

  export type UsersUpdateOneRequiredWithoutConversationMembersNestedInput = {
    create?: XOR<UsersCreateWithoutConversationMembersInput, UsersUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutConversationMembersInput
    upsert?: UsersUpsertWithoutConversationMembersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutConversationMembersInput, UsersUpdateWithoutConversationMembersInput>, UsersUncheckedUpdateWithoutConversationMembersInput>
  }

  export type ConversationsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutMessagesInput
    connect?: ConversationsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UsersCreateWithoutMessagesInput, UsersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMessagesInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumMessageTypesFieldUpdateOperationsInput = {
    set?: $Enums.MessageTypes
  }

  export type ConversationsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutMessagesInput
    upsert?: ConversationsUpsertWithoutMessagesInput
    connect?: ConversationsWhereUniqueInput
    update?: XOR<XOR<ConversationsUpdateToOneWithWhereWithoutMessagesInput, ConversationsUpdateWithoutMessagesInput>, ConversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type UsersUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UsersCreateWithoutMessagesInput, UsersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMessagesInput
    upsert?: UsersUpsertWithoutMessagesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMessagesInput, UsersUpdateWithoutMessagesInput>, UsersUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationsCreateNestedOneWithoutGroupRequestsInput = {
    create?: XOR<ConversationsCreateWithoutGroupRequestsInput, ConversationsUncheckedCreateWithoutGroupRequestsInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutGroupRequestsInput
    connect?: ConversationsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutGroupRequestsInput = {
    create?: XOR<UsersCreateWithoutGroupRequestsInput, UsersUncheckedCreateWithoutGroupRequestsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGroupRequestsInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type ConversationsUpdateOneRequiredWithoutGroupRequestsNestedInput = {
    create?: XOR<ConversationsCreateWithoutGroupRequestsInput, ConversationsUncheckedCreateWithoutGroupRequestsInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutGroupRequestsInput
    upsert?: ConversationsUpsertWithoutGroupRequestsInput
    connect?: ConversationsWhereUniqueInput
    update?: XOR<XOR<ConversationsUpdateToOneWithWhereWithoutGroupRequestsInput, ConversationsUpdateWithoutGroupRequestsInput>, ConversationsUncheckedUpdateWithoutGroupRequestsInput>
  }

  export type UsersUpdateOneRequiredWithoutGroupRequestsNestedInput = {
    create?: XOR<UsersCreateWithoutGroupRequestsInput, UsersUncheckedCreateWithoutGroupRequestsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGroupRequestsInput
    upsert?: UsersUpsertWithoutGroupRequestsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutGroupRequestsInput, UsersUpdateWithoutGroupRequestsInput>, UsersUncheckedUpdateWithoutGroupRequestsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumConversationTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationTypes | EnumConversationTypesFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationTypes[] | ListEnumConversationTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationTypes[] | ListEnumConversationTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationTypesFilter<$PrismaModel> | $Enums.ConversationTypes
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumConversationTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationTypes | EnumConversationTypesFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationTypes[] | ListEnumConversationTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationTypes[] | ListEnumConversationTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationTypesWithAggregatesFilter<$PrismaModel> | $Enums.ConversationTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConversationTypesFilter<$PrismaModel>
    _max?: NestedEnumConversationTypesFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumConversationRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationRoles | EnumConversationRolesFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationRoles[] | ListEnumConversationRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationRoles[] | ListEnumConversationRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationRolesFilter<$PrismaModel> | $Enums.ConversationRoles
  }

  export type NestedEnumConversationRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationRoles | EnumConversationRolesFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationRoles[] | ListEnumConversationRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationRoles[] | ListEnumConversationRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationRolesWithAggregatesFilter<$PrismaModel> | $Enums.ConversationRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConversationRolesFilter<$PrismaModel>
    _max?: NestedEnumConversationRolesFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageTypes | EnumMessageTypesFieldRefInput<$PrismaModel>
    in?: $Enums.MessageTypes[] | ListEnumMessageTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageTypes[] | ListEnumMessageTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypesFilter<$PrismaModel> | $Enums.MessageTypes
  }

  export type NestedEnumMessageTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageTypes | EnumMessageTypesFieldRefInput<$PrismaModel>
    in?: $Enums.MessageTypes[] | ListEnumMessageTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageTypes[] | ListEnumMessageTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypesWithAggregatesFilter<$PrismaModel> | $Enums.MessageTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypesFilter<$PrismaModel>
    _max?: NestedEnumMessageTypesFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type ConversationsCreateWithoutUserInput = {
    id?: string
    type: $Enums.ConversationTypes
    name?: string | null
    bio?: string | null
    bannerImage?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ConversationMembersCreateNestedManyWithoutConversationInput
    messages?: MessagesCreateNestedManyWithoutConversationInput
    groupRequests?: GroupRequestsCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.ConversationTypes
    name?: string | null
    bio?: string | null
    bannerImage?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ConversationMembersUncheckedCreateNestedManyWithoutConversationInput
    messages?: MessagesUncheckedCreateNestedManyWithoutConversationInput
    groupRequests?: GroupRequestsUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsCreateOrConnectWithoutUserInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutUserInput, ConversationsUncheckedCreateWithoutUserInput>
  }

  export type ConversationsCreateManyUserInputEnvelope = {
    data: ConversationsCreateManyUserInput | ConversationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversationMembersCreateWithoutUserInput = {
    id?: string
    role?: $Enums.ConversationRoles
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation: ConversationsCreateNestedOneWithoutMembersInput
  }

  export type ConversationMembersUncheckedCreateWithoutUserInput = {
    id?: string
    role?: $Enums.ConversationRoles
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationId: string
  }

  export type ConversationMembersCreateOrConnectWithoutUserInput = {
    where: ConversationMembersWhereUniqueInput
    create: XOR<ConversationMembersCreateWithoutUserInput, ConversationMembersUncheckedCreateWithoutUserInput>
  }

  export type ConversationMembersCreateManyUserInputEnvelope = {
    data: ConversationMembersCreateManyUserInput | ConversationMembersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutSenderInput = {
    id?: string
    type?: $Enums.MessageTypes
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation: ConversationsCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutSenderInput = {
    id?: string
    type?: $Enums.MessageTypes
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationId: string
  }

  export type MessagesCreateOrConnectWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput>
  }

  export type MessagesCreateManySenderInputEnvelope = {
    data: MessagesCreateManySenderInput | MessagesCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type GroupRequestsCreateWithoutUserInput = {
    id?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    conversation: ConversationsCreateNestedOneWithoutGroupRequestsInput
  }

  export type GroupRequestsUncheckedCreateWithoutUserInput = {
    id?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    conversationId: string
  }

  export type GroupRequestsCreateOrConnectWithoutUserInput = {
    where: GroupRequestsWhereUniqueInput
    create: XOR<GroupRequestsCreateWithoutUserInput, GroupRequestsUncheckedCreateWithoutUserInput>
  }

  export type GroupRequestsCreateManyUserInputEnvelope = {
    data: GroupRequestsCreateManyUserInput | GroupRequestsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversationsUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationsWhereUniqueInput
    update: XOR<ConversationsUpdateWithoutUserInput, ConversationsUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationsCreateWithoutUserInput, ConversationsUncheckedCreateWithoutUserInput>
  }

  export type ConversationsUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationsWhereUniqueInput
    data: XOR<ConversationsUpdateWithoutUserInput, ConversationsUncheckedUpdateWithoutUserInput>
  }

  export type ConversationsUpdateManyWithWhereWithoutUserInput = {
    where: ConversationsScalarWhereInput
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationsScalarWhereInput = {
    AND?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
    OR?: ConversationsScalarWhereInput[]
    NOT?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
    id?: StringFilter<"Conversations"> | string
    createrId?: StringNullableFilter<"Conversations"> | string | null
    type?: EnumConversationTypesFilter<"Conversations"> | $Enums.ConversationTypes
    name?: StringNullableFilter<"Conversations"> | string | null
    bio?: StringNullableFilter<"Conversations"> | string | null
    bannerImage?: StringNullableFilter<"Conversations"> | string | null
    isPublic?: BoolFilter<"Conversations"> | boolean
    createdAt?: DateTimeFilter<"Conversations"> | Date | string
    updatedAt?: DateTimeFilter<"Conversations"> | Date | string
  }

  export type ConversationMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationMembersWhereUniqueInput
    update: XOR<ConversationMembersUpdateWithoutUserInput, ConversationMembersUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationMembersCreateWithoutUserInput, ConversationMembersUncheckedCreateWithoutUserInput>
  }

  export type ConversationMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationMembersWhereUniqueInput
    data: XOR<ConversationMembersUpdateWithoutUserInput, ConversationMembersUncheckedUpdateWithoutUserInput>
  }

  export type ConversationMembersUpdateManyWithWhereWithoutUserInput = {
    where: ConversationMembersScalarWhereInput
    data: XOR<ConversationMembersUpdateManyMutationInput, ConversationMembersUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationMembersScalarWhereInput = {
    AND?: ConversationMembersScalarWhereInput | ConversationMembersScalarWhereInput[]
    OR?: ConversationMembersScalarWhereInput[]
    NOT?: ConversationMembersScalarWhereInput | ConversationMembersScalarWhereInput[]
    id?: StringFilter<"ConversationMembers"> | string
    role?: EnumConversationRolesFilter<"ConversationMembers"> | $Enums.ConversationRoles
    joinedAt?: DateTimeFilter<"ConversationMembers"> | Date | string
    createdAt?: DateTimeFilter<"ConversationMembers"> | Date | string
    updatedAt?: DateTimeFilter<"ConversationMembers"> | Date | string
    conversationId?: StringFilter<"ConversationMembers"> | string
    userId?: StringFilter<"ConversationMembers"> | string
  }

  export type MessagesUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutSenderInput, MessagesUncheckedUpdateWithoutSenderInput>
    create: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutSenderInput, MessagesUncheckedUpdateWithoutSenderInput>
  }

  export type MessagesUpdateManyWithWhereWithoutSenderInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessagesScalarWhereInput = {
    AND?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    OR?: MessagesScalarWhereInput[]
    NOT?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    id?: StringFilter<"Messages"> | string
    type?: EnumMessageTypesFilter<"Messages"> | $Enums.MessageTypes
    content?: StringFilter<"Messages"> | string
    imageUrl?: StringNullableFilter<"Messages"> | string | null
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    updatedAt?: DateTimeFilter<"Messages"> | Date | string
    conversationId?: StringFilter<"Messages"> | string
    senderId?: StringFilter<"Messages"> | string
  }

  export type GroupRequestsUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupRequestsWhereUniqueInput
    update: XOR<GroupRequestsUpdateWithoutUserInput, GroupRequestsUncheckedUpdateWithoutUserInput>
    create: XOR<GroupRequestsCreateWithoutUserInput, GroupRequestsUncheckedCreateWithoutUserInput>
  }

  export type GroupRequestsUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupRequestsWhereUniqueInput
    data: XOR<GroupRequestsUpdateWithoutUserInput, GroupRequestsUncheckedUpdateWithoutUserInput>
  }

  export type GroupRequestsUpdateManyWithWhereWithoutUserInput = {
    where: GroupRequestsScalarWhereInput
    data: XOR<GroupRequestsUpdateManyMutationInput, GroupRequestsUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupRequestsScalarWhereInput = {
    AND?: GroupRequestsScalarWhereInput | GroupRequestsScalarWhereInput[]
    OR?: GroupRequestsScalarWhereInput[]
    NOT?: GroupRequestsScalarWhereInput | GroupRequestsScalarWhereInput[]
    id?: StringFilter<"GroupRequests"> | string
    status?: EnumRequestStatusFilter<"GroupRequests"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"GroupRequests"> | Date | string
    conversationId?: StringFilter<"GroupRequests"> | string
    userId?: StringFilter<"GroupRequests"> | string
  }

  export type UsersCreateWithoutConversationsInput = {
    id?: string
    username: string
    email: string
    password?: string
    bio?: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationMembers?: ConversationMembersCreateNestedManyWithoutUserInput
    messages?: MessagesCreateNestedManyWithoutSenderInput
    groupRequests?: GroupRequestsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutConversationsInput = {
    id?: string
    username: string
    email: string
    password?: string
    bio?: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationMembers?: ConversationMembersUncheckedCreateNestedManyWithoutUserInput
    messages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    groupRequests?: GroupRequestsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutConversationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutConversationsInput, UsersUncheckedCreateWithoutConversationsInput>
  }

  export type ConversationMembersCreateWithoutConversationInput = {
    id?: string
    role?: $Enums.ConversationRoles
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutConversationMembersInput
  }

  export type ConversationMembersUncheckedCreateWithoutConversationInput = {
    id?: string
    role?: $Enums.ConversationRoles
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ConversationMembersCreateOrConnectWithoutConversationInput = {
    where: ConversationMembersWhereUniqueInput
    create: XOR<ConversationMembersCreateWithoutConversationInput, ConversationMembersUncheckedCreateWithoutConversationInput>
  }

  export type ConversationMembersCreateManyConversationInputEnvelope = {
    data: ConversationMembersCreateManyConversationInput | ConversationMembersCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutConversationInput = {
    id?: string
    type?: $Enums.MessageTypes
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UsersCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutConversationInput = {
    id?: string
    type?: $Enums.MessageTypes
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    senderId: string
  }

  export type MessagesCreateOrConnectWithoutConversationInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput>
  }

  export type MessagesCreateManyConversationInputEnvelope = {
    data: MessagesCreateManyConversationInput | MessagesCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type GroupRequestsCreateWithoutConversationInput = {
    id?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutGroupRequestsInput
  }

  export type GroupRequestsUncheckedCreateWithoutConversationInput = {
    id?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    userId: string
  }

  export type GroupRequestsCreateOrConnectWithoutConversationInput = {
    where: GroupRequestsWhereUniqueInput
    create: XOR<GroupRequestsCreateWithoutConversationInput, GroupRequestsUncheckedCreateWithoutConversationInput>
  }

  export type GroupRequestsCreateManyConversationInputEnvelope = {
    data: GroupRequestsCreateManyConversationInput | GroupRequestsCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutConversationsInput = {
    update: XOR<UsersUpdateWithoutConversationsInput, UsersUncheckedUpdateWithoutConversationsInput>
    create: XOR<UsersCreateWithoutConversationsInput, UsersUncheckedCreateWithoutConversationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutConversationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutConversationsInput, UsersUncheckedUpdateWithoutConversationsInput>
  }

  export type UsersUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: ConversationMembersUpdateManyWithoutUserNestedInput
    messages?: MessagesUpdateManyWithoutSenderNestedInput
    groupRequests?: GroupRequestsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: ConversationMembersUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    groupRequests?: GroupRequestsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConversationMembersUpsertWithWhereUniqueWithoutConversationInput = {
    where: ConversationMembersWhereUniqueInput
    update: XOR<ConversationMembersUpdateWithoutConversationInput, ConversationMembersUncheckedUpdateWithoutConversationInput>
    create: XOR<ConversationMembersCreateWithoutConversationInput, ConversationMembersUncheckedCreateWithoutConversationInput>
  }

  export type ConversationMembersUpdateWithWhereUniqueWithoutConversationInput = {
    where: ConversationMembersWhereUniqueInput
    data: XOR<ConversationMembersUpdateWithoutConversationInput, ConversationMembersUncheckedUpdateWithoutConversationInput>
  }

  export type ConversationMembersUpdateManyWithWhereWithoutConversationInput = {
    where: ConversationMembersScalarWhereInput
    data: XOR<ConversationMembersUpdateManyMutationInput, ConversationMembersUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessagesUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutConversationInput, MessagesUncheckedUpdateWithoutConversationInput>
    create: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutConversationInput, MessagesUncheckedUpdateWithoutConversationInput>
  }

  export type MessagesUpdateManyWithWhereWithoutConversationInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutConversationInput>
  }

  export type GroupRequestsUpsertWithWhereUniqueWithoutConversationInput = {
    where: GroupRequestsWhereUniqueInput
    update: XOR<GroupRequestsUpdateWithoutConversationInput, GroupRequestsUncheckedUpdateWithoutConversationInput>
    create: XOR<GroupRequestsCreateWithoutConversationInput, GroupRequestsUncheckedCreateWithoutConversationInput>
  }

  export type GroupRequestsUpdateWithWhereUniqueWithoutConversationInput = {
    where: GroupRequestsWhereUniqueInput
    data: XOR<GroupRequestsUpdateWithoutConversationInput, GroupRequestsUncheckedUpdateWithoutConversationInput>
  }

  export type GroupRequestsUpdateManyWithWhereWithoutConversationInput = {
    where: GroupRequestsScalarWhereInput
    data: XOR<GroupRequestsUpdateManyMutationInput, GroupRequestsUncheckedUpdateManyWithoutConversationInput>
  }

  export type ConversationsCreateWithoutMembersInput = {
    id?: string
    type: $Enums.ConversationTypes
    name?: string | null
    bio?: string | null
    bannerImage?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UsersCreateNestedOneWithoutConversationsInput
    messages?: MessagesCreateNestedManyWithoutConversationInput
    groupRequests?: GroupRequestsCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateWithoutMembersInput = {
    id?: string
    createrId?: string | null
    type: $Enums.ConversationTypes
    name?: string | null
    bio?: string | null
    bannerImage?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutConversationInput
    groupRequests?: GroupRequestsUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsCreateOrConnectWithoutMembersInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutMembersInput, ConversationsUncheckedCreateWithoutMembersInput>
  }

  export type UsersCreateWithoutConversationMembersInput = {
    id?: string
    username: string
    email: string
    password?: string
    bio?: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsCreateNestedManyWithoutUserInput
    messages?: MessagesCreateNestedManyWithoutSenderInput
    groupRequests?: GroupRequestsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutConversationMembersInput = {
    id?: string
    username: string
    email: string
    password?: string
    bio?: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsUncheckedCreateNestedManyWithoutUserInput
    messages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    groupRequests?: GroupRequestsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutConversationMembersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutConversationMembersInput, UsersUncheckedCreateWithoutConversationMembersInput>
  }

  export type ConversationsUpsertWithoutMembersInput = {
    update: XOR<ConversationsUpdateWithoutMembersInput, ConversationsUncheckedUpdateWithoutMembersInput>
    create: XOR<ConversationsCreateWithoutMembersInput, ConversationsUncheckedCreateWithoutMembersInput>
    where?: ConversationsWhereInput
  }

  export type ConversationsUpdateToOneWithWhereWithoutMembersInput = {
    where?: ConversationsWhereInput
    data: XOR<ConversationsUpdateWithoutMembersInput, ConversationsUncheckedUpdateWithoutMembersInput>
  }

  export type ConversationsUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutConversationsNestedInput
    messages?: MessagesUpdateManyWithoutConversationNestedInput
    groupRequests?: GroupRequestsUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createrId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutConversationNestedInput
    groupRequests?: GroupRequestsUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type UsersUpsertWithoutConversationMembersInput = {
    update: XOR<UsersUpdateWithoutConversationMembersInput, UsersUncheckedUpdateWithoutConversationMembersInput>
    create: XOR<UsersCreateWithoutConversationMembersInput, UsersUncheckedCreateWithoutConversationMembersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutConversationMembersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutConversationMembersInput, UsersUncheckedUpdateWithoutConversationMembersInput>
  }

  export type UsersUpdateWithoutConversationMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUpdateManyWithoutUserNestedInput
    messages?: MessagesUpdateManyWithoutSenderNestedInput
    groupRequests?: GroupRequestsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutConversationMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    groupRequests?: GroupRequestsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConversationsCreateWithoutMessagesInput = {
    id?: string
    type: $Enums.ConversationTypes
    name?: string | null
    bio?: string | null
    bannerImage?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UsersCreateNestedOneWithoutConversationsInput
    members?: ConversationMembersCreateNestedManyWithoutConversationInput
    groupRequests?: GroupRequestsCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateWithoutMessagesInput = {
    id?: string
    createrId?: string | null
    type: $Enums.ConversationTypes
    name?: string | null
    bio?: string | null
    bannerImage?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ConversationMembersUncheckedCreateNestedManyWithoutConversationInput
    groupRequests?: GroupRequestsUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsCreateOrConnectWithoutMessagesInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput>
  }

  export type UsersCreateWithoutMessagesInput = {
    id?: string
    username: string
    email: string
    password?: string
    bio?: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsCreateNestedManyWithoutUserInput
    conversationMembers?: ConversationMembersCreateNestedManyWithoutUserInput
    groupRequests?: GroupRequestsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutMessagesInput = {
    id?: string
    username: string
    email: string
    password?: string
    bio?: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsUncheckedCreateNestedManyWithoutUserInput
    conversationMembers?: ConversationMembersUncheckedCreateNestedManyWithoutUserInput
    groupRequests?: GroupRequestsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutMessagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMessagesInput, UsersUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationsUpsertWithoutMessagesInput = {
    update: XOR<ConversationsUpdateWithoutMessagesInput, ConversationsUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput>
    where?: ConversationsWhereInput
  }

  export type ConversationsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationsWhereInput
    data: XOR<ConversationsUpdateWithoutMessagesInput, ConversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationsUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutConversationsNestedInput
    members?: ConversationMembersUpdateManyWithoutConversationNestedInput
    groupRequests?: GroupRequestsUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createrId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ConversationMembersUncheckedUpdateManyWithoutConversationNestedInput
    groupRequests?: GroupRequestsUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type UsersUpsertWithoutMessagesInput = {
    update: XOR<UsersUpdateWithoutMessagesInput, UsersUncheckedUpdateWithoutMessagesInput>
    create: XOR<UsersCreateWithoutMessagesInput, UsersUncheckedCreateWithoutMessagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMessagesInput, UsersUncheckedUpdateWithoutMessagesInput>
  }

  export type UsersUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUpdateManyWithoutUserNestedInput
    conversationMembers?: ConversationMembersUpdateManyWithoutUserNestedInput
    groupRequests?: GroupRequestsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUncheckedUpdateManyWithoutUserNestedInput
    conversationMembers?: ConversationMembersUncheckedUpdateManyWithoutUserNestedInput
    groupRequests?: GroupRequestsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConversationsCreateWithoutGroupRequestsInput = {
    id?: string
    type: $Enums.ConversationTypes
    name?: string | null
    bio?: string | null
    bannerImage?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UsersCreateNestedOneWithoutConversationsInput
    members?: ConversationMembersCreateNestedManyWithoutConversationInput
    messages?: MessagesCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateWithoutGroupRequestsInput = {
    id?: string
    createrId?: string | null
    type: $Enums.ConversationTypes
    name?: string | null
    bio?: string | null
    bannerImage?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ConversationMembersUncheckedCreateNestedManyWithoutConversationInput
    messages?: MessagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsCreateOrConnectWithoutGroupRequestsInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutGroupRequestsInput, ConversationsUncheckedCreateWithoutGroupRequestsInput>
  }

  export type UsersCreateWithoutGroupRequestsInput = {
    id?: string
    username: string
    email: string
    password?: string
    bio?: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsCreateNestedManyWithoutUserInput
    conversationMembers?: ConversationMembersCreateNestedManyWithoutUserInput
    messages?: MessagesCreateNestedManyWithoutSenderInput
  }

  export type UsersUncheckedCreateWithoutGroupRequestsInput = {
    id?: string
    username: string
    email: string
    password?: string
    bio?: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsUncheckedCreateNestedManyWithoutUserInput
    conversationMembers?: ConversationMembersUncheckedCreateNestedManyWithoutUserInput
    messages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UsersCreateOrConnectWithoutGroupRequestsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutGroupRequestsInput, UsersUncheckedCreateWithoutGroupRequestsInput>
  }

  export type ConversationsUpsertWithoutGroupRequestsInput = {
    update: XOR<ConversationsUpdateWithoutGroupRequestsInput, ConversationsUncheckedUpdateWithoutGroupRequestsInput>
    create: XOR<ConversationsCreateWithoutGroupRequestsInput, ConversationsUncheckedCreateWithoutGroupRequestsInput>
    where?: ConversationsWhereInput
  }

  export type ConversationsUpdateToOneWithWhereWithoutGroupRequestsInput = {
    where?: ConversationsWhereInput
    data: XOR<ConversationsUpdateWithoutGroupRequestsInput, ConversationsUncheckedUpdateWithoutGroupRequestsInput>
  }

  export type ConversationsUpdateWithoutGroupRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutConversationsNestedInput
    members?: ConversationMembersUpdateManyWithoutConversationNestedInput
    messages?: MessagesUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutGroupRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createrId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ConversationMembersUncheckedUpdateManyWithoutConversationNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type UsersUpsertWithoutGroupRequestsInput = {
    update: XOR<UsersUpdateWithoutGroupRequestsInput, UsersUncheckedUpdateWithoutGroupRequestsInput>
    create: XOR<UsersCreateWithoutGroupRequestsInput, UsersUncheckedCreateWithoutGroupRequestsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutGroupRequestsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutGroupRequestsInput, UsersUncheckedUpdateWithoutGroupRequestsInput>
  }

  export type UsersUpdateWithoutGroupRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUpdateManyWithoutUserNestedInput
    conversationMembers?: ConversationMembersUpdateManyWithoutUserNestedInput
    messages?: MessagesUpdateManyWithoutSenderNestedInput
  }

  export type UsersUncheckedUpdateWithoutGroupRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUncheckedUpdateManyWithoutUserNestedInput
    conversationMembers?: ConversationMembersUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ConversationsCreateManyUserInput = {
    id?: string
    type: $Enums.ConversationTypes
    name?: string | null
    bio?: string | null
    bannerImage?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationMembersCreateManyUserInput = {
    id?: string
    role?: $Enums.ConversationRoles
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationId: string
  }

  export type MessagesCreateManySenderInput = {
    id?: string
    type?: $Enums.MessageTypes
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationId: string
  }

  export type GroupRequestsCreateManyUserInput = {
    id?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    conversationId: string
  }

  export type ConversationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ConversationMembersUpdateManyWithoutConversationNestedInput
    messages?: MessagesUpdateManyWithoutConversationNestedInput
    groupRequests?: GroupRequestsUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ConversationMembersUncheckedUpdateManyWithoutConversationNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutConversationNestedInput
    groupRequests?: GroupRequestsUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypesFieldUpdateOperationsInput | $Enums.ConversationTypes
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMembersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumConversationRolesFieldUpdateOperationsInput | $Enums.ConversationRoles
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationsUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ConversationMembersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumConversationRolesFieldUpdateOperationsInput | $Enums.ConversationRoles
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationMembersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumConversationRolesFieldUpdateOperationsInput | $Enums.ConversationRoles
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypesFieldUpdateOperationsInput | $Enums.MessageTypes
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypesFieldUpdateOperationsInput | $Enums.MessageTypes
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypesFieldUpdateOperationsInput | $Enums.MessageTypes
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupRequestsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationsUpdateOneRequiredWithoutGroupRequestsNestedInput
  }

  export type GroupRequestsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupRequestsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationMembersCreateManyConversationInput = {
    id?: string
    role?: $Enums.ConversationRoles
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MessagesCreateManyConversationInput = {
    id?: string
    type?: $Enums.MessageTypes
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    senderId: string
  }

  export type GroupRequestsCreateManyConversationInput = {
    id?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    userId: string
  }

  export type ConversationMembersUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumConversationRolesFieldUpdateOperationsInput | $Enums.ConversationRoles
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutConversationMembersNestedInput
  }

  export type ConversationMembersUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumConversationRolesFieldUpdateOperationsInput | $Enums.ConversationRoles
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationMembersUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumConversationRolesFieldUpdateOperationsInput | $Enums.ConversationRoles
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypesFieldUpdateOperationsInput | $Enums.MessageTypes
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UsersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypesFieldUpdateOperationsInput | $Enums.MessageTypes
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypesFieldUpdateOperationsInput | $Enums.MessageTypes
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupRequestsUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutGroupRequestsNestedInput
  }

  export type GroupRequestsUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupRequestsUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}