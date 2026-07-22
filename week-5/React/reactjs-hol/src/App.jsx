import ClassComponent from './components/ClassComponent.jsx'
import FunctionComponent from './components/FunctionComponent.jsx'
import LifecycleDemo from './components/LifecycleDemo.jsx'
import StyledComponent from './components/StyledComponent.jsx'
import Es6Demo from './components/Es6Demo.jsx'
import JsxDemo from './components/JsxDemo.jsx'
import EventsDemo from './components/EventsDemo.jsx'
import ConditionalAndList from './components/ConditionalAndList.jsx'

// Each component maps to a mandatory ReactJS hands-on lab (see README).
function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 720, margin: '0 auto', padding: 24 }}>
      <h1>ReactJS Hands-on (CTS_HANDS_ON)</h1>
      <p>Single-Page Application demonstrating the mandatory React labs.</p>
      <ClassComponent />
      <FunctionComponent />
      <LifecycleDemo />
      <StyledComponent />
      <Es6Demo />
      <JsxDemo />
      <EventsDemo />
      <ConditionalAndList />
    </main>
  )
}
export default App
