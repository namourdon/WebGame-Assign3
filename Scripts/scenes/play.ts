// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _grass: objects.Grass;
        private _egg: objects.Egg;
        private _monsters: objects.Monster[];
        private _monsterCount: number;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            //set monster 
            this._monsterCount = 2;
            this._monsters = new Array<objects.Monster>();

            //add grass to the scene
            this._grass = new objects.Grass();
            this.addChild(this._grass);

            //add the eggs to the scene
            this._egg = new objects.Egg();
            this.addChild(this._egg);

            //add the monster to the scene
            for (var monster: number = 0; monster < this._monsterCount; monster++) {
                this._monsters[monster]= new objects.Monster();
                this.addChild(this._monsters[monster]);
            }

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._grass.update();
            this._egg.update();
            
            for (var monster in this._monsters){
                this._monsters[monster].update();
            }
        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}