var React = require('react');
var Message = require('./message.jsx');
var messages = [{
	id: 0,
	text: 'I am message'
},
{
	id: 1,
	text: 'I am message 2nd'
},
{
	id: 2,
	text: 'I am message 3d'
},
{
	id: 3,
	text: 'I am message 4th'
},
{
	id: 4,
	text: 'I am message 5th'
},
{
	id: 5,
	text: 'I am message 6th'
}
]
module.exports = React.createClass({
	componentWillMount: function () {
		this.socket = this.props.socket;
		this.socket.on('chat message', this.pushMessage);
	},
	getInitialState: function () {
		return {messages: messages};
	},
	pushMessage: function (msg) {
		var messages = this.state.messages;
		messages.push({id:99, text: msg});
		this.setState({messages: messages})
	},
	render: function () {
		var msgs = this.state.messages.map(function (msg) {
			return <Message model = {msg}/>
		});
		return <ul>
			{msgs}
		</ul>
	}
});