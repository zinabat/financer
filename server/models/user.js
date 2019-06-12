const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    username : { type: String, required: true, index: { unique: true}},
    email    : { type: String, index: { unique: true}},
    password : { type: String, required: true}

}, {timestamps: true});

/** 
* Middleware hashes passwords before saving to db
* Note: only works on save(), not update()
*/
UserSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

/**
 * Validator for passwords
 * 
 * @param  {String} Password to compare
 * @param  {Function} Callback function
 * @return Calls the callback function
 */
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);

        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);