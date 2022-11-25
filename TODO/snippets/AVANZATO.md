# Programa corso ReactJS avanzato (3 giorni)

## Requisiti

- Aver seguito il corso ReactJS base, o in alternativa
  - Esperienza pregressa di sviluppo React

## Prima giornata

- Nuovi paradigmi e missconception
  - Cosa potreste aver imparato dal web e che non è necessariamente vero
  - Componenti come classi, componenti funzionali stateless e componenti funzionali stateful
- Ottimizzazione delle performance
  - Il processo di riconciliazione della Virtual DOM
  - Come identificare i colli di bottiglia
  - Memoizzazione intermedia con `React.useMemo`, `React.useCallback` e `React.useRef`
  - Memoizzazione dei componenti con `React.memo`
  - Evitare i render con `shouldComponentUpdate`
  - Pattern problematici ricorrenti

## Seconda giornata

- Context
  - Use del contesto per evitare il props-passing
  - sfruttare il contesto per i `temi`
  - API via Hooks e classi
  - Problematiche di performance
- Redux, State Managment
  - Paradigma, librerie alternative, librerie aggiuntive
  - Best practices
  - Componenti `semplici` e `connsessi`
  - Selettori con reselect e re-reselect
  - Effetti asincroni (Redux Sagas, Redux Thunk)

## Terza giornata

- Ciclo di vita
  - Mount/unmount del componente
  - Metodi di lifecycle, relazione con gli effetti
  - Error Boundaries
- Accesso imperativo a DOM e istanza di componenti
  - Le API per le `ref`, come funzioni, `React.useRef`, `React.createRef`
  - Il concetto di `ref` per gli elementi
  - Quando usare `React.useLayoutEffect`
  - Il concetto di `ref` per i componenti, `REac.useImperativeHandle` e `React.forwardRef`