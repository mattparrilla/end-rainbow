var React = require('react'),
	ColorPicker = require('./components/ColorPicker'),
	GifSamples = require('./components/GifSamples');

React.render(
	<div>
		<ColorPicker />
		<GifSamples />
	</div>,
	document.getElementById('end-rainbow')
)
