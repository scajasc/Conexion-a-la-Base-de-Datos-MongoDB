const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/mean-red';

mongoose.connect(URI)
    .then(db => console.log('la base esta funcando mi don'))
    .catch(err => console.log(err));

module.exports = mongoose;