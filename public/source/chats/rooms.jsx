var React = require('react');
var Room = require('./room.jsx');
var rooms = [
{
	id: 1,
	name: 'First'
},
{
	id: 2,
	name: 'Second'
},
{
	id: 3,
	name: 'Third'
},
{
	id: 4,
	name: 'Fourth'
}
];

module.exports = React.createClass({
	render: function () {
		var self = this;
		var reactRooms = [];
		var activeId = this.props.activeChat;
		rooms.forEach(function (room) {
			var className = activeId && activeId == room.id? 'active' : '';
 			reactRooms.push(<Room id={room.id} name={room.name} className={className} />)
		});

		return <div className="col-xs-4"><h3>Rooms</h3>
				<ul className="nav nav-pills">
					{reactRooms}
				</ul>
				</div>
	}
})