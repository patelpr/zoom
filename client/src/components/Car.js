import React, { Component } from 'react';


class Car extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};
		this.apiCall = this.apiCall.bind(this);
	}
	apiCall(e) {
		if (e.target.value.length > 2) {
			fetch(
				"https://service.blackbookcloud.com/UsedCarWS/UsedCarWS/GraphQL?=",
				{
					method: "POST",
					headers: {
						"content-type": "application/json",
						authorization: "Basic d2F5bmV1OmppbWVsbGlz",
					},
					body: `{"query":\"{\\n    autocomplete (searchtext:\\\"${e.target.value}\\\" maxresults:5) \\n        {matching_vehicles { description uvc matchcode matchdesc}}\\n}\\n    \"}`,
				}
			)
				.then((response) => {
					this.setState({ items: response.data });
					console.log(response);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}
	render() {
		return (
			<div>
				<input type="text" onChange={this.apiCall} />
				<ul>
					{this.state.items
						? this.state.items.map((x) =>
								x
									? console.log(x.description)
									: console.log("nope")
						  )
						: console.log("nicetry") // return(<li>{items.description}</li>)
					}
				</ul>
			</div>
		);
	}
}


export default Car;