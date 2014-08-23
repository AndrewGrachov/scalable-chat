var React = require('react');
var Link = require('react-router').Link;
module.exports = React.createClass({
	render: function () {
		return <li className={this.props.className}>
				<Link to="chat" chatId= {this.props.id}>{this.props.name}</Link>
			</li>
	}
})