var React = require('react');

var Palette = React.createClass({
	backgroundColor: function(color, colorSpace, noHue) {
		if (colorSpace === 'rgb') {
			return "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
		} else if (colorSpace === 'hsl') {
			if (noHue) { // return a color with no saturation
				return "hsl(" + color[0] + ", " + 0 + "%, " + color[2] + "%)";
			} else {

				return "hsl(" + color[0] + ", " + color[1] + "%, " + color[2] + "%)";
			}
		} else {
			console.error("Shit is fucked up");
		}
	},
	render: function() {
		var colorSpace = this.props.colorSpace,
			backgroundColor = this.backgroundColor,
			noHue = this.props.noHue,
			colors = this.props.palette.map(function(color, i) {
				return (
					<div key={i} style={{
						backgroundColor: backgroundColor(color, colorSpace, noHue),
						height: "30px",
						width: "50px",
						marginBottom: "10px"
					}}></div>
				)
			});
		return (
			<div>
				{colors}
			</div>
		)
	}
});

module.exports = Palette;