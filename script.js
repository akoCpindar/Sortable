$(document).ready(function () {

	console.log('asdasdsads');

    $('#headings th').click(function() {
        var id = $(this).attr('id');
        var asc = (!$(this).attr('asc')); // switch the order, true if not set

        $('#headings th').find('span').removeClass( "fa-caret-down" ).addClass( "fa-unsorted" );
        $('#headings th').find('span').removeClass( "fa-caret-up" ).addClass( "fa-unsorted" );

        // set asc="asc" when sorted in ascending order
        $('#headings th').each(function() {
            $(this).removeAttr('asc');
        });
        if (asc){
            $(this).attr('asc', 'asc');
            $(this).find('span').removeClass( "fa-unsorted" ).addClass( "fa-caret-down" );
        } else {
            $(this).find('span').removeClass( "fa-unsorted" ).addClass( "fa-caret-up" );
        }

        sortResults(id, asc);
    });
    showResults(json_data());
});

function json_data(){
    var json = [  
	   {  
	      "id":"00219",
	      "name":"John",
	      "start_date":"2017-08-12",
	      "end_date":"2017-08-20",
	      "total_fee":"30000",
	      "trading_day":"2017-08-05",
	      "status":"confirmed"
	   },
	   {  
	      "id":"00325",
	      "name":"Darken",
	      "start_date":"2017-09-28",
	      "end_date":"2017-09-30",
	      "total_fee":"21000",
	      "trading_day":"2017-08-05",
	      "status":"confirmed"
	   },
	   {  
	      "id":"00231",
	      "name":"Mike",
	      "start_date":"2017-10-11",
	      "end_date":"2017-10-13",
	      "total_fee":"18000",
	      "trading_day":"2017-08-05",
	      "status":"confirmed"
	   },
	   {  
	      "id":"00217",
	      "name":"Queeny",
	      "start_date":"2017-11-22",
	      "end_date":"2017-11-25",
	      "total_fee":"25000",
	      "trading_day":"2017-08-05",
	      "status":"confirmed"
	   },
	];
    return json;
}


function sortResults(prop, asc) {

    var obj = json_data();
    people = obj.sort(function(a, b) {
        if (asc) {
            return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {
            return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });
    showResults(obj);
}
function showResults(obj){
    var data = '';
    for (var i in obj)
    {
        if(obj[i]["status"] == 'confirmed') {
            data+="<tr>";
            data+="<td>"+obj[i]["id"]+"</td>";
            data+="<td>"+obj[i]["name"]+"</td>";
            data+="<td>"+obj[i]["start_date"]+"</td>";
            data+="<td>"+obj[i]["end_date"]+"</td>";
            data+="<td>"+obj[i]["total_fee"]+"</td>";
            data+="<td>"+obj[i]["trading_day"]+"</td>";
        
        } else if(obj[i]["status"] == 'cancelled'){
            data+='<tr style="background-color:gray;">';
            data+="<td>"+obj[i]["id"]+"</td>";
            data+="<td>"+obj[i]["name"]+"</td>";
            data+="<td>"+obj[i]["start_date"]+"</td>";
            data+="<td>"+obj[i]["end_date"]+"</td>";
            data+="<td>"+obj[i]["total_fee"]+"</td>";
            data+="<td>"+obj[i]["trading_day"]+"</td>";

        } else {
            data+="<tr>";
            data+="<td>"+obj[i]["id"]+"</td>";
            data+="<td>"+obj[i]["name"]+"</td>";
            data+="<td>"+obj[i]["start_date"]+"</td>";
            data+="<td>"+obj[i]["end_date"]+"</td>";
            data+="<td>"+obj[i]["total_fee"]+"</td>";
            data+="<td>"+obj[i]["trading_day"]+"</td>";

        }
    }
    $("#tbl_booking_all").html(data);
}