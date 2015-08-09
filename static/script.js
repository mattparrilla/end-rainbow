(function() {
	$('form input').change(function(e) {
		var colorRow = $(e.target).parents('.color-row'),
			inputs = colorRow.children(),
			colorIndex = colorRow.attr('id'),
			hsla = [];

		// get hsla values for color
		inputs.each(function() {
			hsla.push($(this).val());
		});

		// update div of same index
		$('.color-cell.' + colorIndex).css('background-color',
			'hsla(' + hsla[0] + ',' + hsla[1] + '%,' + hsla[2] + '%,' + hsla[3] + ')');
	});
})();
