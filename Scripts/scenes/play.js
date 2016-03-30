var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            //set monster 
            this._monsterCount = 4;
            this._monsters = new Array();
            //add grass to the scene
            this._grass = new objects.Grass();
            this.addChild(this._grass);
            //add the eggs to the scene
            this._egg = new objects.Egg();
            this.addChild(this._egg);
            //add the player to the scene
            this._player = new objects.PLayer();
            this.addChild(this._player);
            //initialize socre and lives values
            this.scoreValue = 0;
            this.livesValue = 5;
            //add the monster to the scene
            for (var monster = 0; monster < this._monsterCount; monster++) {
                this._monsters[monster] = new objects.Monster();
                this.addChild(this._monsters[monster]);
            }
            this.livesLabel = new createjs.Text("LIVES: " + this.livesValue, "40px Consolas", "#ffffff");
            this.livesLabel.x = config.Screen.WIDTH * 0.1;
            this.livesLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.addChild(this.livesLabel);
            //Add Score Label
            this.scoreLabel = new createjs.Text("SCORE: " + this.scoreValue, "40px Consolas", "#ffffff");
            this.scoreLabel.x = config.Screen.WIDTH * 0.6;
            this.scoreLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.addChild(this.scoreLabel);
            //added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._grass.update();
            this._egg.update();
            this._player.update();
            this._monsters.forEach(function (monster) {
                monster.update();
                //this._collision.check(monster);
                if (_this._collision.check(monster)) {
                    _this.livesValue -= 1;
                    //this.removeChild(monster);
                    _this.livesLabel.text = "Lives: " + _this.livesValue;
                }
            });
            if (this._collision.check(this._egg)) {
                this.scoreValue += 10;
                this.removeChild(this._egg);
                this.scoreLabel.text = "Score: " + this.scoreValue;
                this._egg = new objects.Egg();
                this.addChild(this._egg);
            }
            //EVENT HANDLERS ++++++++++++++++++++
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
