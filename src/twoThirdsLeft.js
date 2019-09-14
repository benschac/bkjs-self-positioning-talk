import React from 'react';


function twoThirdsLeft(Left, Right) {
  return function(props) {
    return (
      <main className="layout two-panel-left">
      <section className="left">
        <Left {...props} />
      </section>
      <aside>
        <Right {...props} />
      </aside>
    </main>
    )
  }
}

export default twoThirdsLeft;