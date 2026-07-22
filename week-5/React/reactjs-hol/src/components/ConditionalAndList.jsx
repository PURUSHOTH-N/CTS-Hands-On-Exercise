import { useState } from 'react'

// HOL 12: Conditional rendering.  HOL 13: rendering lists with keys.
function ConditionalAndList() {
  const [loggedIn, setLoggedIn] = useState(false)
  const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Headphones' },
  ]
  return (
    <section>
      <h3>Conditional Rendering + Lists & Keys</h3>
      {/* conditional rendering */}
      {loggedIn ? <p>Welcome back, user!</p> : <p>Please log in.</p>}
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? 'Log out' : 'Log in'}
      </button>

      {/* list rendering with unique keys */}
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </section>
  )
}
export default ConditionalAndList
