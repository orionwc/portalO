namespace SpriteKind {
    export const Portal = SpriteKind.create()
}
controller.combos.attachCombo("u+rd", function () {
    game.splash("please don't press evrything")
})
function setlevel () {
    scene.setTile(12, img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, true)
    scene.setTile(3, img`
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
        `, false)
    scene.setTile(8, img`
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
        `, false)
    scene.setTile(14, img`
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
        `, false)
    scene.setTile(13, img`
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
        `, false)
    scene.setTile(9, img`
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
        `, false)
    if (level == 1) {
        scene.setTileMap(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . 5 
            . . . . . . 2 2 2 2 
            3 . . . . 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 
            `)
        dog.verticalMovement(true)
    } else if (level == 2) {
        scene.setTileMap(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . 5 
            . . . . . . 2 2 2 2 
            . . . . 2 . . . 3 2 
            2 2 2 2 2 2 2 2 2 2 
            `)
    } else if (level == 3) {
        enable_portaling = true
        portal1.setImage(img`
            . 2 2 2 2 2 2 2 . 
            2 2 5 5 5 5 5 2 2 
            2 5 7 7 7 7 7 5 2 
            2 5 7 8 8 8 7 5 2 
            2 5 7 8 a 8 7 5 2 
            2 5 7 8 8 8 7 5 2 
            2 5 7 7 7 7 7 5 2 
            2 2 5 5 5 5 5 2 2 
            . 2 2 2 2 2 2 2 . 
            `)
        portal2.setImage(img`
            . 2 2 2 2 2 2 2 . 
            2 2 5 5 5 5 5 2 2 
            2 5 7 7 7 7 7 5 2 
            2 5 7 8 8 8 7 5 2 
            2 5 7 8 a 8 7 5 2 
            2 5 7 8 8 8 7 5 2 
            2 5 7 7 7 7 7 5 2 
            2 2 5 5 5 5 5 2 2 
            . 2 2 2 2 2 2 2 . 
            `)
        scene.setTileMap(img`
            5 . . . 8 . . . . . 
            2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . 9 . . . . . . . . 
            . 2 2 . . . 2 2 2 2 
            . . . . 2 . . . . 3 
            2 2 2 2 2 2 2 2 2 2 
            `)
        for (let index = 0; index < 1; index++) {
            portal1_updown = 0
            portal2_updown = -1
            portal1_leftright = 0
            portal2_leftright = 0
        }
    } else if (level == 4) {
        scene.setTileMap(img`
            . . . . 8 . . . . 5 . . 
            . . . . 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . 
            . . . . . . . 9 . . . . 
            . . . . . . . 2 2 . . . 
            . . . . . . . . . . 2 . 
            . 2 2 . . . 2 2 2 2 2 2 
            . . . . 2 . . . . . 2 3 
            b . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        scene.setTile(11, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        for (let index = 0; index < 1; index++) {
            portal1_updown = 0
            portal2_updown = -1
            portal1_leftright = 0
            portal2_leftright = 0
        }
    } else if (level == 5) {
        scene.setTileMap(img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . 2 . . . . . . . . . . 
            . . 2 . . . . . . . . 5 
            . . . 2 . . . . . 2 2 2 
            . . . . 2 . . . . . . . 
            . . . . . 2 . . . . . . 
            . . . . . . 2 . . . . . 
            9 . . . . . . 2 8 . . 3 
            2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        for (let index = 0; index < 1; index++) {
            portal1_updown = -1
            portal2_updown = -1
            portal1_leftright = 1
            portal2_leftright = 1
        }
    } else if (level == 6) {
        scene.setTileMap(img`
            2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . 2 
            2 . . . . . . . . 2 
            2 . . . . . . . . 2 
            2 . 2 2 2 2 2 . . 2 
            2 . . . . . 2 . . 2 
            2 . . . . . 2 . . 2 
            2 8 3 c . 9 2 . 5 2 
            2 2 2 2 2 2 2 2 2 2 
            `)
        for (let index = 0; index < 1; index++) {
            portal1_updown = -1
            portal2_updown = -1
            portal1_leftright = 1
            portal2_leftright = 1
        }
        enable_firing_portals = true
    } else if (level == 7) {
        scene.setTileMap(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . 2 . . . . 2 
            2 . . . . . . . 2 . . . 5 2 
            2 . . . . 2 . . . . . . 2 2 
            2 . . . . 2 . . . . . . . 2 
            2 . . 2 2 2 . . . . . 2 2 3 
            2 9 . . . 2 2 2 2 2 2 2 8 2 
            2 . 3 1 . a . . c . 7 . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 . . 5 . . . . . . . 5 . 5 . 
            5 . . . . 5 . . . . . . 5 . 5 . 
            5 . . . . . 5 5 5 5 5 5 5 5 5 . 
            5 . . . . 5 . . . . . . . . . . 
            . 5 . . 5 . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        scene.setTile(1, img`
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
            `, false)
        scene.setTile(10, img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, true)
    } else if (level == 8) {
        for (let index = 0; index < 1; index++) {
            portal1_updown = 0
            portal2_updown = 0
            portal1_leftright = -1
            portal2_leftright = 0
        }
        scene.setTileMap(img`
            2222222222222222222222222222222222222222
            2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2
            222a22222222222222222222222222aaaaa22222
            2aaaaaaaaaaaaaaaaaaaaa7...1a2a22aaaaaaa2
            2aaaaaaaaaa2222aaaaaaa....1a2aaaa2aaaaa2
            2aaaaaaa2222..2222222222222a2aa222aaaaa2
            2aaaaaa222..................22aaaaaaaaa2
            2aaaaa2222...22222222222222.2222aaaaaaa2
            2aaaa2222...2........2......2aaa2aaaaaa2
            2aaa2222...2................2aaaa2aaaaa2
            2a2aaaa2..2.................2aaaaa2aaaa2
            2a222aa22...................2aaaaaa2aaa2
            2aaaa2aa22.................82aaaaaa22aa2
            2222aa2aa22..........2......2aaaaaaaaa22
            2aaa2aa2aa2222.......2......2aaaaaaa2222
            2a2aa2aa2aa2..2......2..29222aaaaaa2aaa2
            2aa2aaaaa2aa..73222....2....2aaaaa2aaaa2
            22a22222222222222222222.....2aaaa2aaaaa2
            22aaaaaaaaaa.1a5............2aaa2aaaaaa2
            2222aa222222.2222222222222222aa2aaaaaaa2
            22222a7......aaaaaaaaaaaaaaaaa2aaaaaaaa2
            2222222222222222222222222222222222222222
            `)
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 . . 5 . . . . . . . 5 . 5 . 
            5 . . . . 5 . . . . . . 5 . 5 . 
            5 . . . . . 5 5 5 5 5 5 5 5 5 . 
            5 . . . . 5 . . . . . . . . . . 
            . 5 . . 5 . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        scene.setTile(1, img`
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d d d 1 1 1 1 d d d f . . 
            . . f b d b f d d f b d b f . . 
            . . f c d c f 1 1 f c d c f . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . f f f c d b 1 b d f f f f . 
            f c 1 1 1 c b f b f c 1 1 1 c f 
            f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
            f b f b f f f f f f b f b f b f 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `, false)
        scene.setTile(10, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, true)
        enable_firing_portals = false
        myCounter.setDigitColor(0)
        myCounter.count = 0
    } else if (level == 9) {
        scene.setTile(10, img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, true)
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 . . 5 . . . . . . . 5 . 5 . 
            5 . . . . 5 . . . . . . 5 . 5 . 
            5 . . . . . 5 5 5 5 5 5 5 5 5 . 
            5 . . . . 5 . . . . . . . . . . 
            . 5 . . 5 . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        scene.setTile(1, img`
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d d d 1 1 1 1 d d d f . . 
            . . f b d b f d d f b d b f . . 
            . . f c d c f 1 1 f c d c f . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . f f f c d b 1 b d f f f f . 
            f c 1 1 1 c b f b f c 1 1 1 c f 
            f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
            f b f b f f f f f f b f b f b f 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `, false)
        scene.setTileMap(img`
            2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . 2 
            2 . . . . . . 2 2 2 
            2 . . . . . . 5 2 2 
            2 2 2 2 2 2 . 2 2 2 
            2 . . . . . . 2 2 2 
            2 2 2 9 2 . . 2 c 2 
            2 3 . . 1 . a 7 8 2 
            2 2 2 2 2 2 2 2 2 2 
            `)
        max = 8
        row = 2
        enable_traveling_block_1 = true
        enable_firing_portals = true
        sc = 1
    } else if (level == 10) {
        game.splash("Training Complete!   ..", "                     u")
        game.splash("You will need to use all your skills from training to complete the next challenge")
        level += 1
        setlevel()
    } else if (level == 11) {
        enable_traveling_block_1 = true
        scene.setTile(10, img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, true)
        scene.setTile(6, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, true)
        scene.setTile(1, img`
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d d d 1 1 1 1 d d d f . . 
            . . f b d b f d d f b d b f . . 
            . . f c d c f 1 1 f c d c f . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . f f f c d b 1 b d f f f f . 
            f c 1 1 1 c b f b f c 1 1 1 c f 
            f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
            f b f b f f f f f f b f b f b f 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `, false)
        scene.setTile(4, img`
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
            `, true)
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 . . 5 . . . . . . . 5 . 5 . 
            5 . . . . 5 . . . . . . 5 . 5 . 
            5 . . . . . 5 5 5 5 5 5 5 5 5 . 
            5 . . . . 5 . . . . . . . . . . 
            . 5 . . 5 . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        scene.setTile(5, img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, true)
        scene.setTile(11, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        scene.setTile(15, img`
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
            `, true)
        max = 7
        max2 = 20
        sc = 1
        sc2 = 5
        row = 3
        row2 = 22
        scene.setTileMap(img`
            2222222222222222222222227.22222222222..7222222222..f.2222222..........
            3.......................2......2........2......1...2........2.........
            2.......22...222.....2...2.....2.....2.22......1..22.222222..2........
            2.......22..2...2...2.2...2....2....22.22222822222.2.2.....2..2.......
            244444442222.....2222..2....2..2...222.22..1.2aaa2.2.2.....22..22.....
            2.......................22a22222..2222922.2222aaa2.2.2.....2.2...2....
            2.......................7241.....aaaaaaa2.7aaaa2.2.2.2........2..2....
            2222222222222aa22222222222222222222aaa2b2222222212.2.2..2.......22....
            26666616666666aaaaaaaaaaaaaaaaaaaaaa2aaaaaaaaaaa72.....22..2222222....
            2622222222222222222222222222222222662222222222222222a22222.......2....
            26222222222222222222222222222222222.........2....2.2.2....2222...2....
            26f6666666666666666666666222222222225.......2....2.2.2.....2...2.2....
            22222222222222222222222262222222222.2.......2....2.2.2.....2..2..2....
            2aaaaaaaaaa2aaaaaaaaaaf262aaaaaaaa2..2..22222....2.2.2.......2...2....
            2aaaaaaaaaa2222aa2222222.22222222a2..2.2....2....2..........2....2....
            2aaaaaaaaaaaaaaa2aaaaaa2.2......2.2..2.2....2....222a22..2222222.2....
            2aaaaaaaaaaaaaa2aaaaaaa2.2......2.2..2.2....2....2......2..2.....2....
            2222222aa222222222222222.2......2.2..2.2....2....2.....2...2....2.....
            2....a22aaaaa..........2.2.....52.2..2.2....2....2...2.....2...2......
            2....aaa222aa..........2.2..22222.2..2.2....2....2.2..2....2..2.......
            2....aaaaaa2a..........2.2......2.2..2.2....2....222a222..2..2........
            2............2.........2.2......2.2..2.2....2....2.......2..2.........
            2aaaa22222222222222....2.2.222222.2..2.2....2....2......2..2..........
            2aaa2a.............7...2.2......2.2..2.2....2....2.....2...2..........
            2aa22a.................2.2......2.2..2.2....2....2...2.....2..........
            22aaaa.................2.222222.2.2..2.2....2....222a222..22..........
            2222aa.................2.2......2.2..2.2....2....2.1.1...222..........
            2aaa2a.................2.2......2.2.........2....271.1..2..2..........
            2aaaa2.................1.2......1.2.........2....2..e..2...2..........
            22222222222222222222222222222222222...d.....2....22222222222..........
            `)
        portal1_leftright = 0
        portal2_leftright = 0
        portal1_updown = 0
        portal2_updown = 0
        enable_traveling_block_2 = true
    } else {
        game.over(true)
    }
    scene.placeOnRandomTile(dog.sprite, 3)
    scene.placeOnRandomTile(portal1, 8)
    scene.placeOnRandomTile(portal2, 9)
    dog.maxJump = 1
    dog.jumpVelocity = jump_speed
    if (instructions_on) {
        instrunctions()
    }
    enable_firing_portals = false
}
controller.combos.attachCombo("u+lr", function () {
    game.splash("please don't press evrything")
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    dog.jumpVelocity = jump_speed
    myDigit.setDigitColor(0)
})
controller.combos.attachCombo("u+rl", function () {
    game.splash("please don't press evrything")
})
scene.onHitTile(SpriteKind.Player, 11, function (sprite) {
    dog.jumpVelocity = jump_speed + jump_speed
    myDigit.setDigitColor(10)
})
function on_start () {
    jump_speed = 125
    game.splash("it is impossible to lose")
    if (game.ask("Would you like to do...", "training?")) {
        instructions_on = game.ask("Do you want instructions?")
        PI = 3.1415926535
        enable_firing_portals = false
        scene.setTile(2, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, true)
        scene.setTile(5, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . 5 5 5 5 . . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . 5 5 5 5 5 5 5 5 . . . . . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . 5 5 5 . . 5 5 5 . . . . . 
            . . 5 5 . . . . . 5 5 5 . . . . 
            . 5 5 . . . . . . . 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        dog.horizontalMovement()
        dog.maxJump = 1
        scene.setTileMap(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . 5 
            2 2 2 2 2 2 2 2 2 2 
            `)
        if (instructions_on) {
            game.splash("Use the left and right buttons to move to the star")
        }
        portal1 = sprites.create(img`
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
            `, SpriteKind.Portal)
        portal2 = sprites.create(img`
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
            `, SpriteKind.Portal)
        myDigit = sevenseg.createDigit(SegmentStyle.Medium, 5)
        portal1_next = true
        controller.combos.setTriggerType(TriggerType.Continuous)
        portaling = false
        myCounter = sevenseg.createCounter(SegmentStyle.Medium, SegmentScale.Half, 3)
        myDigit.setDigitColor(0)
        portal_velocity = 100
        scene.cameraFollowSprite(dog.sprite)
    } else {
        myCounter = sevenseg.createCounter(SegmentStyle.Medium, SegmentScale.Half, 3)
        PI = 3.1415926535
        scene.setTile(2, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, true)
        scene.setTile(5, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . 5 5 5 5 . . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . 5 5 5 5 5 5 5 5 . . . . . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . 5 5 5 . . 5 5 5 . . . . . 
            . . 5 5 . . . . . 5 5 5 . . . . 
            . 5 5 . . . . . . . 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        myDigit = sevenseg.createDigit(SegmentStyle.Medium, 5)
        enable_firing_portals = false
        controller.combos.setTriggerType(TriggerType.Menu)
        dog.horizontalMovement()
        myDigit.setDigitColor(0)
        dog.maxJump = 1
        portal1 = sprites.create(img`
            . 2 2 2 2 2 2 2 . 
            2 2 5 5 5 5 5 2 2 
            2 5 7 7 7 7 7 5 2 
            2 5 7 8 8 8 7 5 2 
            2 5 7 8 a 8 7 5 2 
            2 5 7 8 8 8 7 5 2 
            2 5 7 7 7 7 7 5 2 
            2 2 5 5 5 5 5 2 2 
            . 2 2 2 2 2 2 2 . 
            `, SpriteKind.Portal)
        portal2 = sprites.create(img`
            . 2 2 2 2 2 2 2 . 
            2 2 5 5 5 5 5 2 2 
            2 5 7 7 7 7 7 5 2 
            2 5 7 8 8 8 7 5 2 
            2 5 7 8 a 8 7 5 2 
            2 5 7 8 8 8 7 5 2 
            2 5 7 7 7 7 7 5 2 
            2 2 5 5 5 5 5 2 2 
            . 2 2 2 2 2 2 2 . 
            `, SpriteKind.Portal)
        portal1_next = true
        portaling = false
        portal_velocity = 100
        scene.cameraFollowSprite(dog.sprite)
        dog.verticalMovement(true)
        enable_portaling = true
        enable_traveling_block_1 = true
        level = 11
        setlevel()
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (enable_firing_portals) {
        portaling = true
        angleRadians = angle * (PI / 180)
        vel_x = portal_velocity * Math.cos(angleRadians)
        vel_y = 0 - portal_velocity * Math.sin(angleRadians)
        if (portal1_next) {
            portal1.setPosition(dog.sprite.x, dog.sprite.y)
            portal1.setVelocity(vel_x, vel_y)
        } else {
            portal2.setPosition(dog.sprite.x, dog.sprite.y)
            portal2.setVelocity(vel_x, vel_y)
        }
        portal1_next = !(portal1_next)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Portal, function (sprite, otherSprite) {
    if (enable_portaling && (!(portaling) && (dog.sprite.overlapsWith(portal1) || dog.sprite.overlapsWith(portal2)))) {
        portal_processing = true
        portaling = true
        vel_x = sprite.vx
        vel_y = sprite.vy
        if (otherSprite == portal2) {
            if (portal1_leftright != 0) {
                vel_x = portal1_leftright * Math.abs(vel_x)
            }
            if (portal1_updown != 0) {
                vel_y = portal1_updown * Math.abs(vel_y)
            }
            sprite.setPosition(portal1.x, portal1.y)
        } else {
            if (portal2_leftright != 0) {
                vel_x = portal2_leftright * Math.abs(vel_x)
            }
            if (portal2_updown != 0) {
                vel_y = portal2_updown * Math.abs(vel_y)
            }
            sprite.setPosition(portal2.x, portal2.y)
        }
        sprite.setVelocity(vel_x, vel_y)
        portal_processing = false
    }
})
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    scene.setTile(1, img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, true)
    scene.setTile(7, img`
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
        `, false)
    scene.setTile(10, img`
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
        `, false)
    key = true
})
scene.onHitTile(SpriteKind.Portal, 15, function (sprite) {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (enable_firing_portals) {
        angle += 45
        if (angle >= 360) {
            angle += -360
        }
        myCounter.count = angle
    }
})
scene.onHitTile(SpriteKind.Player, 5, function (sprite) {
    if (level == 11) {
        if (star == 1) {
            level += 1
            setlevel()
        } else {
            tiles.placeOnTile(portal1, tiles.getTileLocation(33, 28))
            tiles.placeOnTile(portal2, tiles.getTileLocation(33, 28))
            scene.setTile(5, sprites.dungeon.chestOpen, false)
            scene.setTile(6, img`
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
                `, false)
            enable_firing_portals = true
            star += 1
        }
    } else {
        level += 1
        setlevel()
    }
})
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    not_hit_orange = false
    scene.setTile(4, img`
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
        `, false)
    scene.setTile(10, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, true)
})
scene.onHitTile(SpriteKind.Portal, 5, function (sprite) {
    sprite.setVelocity(0, 0)
})
function instrunctions () {
    if (level == 1) {
        game.splash("Use the up arrow to jump")
    } else if (level == 3) {
        game.splash("Go into the portal")
    } else if (level == 5) {
        game.splash("Portals carry your speed")
    } else if (level == 6) {
        game.splash("Open the treasure chest to do the things below", "Use the down arrow to set the angle and the A button to shoot")
    } else if (level == 4) {
        game.setDialogFrame(img`
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            .....................6666.......................
            ...................66655666.....................
            ..................7777666666....................
            .................677778881166...................
            .................777778881156...................
            ................67777888885566..................
            ................67778886666566..................
            ................66778866666666..................
            ................68778866666666..................
            .................687786666686...................
            .................688788666866...................
            ..................6888888886....................
            ...................66888866.....................
            .....................6666.......................
            ................................................
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.splash("Every time you hit the ball shown below you will see an 'S' above your head because your next jump will be Super high")
        game.showLongText("", DialogLayout.Bottom)
        game.setDialogCursor(img`
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
            `)
        game.setDialogFrame(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `)
    } else if (level == 7) {
        game.splash("If you go in the portal, the only way out may be to go through a door which is locked, so you must find a key.", "Be careful: a skeleton can take the key and lock the doors")
    } else if (level == 2) {
        game.splash("This next challenge you will need later")
    } else if (level == 8) {
        game.splash("Here you can explore", "If a portal you exit is floating, you will exit in the same direction as you went into the other portal")
    } else if (level == 9) {
        game.splash("Remember that a fired portal will stop whenever it reaches a red block, moving or not")
    }
}
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    scene.setTile(15, img`
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
        `, false)
    if (star == 0) {
        scene.placeOnRandomTile(portal2, 13)
        scene.placeOnRandomTile(portal1, 14)
        dog.sprite.x += 32
        scene.setTile(15, img`
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
            `, true)
        portal2_updown = -1
    } else {
        if (key) {
            scene.setTile(7, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 5 5 . . . . . . . . . . . . 
                . 5 . . 5 . . . . . . . 5 . 5 . 
                5 . . . . 5 . . . . . . 5 . 5 . 
                5 . . . . . 5 5 5 5 5 5 5 5 5 . 
                5 . . . . 5 . . . . . . . . . . 
                . 5 . . 5 . . . . . . . . . . . 
                . . 5 5 . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, false)
            tiles.placeOnTile(dog.sprite, tiles.getTileLocation(26, 12))
            game.setDialogFrame(img`
                .....cccccccccccccc.....
                ...cbd111111111111dbc...
                ..cd1111111111111111dc..
                .cd111111111111111111dc.
                .b11111111111111111111b.
                cd11111111111111111111dc
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                cd11111111111111111111dc
                cb11111111111111111111bc
                ccd111111111111111111dc.
                .ccd1111111111111111dcc.
                ..c111111111111111dbcc..
                .b11dcccccccccccccccc...
                cddcccccccccccccccc.....
                ccccc...................
                `)
            game.showLongText("WOW! Teleportation", DialogLayout.Bottom)
        } else {
            dog.sprite.x += 32
            scene.setTile(15, img`
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
                `, true)
            scene.setTile(5, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 . . . . . . . . . 
                . . . . . . 5 . . . . . . . . . 
                . . . . . 5 5 5 5 . . . . . . . 
                . . . . 5 5 5 5 5 5 . . . . . . 
                . . . 5 5 5 5 5 5 5 5 . . . . . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 . . . . . . 
                . . . . 5 5 5 5 5 5 . . . . . . 
                . . . 5 5 5 . . 5 5 5 . . . . . 
                . . 5 5 . . . . . 5 5 5 . . . . 
                . 5 5 . . . . . . . 5 5 . . . . 
                . . . . . . . . . . . . . . . . 
                `, true)
        }
    }
})
scene.onHitTile(SpriteKind.Player, 1, function (sprite) {
    scene.setTile(1, img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, false)
    scene.setTile(7, img`
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
        `, true)
    key = false
    scene.setTile(10, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, true)
    if (level != 11) {
        scene.setTile(10, img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, true)
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 . . 5 . . . . . . . 5 . 5 . 
            5 . . . . 5 . . . . . . 5 . 5 . 
            5 . . . . . 5 5 5 5 5 5 5 5 5 . 
            5 . . . . 5 . . . . . . . . . . 
            . 5 . . 5 . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
    } else {
        if (not_hit_orange) {
            scene.setTile(10, img`
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
                1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
                1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                `, true)
        }
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 . . 5 . . . . . . . 5 . 5 . 
            5 . . . . 5 . . . . . . 5 . 5 . 
            5 . . . . . 5 5 5 5 5 5 5 5 5 . 
            5 . . . . 5 . . . . . . . . . . 
            . 5 . . 5 . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
    }
})
scene.onHitTile(SpriteKind.Player, 12, function (sprite) {
    scene.setTile(12, img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, false)
    game.splash("you can fire portals")
    enable_firing_portals = true
})
controller.combos.attachCombo("u+ld", function () {
    game.splash("please don't press evrything")
})
scene.onHitTile(SpriteKind.Portal, 2, function (sprite) {
    if (sprite == portal1) {
        if (sprite.isHittingTile(CollisionDirection.Left)) {
            portal1_leftright = 1
        } else if (sprite.isHittingTile(CollisionDirection.Right)) {
            portal1_leftright = -1
        } else {
            portal1_leftright = 0
        }
        if (sprite.isHittingTile(CollisionDirection.Top)) {
            portal1_updown = 1
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            portal1_updown = -1
        } else {
            portal1_updown = 0
        }
    } else {
        if (sprite.isHittingTile(CollisionDirection.Left)) {
            portal2_leftright = 1
        } else if (sprite.isHittingTile(CollisionDirection.Right)) {
            portal2_leftright = -1
        } else {
            portal2_leftright = 0
        }
        if (sprite.isHittingTile(CollisionDirection.Top)) {
            portal2_updown = 1
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            portal2_updown = -1
        } else {
            portal2_updown = 0
        }
    }
    sprite.setVelocity(0, 0)
})
let col2 = 0
let col = 0
let not_hit_orange = false
let star = 0
let key = false
let portal_processing = false
let vel_y = 0
let vel_x = 0
let angle = 0
let angleRadians = 0
let portal_velocity = 0
let portaling = false
let portal1_next = false
let PI = 0
let myDigit: SevenSegDigit = null
let instructions_on = false
let jump_speed = 0
let enable_traveling_block_2 = false
let row2 = 0
let sc2 = 0
let max2 = 0
let sc = 0
let enable_traveling_block_1 = false
let row = 0
let max = 0
let myCounter: DigitCounter = null
let enable_firing_portals = false
let portal2_leftright = 0
let portal1_leftright = 0
let portal2_updown = 0
let portal1_updown = 0
let portal2: Sprite = null
let portal1: Sprite = null
let enable_portaling = false
let level = 0
let dog: Corgio = null
dog = corgio.create(SpriteKind.Player)
scene.setBackgroundImage(img`
    ffbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fbe4444444444ebffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    be444444444444ebfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    be444444444444ebfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    be444444444444ebfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bee4444444444eebfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    beeeeeeeeeeeeeebfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    beeeeeeeeeeeeeebfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333ffff
    bbbbbbbddbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333ffff
    cbbbbbbccbbbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fff3333333333fffffffffffffffffffffffffffffffffffffffffffffffffffffff333ffff
    ccccccbccbccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ff333333333333ffffffffffffffffffffffffffffffff333fffffffffffffffffff333ffff
    beeeeecbbceeeeebfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ff333333333333ffffffffffffffffffffffffffffffff333fffffffffffffffffff333ffff
    beeeeeeeeeeeeeebfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ff333ffffff333ffffffffffffffffffffffffffffffff333fffffffffffffffffff333ffff
    bceeeeeeeeeeeecbfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ff333ffffff333ffffffffffffffffffffffffffffffff333fffffffffffffffffff333ffff
    bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ff333ffffff333ffffffffffffffffffffffffffffffff333fffffffffffffffffff333ffff
    fbbffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ff333ffffff333fffffffffffffffffffffffffff3333333333333ffffffffffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333ffffff333fffffffffffffffffffffffffff3333333333333ffffffffffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333333333333fffffffffffffffffffffffffff3333333333333ffffffffffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333333333333ffffffffffffffffffffffffffffffff333fffffffffffffffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff33333333333fffffffffffffffffffffffffffffffff333fffffffffffffffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333fffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333fffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333fffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333ffffffffffffffffffffffffffff333ffffffffff333fffffffffffffffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333ffffffffffffff3333333fffffff333f33333ffff333fffffffffffffffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333fffffffffffff333333333ffffff3333333333fff333fffff33333f33ffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333ffffffffffff33333333333fffff3333ffff33fff333ffff333333333ffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333ffffffffffff333fffff333fffff333ffffffffff333fff3333333333ffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333ffffffffffff333fffff333fffff333ffffffffff333fff333ffff333ffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333ffffffffffff333fffff333fffff333ffffffffff333fff333ffff333ffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333ffffffffffff333fffff333fffff333ffffffffff333fff333ffff333ffffff333ffff
    2222222222222222222222222222222222222222222222222222222222222222222222211111111111111ff333ffffffffffff33333333333fffff333ffffffffff333fff3333333333ffffff333ffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ff333fffffffffffff333333333ffffff333ffffffffff333ffff333333333ffffff333ffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ff333ffffffffffffff3333333fffffff333ffffffffff333fffff33333f33ffffff333ffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ff333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    fffffffffffffffffffffffffff22222222222222222fffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ffffffffffffffffffffffff22222222222222222222222ffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    fffffffffffffffffffff22222222222222222222222222222fffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    fffffffffffffffffff222222222222222222222222222222222fffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    fffffffffffffffff2222222222222222222222222222222222222fffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff222222222222222222222222222222222222222ffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff2222222222222222222222222222222222222222222ffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff222222222222222222222222222222222222222222222fffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff22222222222222222444444444444444222222222222222ffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff2222222222222224444444444444444444442222222222222fffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff222222222222224444444444444444444444444222222222222ffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff22222222222224444444444444444444444444444422222222222fffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff2222222222224444444444444444444444444444444442222222222ffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff222222222222444444444444444444444444444444444442222222222fffffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffff
    ffffff22222222222244444444444444444444444444444444444442222222222ffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ffffffff
    ffffff22222222224444444444444444444444444444444444444444422222222ffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ffffffff
    fffff2222222222444444444444444444444444444444444444444444422222222fffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555fffffff
    ffff222222222224444444444444455555555555554444444444444444222222222ffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fffff
    ffff222222222244444444444445555555555555555544444444444444422222222ffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555fff
    fff22222222224444444444445555555555555555555554444444444444422222222fff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555fff
    fff22222222244444444444555555555555555555555555544444444444442222222fff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555ffff
    ff2222222222444444444455555555555555555555555555544444444444422222222ff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffffff
    ff2222222224444444444555555555555555555555555555554444444444442222222ff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff
    ff2222222224444444445555555555577777777777555555555444444444442222222ff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555ffff
    f222222222444444444555555555557777777777777555555555444444444442222222f11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555fff555555ff
    f222222222444444444555555555777777777777777775555555444444444442222222f11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fffffff55555f
    f222222224444444445555555557777777777777777777555555544444444444222222f11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fffffffff55555
    2222222224444444445555555577777777777777777777755555544444444444222222211111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fffffffffff5555
    2222222224444444455555555577777788888887777777755555554444444444222222211111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fffffffffffff55
    2222222244444444455555555777778888888888877777775555554444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    2222222244444444555555557777788888888888887777777555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    2222222244444444555555557777788888888888887777777555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    2222222244444444555555557777888888aaaaa8888777777555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    222222224444444455555555777788888aaaaaaa888777777555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    222222224444444455555555777788888aaaaaaa888777777555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    222222224444444455555555777788888aaaaaaa888777777555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    222222224444444455555555777788888aaaaaaa888777777555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    222222224444444455555555777788888aaaaaaa888777777555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    2222222244444444555555557777888888aaaaa8888777777555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    2222222244444444555555557777788888888888887777777555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    2222222244444444555555557777788888888888887777777555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    2222222244444444555555555777778888888888877777775555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    2222222244444444555555555577777788888887777777755555555444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    2222222244444444455555555577777777777777777777755555554444444444422222211111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    f222222224444444455555555557777777777777777777555555554444444444222222f11111111111111ffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    f222222224444444445555555555777777777777777775555555544444444444222222f11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f222222224444444445555555555557777777777777555555555544444444444222222f11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff2222222244444444455555555555577777777777555555555544444444444222222ff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff2222222244444444455555555555555555555555555555555544444444444222222ff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff2222222224444444445555555555555555555555555555555444444444442222222ff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff22222222444444444455555555555555555555555555555444444444444222222fff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff22222222244444444445555555555555555555555555554444444444442222222fff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff222222224444444444455555555555555555555555554444444444444222222ffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff222222222444444444444555555555555555555555444444444444442222222ffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff2222222224444444444444555555555555555554444444444444442222222fffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff22222222244444444444444555555555555544444444444444442222222ffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff22222222244444444444444444444444444444444444444444442222222ffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff222222222444444444444444444444444444444444444444442222222fffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff2222222222444444444444444444444444444444444444422222222ffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff22222222224444444444444444444444444444444444422222222fffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff222222222244444444444444444444444444444444422222222ffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff2222222222244444444444444444444444444444222222222fffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff22222222222244444444444444444444444442222222222ffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff222222222222244444444444444444444422222222222fffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff2222222222222224444444444444442222222222222ffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff222222222222222222222222222222222222222ffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff2222222222222222222222222222222222222fffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff222222222222222222222222222222222fffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    fffffffffffffffffffff22222222222222222222222222222fffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ffffffffffffffffffffffff22222222222222222222222ffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    fffffffffffffffffffffffffff22222222222222222fffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
pause(1000)
game.setDialogCursor(dog.sprite.image)
game.showLongText("Welcome to Portal. Portal has portals, stars and treasure chests. press 'A' ", DialogLayout.Bottom)
game.showLongText("press 'A' again to begin your adventure", DialogLayout.Bottom)
pause(100)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.setDialogCursor(img`
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
    `)
on_start()
game.onUpdate(function () {
    if (portaling && !(portal_processing) && (!(dog.sprite.overlapsWith(portal1)) && !(dog.sprite.overlapsWith(portal2)))) {
        if (true) {
            portaling = false
        }
    }
})
game.onUpdate(function () {
    if (enable_firing_portals) {
        myCounter.y = dog.sprite.y - 32
        myCounter.x = dog.sprite.x
        myCounter.setDigitColor(9)
    } else {
        myCounter.setDigitColor(0)
    }
    myDigit.y = dog.sprite.y - 32
    myDigit.x = dog.sprite.x
})
game.onUpdateInterval(500, function () {
    if (enable_traveling_block_1) {
        col += 1
        if (max + sc < col) {
            col = sc
        }
        scene.setTileAt(scene.getTile(col, row), 2)
        scene.setTileAt(scene.getTile(col - 1, row), 0)
        if (enable_traveling_block_2) {
            col2 += 1
            if (max2 + sc2 < col2) {
                col2 = sc2
            }
            scene.setTileAt(scene.getTile(col2, row2), 2)
            scene.setTileAt(scene.getTile(col2 - 1, row2), 0)
        }
    }
})
