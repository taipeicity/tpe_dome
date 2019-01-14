(function(jQuery) {
    var $ = jQuery;
    var url = 'https://www.gov.taipei/OpenData.aspx?SN=BD297A1729022566';

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).done(function(data) {
        var news_data = data;

        for (var i = 0; i < news_data.length; i++) {
            var news_title = news_data[i].title;
            var news_url = news_data[i].Source;
            var date_str = news_data[i].發布日期;
            var news_deptName = news_data[i].發布單位;

            //var tmp = date_str.match(/^(\d+)-(\d+)-(\d+)/);
            //var news_date = tmp[1] + '/' + tmp[2] + '/' + tmp[3];
            var news_date = date_str.substring(0, 9);

            var item_str = '<tr><td>' + (i + 1) + '</td><td><a href="' + news_url + '" target="_blank">' + news_title + '</a></td><td>' + news_deptName + '</td><td>' + news_date + '</td></tr>';
            $('#news_table > tbody').append(item_str);
        }
    });
})(jQuery)
