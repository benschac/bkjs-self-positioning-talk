import React from 'react';


function threePanelLayout(Left, Center, Right) {

  return function (props) {
    return (
      <>
        <main className="layout three-panel">
          <aside className="left">
            <Left {...props} />
          </aside>
          <section className="center">
            <Center {...props} />
          </section>
          <aside className="right">
            <Right  {...props} />
          </aside>
        </main>
      </>
    );
  }
};


export default threePanelLayout;