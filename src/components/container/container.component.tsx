import './container.component.css';

import { CommonProps } from '../../types/props';

interface ContainerProps extends CommonProps {
}

export const Container = (props: ContainerProps) => {
  return (
    <div id='container' style={{
      ...props.style,
    }}>
      {props.children}
    </div>
  )
}