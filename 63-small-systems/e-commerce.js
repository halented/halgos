var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayName = function () {
        console.log(this.name);
        return this.name;
    };
    return User;
}());
