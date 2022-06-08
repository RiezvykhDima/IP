# What is this?
## using this library you can to know local or public IP address. When calling a function 'getIpInfo', pass parameter you want: 'public' or 'local'

# Installation

```npm install to-know-ip```

# Usage

const getIp = require('to-know-ip');

## local IP
const ip = getIP.getIpInfo('local');

## public IP
const ip = getIP.getIpInfo('public');