var React = require('react');

var HslSelector = React.createClass({
    handleChange: function(i, e) {
        var color = this.props.color;
        color[i] = e.target.value;
        this.props.onChange(color);
    },
    colorAttributeProps: [
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
    ],
    render: function() {
        var props = this.props,
            handleChange = this.handleChange,
            colorAttributeProps = this.colorAttributeProps,
            sliders = colorAttributeProps.map(function(colorAttribute, i) {
                return (
                    <div className="slider" key={i}>
                        <input
                            name={colorAttribute.name}
                            type="range"
                            min={colorAttribute.min}
                            max={colorAttribute.max}
                            step={colorAttribute.step}
                            value={props.color[i]}
                            dataPaletteIndex={props.paletteIndex}
                            onChange={handleChange.bind(null, i)}/>
                    </div>
                )
            });

        return (
            <div className="hsl-sliders">
                {sliders}
            </div>
        )
    }
});

module.exports = HslSelector;
