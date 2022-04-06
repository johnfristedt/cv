import { ComponentProps } from '../types/props';

interface ContainerProps extends ComponentProps {
  width?: number;
}

export const Container = (props: ContainerProps) => {
  return (
    <div style={{
      ...props.style,
      width: `${props.width || 50}%`,
    }}>
      {props.children}
    </div>
  )
}