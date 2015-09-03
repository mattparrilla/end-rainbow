var React = require('react');

var HslSelector = React.createClass({
    handleChange: function(name) {
        console.log(name);
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
            inputGroups = colorAttributeProps.map(function(colorAttribute, i) {
                return (
                    <div className="input-group col-sm-4">
                        <input
                            name={colorAttribute.name}
                            type="range"
                            min={colorAttribute.min}
                            max={colorAttribute.max}
                            step={colorAttribute.step}
                            value={props.color[i]}
                            key={i}
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
