const alarmGet = require('./errorAlarm');
const urlGet = require('./urlParser');
const zooGet = require('./zooSpeak');

module.exports = {
    ...urlGet,
    ...alarmGet,
    ...zooGet,
}