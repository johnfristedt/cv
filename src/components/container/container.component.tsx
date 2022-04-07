import './container.component.css';

import { ComponentProps } from '../../types/props';

interface ContainerProps extends ComponentProps {
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