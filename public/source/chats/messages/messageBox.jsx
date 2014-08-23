var React = require('react/addons');
module.exports = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function () {
		return {message: ''}
	},
	submit: function () {
		var onSubmit = this.props.onSubmit || function () {};
		onSubmit(this.state.message);
	},
	render: function () {
		return <div className="message-box col-xs-12">
				<div className="col-xs-8">
					<textarea className="text-area" valueLink={this.linkState('message')}></textarea>
				</div>
			<div className="col-xs-2"> <button className="btn btn-info" onClick={this.submit}>Send</button> </div>
		</div>
	}
});