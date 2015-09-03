var React = require('react'),
    Palette = require('./Palette'),
    PalettePicker = require('./PalettePicker');


var PalettePickerContainer = React.createClass({

    //getInitialState is invoked before the component is mounted
    //don't put props in here
    getInitialState: function() {

        return {
            newPalette: [
                [66, 100, 100],
                [66, 100, 95],
                [66, 100, 90],
                [66, 100, 85],
                [66, 100, 80],
                [16, 100, 75],
                [360, 100, 60],
                [345, 100, 55],
                [330, 100, 50],
                [315, 100, 45],
                [300, 100, 40],
                [285, 100, 35],
                [270, 100, 30],
                [255, 100, 25]
            ]
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
        [1, 197],
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


    //custom function called when rendered
//  getContent: function() {
//      if(this.props.reverse) {
//          return this.state.bluebirdBody.split('').reverse().join('');
//      } else {
//          return this.state.bluebirdBody;
//      }
//  },
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
                <PalettePicker palette={this.state.newPalette} />
            </div>
        );
    }
});

module.exports = PalettePickerContainer;
