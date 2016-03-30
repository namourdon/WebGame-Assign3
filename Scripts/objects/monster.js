var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //Slime class 
    var Monster = (function (_super) {
        __extends(Monster, _super);
        //private instance variable
        //constructor
        function Monster() {
            _super.call(this, "monster");
            this._reset(this._topBounds);
            this.name = "monster";
        }
        //Private methods
        Monster.prototype._checkBound = function (value) {
            //check that the top of the egg has reached outside of the screen
            if (this.y >= value) {
                this._reset(-this._topBounds);
            }
        };
        Monster.prototype._reset = function (value) {
            //reset the monster offscreen
            this._speed.y = Math.floor(Math.random() * 5) + 5;
            this._speed.x = Math.floor(Math.random() * 4) - 2;
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        };
        Monster.prototype.update = function () {
            //scroll the ground 
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBound(this._bottomBounds);
        };
        return Monster;
    }(objects.GameObject));
    objects.Monster = Monster;
})(objects || (objects = {}));

//# sourceMappingURL=monster.js.map
