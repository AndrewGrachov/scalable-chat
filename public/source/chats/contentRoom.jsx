var React = require('react');
var Messages = require('./messages/messages.jsx');
var MessageBox = require('./messages/messageBox.jsx');
var io = require('socket.io-client');

module.exports = React.createClass({
	componentWillMount: function () {
		var self = this;
		var chatId = this.props.params.chatId;
		var socket = io('http://localhost/');
		socket.on('connect', function() {
			socket.emit('room', chatId);
			socket.on('chat message', function(data) {
				console.log('data:', data);
			});
			socket.on('disconnect', function(){});
		});
		this.socket = socket;
	},
	componentWillUnMount: function () {
		this.socket.disconnect();
	},
	onSubmit: function (message) {
		this.socket.emit('chat message', message);
	},
	render: function () {
		return <div>
					<h1>Awesome chat window!</h1>
					<div class="messages-box">
						<Messages socket={this.socket} />
					</div>
					<MessageBox onSubmit={this.onSubmit}/>
				</div>
	}
})