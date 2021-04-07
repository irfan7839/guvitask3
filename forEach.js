//1.creating instance of xml http
var request = new XMLHttpRequest();
//2.create a connection//open a connection
request.open('Get', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {
        var data = JSON.parse(this.response);
        var data=data.forEach((ele)=>{
            console.log("name:",ele.name," ","capital:",ele.capital," ","flag:",ele.flag);
        
    })
}
