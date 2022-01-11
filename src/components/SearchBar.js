import React from 'react'

class SearchBar extends React.Component {
	// onInputChange(event) {
	// 	console.log(event.target.value)
	// }
	state = { term: '' }

	onFormSubmit = (event) => {
		event.preventDefault()

		this.props.onSubmit(this.state.term)
	}
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<label>Search Here: </label>
					<div className="field">
						<input
							type="text"
							placeholder="Mountains"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar
