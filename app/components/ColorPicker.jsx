var React = require('react'),
    Slider = require('./Slider');

var colorArrayToBackground = function(color, colorSpace, noHue) {
    if (colorSpace === 'rgb') {
        return 'rgb(' + color[0] + ", " + color[1] + ", " + color[2] + ")";
    } else if (colorSpace === 'hsl') {
        if (noHue) { // return a color with no saturation
            return 'hsl(' + color[0] + ", " + 0 + "%, " + color[2] + "%)";
        } else {

            return 'hsl(' + color[0] + ", " + color[1] + "%, " + color[2] + "%)";
        }
    } else {
        console.error('Getting unexpected input for color');
    }
};

var colorParts = [
    {
        name: 'hue',
        min: 0,
        max: 360,
        step: 1,
    }, {
        name: 'saturation',
        min: 0,
        max: 100,
        step: 1
    }, {
        name: 'luminosity',
        min: 0,
        max: 100,
        step: 1
    }
];

var ColorPicker = React.createClass({
    propTypes: {
        oldColor: React.PropTypes.array,
        newColor: React.PropTypes.array,
        onChange: React.PropTypes.func
    },

    handleSliderChange: function(name, value) {
        var color = this.props.newColor;
        ['hue', 'saturation', 'luminosity'].forEach(function(item, index) {
            if (name === item) {
                color[index] = value;
            }
        })
        this.props.onChange(color);
    },

    render: function() {
        return (
            <div className='color-picker'>
                <div className='swatches'>
                    <div className='swatch old'
                        style={{backgroundColor: colorArrayToBackground(this.props.oldColor, 'rgb')}} />
                    <div className='swatch no-hue'
                        style={{backgroundColor: colorArrayToBackground(this.props.newColor, 'hsl', 'no-hue')}} />

                    <div className='swatch new'
                        style={{backgroundColor: colorArrayToBackground(this.props.newColor, 'hsl')}} />
                </div>
                {
                    colorParts.map(function(part, i) {
                        return (
                            <Slider value={this.props.newColor[i]}
                                    part={part}
                                    key={i}
                                    onChange={this.handleSliderChange}
                            />
                        )
                    }.bind(this))
                }

            </div>
        )
    }
});

module.exports = ColorPicker;
