import { CommonProps } from '../../types/props'

interface GridRowProps extends CommonProps {
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