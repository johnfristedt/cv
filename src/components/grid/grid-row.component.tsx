import { ComponentProps } from '../../types/props'

interface GridRowProps extends ComponentProps {
}

export const GridRow = (props: GridRowProps) => {
  return (
    <div style={{
      ...props.style,
      flex: 'row'
    }}>
      {props.children}
    </div>
  )
}