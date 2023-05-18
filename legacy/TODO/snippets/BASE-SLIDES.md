# Requisiti

## Aver seguito il corso propedeutico, o in alternativa

### Conoscenza di JavaScript nelle versioni ES5, ES2015 e ES2017

Links:

- Cheat-sheet [jsfeatures.in](https://jsfeatures.in/)
- Libro approfondimento completo [You Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed)

### Conoscenza (anche base) di OOp, immutabilià vs mutabilità

## Conoscenza di HTML5

## Conoscenza (anche base) di CSS moderno (post-CSS3)

## Conoscenza delle Web APIs (in mparticolare manipolazione dellaDOM, networking via AJAX)

## Aver utilizzato npm, in generale esperienza con la gestione delle dipendenze

## Aver utilizzato Node.js

## Per le parti più avanzate del corso

### Accenni di accessibilità e specifiche ARIA

### Esperienza di ottimizzazione delle pagine web

### Esperienza di implementazione di interazioni complesse (es. drag-and-drop)

# Introduzione

Links:

- [it.reactjs.org](https://it.reactjs.org/)
- [hello world](https://it.reactjs.org/docs/hello-world.html)
- [getting started](https://www.taniarascia.com/getting-started-with-react/)
- [tutorial](https://it.reactjs.org/tutorial/tutorial.html)

## Concetti e filosofia della libreria

Links:

- [thinking in react](https://it.reactjs.org/docs/thinking-in-react.html)

## Rudimenti di programmazione funzionale

- function e fat arrow
- pure function
- high order function
- clojure
- array fp: map, filter, find, reduce

Links:

- [what is functional programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
- [javascript allongee](https://leanpub.com/javascriptallongesix/read) libro, javascript, da capo, tutto al funzionale

## La Virtual DOM e il paradigma dichiarativo

Links:

- [virtual dom explained](https://programmingwithmosh.com/react/react-virtual-dom-explained/)
- [virtual dom io reactjs](https://hackernoon.com/virtual-dom-in-reactjs-43a3fdb1d130)

## React DOM e i renderer

Links:

- [react-dom](https://it.reactjs.org/docs/react-dom.html)
- [react-test](https://it.reactjs.org/docs/test-renderer.html)
- [react-native](https://facebook.github.io/react-native/)

## Ecosistema React

- [swr](https://swr.now.sh/) data fetching
- [material-ui](https://material-ui.com/) ui components
- [react-window](https://react-window.now.sh/#/examples/list/fixed-size) infinite scroll
- [react-intl](https://github.com/formatjs/react-intl) internazionalizzazione
- [styled-components](https://styled-components.com/) css-in-js
- [raect-spring](https://www.react-spring.io/) animazioni
- [react-dnd](https://react-dnd.github.io/react-dnd/about) drag & drop
- [storybook](https://storybook.js.org/) prototyping & documentation

## Starter e frameworks (create-react-app, Gatsby, Next.js)

Links:

- [create-react-app](https://create-react-app.dev/)
- [next.js](https://nextjs.org/)

## Strumenti di sviluppo e utilities

Links:

- [vscode](https://code.visualstudio.com/)
- [react-dev-tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

# Preparazione dell'ambiente

# React Elements e JSX

Snippets:

- jsx translation example [codesandbox.io](https://codesandbox.io/s/objective-rubin-to6fj) [locale](src/snippet/jsx-translation-example.js)

Links:

- [JSX](https://it.reactjs.org/docs/introducing-jsx.html)

## Creare elementi DOM, attributi

- native web elements (div, input...)
- attribute `attr=""` `<element attr/>` `attr={}`
- `onWhatever`
- `className`

## Cosa sono le `props`

Links:

- [props](https://it.reactjs.org/docs/components-and-props.html)

## Nested elemenets (e la prop convenzionale `children`)

dato

```javascript
function Title(props) {
  return <h1>{props.children}</h1>;
}
function Heading(props) {
  return <heading>{props.children}</heading>;
}
<Heading>
  <Title>Hello World</Title>
</Heading>;
```

risultato

```javascript
<heading>
  <h1>Hello World</h1>
</heading>
```

## Eventi e listeners

Links:

- [handling events](https://it.reactjs.org/docs/handling-events.html)

## Array di elementi, la prop `key`

Note Workflow: è importante il loop del feedback visivo, ovvero modifica->salva->osserva risultato. Con gli strumenti react è molto corto (<1sec), è importante che rimanga tale, quindi aggiustare sempre le impostazioni nel caso in cui dovesse rallentare, mantenere il codice funzionante (tip: inserire dati finti)

Workflow:

- creare lo scheletro statico della grafica
- individuare gli elementi di ripetizione e creare array dati mock
- scrivere l'elemento di ripetizione con il .map (solo quando verificato il funzionamento cancellare la parte statica non più necessaria)

Snippet:

- simple table map example [codesandbox.io](https://codesandbox.io/s/condescending-resonance-blv6i) [locale](src/snippet/simple-table-map-example.js)

Links:

- [lists and keys](https://reactjs.org/docs/lists-and-keys.html)

## Rendering condizionale

Raccomandati:

- if else
- switch
- element variable
- shortcircuit and
- ternary operator
- IIFE + if else
- IIFE + switch

Links:
[6 methods](https://medium.com/flexiple/six-methods-to-achieve-conditional-rendering-in-react-55031ba08c73)
[8 methods](https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/)

## JSX come sintassi alternativa

# Accessibilità

Links:

- [a11y](https://it.reactjs.org/docs/accessibility.html)

## Applicazione della specifica ARIA

## Attenzioni particolari

# Stato

## Cosa significa `stato`

3 tipi di stato:

- props
- context
- local state (setState e hooks di stato)

## Creare uno slot di stato con `useState`

Links:

- [guide to useState](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/)

## Aggiornae lo stato di uno slot (forma della `useState update function`)

TODO snippet: counter, double counter

Snippets:

- seleziona deseleziona multa [codesandbox.io](https://codesandbox.io/s/proud-field-mrzt0) [locale](src/snippet/seleziona-deseleziona-multa.js)
- seleziona deseleziona filtra multe [codesandbox.io](https://codesandbox.io/s/autumn-cdn-t767y) [locale](src/snippet/seleziona-deseleziona-filtra-multa.js)

## Immutabilià dello stato

## Azioni e riduttori: aproccio funzionale alla gestione dello stato con `useReducer`

TODO snippet: todo list add, todo list add remove, todo list modifcy check

Links:

- [useReducer pattern](https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks)
- [hoswto useReducer](https://medium.com/crowdbotics/how-to-use-usereducer-in-react-hooks-for-performance-optimization-ecafca9e7bf5)
- [useReducer](https://it.reactjs.org/docs/hooks-reference.html#usereducer)

# Effetti

Links:

- [hooks effect](https://it.reactjs.org/docs/hooks-effect.html)
- [useEffect complete guide](https://overreacted.io/a-complete-guide-to-useeffect/)

## Cosa significa `effetto` nel paradigma dichiarativo

## Come identificare le azioni `impure`

## Come pulire gli effetti collaterali

## Come Vincolare l'esecuzione degli effetti

# Componenti

## Dove inizia e finisce un compoennte, ri-uso del codice

[when to break up components](https://kentcdodds.com/blog/when-to-break-up-a-component-into-multiple-components)

## Componenti controllati e non controllati

Links:

- [controlled](https://it.reactjs.org/docs/forms.html)
- [uncontrolled](https://it.reactjs.org/docs/uncontrolled-components.html)

## Pattern di composizione (prop convenzionale `children`, render props, HoC)

- render props (children included)
- High Order Comoponents

- come si scrivono
- casi d'uso
- vantaggi / svantaggi
- come si raporta con memoizzazione e reconciling

Links:

- [when to](https://kentcdodds.com/blog/when-to-not-use-render-props)

## `State lifting`, collocamento dello stato e comunicazione tra componenti

Links:

- [state lifting](https://it.reactjs.org/docs/lifting-state-up.html)

# Routing

Attenzione: si può usare react-router in assenza di altro routing, altrimenti c'è bisogno di integrazione (consolunza di senior engineer) (es: servlet, jsp, pagine php, cms(liferay, wordpress ecc...))

Snippet:

- naive memory routing [codesandbox.io](https://codesandbox.io/s/objective-curie-uj11v) [locale](src/snippet/naive-memory-routing)
- routing with react-router [codesandbox.io](https://codesandbox.io/s/cranky-ganguly-fsm3k) [locale](src/snippet/react-router-basic)

Links:

- [understanding routing in react](https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e)

## Librerie di riferimento

Links:

- [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
- [routing libraries](https://it.reactjs.org/community/routing.html)

## Modalità di utilizzo

# Integrazione

## Come integrare React in progetti web tradizionali (Java, PHP, Rails)
