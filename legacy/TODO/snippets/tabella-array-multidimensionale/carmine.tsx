function click(msg: string) {
  alert(msg);
}
type TabellaMultidimensionaleCarmineProps = {
  lista: Array<Array<string>>;
  intestazione: string;
};

export function TabellaMultidimensionaleCarmine({
  lista,
  intestazione
}: TabellaMultidimensionaleCarmineProps) {
  return (
    <div>
      {intestazione}
      {lista.map((items, index) => {
        return (
          <table>
            <tr>
              <td colspan={3}>+---+---+---+</td>
            </tr>
            <tr>
              {items.map((subItems, sIndex) => {
                return <td onClick={() => click(subItems)}>|{subItems}|</td>;
              })}
            </tr>
          </table>
        );
      })}
    </div>
  );
}
