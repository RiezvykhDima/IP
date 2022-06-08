const os = require('os');
const http = require('http');

function getIpInfo(option) {
    const interfaces = os.networkInterfaces();
    const IP = [];
    let response = '';

    if(option === 'local') {
        for (const key in interfaces) {
            interfaces[key].forEach(element => {
                if (element.internal === false && element.family === 'IPv4') {
                    IP.push(element.address);
                }   
            })
        }
            response = 'your local IP address: ' + IP || '0.0.0.0';
    }

    if(option === 'public') {
        http.get({
            'host': 'api.ipify.org',
            port: 80,
            path: '/' 
        }, (res) => {
            res.on('data', (ip) => console.log(`your public IP adress: ${ip}` || '0.0.0.0'));
        });
    }

    return response
}

console.log(getIpInfo('public'));
