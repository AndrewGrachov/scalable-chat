var React = require('react');
var Rooms = require('./rooms.jsx');
var ContentRoom = require('./contentRoom.jsx');

var roomsList = require('./rooms');
var _ = require('lodash');

module.exports = React.createClass({
	render: function () {
		var content, activeChat;
		if (this.props.activeRouteHandler()) {
			content = <this.props.activeRouteHandler/>
			activeChat = this.props.activeRouteHandler().props.params.chatId;
		} else {
			content = <h1>Welcome to Chat! Select room to continue</h1>
		}

		return <div className="row">
			<Rooms activeChat={activeChat}></Rooms>
			<div className="col-xs-8">
				{content}
			</div>
		</div>
	}
})