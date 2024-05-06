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
            Authorization: 'Bearer EAAazBitWn84BO2siSEEZALZCsn2U6jB3eIDevJkVb9vqrviWKACCx6UwWoBZAtdr1uiMIn4TpbnB0Hf0s6LmXYyZC0fuQrBl6iYOoee939MRhRq7NZCdGrZBFZAEjkfWk3zLoG3ZCJftHRWaKMuMeXfRTcVGyGJ0LVstmCMo9bgzeklL89PBMj7is5htgFS4s0Qk'
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

