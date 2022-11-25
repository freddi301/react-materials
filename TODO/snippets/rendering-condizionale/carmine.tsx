import { AnagraficaPersonaProps } from "./rendering-condizionale-showcase";
export function AnagraficaPersonaCarmine(props: AnagraficaPersonaProps) {
  if (!props.persona) {
    return null;
  }
  return (
    <div>
      {props.persona.nome && <div>nome:{props.persona.nome}</div>}
      {props.persona.cognome && <div>cognome:{props.persona.cognome}</div>}

      {/* <div><cognome:{persona.cognome}></div>
        if(persona.responsabile){
          <div>responsabile</div>
        }
        <div><reparto:{persona.reparto}></div> */}
      {props.persona.responsabile ? <div>responsabile</div> : ""}

      {(() => {
        switch (props.persona.reparto) {
          case "hr":
            return <div>Responsabile hr</div>;
          case "vendite":
            return <div>Responsabile vendite</div>;
          case "contabilita":
            return <div>Responsabile contabilità</div>;
          default:
            return null;
        }
      })()}
    </div>
  );
}
