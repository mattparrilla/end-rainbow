// THIS FILE IS NOT IN USE ANYMORE
// Kept for historical reference to backend

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

    var uglyState = {makeGif: true};

    $('form').submit(function(e) {
        e.preventDefault();

        if (uglyState.makeGif) {
            $.post('/make-gif/', $(this).serialize(), function(data) {
                $('#new-gif').attr('src', data + "?" + Math.random());
            });
        } else {
            $.post('/save-palette/', $(this).serialize(), function(data) {
                if (data === 'Success') {
                    console.log('it worked!')
                } else {
                    console.log('fa,ilure');
                }
            });
        }
    });

    $('.make-gif').on('click', function() {
        uglyState.makeGif = true;
        $('form').submit();
    });

    $('.save-palette').on('click', function() {
        uglyState.makeGif = false;
        $('form').submit();
    });
})();
