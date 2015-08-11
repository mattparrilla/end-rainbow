from flask import Flask, render_template, request
from change_palette import change_palette, hsla_to_rgb
from palettes.nws import nws_palette
from palettes.test import new_palette
from PIL import Image
from cStringIO import StringIO
import json
import arrow

app = Flask(__name__)


@app.route('/')
def index():

	old_gif = 'static/test-radar2.gif'
	new_gif = 'static/new-radar.gif'
	image = Image.open(old_gif)
	new_im = change_palette(image, nws_palette, new_palette('rgb'))
	new_im.save(new_gif, "GIF")

	return render_template('index.html',
		old_gif=old_gif,
		new_gif=new_gif,
		old_palette=nws_palette,
		new_palette=new_palette('hsla'))

def build_palettes(data):
	number_of_colors = len(data.form) / 4
	hsl_palette = []
	for i in range(number_of_colors):
		current_color = ()
		for j in ['h', 's', 'l', 'a']:
			color_id = 'color-%d-%s' % (i, j)
			current_color += (int(data.form[color_id]),)
		hsl_palette.append(current_color)

	rgb_palette = hsla_to_rgb(hsl_palette)

	return hsl_palette, rgb_palette

@app.route('/make-gif/', methods=['POST'])
def make_gif():
	hsl_palette, rgb_palette = build_palettes(request)

	old_gif = 'static/test-radar2.gif'
	new_gif = 'static/new-radar.gif'
	image = Image.open(old_gif)
	new_im = change_palette(image, nws_palette, rgb_palette)
	new_im.save(new_gif, "GIF")

	#return request.form
	return new_gif


@app.route('/save-palette/', methods=['POST'])
def save_palette():
	hsl_palette, rgb_palette = build_palettes(request)
	palette_name = 'palette-%d' % (arrow.utcnow().to('US/Eastern').timestamp)

	with open('static/palettes/%s.json' % palette_name, 'w') as outfile:
		json.dump({'hsl_palette': hsl_palette,
				   'rgb_palette': rgb_palette}, outfile)

	# save latest GIF as new file
	Image.open('static/new-radar.gif').save(
		'static/palettes/%s.GIF' % palette_name, 'GIF')

	#TODO: save palette, using naming convention
	return "Success"


@app.route('/show-palette/', methods=['POST'])
def show_palette():
	#TODO: accept file path to palette as argument, show palette + GIF
	return "Success"


if __name__ == '__main__':
	app.run(debug=True)
