var Reflux = require('reflux'),
    Actions = require('./Actions');

var Store = Reflux.createStore({
    nwsPalette: [
        [152, 84, 198],
        [248, 0, 253],
        [188, 0, 0],
        [212, 0, 0],
        [253, 0, 0],
        [253, 139, 0],
        [229, 188, 0],
        [253, 248, 2],
        [0, 142, 0],
        [1, 197, 1],
        [2, 253, 2],
        [3, 0, 244],
        [1, 159, 244],
        [4, 233, 231],
        [225, 225, 225],
        [227, 227, 227],
        [230, 230, 230],
        [232, 232, 232],
        [235, 235, 235],
        [238, 238, 238],
        [240, 240, 240],
        [255, 255, 255]
    ],
    newPalette: [
        [66, 100, 100],
        [66, 100, 95],
        [66, 100, 90],
        [66, 100, 85],
        [66, 100, 80],
        [16, 100, 75],
        [360, 100, 60],
        [345, 100, 55],
        [330, 100, 50],
        [315, 100, 45],
        [300, 100, 40],
        [285, 100, 35],
        [270, 100, 30],
        [255, 100, 25]
    ],
    getInitialState: function() {
        return {
            newPalette: this.newPalette,
            nwsPalette: this.nwsPalette
        }
    },
    listenables: [Actions],
    sliderChange: function(newValue) {
        var modifiedPalette = this.newPalette;
        modifiedPalette[newValue.colorIndex][newValue.colorPartsIndex] = newValue.value;
        this.trigger({
            newPalette: modifiedPalette,
            nwsPalette: this.nwsPalette
        })
    }
});

module.exports = Store;
