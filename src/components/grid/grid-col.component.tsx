import { CommonProps } from '../../types/props'

interface GridColProps extends CommonProps {
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