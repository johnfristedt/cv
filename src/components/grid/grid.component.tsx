import { GridCol } from './grid-col.component';
import { GridRow } from './grid-row.component';

interface GridProps {
  children?: React.ReactChild | React.ReactChild[]
}

const Grid = (props: GridProps) => {

  return (
    <div style={{
      display: 'flex'
    }}>
      {props.children}
    </div>
  )
}

Grid.Row = GridRow;
Grid.Col = GridCol;

export default Grid;