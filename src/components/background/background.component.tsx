import './background.component.css';

import { ComponentProps } from '../../types/props';
import { useEffect } from 'react';

interface BackgroundProps extends ComponentProps {

}

export const Background = (props: BackgroundProps) => {
  useEffect(() => {
    console.log(123);
    
  }, [props]);
  
  return (
    <div id='background' className='noPrint'>
      <div id='layer1'></div>
      <div id='layer2'></div>
    </div>
  )
}