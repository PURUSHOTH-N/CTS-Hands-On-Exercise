import { useState } from 'react'

// HOL 11: React events, synthetic events, event handlers.
function EventsDemo() {
  const [message, setMessage] = useState('No event yet')
  const handleClick = (e) => setMessage(`Clicked! (synthetic event type: ${e.type})`)
  const handleChange = (e) => setMessage(`Typing: ${e.target.value}`)
  return (
    <section>
      <h3>Events</h3>
      <button onClick={handleClick}>Click me</button>
      <input onChange={handleChange} placeholder="Type here" style={{ marginLeft: 8 }} />
      <p>{message}</p>
    </section>
  )
}
export default EventsDemo
