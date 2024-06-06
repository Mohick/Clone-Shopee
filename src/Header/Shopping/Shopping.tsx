import React from 'react';
import { Icons } from '../../Container  Component  SVG ICON/Manage Icon';
type rulesSVG = React.SVGAttributes<SVGElement>
const Shopping:React.FC<rulesSVG> = function (props) {
  return (
   
      <Icons.shopping {...props}/>
  
  );
}


export default Shopping;
