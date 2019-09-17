import React, { useState, useEffect } from 'react';
import { findDOMNode } from 'react-dom';
import DumbTip from './DumbTip';

function SmartTip(props) {
  // This is really geard toward the tutorial --> I should de-couple it at some point.
  const { selfPosition, setPosition } = useState({ display: false });

  // When the component mounts --> add an event listener
  useEffect(() => {
    // TODO: Add a throttle
    window.addEventListener('resize', setStyles);

    return window.removeEventListener('resize', setStyles);
  }, []); //eslint-disable-line

  // Get new styles a step in the tutorial changes.
  // useEffect(() => {
  //  setStyles(); 
  // }, [step]); //eslint-disable-line



  function setStyles() {
    const el = document.querySelector(`goodboy`)
        , bounds = el && el.getBoundingClientRect()
        ;

    console.log('hello from setStyles', bounds, el);  
    // TODO: this can be dry-er.
    if (bounds) {

      switch(props.position) {
        case 'right':
          console.log('from right');
          setPosition({
            top: Math.floor(bounds.top),
            left: Math.floor((bounds.right)),
            display: true
          });
          break;
        // case 'left':
        //   setPosition({
        //     top: Math.floor(bounds.top - meta.offsetTop),
        //     left: Math.floor((bounds.left) + meta.offsetLeft),
        //     display: true
        //   });
        //   break;
        // case 'bottom':
        //   setPosition({
        //     top: Math.floor(bounds.top - meta.offsetTop),
        //     left: Math.floor((bounds.right - bounds.width) + meta.offsetLeft),
        //     display: true
        //   });
        //   break;
        // case 'bottom-left':
        //   setPosition({
        //     top: Math.floor(bounds.top - meta.offsetTop),
        //     left: Math.floor((bounds.right - bounds.width) + meta.offsetLeft),
        //     display: true,
        //   })
        //   break;
        default:
          break;
      }
    }
  }

  function getStyles() {
    const styles = {
      top: selfPosition.top || 'auto',
      right: selfPosition.right || 'auto',
      bottom: selfPosition.bottom || 'auto',
      left: selfPosition.left || 'auto'
    }

    if (!props.position.display) {
      styles.display = 'none'
    }

    return styles;
  }


  return (
    <DumbTip
      {...props}
      {...setStyles()}
    >
      { props.children }
    </DumbTip>
  );
}

export default SmartTip;