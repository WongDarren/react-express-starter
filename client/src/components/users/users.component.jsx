import React, { Component } from 'react';

import './users.styles.scss';

class Users extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
		};
	}

	componentDidMount() {
		fetch('/api/users')
			.then((res) => res.json())
			.then((users) =>
				this.setState({ users }, () => console.log('users fetched...', users))
			);
	}

	render() {
		return (
			<div>
				<h2>Users</h2>
				<ul>
					{this.state.users.map((user) => (
						<li key={user.id}>{user.firstName}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Users;
