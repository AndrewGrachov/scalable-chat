var React = require('react');
var router = require('react-router');
var Routes = router.Routes;
var Route = router.Route;
var Chats = require('./chats/chats.jsx');
var ContentRoom = require('./chats/contentRoom.jsx');
var App = require('./app.jsx');
module.exports = function () {
	return React.renderComponent(
		<Routes location="history">
			<Route name="default" path="/" handler= {App}>
				<Route name="chats" path="/chats" handler={Chats}>
					 <Route name="chat" path="/chats/:chatId" handler={ContentRoom}/>
				</Route>
			</Route>
		</Routes>,
		document.getElementById('main'))
}