import React from 'react'

// HOL 10: JSX and React.createElement.
function JsxDemo() {
  // The two elements below are equivalent - JSX compiles to createElement.
  const jsxElement = <em>Created with JSX</em>
  const rawElement = React.createElement('em', null, 'Created with React.createElement')
  return (
    <section>
      <h3>JSX</h3>
      <p>{jsxElement}</p>
      <p>{rawElement}</p>
    </section>
  )
}
export default JsxDemo
