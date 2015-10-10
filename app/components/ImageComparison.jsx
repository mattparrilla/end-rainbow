const React = require('react');

const ImageComparison = React.createClass({
    propTypes: {
        newImageSrc: React.PropTypes.string,
        baseImageSrc: React.PropTypes.string,
    },
    render: function() {
        return (
            <div className="test-images">
                <img className="new-image" src={this.props.newImageSrc} />
                <img className="original-image" src={this.props.baseImageSrc} />
            </div>
        );
    },
});

module.exports = ImageComparison;
