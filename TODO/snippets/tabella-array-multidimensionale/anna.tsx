import React from "react";

type RigaProps = {
  list: Array<string>;
};
function Riga({ list }: RigaProps) {
  return list.map((item, index) => (
    <td onClick={() => alert(item)} key={index}>
      {item}
    </td>
  ));
}

type TabellaArrayMultidimensionaleAnnaProps = {
  multiArray: Array<Array<string>>;
};
export function TabellaArrayMultidimensionaleAnna({
  multiArray
}: TabellaArrayMultidimensionaleAnnaProps) {
  return (
    <table>
      <tbody>
        {multiArray.map((item, index) => (
          <tr key={index}>
            <Riga list={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
