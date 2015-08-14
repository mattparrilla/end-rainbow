from PIL import Image
from palettes.test import new_palette
from palettes.nws import nws_palette
import colorsys


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
            if palette_index < len(new_palette):
                new_color = new_palette[palette_index]
                for k in range(3):
                    palette[i + k] = new_color[k]

    image.putpalette(palette)

    return image


def hsla_to_rgb(palette):
    """Take array of hsla colors, convert to RGB"""

    new_palette_rgb = []

    for color in palette:
        normalized_color = colorsys.hls_to_rgb(
            color[0] / 360.0, color[2] / 100.0, color[1] / 100.0)
        scaled_palette = [int(i * 255) for i in normalized_color]
        new_palette_rgb.append(scaled_palette)

    return new_palette_rgb


def make_sample_image(palette):

    old_gif = 'static/test-radar2.gif'
    new_gif = 'static/new-radar.gif'
    image = Image.open(old_gif)
    new_im = change_palette(image, nws_palette('rgb'), new_palette('rgb'))
    new_im.save(new_gif, "GIF")

    return new_gif
