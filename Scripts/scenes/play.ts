// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _grass:objects.Grass;
        
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
            
            
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {


        this._grass= new objects.Grass();
        this.addChild(this._grass);   


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
this._grass.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}