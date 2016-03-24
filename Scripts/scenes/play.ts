// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _grass:objects.Grass;
        private _egg:objects.Egg;
        
        
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

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
this._grass.update();
this._egg.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}