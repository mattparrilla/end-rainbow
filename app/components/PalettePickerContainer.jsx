var React = require('react'),
	Palette = require('./Palette'),
	PalettePicker = require('./PalettePicker');


var PalettePickerContainer = React.createClass({

	//getInitialState is invoked before the component is mounted
	//don't put props in here
	getInitialState: function() {

		return {
			// return data
		};
	},
	nwsPalette: [
		[152, 84, 198],
		[248, 0, 253],
		[188, 0, 0],
		[212, 0, 0],
		[253, 0, 0],
		[253, 139, 0],
		[229, 188, 0],
		[253, 248, 2],
		[0, 142, 0],
		[1, 197, 1],
		[2, 253, 2],
		[3, 0, 244],
		[1, 159, 244],
		[4, 233, 231],
		[225, 225, 225],
		[227, 227, 227],
		[230, 230, 230],
		[232, 232, 232],
		[235, 235, 235],
		[238, 238, 238],
		[240, 240, 240],
		[255, 255, 255]
	],

	newPalette: [
        [66, 100, 100, 1],
        [66, 100, 95, 1],
        [66, 100, 90, 1],
        [66, 100, 85, 1],
        [66, 100, 80, 1],
        [16, 100, 75, 1],
        [360, 100, 60, 1],
        [345, 100, 55, 1],
        [330, 100, 50, 1],
        [315, 100, 45, 1],
        [300, 100, 40, 1],
        [285, 100, 35, 1],
        [270, 100, 30, 1],
        [255, 100, 25, 1]
	],

	//custom function called when rendered
//	getContent: function() {
//		if(this.props.reverse) {
//			return this.state.bluebirdBody.split('').reverse().join('');
//		} else {
//			return this.state.bluebirdBody;
//		}
//	},
//
	/*
	// called by onChange
	handlePaletteChange: function(newPalette) {
		PalettePickerActions.inputChange(newPalette);
		//below is old (non-FLUX) way
		//this.state({bluebirdBody: newValue});
	},

	componentDidMount: function() {
		this.unsubscribe = PalettePickerStore.listen(this.onPaletteChange);
	},

	// not sure why I need this
	componentWillUnMount: function () {
		this.unsubscribe();
	},

	onPaletteChange: function(newPalette) {
		this.setState({ newPalette: newPalette});
	},
	*/

	render: function() {
		return (
			<div className="color-picker">
				<div className="col-xs-1">
					<Palette palette={this.nwsPalette} colorSpace="rgb" />
				</div>
				<PalettePicker palette={this.newPalette} />
			</div>
		);
	}
});

module.exports = PalettePickerContainer;
