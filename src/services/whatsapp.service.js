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
            Authorization: 'Bearer EAANlRZABcfpEBOxDGG7MZBq5TZBeIav5m8n3uZA6XONhh4h2mQ52WsRY4PZA3uBryj3V3R2ssZC5xsFRynp7XRK39bHYrXFbAnLcDuKRnABZBy1pYZAqxscHZBAM1VZBkFt18YY9fyT7m3nzO1DOXWfgkQq49itYAwbCMdhyZAxrkbeXDIPPDWZAh3VVcTCvCco2mIJH'
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

