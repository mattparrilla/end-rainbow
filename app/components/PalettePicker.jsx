var React = require('react'),
    Palette = require('./Palette'),
    PaletteForm = require('./PaletteForm');

var PalettePicker = React.createClass({
    //Used for type validation
//  propTypes: {
//      value: React.PropTypes.number,
//      onChange: React.PropTypes.func
//  },
//  //gets called by onChange prop when value changes
//  //this is not a special React function, just one we created
//  //to handle a change to the form
//  handleChange: function(e) {
//      this.props.onChange(e.target.value);
//  },
    render: function() {
        return (
            <div>
                <div className="col-xs-1">
                    <Palette palette={this.props.palette} colorSpace="hsl" noHue={true} />
                </div>
                <div className="col-xs-1">
                    <Palette palette={this.props.palette} colorSpace="hsl" />
                </div>
                <PaletteForm palette={this.props.palette} />
            </div>
        );
    }
});

module.exports = PalettePicker;
