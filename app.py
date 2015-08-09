from flask import Flask, render_template, request
from change_palette import change_palette
from palettes.nws import nws_palette
from palettes.test import new_palette
from PIL import Image

app = Flask(__name__)


@app.route('/')
def index():

	old_gif = 'static/test-radar2.gif'
	#new_gif = 'static/new-images/new-radar.gif'
	#new_im = change_palette(old_gif, nws_palette, new_rgb_palette)
	#new_im.save(new_gif, "GIF")

	return render_template('index.html',
		old_gif=old_gif,
		old_palette=nws_palette,
		new_palette=new_palette)

@app.route('/make-image/', methods=['POST'])
def make_image():
	return request.form['h']

if __name__ == '__main__':
	app.run(debug=True)
