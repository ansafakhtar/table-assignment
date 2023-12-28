import TableRow from "./TableRow";

type Props = {
  classList: string[];
  data: {};
  rowTitles:string[];  
};

const Table = (props: Props) => {
  const { classList, data,rowTitles } = props;

  const mean: string[] = [];
  const median: string[] = [];
  const mode: string[] = [];
  let flag: boolean = false;

  Object.values(data).forEach((e: any) => {
    if(e.median && e.mean && e.mode){
    mean.push(`${e.mean.toFixed(3)}`)
    median.push(`${e.median.toFixed(3)}`)
    mode.push(e.mode)
    }
  })

  mode.forEach((e) => { if(e[0] ==='NA') flag = true; })

  return (
    <div style={{ padding: "10px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <table border={1}>
        <tbody>
          <TableRow type="Header" rowData={classList} leftTitle="Measure" />
          <TableRow type="Data" rowData={mean} leftTitle={rowTitles[0]} />
          <TableRow type="Data" rowData={median} leftTitle={rowTitles[1]} />
          <TableRow type="Data" rowData={mode} leftTitle={rowTitles[2]} />
        </tbody>
      </table>
      {flag ? (
        <p>
          Note : N.A. means that every value is unique. Therefore every value
          can act as mode.
        </p>
      ) : null}
    </div>
  );
};

export default Table;
