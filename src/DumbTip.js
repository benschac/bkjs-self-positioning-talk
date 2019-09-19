import React from 'react';

const DumbTip = React.forwardRef(({
  top,
  right,
  bottom,
  left,
  children,
  content,
  hoverable,
  position
}, ref) => {
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
          <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
      <div className="children" ref={ref}>{children}</div>
    </div>
  );
});
export default DumbTip;