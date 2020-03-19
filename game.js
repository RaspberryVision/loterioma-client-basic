$(function() {

    $(document).on('click', '#generate', function() {

        $.get("http://localhost:9901/index.php/generate", {
            seed: 123,
            range: {
                min: 1,
                max: 5
            },
            matrix: [
                [-1, -1, -1],
                [-1, -1, -1],
                [-1, -1, -1],
                [-1, -1, -1],
                [-1, -1, -1]
            ]
        }, function(matrix) {

            for (const [indexX, row] of matrix.entries()) {

                for (const [indexY, field] of row.entries()) {
                    $('.wheel').eq(indexX).children('.field').eq(indexY)
                        .removeClass().addClass('field symbol-' + field).text(field);
                }
            }
        });
    });

});