// HOL 9: ES6 features - let/const, arrow functions, template literals,
// destructuring, spread, classes.
class Shape {
  constructor(name) { this.name = name }
  describe = () => `I am a ${this.name}`   // class field + arrow fn
}

function Es6Demo() {
  const nums = [1, 2, 3]
  const doubled = nums.map((n) => n * 2)      // arrow function
  const [first, ...rest] = doubled            // destructuring + rest
  const merged = [...nums, ...doubled]        // spread
  const shape = new Shape('Circle')           // ES6 class
  return (
    <section>
      <h3>ES6 Features</h3>
      <p>{`Doubled: ${doubled.join(', ')}`}</p>
      <p>First: {first}, Rest: {rest.join(', ')}</p>
      <p>Merged: {merged.join(', ')}</p>
      <p>{shape.describe()}</p>
    </section>
  )
}
export default Es6Demo
