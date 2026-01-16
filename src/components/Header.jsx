export default function Header() {
  return (
    <header style={styles.header}>
      {/* Logo / Name */}
      <div style={styles.logo}>
        Jay-An
      </div>

      {/* Navigation */}
      <nav>
        <ul style={styles.navList}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 2rem",
    borderBottom: "1px solid #eee"
  },
  logo: {
    fontWeight: 600,
    fontSize: "1.1rem"
  },
  navList: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0
  }
}
