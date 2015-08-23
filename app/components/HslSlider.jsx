var React = require('react');

var HslSlider = React.createClass({
	render: function() {
		return (
			<p>{this.props.color}</p>
		)
	}
});

module.exports = HslSlider;
