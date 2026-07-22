import React from 'react'

// HOL 4: Component life cycle - componentDidMount / componentWillUnmount.
class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { seconds: 0 }
  }
  componentDidMount() {
    // Runs after the component is inserted into the DOM.
    this.timer = setInterval(() => {
      this.setState((s) => ({ seconds: s.seconds + 1 }))
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer) // cleanup
  }
  render() {
    return (
      <section>
        <h3>Lifecycle Demo (componentDidMount)</h3>
        <p>Seconds since mount: {this.state.seconds}</p>
      </section>
    )
  }
}
export default LifecycleDemo
