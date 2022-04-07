import './container.component.css';

import { useEffect, useState } from 'react';

import { ComponentProps } from '../../types/props';

interface ContainerProps extends ComponentProps {
}

export const Container = (props: ContainerProps) => {
  const widthMediaMatch = window.matchMedia('(max-width: 900px)');
  const [isSmallWidth, setIsSmallWidth] = useState(widthMediaMatch.matches);

  useEffect(() => {
    const widthHandler = (e: MediaQueryListEvent) => setIsSmallWidth(e.matches);
    widthMediaMatch.addEventListener('change', widthHandler);
    return () => widthMediaMatch.removeEventListener('change', widthHandler);
  }, [props]);

  return (
    <div id='container' style={{
      ...props.style,
    }}>
      {props.children}
    </div>
  )
}