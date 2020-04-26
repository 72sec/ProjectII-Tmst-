$(function(){
    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {
        console.log(result);
        var no = 1;
        var all = 0;
        var alldeath = 0;
        var allre = 0;
        for (var country in result) {
            var selectedCountry = result[country];
            var total = selectedCountry.length;
            all = all + selectedCountry[total - 1].confirmed;
            alldeath = alldeath + selectedCountry[total - 1].deaths;
            allre = allre + selectedCountry[total - 1].recovered;
        }
        console.log(all);
        $("#totalconfirm").append(all);
        console.log(alldeath);
        $("#totaldeaths").append(alldeath);
        console.log(allre);
        $("#totalrecovered").append(allre);
        demo.initDashboardPageCharts(all,alldeath,allre);
    });
})