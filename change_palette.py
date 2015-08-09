from PIL import Image

def change_palette(image, old_palette, new_palette):
    """Take a path to a paletted image with known colors and change palettes"""

    # getpalette() returns a list of 768 ints; 768 / 3 = 256 = the # of colors
    # doesn't return 3 item (r, g, b) tuple for whatever reason
    palette = image.getpalette()

    # loop through each color
    for j in range(len(palette) / 3):
        i = j * 3  # i is the index of the color in the getpalette list
        rgb = (palette[i], palette[i + 1], palette[i + 2])
        if rgb in old_palette:
            palette_index = old_palette.index(rgb)
            new_color = new_palette[palette_index]
            for k in range(3):
                palette[i + k] = new_color[k]

    image.putpalette(palette)
    return image


#TODO: make this
def build_palette(input_palette, bins):
    """Take a palette of variable length and return a palette of length
    bins based off of the inputted palette"""

    return new_palette
