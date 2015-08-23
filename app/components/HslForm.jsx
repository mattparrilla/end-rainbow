var React = require('react'),
	HslSlider = require('./HslSlider');

var HslForm = React.createClass({
	render: function() {
		var sliders = this.props.palette.map(function(color) {
			return (
				<HslSlider color={color} />
			)
		});

		return (
			<div>
				{sliders}
			</div>
		)
	}
});

module.exports = HslForm;
