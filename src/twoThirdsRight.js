import React from 'react';


function twoThirdsRight(Left, Right) {
  return function(props) {
    return (
    <main className="layout two-panel-right">
      <aside>
        <Left {...props} />
      </aside>
      <section className="right">
        <Right {...props} />
      </section>
    </main>
    )
  }
}

export default twoThirdsRight;