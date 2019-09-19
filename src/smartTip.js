import React, { useState, useRef, useEffect } from 'react';
import DumbTip from './DumbTip';

function SmartTip(props) {
  // This is really geared toward the tutorial --> I should de-couple it at some point.
  const [selfPosition, setPosition] = useState({ display: false });
  const ref = useRef(null);
  // When the component mounts --> add an event listener
  useEffect(() => {
    // TODO: Add a throttle
    window.addEventListener('resize', setStyles);
    setStyles()

    return () => window.removeEventListener('resize', setStyles);
  }, []); //eslint-disable-line


  function setStyles() {
    const bounds = ref.current && ref.current.getClientRects()[0];
    
    console.log(bounds.left, bounds.right, ref.current);
    switch(props.position) {
      case 'right':
        setPosition({
          top: bounds.top - 175,
          left: (bounds.right / 2) + props.offSetLeft,
          display: true
        });
        break;
      default:
        break;
    }
  }




  
  
  return (
    <DumbTip
      {...props}
      ref={ref}
      {...selfPosition}
    >
      { props.children }
    </DumbTip>
  );
}

export default SmartTip;