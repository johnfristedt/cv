type GridColProps = {
  children?: React.ReactChild | React.ReactChild[]
}

export const GridCol = (props: GridColProps) => {
  return (
    <div style={{
      flex: 'column'
    }}>
      {props.children}
    </div>
  )
}