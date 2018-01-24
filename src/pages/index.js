import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Record from '../components/Record'
export class IndexPage extends Component {
  render() {
    const records = this.props.data.allContentfulRecord.edges;
    return (
      <main>
        {records.map((record) => (
          <Record
            key={record.node.id}
            node={record.node} />
        ))}
      </main>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    allContentfulRecord {
      edges {
        node {
          id
          title
          slug
          summary {
            summary
          }
          category {
            title
            description {
              description
            }
          }
          references {
            title
            link
            source
          }
        }
      }
    }
  }
`
