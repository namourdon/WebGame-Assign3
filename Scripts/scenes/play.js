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
            this._monsterCount = 2;
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
            //add the monster to the scene
            for (var monster = 0; monster < this._monsterCount; monster++) {
                this._monsters[monster] = new objects.Monster();
                this.addChild(this._monsters[monster]);
            }
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            this._grass.update();
            this._egg.update();
            this._player.update();
            for (var monster in this._monsters) {
                this._monsters[monster].update();
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
