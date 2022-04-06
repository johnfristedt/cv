import { ComponentProps } from '../../types/props';
import { GridCol } from './grid-col.component';
import { GridRow } from './grid-row.component';

interface GridProps extends ComponentProps {
}

const Grid = (props: GridProps) => {

  return (
    <div style={{
      ...props.style,
      display: 'flex'
    }}>
      {props.children}
    </div>
  )
}

Grid.Col = GridCol;
Grid.Row = GridRow;

export default Grid;