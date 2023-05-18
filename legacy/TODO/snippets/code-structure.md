# Overall code structure

## Remote data

### Rest

api.ts
- DTO types
- api class with fetch methods that use customFetch so any features like auth can be isolatoed
  - the api object is instantiated so it is configurable
  - export as react context so the api object instance can be changed at runtime due to oauth athorization shcemes

query.ts
- export custom hooks that simply returns useQuery calls
- this keeps all cache invalidation anc cache key in this file an isolated from the rest

Use MSW for data mocking

### Graphql

Apollo Grapqhl

## Graphical components

Always create own library of components (ex: table, controlled input) ot thin wrappers around design kit compitions so that the styling and design kit import does not contaminate the project. Put inside components library

## State managment

Just prop passing use renderprops and children if propr drilling happens. contexts hidden by custom hooks (ex: theme, translations, authorization)

## See thin from for Forms

## Translation

use react-i18next