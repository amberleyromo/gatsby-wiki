import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <h1 style={{
      marginTop: '2rem',
      marginBottom: '1rem'
    }}>
      <Link to="/">
        Not a Blog
      </Link>
    </h1>

    <h2>Topical summaries for memory and processing</h2>

    <p>I learn better when I have to think about something enough to reword it and write it down. I also often can't find "that thing I read". Basically an odd little growing database of things I Google.</p>

    <p><em>This will be a search bar eventually. ATM just loop through and show whatever records exist here.</em></p>
  </header>
)

export default Header
