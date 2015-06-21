var getData = function(urls, idx) {
    var http = require('http');
    var BufferList = require('bl');
    var data = new BufferList();
        http.get(urls[idx], function(resp) {
            resp.setEncoding('utf-8');
            resp.on('data', function(d) {
               data.append(new Buffer(d));
               return;
            });

            resp.on('error', function(err) {
                console.log(err);
                return;
            });

            resp.on('end', function() {
                console.log(data.toString());
                if (idx < urls.length-1) {
                    idx++;
                    getData(urls, idx) ;
                } else {
                    return;
                }
            });
        }).on('error', function(e) {
            console.log("Error: "+e)
        });
}
getData(process.argv, 2);