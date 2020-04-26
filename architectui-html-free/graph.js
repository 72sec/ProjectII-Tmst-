$(function(){
    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {
        console.log(result);
        var no = 1;
        var all = 0;
        var alldeath = 0;
        var allre = 0;

        var com1= 0;
        var com2= 0;
        var com3= 0;
        var com4= 0;
        var com5= 0;
        var com6= 0;
        var com7= 0;

        var dead1 = 0 ,dead2=0,dead3=0,dead4=0,dead5=0,dead6=0,dead7=0;
        var rec1 = 0,rec2 = 0,rec3 = 0,rec4 = 0,rec5 = 0,rec6 = 0,rec7 = 0;

        for (var country in result) {
            var selectedCountry = result[country];
            var total = selectedCountry.length;
            all = all + selectedCountry[total - 1].confirmed;
            alldeath = alldeath + selectedCountry[total - 1].deaths;
            allre = allre + selectedCountry[total - 1].recovered;

            day1 = selectedCountry[total - 1].date;
            day2 = selectedCountry[total - 2].date;
            day3 = selectedCountry[total - 3].date;
            day4 = selectedCountry[total - 4].date;
            day5 = selectedCountry[total - 5].date;
            day6 = selectedCountry[total - 6].date;
            day7 = selectedCountry[total - 7].date;

            dead1 = dead1 + selectedCountry[total - 1].deaths;
            dead2 = dead2 + selectedCountry[total - 2].deaths;
            dead3 = dead3 + selectedCountry[total - 3].deaths;
            dead4 = dead4 + selectedCountry[total - 4].deaths;
            dead5 = dead5 + selectedCountry[total - 5].deaths;
            dead6 = dead6 + selectedCountry[total - 6].deaths;
            dead7 = dead7 + selectedCountry[total - 7].deaths;

            com1 = com1 + selectedCountry[total - 1].confirmed;
            com2 = com2 + selectedCountry[total - 2].confirmed;
            com3 = com3 + selectedCountry[total - 3].confirmed;
            com4 = com4 + selectedCountry[total - 4].confirmed;
            com5 = com5 + selectedCountry[total - 5].confirmed;
            com6 = com6 + selectedCountry[total - 6].confirmed;
            com7 = com7 + selectedCountry[total - 7].confirmed;

            rec1 = rec1 + selectedCountry[total - 1].recovered;
            rec2 = rec2 + selectedCountry[total - 2].recovered;
            rec3 = rec3 + selectedCountry[total - 3].recovered;
            rec4 = rec4 + selectedCountry[total - 4].recovered;
            rec5 = rec5 + selectedCountry[total - 5].recovered;
            rec6 = rec6 + selectedCountry[total - 6].recovered;
            rec7 = rec7 + selectedCountry[total - 7].recovered;

        }
        console.log(all);
        $("#totalconfirm").append(all);
        console.log(alldeath);
        $("#totaldeaths").append(alldeath);
        console.log(allre);
        $("#totalrecovered").append(allre);
      
        demo.initDashboardPageCharts(all,alldeath,allre,day1,day2,day3,day4,day5,day6,day7,
            dead1,dead2,dead3,dead4,dead5,dead6,dead7,com1,com2,com3,com4,com5,com6,com7,rec1,rec2
            ,rec3,rec4,rec5,rec6,rec7);
    });
})