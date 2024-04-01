const { getUUID } = require('./get-uuid.adapter');
const { httpClientAdapter } = require('./http-client.adapter');
const buildLogger = require('./logger.adapter')
const getAge = require('get-age');

module.exports = {
    buildLogger,
    getAge,
    getUUID,
    httpClientAdapter
}