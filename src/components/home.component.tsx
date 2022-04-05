import Grid from "./grid/grid.component"

interface HomeProps {

}

export const Home = (props: HomeProps) => {
  return (
    <>
      <h1>John Fristedt</h1>

      <Grid>
        <Grid.Row>
          <Grid.Col>
            Hello
          </Grid.Col>
          <Grid.Col>
            Hello
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            Hello
          </Grid.Col>
          <Grid.Col>
            Hello
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </>
  )
}