import './splash.component.css'

import { CommonProps } from '../../types/props';

interface SplashProps extends CommonProps {

}

export const Splash = (props: SplashProps) => {
  return (
    <div id='splash'></div>
  )
}