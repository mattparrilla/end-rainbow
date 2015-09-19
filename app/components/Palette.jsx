var React = require('react');

var Palette = React.createClass({
    propTypes: {
        colorSpace: React.PropTypes.string,
        noHue: React.PropTypes.bool
    },
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
            noHue = this.props.noHue;
        return (
            <div className="palette">
                {
                    this.props.palette.map(function(color, i) {
                        return (
                            <div className="color" key={i}
                                style={{
                                    backgroundColor: backgroundColor(color, colorSpace, noHue),
                                    height: "30px",
                                    width: "50px",
                                    marginBottom: "10px",
                                    border: "1px solid #ddd",
                                    display: "inline-block"
                            }}></div>
                        )
                    })
                }
            </div>
        )
    }
});

module.exports = Palette;
