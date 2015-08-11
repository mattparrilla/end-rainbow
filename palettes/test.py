import colorsys


def new_palette(format):

    palette = [
        (66, 100, 100, 1),
        (66, 100, 95, 1),
        (66, 100, 90, 1),
        (66, 100, 85, 1),
        (66, 100, 80, 1),
        (16, 100, 75, 1),
        (360, 100, 60, 1),
        (345, 100, 55, 1),
        (330, 100, 50, 1),
        (315, 100, 45, 1),
        (300, 100, 40, 1),
        (285, 100, 35, 1),
        (270, 100, 30, 1),
        (255, 100, 25, 1)
        ]

    if format == 'hsla':
        return palette

    elif format == 'rgb':
        new_palette_rgb = []

        for color in palette:
            normalized_color = colorsys.hls_to_rgb(
                color[0] / 360.0, color[2] / 100.0, color[1] / 100.0)
            scaled_palette = [int(i * 255) for i in normalized_color]
            new_palette_rgb.append(scaled_palette)


        return new_palette_rgb

    else:
        return False
