$(function(){
    
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var selectedCountry = result[country];
        console.log(selectedCountry);

        for(var i=0;i<selectedCountry.length;i++){
           
            var row = `<tr>
            <th scope="row">${selectedCountry[i].date}</th>
            <td>${selectedCountry[i].confirmed}</td>
            <td>${selectedCountry[i].deaths}</td>
            <td>${selectedCountry[i].recovered}</td>
          </tr>`

          $("#data").append(row);
        }
        var nowConfirmed = selectedCountry[(selectedCountry.length) - 1].confirmed;
        var nowDeaths = selectedCountry[(selectedCountry.length) - 1].deaths;
        var nowRecovered = selectedCountry[(selectedCountry.length) - 1].recovered;
        $("#nowConfirmed").append(nowConfirmed);
        $("#nowDeaths").append(nowDeaths);
        $("#nowRecovered").append(nowRecovered);
        
        
    });

})