const React = require('react');
const Slider = require('./Slider');

const colorArrayToBackground = function(color, colorSpace, noHue) {
    let newColor;
    if (colorSpace === 'rgb') {
        newColor = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
    } else if (colorSpace === 'hsl') {
        if (noHue) { // return a color with no saturation
            newColor = 'hsl(' + color[0] + ', ' + 0 + '%, ' + color[2] + '%)';
        } else {
            newColor = 'hsl(' + color[0] + ', ' + color[1] + '%, ' + color[2] + '%)';
        }
    }
    return newColor;
};

const colorParts = [
    {
        name: 'hue',
        min: 0,
        max: 360,
        step: 1,
    }, {
        name: 'saturation',
        min: 0,
        max: 100,
        step: 1,
    }, {
        name: 'luminosity',
        min: 0,
        max: 100,
        step: 1,
    },
];

const ColorPicker = React.createClass({
    propTypes: {
        oldColor: React.PropTypes.array,
        newColor: React.PropTypes.array,
        onChange: React.PropTypes.func,
    },

    handleSliderChange: function(name, value) {
        const color = this.props.newColor;
        ['hue', 'saturation', 'luminosity'].forEach(function(item, index) {
            if (name === item) {
                color[index] = parseInt(value, 10);
            }
        });
        this.props.onChange(color);
    },

    render: function() {
        return (
            <div className="color-picker">
                <div className="swatches">
                    <div className="column old-column">
                        <div className="swatch"
                            style={{backgroundColor: colorArrayToBackground(this.props.oldColor, 'rgb')}} />
                    </div>
                    <div className="column no-hue-column">
                        <div className="swatch"
                            style={{backgroundColor: colorArrayToBackground(this.props.newColor, 'hsl', 'no-hue')}} />
                    </div>

                    <div className="column new-column">
                        <div className="swatch"
                            style={{backgroundColor: colorArrayToBackground(this.props.newColor, 'hsl')}} />
                    </div>
                </div>

                {
                    colorParts.map(function(part, i) {
                        return (
                            <Slider value={parseInt(this.props.newColor[i], 10)}
                                    part={part}
                                    key={i}
                                    onChange={this.handleSliderChange}
                            />
                        );
                    }.bind(this))
                }

            </div>
        );
    },
});

module.exports = ColorPicker;
