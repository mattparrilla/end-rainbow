from flask import Flask, render_template, request
from change_palette import change_palette, make_sample_image, hsla_to_rgb
from palettes.nws import nws_palette
from palettes.test import new_palette
from PIL import Image
import json
import time

app = Flask(__name__)


@app.route('/')
def index():
    """Main view, the only view serving HTML"""

    old_gif = 'static/images/test-radar2.gif'
    new_gif = 'static/images/new-radar.gif'
    image = Image.open(old_gif)
    new_im = change_palette(image, nws_palette('rgb'), new_palette('rgb'))
    new_im.save(new_gif, "GIF", transparency=0)

    return render_template('index.html',
        old_gif=old_gif,
        new_gif=new_gif,
        old_palette=nws_palette('rgb'),
        new_palette=new_palette('hsla'))


@app.route('/palette/', methods=['GET', 'POST'])
def palette():
    """GET requests are returned a palette in JSON
       POST expects to receive a JSON palette, which is then
       used to generate a sample image with the palette and return
       a cache-busting path to the image."""

    if request.method == 'GET':  # if initial request, GET
        # create palettes, images
        return json.dumps({
            'nwsPalette': nws_palette('rgb'),
            'newPalette': new_palette('hsla'),
            'baseImageSrc': 'static/images/test-radar2.gif',
            'newImageSrc': 'static/images/new-radar.gif'
        })
    elif request.method == 'POST':
        data = request.get_json(force=True)
        hsla_palette = data
        rgb_palette = hsla_to_rgb(hsla_palette)
        image_src = make_sample_image(rgb_palette)
        new_image_src = '%s?%d' % (image_src, int(time.time()))
        return json.dumps({
            'newImageSrc': new_image_src
        })
    else:
        # TODO: return something better
        return "Shit!"

if __name__ == '__main__':
    app.run(debug=True)
