import { useContext } from 'react';

import { LangContext } from '../../App';
import { Container } from '../container/container.component';
import Grid from '../grid/grid.component';

interface HomeProps {

}

export const Home = (props: HomeProps) => {
  const lang = useContext(LangContext);
  const gridStyle: React.CSSProperties = {
    borderLeft: '5px dotted green',
    paddingLeft: 10,
    marginBottom: 40
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1><span style={{ fontWeight: 'normal' }}>John</span> Fristedt</h1>
        <div style={{ color: 'grey' }}>Ringvägen 14, Kungsängen · 073-388 62 71</div>
        <div><span style={{ color: 'green' }}>john.e.fristedt@gmail.com</span><span className='noPrint'> · <a
          href="https://www.linkedin.com/in/john-fristedt-16970676/" target="_blank" rel="noreferrer">
          {lang.linkedIn}
        </a></span>
        </div>
      </div>

      <h2>{lang.experience}</h2>

      <Grid style={gridStyle}>
        <Grid.Col>
          {lang.experiences.map((exp, i) =>
            <span key={i}>
              <Grid.Row>
                <h4 style={{ color: 'grey' }}>{exp.period.toUpperCase()}</h4>
              </Grid.Row>
              <Grid.Row>
                <h3><span style={{ color: 'green' }}>{exp.role.toUpperCase()}</span> {exp.place.toUpperCase()}</h3>
              </Grid.Row>
              <Grid.Row style={{ marginBottom: i !== lang.experiences.length - 1 ? 30 : 0 }}>
                {exp.points.map((point, i) =>
                  <ul key={i}><li>{point}</li></ul>
                )}
              </Grid.Row>
            </span>
          )}
        </Grid.Col>
      </Grid>

      <h2>{lang.education}</h2>

      <Grid style={gridStyle}>
        <Grid.Col>
          {lang.educations.map((edu, i) =>
            <span key={i}>
              <Grid.Row>
                <h3><span style={{ color: 'green' }}>{edu.degree.toUpperCase()}</span> {edu.place.toUpperCase()}</h3>
              </Grid.Row>
              <Grid.Row style={{ marginBottom: i !== lang.educations.length - 1 ? 30 : 0 }}>
                {edu.info}
              </Grid.Row>
            </span>
          )}
        </Grid.Col>
      </Grid>

      <h2>{lang.skillsTitle}</h2>

      <ul style={{
        listStyle: 'inside',
        padding: 0
      }}>
        {lang.skills.map((skill, i) =>
          <li style={{
            display: 'inline-block',
            width: '50%'
          }}
            key={i}>
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
    </>
  );
};

