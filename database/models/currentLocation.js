const db = require('../config.js');
const Location = require('./locations.js');

var CurrentLocation = db.Model.extend({
    tableName: 'location_watch',
    hasTimeStamps: true,
    userID: function() {
        return this.belongsTo(User, 'user_id');
    },
    locationID: function() {
        return this.belongsTo(Location, 'location_id')
    },
});

module.exports = db.model('CurrentLocation', CurrentLocation);