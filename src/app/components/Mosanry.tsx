type IProps = {
  columns: number ,
  gap: number,
  children: any
} 
export default function Mosanry ({columns, gap, children}: IProps) {
  const columnWrapper: any = {};
  const result = [];
  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = [];
  }
  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(
      <div style={{ marginBottom: `${gap}px`}}>
        {children[i]}
      </div>
    );
  }
  for (let i = 0; i < columns; i++) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1,
        }}>
        {columnWrapper[`column${i}`]}
      </div>
    );
  }
  return (
    <div style={{ display: 'flex' }}>
      {result}
     </div>
   );
}