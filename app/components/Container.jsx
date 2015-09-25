var React = require('react'),
    Reflux = require('reflux'),
    PalettePicker = require('./PalettePicker'),
    Actions = require('../Actions'),
    Store = require('../Store');

var Container = React.createClass({
    mixins: [Reflux.connect(Store)],
    render: function() {
        return (
            <div className="color-picker">
                <PalettePicker oldPalette={this.state.nwsPalette} newPalette={this.state.newPalette} />
                <div className="test-images">
                    <img className="new-image" src="/static/images/new-radar.gif" />
                    <img className="original-image" src="/static/images/test-radar2.gif" />
                </div>
            </div>
        );
    }
});

module.exports = Container;
