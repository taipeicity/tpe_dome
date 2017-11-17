(function(jQuery) {
    var $ = jQuery;
    var url = 'https://doit.blob.core.windows.net/portal/portal_NewsList_Dome.json';

    $.ajax({
        url: url,
        type: 'GET',
        crossDomain: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).done(function(data) {
        var news_data = JSON.parse(data);

        for (var i = 0; i < news_data.length; i++) {
            var news_title = news_data[i].title;
            var news_url = news_data[i].url;
            var date_str = news_data[i].postdate;
            var news_deptName = news_data[i].deptName;

            var tmp = date_str.match(/^(\d+)-(\d+)-(\d+)/);
            var news_date = tmp[1] + '/' + tmp[2] + '/' + tmp[3];

            var item_str = '<tr><td>' + (i + 1) + '</td><td><a href="' + news_url + '" target="_blank">' + news_title + '</a></td><td>' + news_deptName + '</td><td>' + news_date + '</td></tr>';
            $('#news_table > tbody').append(item_str);
        }
    });
})(jQuery)