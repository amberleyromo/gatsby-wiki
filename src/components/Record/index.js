import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash.get'

export class Record extends Component {
	render() {
		const record = this.props.node;
		const summary = get(record, 'summary.summary');


		return (
			<div
				style={{
				background: 'white',
				marginBottom: '1.45rem',
				}}
			>
					<div
						style={{
						margin: '0 auto',
						maxWidth: 960,
						padding: '1.45rem 1.0875rem',
						}}
					>
						<h3 style={{ margin: 0 }}>
							<Link to={record.slug}>
									{record.title}
							</Link>
						</h3>
						{summary && (
							<p>{summary}</p>
						)}
					</div>
			</div>
		)
	}
}

export default Record
