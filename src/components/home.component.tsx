import { useContext } from 'react'
import { LangContext } from '../App'
import { Container } from './container.component';
import Grid from "./grid/grid.component"

interface HomeProps {

}

export const Home = (props: HomeProps) => {
  const lang = useContext(LangContext);
  const gridStyle: React.CSSProperties = {
    borderLeft: '5px dotted green',
    paddingLeft: 10,
    marginBottom: 30
  };

  return (
    <Container width={60} style={{ margin: '0 auto 100px auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h1><span style={{ fontWeight: 'normal' }}>John</span> Fristedt</h1>
        <div style={{ color: 'grey' }}>Ringvägen 14, Kungsängen · 073-388 62 71</div>
        <div><span style={{ color: 'green' }}>john.e.fristedt@gmail.com</span> · <a
          href="https://www.linkedin.com/in/john-fristedt-16970676/" target="_blank" rel="noreferrer">
          {lang.linkedIn}
        </a>
        </div>
      </div>

      <h2 style={{ margin: '40px 0 20px 0' }}>{lang.experience}</h2>

      <Grid style={gridStyle}>
        <Grid.Col>
          {lang.experiences.map((exp, i) =>
            <>
              <Grid.Row>
                <h4 style={{ color: 'grey' }}>{exp.period.toUpperCase()}</h4>
              </Grid.Row>
              <Grid.Row>
                <h3><span style={{ color: 'green' }}>{exp.role.toUpperCase()}</span> {exp.place.toUpperCase()}</h3>
              </Grid.Row>
              <Grid.Row style={{ marginBottom: i !== lang.experiences.length - 1 ? 30 : 0 }}>
                {exp.points.map(point =>
                  <ul><li>{point}</li></ul>
                )}
              </Grid.Row>
            </>
          )}
        </Grid.Col>
      </Grid>

      <h2 style={{ margin: '40px 0 20px 0' }}>{lang.education}</h2>

      <Grid style={gridStyle}>
        <Grid.Col>
          {lang.educations.map((edu, i) =>
            <>
              <Grid.Row>
                <h3><span style={{ color: 'green' }}>{edu.degree.toUpperCase()}</span> {edu.place.toUpperCase()}</h3>
              </Grid.Row>
              <Grid.Row style={{ marginBottom: i !== lang.educations.length - 1 ? 30 : 0 }}>
                {edu.info}
              </Grid.Row>
            </>
          )}
        </Grid.Col>
      </Grid>

      <h2 style={{ margin: '40px 0 20px 0' }}>{lang.skillsTitle}</h2>

      <ul style={{
        listStyle: 'inside'
      }}>
        {lang.skills.map(skill =>
          <li style={{
            display: 'inline-block',
            width: '50%'
          }}>
            <span style={{
              display: 'list-item',
              position: 'absolute',
              color: 'green'
            }}></span>
            <span style={{
              marginLeft: 20
            }}>{skill}</span>
          </li>
        )}
      </ul>
    </Container>
  )
}
