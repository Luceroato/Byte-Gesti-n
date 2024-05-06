const htpps = require('https');

function sendMessageWhatsap(txtResponse , number){

    const data = JSON.stringify({
        messaging_product: 'whatsapp',
        to: number,
        text: {
            body: txtResponse
        },
        type: 'text'
    });

    const options = {
        hostname: 'graph.facebook.com',
        path: '/v18.0/272960832574599/messages',
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer EAANlRZABcfpEBO2ZCKNeA7QZCyLWCq7EWosI9ch8s99kQOcZCZCkblzIDrxTDmDy3QW8phpYvTNwzIfVSvvvTMErUqyEGKyQQwIiMPjkAYkraoO2dIBNV2H8qaet1yUZCYT74C34ozHtoUy0jhDQhbhsOFipn73nKPRalLASl7yWWobvuheU9xqHFLpt3QJPZCo5JoVEVa0CE9q8hChW5QKq0pBg2TjZACZAe0ZCgzdTQZD'
        }
    };

    const req = htpps.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', (d) => {
            process.stdout.write(d);
        }); 
    });

    req.on('error', (error) => {
        console.error(error);
    });

    req.write(data);
    req.end();

};

module.exports = {  
    sendMessageWhatsap
};

