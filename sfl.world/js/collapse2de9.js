$(function () {
    var collapsed = {}
    try {
        collapsed = JSON.parse(Cookies.get('collapsed'))
        for (const [key, value] of Object.entries(collapsed)) {
            if (value) $('#' + key).collapse()
        }
    } catch (e) {
        console.log(e);
    }
    $('.do-collapse').each(function (index, value) {
        $(this).on('hidden.bs.collapse', function () {
            console.log('hide',$(this).attr('id'));
            collapsed[$(this).attr('id')] = 1;
            Cookies.set('collapsed', JSON.stringify(collapsed));
        }).on('show.bs.collapse', function () {
            console.log('show',$(this).attr('id'));
            collapsed[$(this).attr('id')] = 0;
            Cookies.set('collapsed', JSON.stringify(collapsed));
        })
    });
});
