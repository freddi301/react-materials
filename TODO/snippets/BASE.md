# Programma corso ReactJS base (4 giorni)

## Requisiti

- Aver seguito il corso propedeutico, o in  alternativa
  - Conoscenza di JavaScript nelle versioni ES5, ES2015 e ES2017
  - Conoscenza (anche base) di OOp, immutabilià vs mutabilità
- Conoscenza di HTML5
- Conoscenza (anche base) di CSS moderno (post-CSS3)
- Conoscenza delle Web APIs (in mparticolare manipolazione dellaDOM, networking via AJAX)
- Aver utilizzato npm, in generale esperienza con la gestione delle dipendenze
- Aver utilizzato Node.js
- Per le parti più avanzate del corso
  - Accenni di accessibilità e specifiche ARIA
  - Esperienza di ottimizzazione delle pagine web
  - Esperienza di implementazione di interazioni complesse (es. drag-and-drop)

## Prima Giornata

- Introduzione
  - Concetti e filosofia della libreria
  - Rudimenti di programmazione funzionale
  - La Virtual DOM e il paradigma dichiarativo
  - React DOM e i renderer
  - Starter e frameworks (create-react-app, Gatsby, Next.js)
  - Strumenti di sviluppo e utilities
- Preparazione dell'ambiente
- React Elements e JSX
  - Creare elementi DOM, attributi
  - Cosa sono le `props`
  - Nested elemenets (e la prop convenzionale `children`)
  - Eventi e listeners
  - Array di elementi, la prop `key`
  - Rendering condizionale
  - JSX come sintassi alternativa
- Accessibilità
  - Applicazione della specifica ARIA
  - Attenzioni particolari

## Seconda giornata

- Stato
  - Cosa significa `stato`
  - Creare uno slot di stato con `useState`
  - Aggiornae lo stato di uno slot (forma della `useState update function`)
  - Immutabilià dello stato
  - Azioni e riduttori: aproccio funzionale alla gestione dello stato con `useReducer`

## Terza giornata

- Effetti
  - Cosa significa `effetto` nel paradigma dichiarativo
  - Come identificare le azioni `impure`
  - Come pulire gli effetti collaterali
  - Come Vincolare l'esecuzione degli effetti

## Quarta giornata

- Componenti
  - Dove inizia e finisce un compoennte, ri-uso del codice
  - Componenti controllati e non controllati
  - Pattern di composizione (prop convenzionale `children`, render props, HoC)
  - `State lifting`, collocamento dello stato e comunicazione tra componenti
- Routing
  - Librerie di riferimento
  - Modalità di utilizzo
- Integrazione
  - Come integrare React in progetti web tradizionali (Java, PHP, Rails)
