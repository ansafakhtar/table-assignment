type Props = {
  leftTitle: string;
  type: string;
  rowData: string[];
};

const TableRow = (props: Props) => {
  return (
    <>
      <tr >
        <th >{props.leftTitle}</th>
        {props.rowData.map((e,index) => {
            if(Array.isArray(e)){
              e=e.join(" , ")
            }
          if (props.type === "Header") {
            return <th key={index}>{e}</th>;
          }
          return <td key={index}>{e}</td>;
        })}
      </tr>
    </>
  );
};

export default TableRow;
