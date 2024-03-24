const getAge = require('get-age');
const { getUUID } = require('./get-uuid.adapter');
const { httpClientAdapter } = require('./http-client.adapter');

module.exports = {
    getAge,
    getUUID,
    httpClientAdapter
}