import "./angela.css";

type TabellaArrayMultidimensionaleAngelaProps = {
  lista: Array<Array<string>>;
  intestazione: string;
};
export function TabellaArrayMultidimensionaleAngela({
  lista,
  intestazione
}: TabellaArrayMultidimensionaleAngelaProps) {
  return (
    <table className="tabellaangela">
      <tbody>
        {lista.map((item, index) => {
          return (
            <tr key={index}>
              {item.map((item2, index2) => {
                return (
                  <td onClick={() => alert(item2)} key={index2}>
                    {item2}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
