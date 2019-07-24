function submit() {
    data = {
        documents: [
            {
                id: 1,
                content: input
            } 
        ]
     }
    // $.ajax({
    //     type: 'POST', 
    //     url: "http://34.87.77.73:5000/api/v2/sentiment", 
    //     crossDomain: true,
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //     data: JSON.stringify(data), 
    //     headers: {  
    //         "Access-Control-Allow-Origin": "allow"
    //      },
    //     success: function(result){
    //         res = result['results'][0];
    //         sentiment = res['score'];
    //         score = res['confidentScore'];
    //         $("#sentiment").text(sentiment);
    //         $("#score").text(score);
    //     }
    // });
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://34.87.77.73:5000/api/v2/sentiment', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        // do something to response
        console.log(this.responseText);
    };
    xhr.send(data);
}

$(document).ready(function(){
    
});