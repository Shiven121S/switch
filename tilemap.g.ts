// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`14000f0002040402020404040404020202020202020202020a0c000708000000000009020202020202020202020500000000060305000902020202020202020202020303030302020a000702020202020202020202020202020202020a000007020202020202020202020202020202020a0000000704040202020202020202020202040408000000000000070402020202020202020800000000000b0000000000070202020202020a0b0b0b000000060305000000000902020202020203030500000602020a00000000090202020202020a0d0000060202020203050000090202020202020203030302020202020a000000090202020202020202020202020202020a000000090202020202020202020202020202020205000602020202020202020202020202020202020203020001`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . 2 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 . . . . . . . . . . . 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 . . . . 2 2 
2 2 2 2 2 2 2 2 . . 2 2 2 2 . . . . 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency8,myTiles.tile3,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14], TileScale.Eight);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "transparency8":return transparency8;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile11":
            case "tile13":return tile13;
            case "myTile12":
            case "tile14":return tile14;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
