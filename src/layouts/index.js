import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Amberley's Grand Wiki of Learnings"
      meta={[
        { name: 'description', content: 'A wiki of things I have googled and learned.' },
        { name: 'keywords', content: 'tech, wiki' },
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
