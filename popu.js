//1.creating instance of xml http
var request = new XMLHttpRequest();
//2.create a connection//open a connection
request.open('Get', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {
        var data = JSON.parse(this.response);
        var popu=data.filter((ele)=>{
            return ele.population<200000;

        })
    for(i=0;i<popu.length;i++){
        console.log("name",":",popu[i].name,"=>","population",":",popu[i].population)
    }
}