import { useState } from 'react'

// HOL 2 & 3: A function component using the useState hook.
function FunctionComponent() {
  const [count, setCount] = useState(0)
  return (
    <section>
      <h3>Function Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </section>
  )
}
export default FunctionComponent
