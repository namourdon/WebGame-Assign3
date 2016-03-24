// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _grass:objects.Grass;
        private _egg:objects.Egg;
        private _monster:objects.Monster;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
            
            
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

//add grass to the scene
        this._grass= new objects.Grass();
        this.addChild(this._grass);   
       
//add the eggs to the scene
this._egg= new objects.Egg();
this.addChild(this._egg);

//add the monster to the scene
this._monster= new objects.Monster();
this.addChild(this._monster);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
this._grass.update();
this._egg.update();
this._monster.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}