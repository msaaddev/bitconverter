import React, { Component } from 'react';

class Prices extends Component {
	state = {
		currency: 'USD'
	};
	render() {
		return (
			<div>
				<ul className="list-group">
					<li className="list-group-item">
						Bitcoin rate for {bpi.USD.description}:{' '}
						<span className="badge badge-primary">{bpi.USD.code}</span>
						<strong>{bpi.USD.rate}</strong>
					</li>
				</ul>
			</div>
		);
	}
}

export default Prices;
