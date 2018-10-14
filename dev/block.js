var BLOCK_TYPE_WOOD = Block.createSpecialType({
    base: 4
});

IDRegistry.genBlockID("oakDrawer");
Block.createBlockWithRotation("oakDrawer", [
    {
        name: "Oak Drawer",
        texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_WOOD);


IDRegistry.genBlockID("brichDrawer");
Block.createBlockWithRotation("brichDrawer", [
    {
        name: "Brich Drawer",
        texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_WOOD);


IDRegistry.genBlockID("bigDrawer");
Block.createBlockWithRotation("bigDrawer", [
    {
        name: "Big oak Drawer",
        texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_WOOD);


IDRegistry.genBlockID("acaciaDrawer");
Block.createBlockWithRotation("acaciaDrawer", [
    {
        name: "Acacia Drawer",
        texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer");
Block.createBlockWithRotation("spruceDrawer", [
    {
        name: "Spruce Drawer",
        texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer");
Block.createBlockWithRotation("jungleDrawer", [
    {
        name: "Jungle Drawer",
        texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_WOOD);

Drawer.registerStorage(BlockID.oakDrawer);
Drawer.registerStorage(BlockID.brichDrawer);
Drawer.registerStorage(BlockID.bigDrawer);
Drawer.registerStorage(BlockID.acaciaDrawer);
Drawer.registerStorage(BlockID.spruceDrawer);
Drawer.registerStorage(BlockID.jungleDrawer);