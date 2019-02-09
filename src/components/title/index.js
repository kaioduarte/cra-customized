import React from 'react'
import t from 'prop-types'

import './title.css'

const Title = ({ children }) => (
  <h1>{children}</h1>
)

Title.propTypes = {
  children: t.node.isRequired
}

export default Title
