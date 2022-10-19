import { ComponentProps } from '../../types/props';

interface GridColProps extends ComponentProps {
  width: number;
}

export function GridCol(props: GridColProps) {
  return (
    <div style={{
      ...props.style,
      flex: 'column',
      flexBasis: `${props.width}%`
    }}>
      {props.children}
    </div>
  );
};

GridCol.defaultProps = {
  width: 100
};