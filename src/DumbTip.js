import React from 'react';

function DumbTip({
  top,
  right,
  bottom,
  left,
  children,
  content,
  hoverable,
  position
}) {
  
  return (
    <div
      className={hoverable && 'hoverable'} 
      style={{position: 'relative'}}
    >
      <div
        className='item'
        style={{
          position: 'absolute',
          left,
          right,
          top,
          bottom,
        }}>
          <div className={position}></div>
          <div>{content}</div>
        </div>
      {children}
    </div>
  );
}

export default DumbTip;