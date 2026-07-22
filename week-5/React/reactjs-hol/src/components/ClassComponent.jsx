import React from 'react'

// HOL 2 & 3: A class component with state.
class ClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  increment = () => this.setState({ count: this.state.count + 1 })
  render() {
    return (
      <section>
        <h3>Class Component</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </section>
    )
  }
}
export default ClassComponent
