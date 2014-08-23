var React = require('react');
module.exports = React.createClass({
	render: function () {
		return <li class="message">{this.props.model.text}</li>
	}
});