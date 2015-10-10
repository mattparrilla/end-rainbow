const React = require('react');
const PalettePicker = require('./PalettePicker');
const $ = require('jquery');

const Container = React.createClass({
    getInitialState: function() {
        return {
            nwsPalette: [],
            newPalette: [],
            testImages: '',
            newImages: '',
        };
    },
    componentDidMount: function() {
        $.getJSON('/palette/', function(data) {
            if (this.isMounted()) {
                this.setState(data);
            }
        }.bind(this));
    },
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
    },
});

module.exports = Container;
