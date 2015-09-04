var React = require('react');

var HslSelector = React.createClass({
    handleChange: function() {
        this.props.onChange(this.props.color);
    },
    colorAttributeProps: [
        // I want to call this colorComponentProps, but 'componentes' have a
        // specific meaning in react!
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
            inputGroups = colorAttributeProps.map(function(colorAttribute, i) {
                return (
                    <div className="input-group col-sm-4" key={i}>
                        <input
                            name={colorAttribute.name}
                            type="range"
                            min={colorAttribute.min}
                            max={colorAttribute.max}
                            step={colorAttribute.step}
                            value={props.color[i]}
                            onChange={handleChange}/>
                    </div>
                )
            });

        return (
            <div className="hsl-selector row">
                {inputGroups}
            </div>
        )
    }
});

module.exports = HslSelector;
