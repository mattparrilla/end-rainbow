const React = require('react');
const $ = require('jquery');
const PalettePicker = require('./PalettePicker');
const ImageComparison = require('./ImageComparison');

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
    onPaletteChange: function(newPalette) {
        const url = '/palette/';

        $.ajax({
            url: url,
            dataType: 'json',
            type: 'POST',
            data: JSON.stringify(newPalette),
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
                this.setState({
                    newPalette: newPalette,
                    newImageSrc: data.newImageSrc,
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(url, status, err.toString());
            },
        });
    },

    render: function() {
        return (
            <div className="color-picker">
                <PalettePicker oldPalette={this.state.nwsPalette}
                    newPalette={this.state.newPalette}
                    onPaletteChange={this.onPaletteChange}
                />
                <ImageComparison
                    baseImageSrc={this.state.baseImageSrc}
                    newImageSrc={this.state.newImageSrc}
                />
            </div>
        );
    },
});

module.exports = Container;
