The frontend application will be realized with web tecnologies.
Technical choices and their motiviation follows:

## SPA (Single Page Application)

The frontend application will be packed in a single web page.
This allows to not reload the browser tab on every user interaction thus resulting in better, faster, more complete user experience.
SPA setup features also asynchroneus network requests resulting in faster loading times and clear indication of loading part of the application.
This setup is also cache friendly allowing faster loading times in general.

## Declarative Paradigm

The declarative paradigm allows for faster develpment, fewer lines of code, easier debugging, better readability and less maintenance cost.

The declarative paradigm will be provided by [React](https://reactjs.org/) library which provides a templating language ([JSX](https://reactjs.org/docs/introducing-jsx.html)) similar to HTML markup language and primitives to make those templates interactive [React Hooks](https://reactjs.org/docs/hooks-intro.html)

## Component oriented

In generic programming functions (also called methods or procedures) allow for code reause, separation, organization and composability.

When programming with graphical interfaces, splitting different parts of the view in functions that take domain object and produce layout and colors means creating components.

This paradigm is well known, and is supported by the React library.

## Typechecking

Typechecking is a static analysis process that catches errors and bugs before runtime, augments productivity, doubles as documentation and enables IDEs (Integrated Development Enviroment) for advanced intellisense, autocompletion and code navigation.

The programming language of choosen for the frontend application will be [TypeScript](https://www.typescriptlang.org/) which is a superset of JavaScript with types. It's widely spred in the industry and is fully interoperable with existing JavaScript code.

## Code formatting

Automatic code formatting allows for faster development as it frees the developer from manually adjusting code layout.
It provides better readability of code, enforces consistent style and produces better versioning history.

[Prettier](https://prettier.io/) tool will be used, with default configuration. It can format JavaScript, TypeScript, JSX, HTML and CSS.
It will be configured to format code on save and before committing.

## Static analysis

Static analysis can discover bugs and errors that are not catchable by typechecking, it significantly reduces most common errors and debugging time signaling to the developer exactly where the problem is.

[Eslint](https://eslint.org/) linter tool will be used with react preset configuration to achieve static analysis.

## UI framweork

A UI framework, or toolkit, is a collection of components and utilities that provides consitent style (layout and colors), ready to use solutions, accessibility and optimised readability.

ES: react material ui, ant design, tailwind

## Routing

Routing in a SPA environment concerns all those mechanics that emulate a multi page application, interacts with the browser navigation history stack (wich also integrates with back and forward buttons) and serializes current frontend application state.
This includes back and forth navigation, and URL sharing via copy-send-paste mechanism.

The [react-router](https://reactrouter.com/) library will be used to manage navigation history. It is flexible enough to serialize navigation state into the URL and browser history stack and be integrated to existing deployments.

## State managment

In SPA setting, state managment refers to all those mechanics that keeps and changes over time a representation of the current state of the application, state serialization and response to user interaction.

Most of the state managment will be done using React Hooks primitives, that are hihgly ergonomic to use, embedded into the react life-cycle, and cover most of use cases.

The [redux](https://redux.js.org/) library will be used for global state needed across the whole application offering a mean of serialization of the state and additional debug features during development.

## Chart rendering

Chart visualization will be implemented using [d3.js](https://d3js.org/) library mathematical functions for layout calculation, and react svg markup for the actual layout.

[visx](https://airbnb.io/visx/) library will be used where needed to improve maintenance of the code as it provides react components with typescript annotations.

## Table and Tree visualizations

Table, tree, and table tree visualizations will be implemented per usage basis, creating reusable components in the process.

Existing reference libraries are [react-table](https://react-table.tanstack.com/) for performance and [jquery-treetable](http://ludo.cubicphuse.nl/jquery-treetable/).

## Virtaulized List

In case very large list visialzations are needed.

Look for [react-window]() [react-virtual]() [react-virtuoso]()

## Animation

See [react-spring](https://react-spring.io/basics)

## Data fetching

Requesting and downloading data from backend is complex task.

[react-query](https://react-query.tanstack.com/overview) is a library that manages all the intricacies of asynchroneous data fetching offering a simple facade as react hooks.

Using this library allows developers to save time, reduce code amount, and fine tune any configuration.

See also [react-swr]()

## Styling

Web applications can be styled (layout, colors, typography, dimensions etc.) trough CSS.

React allows classical CSS style sheet, embdeed styling trough style attribute and css-in-js libraries.

css-in-js libraries offers numerous advantages over the other two alternatives, such as theming, dinamaicity, isolation, reuse, inheritance, and better performance.

[styled-components](styled-components) library will be used for styling needs.

## Internationalization

Internationalization refers to all those mechanics that allows an application to be translated into different languages.

[react-intl](https://formatjs.io/docs/react-intl/) library will be used for this purpose.
It offers best practices, is highly customizable and offers means to integrate in any internationalisation workflows.

## Performance

React is performant out of the shelf in most cases. In cases where extra performance is needed the memoization pattern offered by React will be adopted trough React.memo() and React.useMemo() utilities.

## Compiling

A scaffolding tool reduces development time and maintenance for configuration of compiling tools.

The create-react-app scaffolding library will be used. It offers best-practice configurations at no maintenance cost. It will produce a cache-friendly directory that can be served by a static web server or deployed to CDN. It is hihgly customizable and extensible with many plugin available in the ecosystem.

The source will be conditionally compiled to output different amount of features per artifact.

## Lazy loading

The application code will be bundled in different artifacts to enable lazy-loading technique.
Lazy loading consists in loading only the needed part of the application.
Benefits of this approach are faster loading time and less memory usage on the browser.

es:

```javascript
const App = await import("./App");
```

## Code organization

### Domain

Domain type declarations and functions will encapsulate all business-logic unaware of the rest of the environment.

### DTO

DTO (Data Transfer Object) type declarations will describe data provided by the backend

### Fetch functions

Will be async functions that will do AJAX requests. They take DTOs as parameters and return DTOs.

### Fetch hooks

Will be custom react hooks that uses the fetching library and fetch functions that encapsulate: authorization, life-cycle-managment, caching.
This layer of seprations allows also for swapping out the data fetching library.

### Data mappers

Will be functions that will transform DTOs into domain objects.

### Remote state hooks

Read remote state hooks will be custom react hooks that returns domain objects obtained using data mappers on DTOs loaded by fetch hooks.

Write remote state hooks will be custom react hooks that takes domain objects and will forward data mutation request through fetch functions.

### State transition functions

Will be functions that takes current state and a parameter to produce a new state.

### Essential state

Will be a jascript object that holds all the information about current state and user interaction that cannot be otherwise derived

### Derived state

Will be functions that produces useful derived state from essential state.

Examples of derived state are: validation, agrgegation, filtering, sorting etc.

### Serialization

Will be functions that take domain objects to return a serialized representation (ex: json, string, navigation stack)

### Dumb components

Will be purely presentational react components that only produces murkup, style and bind callbacks.
They take as parameters only primitive javascript values and domain objects.

For example a button component.

### Smart Components

Will be react components which uses state and remote state hooks to gather information, wire it together and create the layout passing those information to dumb components.

For example AuthorizationEditableTable.

# Extra

In react code-proximity is preferred
