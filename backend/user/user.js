var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  location: {
   type: {
     type: String,
     enum: ['Point'],
     index: true
   },
   coordinates: [Number]
 }
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
