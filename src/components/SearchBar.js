import React from 'react';
import logo from '../assets/unsplash.png';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<React.Fragment>
				<img className="logo" src={logo} alt="logo" />
				<div className="ui segment">
					<form onSubmit={this.onFormSubmit} className="ui form">
						<div className="field">
							<label>Image Search</label>
							<input
								type="text"
								value={this.state.term}
								onChange={(e) => this.setState({ term: e.target.value })}
							/>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default SearchBar;
