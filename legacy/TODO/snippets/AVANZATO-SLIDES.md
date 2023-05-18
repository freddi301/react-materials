# Nuovi paradigmi e missconception

## Cosa potreste aver imparato dal web e che non è necessariamente vero

## Componenti come classi, componenti funzionali stateless e componenti funzionali stateful

TODO: snippet (classfull, functional, functional with hooks)

# Ottimizzazione delle performance

- no unnecessary rerender
- long render

Workflow:

- stesura jsx statico
- identifichiamo elementi dinamici (sopratutto liste/tabelle) costruzione dati mock
- rendere dinamico il rendering con array.map
  (tip: non cancellare la versione statica finche non e completata quella dinamica)
- estrazione dei componenti / motiviazioni valide:
  - ripetizione del jsx (piu di 3 volte)
  - jsx corposo all'interno di un array.map (solo per motivi di performance)
- indagine tramite profiler per individuare colli di bottiglia
- individuare i motivi del rerender
  rerender del padre,
  quali prop cambiano -> sono stabili referenzialmente?
- memoizzazione intermedia (React.useMemo, React.useCallback)
- portare "su" una computazione sui dati
  - invece di passare l'id della riga selezionata a tutte le righe,
  - passiamo al componente riga solo un booleano che dice se e selezionata o meno
  - (esempio di "least responsability principle")
- portare "giu" i callback
  - invece di passare callback "precotte" (ovvero da richiamare senza paramaetri)
  - passiamo "ingredienti" ovvero la callback da richiamare e i parametri con cui richiamarla
  ```javascript
  const makeOnSelect = (idRiga) => () => selezionaRiga(idRiga)
  <Riga onSelect={makeOnSelect(1)}/>
  ```
  ```javascript
  const onSelect = (idRiga) => selezionaRiga(idRiga)
  <Riga onSelect={onSelect} idRiga={1}/>
  ```

Snippet:

- simple memoization optimization [codesandbox.io](https://codesandbox.io/s/mystifying-galois-z47jn) [locale](src/snipppet/simple-memoization-optimization.js)
- multe multiselezione memizzato [codesandbox.io](https://codesandbox.io/s/mystifying-galois-z47jn) [locale](src/snippet/multe-multiselezione-memoizzato)

## Il processo di riconciliazione della Virtual DOM

Links:

- [reconciliation](https://it.reactjs.org/docs/reconciliation.html)

## Come identificare i colli di bottiglia

## Memoizzazione intermedia con `React.useMemo`, `React.useCallback` e `React.useRef`

TODO: snippet (React)

Links:

- [derived state](https://kentcdodds.com/blog/dont-sync-state-derive-it)

## Memoizzazione dei componenti con `React.memo`

TODO: snippet

Links:

- [React.memo wisely](https://dmitripavlutin.com/use-react-memo-wisely/)

## Evitare i render con `shouldComponentUpdate`

TODO: snippet (short array in props)

Links:

- [avoid reconciliation](https://it.reactjs.org/docs/optimizing-performance.html#avoid-reconciliation)

## Pattern problematici ricorrenti

- derived state (da non memoizzare)
- [props-drillilng](https://kentcdodds.com/blog/prop-drilling)

# Context

Usi leciti: tema, lingua, preferenze, utente, autorizazioni

## Use del contesto per evitare il props-passing

Snippet

- context and useContext [codesandbox.io](https://codesandbox.io/s/withered-meadow-qoo5e) [locale](src/snippet/simple-context-useContext.js)

## sfruttare il contesto per i `temi`

## API via Hooks e classi

TODO: snippet

## Problematiche di performance

TODO: find link

Links:

- [colocate state](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)
- [slow renders first](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render)

# Redux, State Managment

## Paradigma, librerie alternative, librerie aggiuntive

TODO: snippet (your own redux)

## Best practices

## Componenti `semplici` e `connessi`

TODO: snippet (semplice, connesso con connect()())

## Selettori con reselect e re-reselect

TODO: snippet

## Effetti asincroni (Redux Sagas, Redux Thunk)

TODO: snippet

# Ciclo di vita

## Mount/unmount del componente

TODO: snippet subscribe unsubscribe

## Metodi di lifecycle, relazione con gli effetti

TODO: elenco

TODO: posizionare hooks

## Error Boundaries

Snippet:

- simple error boundary example [codesandbox.io](https://codesandbox.io/s/gifted-tree-u07mg) [local](src/snippet/simple-error-boundary-example.js)

Links:

- [error boundaries](https://en.reactjs.org/docs/error-boundaries.html)

# Accesso imperativo a DOM e istanza di componenti

## Le API per le `ref`, come funzioni, `React.useRef`, `React.createRef`

TODO: snippet (classfull React.createRef, functional React.useRef)

## Il concetto di `ref` per gli elementi

Snippet:

- simple element ref scroll example [codesandbox.io](https://codesandbox.io/s/modern-field-sypm8) [local](src/snippet/simple-element-ref-scroll-example.js)
- scroll top bottom up down [codesandbox.io](https://codesandbox.io/s/fancy-microservice-qnu7f) [local](src/snippet/scroll-top-bottom-up-down.js)

## Quando usare `React.useLayoutEffect`

Snippet:

- use layout effect flicker example [codesandbox.io](https://codesandbox.io/s/useeffect-flash-on-render-zvo59) [local](src/snippet/use-layout-effect-flicker.js)

## Il concetto di `ref` per i componenti, `React.useImperativeHandle` e `React.forwardRef`

Snippet:

- simple focusable input example [codesandbox.io](https://codesandbox.io/s/long-worker-kt6eb) [local](src/snippet/simple-imperative-handle-example.js)

Links:

- [forwarding refs](https://en.reactjs.org/docs/forwarding-refs.html)
