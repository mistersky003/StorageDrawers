LIBRARY({
    name: "DrawerAPI",
    version: 1,
    shared: true,
    api: "CoreEngine",
});

var Drawer = {

    registerStorage: function (id){

TileEntity.registerPrototype(id, {
    defaultValues: {
      id: 0,
      tile: null,
      count: 0
    },
  
     init:function(){
         if(__config__.access("animation") == true){
        this.animationSource = new Animation.Item(this.x+.5, this.y+1, this.z+.5);
        this.animationSource.load(); 
        }
    },
  
    addSource: function (){
    let source = Player.getCarriedItem();
    let player = Player.get();
    let sneaking = Entity.getSneaking(player);
    
    if ((this.data.id == 0) || (this.data.id == source.id) && (sneaking == false)){
        if ((this.data.tile == source.data) || (this.data.tile == null)){
        this.data.count += source.count;
        this.data.id = source.id;
        this.data.tile = source.data;
        Player.setCarriedItem(0, 0, 0);
        }
      } else if(source.count == 0){
      Game.message("Count: " + this.data.count); 
        }
    },

    getIcon: function (){
        if(__config__.access("animation") == true){
        if (this.data.id > 0){
    this.animationSource.describeItem({
            id: this.data.id,
            count: 1,
            data: this.data.tile,
            size: 0.5,
            rotation:[3.14/2, 0, 0]
        });
       this.animationSource.load(); 
} else {
   this.animationSource.destroy(); 
} 
}
    },
    
    getSource: function (){
    let source = Player.getCarriedItem();
    let player = Player.get();
    let sneaking = Entity.getSneaking(player);
    if ((source.id == this.data.id) || (source.id == 0)){
   if((sneaking == true) && (this.data.count > 0)){
        World.drop(this.x+.5, this.y+1, this.z+.5, this.data.id, 1, this.data.tile);
        this.data.count--;
         Game.message("Count: " + this.data.count); 
       }
    }
 if (this.data.count == 0){
       this.data.id = 0;
       this.data.tile = null;
       this.data.count = 0;
       Game.message("Empty");
       }
    },
    
    click: function (){
    this.addSource();
    this.getSource();
    this.getIcon(); 
    },

destroyBlock: function(){
this.animationSource.destroy();
World.drop(this.x+.5, this.y+.5, this.z+.5, this.data.id, this.data.count, this.data.tile); 
     }
});

},

registerRecipes: function (id, source, tile){
    
Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: id, count: 1, data: 0}, [
        "aaa",
        "a a",
        "aaa"
    ], ['a', source, tile]);
    
});

  }
};

EXPORT("Drawer", Drawer);