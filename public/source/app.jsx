var React = require('react');
var Link = require('react-router').Link;
module.exports = React.createClass({
	render: function () {
		return <div><Link to="default">Home</Link><Link to="chats">Rooms</Link> <this.props.activeRouteHandler/></div>
	}
});