var React = require('react'),
    Slider = require('./Slider');

var colorArrayToBackground = function(color, colorSpace, noHue) {
        if (colorSpace === 'rgb') {
            return "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
        } else if (colorSpace === 'hsl') {
            if (noHue) { // return a color with no saturation
                return "hsl(" + color[0] + ", " + 0 + "%, " + color[2] + "%)";
            } else {

                return "hsl(" + color[0] + ", " + color[1] + "%, " + color[2] + "%)";
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
    render: function() {
        var oldColor = this.props.oldColor,
            newColor = this.props.newColor,
            colorIndex = this.props.colorIndex;

        return (
            <div className="color-picker">
                <div className="swatches">
                    <div className="swatch old"
                        style={{backgroundColor: colorArrayToBackground(oldColor, 'rgb')}} />
                    <div className="swatch no-hue"
                        style={{backgroundColor: colorArrayToBackground(newColor, 'hsl', 'no-hue')}} />

                    <div className="swatch new"
                        style={{backgroundColor: colorArrayToBackground(newColor, 'hsl')}} />
                </div>
                {
                    colorParts.map(function(part, i) {
                        return (
                            <Slider value={newColor[i]}
                                    part={part}
                                    colorIndex={colorIndex}
                                    key={i}
                                    colorPartIndex={i}
                            />
                        )
                    })
                }

            </div>
        )
    }
});

module.exports = ColorPicker;
