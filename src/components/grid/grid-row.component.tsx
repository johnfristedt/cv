type GridRowProps = {
  children?: React.ReactChild | React.ReactChild[]
}

export const GridRow = (props: GridRowProps) => {
  return (
    <div style={{
      flex: 'row'
    }}>
      {props.children}
    </div>
  )
}