import styles from './StyledComponent.module.css'

// HOL 5: Styling with CSS Modules and inline styles.
function StyledComponent() {
  const inline = { backgroundColor: '#eef2ff', fontWeight: 'bold' }
  return (
    <section>
      <h3>Styling (CSS Module + inline)</h3>
      <div className={styles.card} style={inline}>
        This box uses a CSS Module class and an inline style object.
      </div>
    </section>
  )
}
export default StyledComponent
