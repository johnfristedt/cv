import { ComponentProps } from '../../types/props'

interface GridColProps extends ComponentProps {
}

export const GridCol = (props: GridColProps) => {
  return (
    <div style={{
      ...props.style,
      flex: 'column'
    }}>
      {props.children}
    </div>
  )
}