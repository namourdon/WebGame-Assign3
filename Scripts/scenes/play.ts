// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _grass: objects.Grass;
        private _egg: objects.Egg;
        private _monsters: objects.Monster[];
        private _monsterCount: number;
        private _player: objects.PLayer;
        private _collision: managers.Collision;
        private scoreValue: number;
        private livesValue: number;
        private livesLabel: createjs.Text;
        private scoreLabel: createjs.Text;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            //set monster 
            this._monsterCount = 4;
            this._monsters = new Array<objects.Monster>();

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
            for (var monster: number = 0; monster < this._monsterCount; monster++) {
                this._monsters[monster] = new objects.Monster();
                this.addChild(this._monsters[monster]);
            }
            this.livesLabel = new createjs.Text(
                "LIVES: " + this.livesValue,
                "40px Consolas",
                "#ffffff"
            );
            this.livesLabel.x = config.Screen.WIDTH * 0.1;
            this.livesLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.addChild(this.livesLabel);
            //Add Score Label

            this.scoreLabel = new createjs.Text(
                "SCORE: " + this.scoreValue,
                "40px Consolas",
                "#ffffff"
            );
            this.scoreLabel.x = config.Screen.WIDTH * 0.6;
            this.scoreLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.addChild(this.scoreLabel);

            //added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        }




        // PLAY Scene updates here
        public update(): void {
            this._grass.update();
            this._egg.update();
            this._player.update();
            this._monsters.forEach(monster => {
                monster.update();
                //this._collision.check(monster);
                
                if (this._collision.check(monster)) {
                    this.livesValue -= 1;
                    //this.removeChild(monster);
                    this.livesLabel.text = "Lives: " + this.livesValue;
                    //monster= new objects.Monster();
                    //this.addChild(monster);
                }

            });
         
            if (this._collision.check(this._egg)) {
                this.scoreValue += 10;
                this.removeChild(this._egg);
                this.scoreLabel.text = "Score: " + this.scoreValue;
                this._egg= new objects.Egg();
                this.addChild(this._egg);

            }
        

            //EVENT HANDLERS ++++++++++++++++++++

        }
    }
}
