var React = require('react'),
    Palette = require('./Palette'),
    PaletteForm = require('./PaletteForm');

var ColorPicker = React.createClass({

    //getInitialState is invoked before the component is mounted
    //don't put props in here
    getInitialState: function() {

        //TODO: AJAX request to get intial palettes and images
        return {
            // return data
        };
    },

    //custom function called when rendered
    getContent: function() {
        if(this.props.reverse) {
            return this.state.bluebirdBody.split('').reverse().join('');
        } else {
            return this.state.bluebirdBody;
        }
    },

    // called by onChange
    handlePaletteChange: function(newPalette) {
        ColorPickerActions.inputChange(newPalette);
        //below is old (non-FLUX) way
        //this.state({bluebirdBody: newValue});
    },

    componentDidMount: function() {
        this.unsubscribe = ColorPickerStore.listen(this.onPaletteChange);
    },

    // not sure why I need this
    componentWillUnMount: function () {
        this.unsubscribe();
    },

    onPaletteChange: function(newPalette) {
        this.setState({ newPalette: newPalette});
    },

    render: function() {
        return (
            <div className="color-picker">
                <div className="col-xs-1">
                    <Palette palette={this.rainbowPalette} />
                </div>
                <div className="col-xs-1">
                    <Palette palette={this.newPalette} />
                </div>
                <div className="col-xs-1">
                    <Palette palette={this.newPalette} noChroma={true} />
                </div>
                <div className="col-xs-4">
                </div>
            </div>
        );
    }
});

module.exports = ColorPicker;
