// Takes tile sheet and returns an array of tiles
function generateQuads(spritesheet, tileWidth, tileHeight) {
    let sheetWidth = spritesheet.width / tileWidth
    let sheetHeight = spritesheet.height / tileHeight

    let sprites = []

    for (let j = 0; j < sheetHeight; j++)
    {
        for (let i = 0; i < sheetWidth; i++)
        {
            let img = spritesheet.get(i * tileWidth, j * tileHeight, tileWidth, tileHeight)
            sprites.push(img)
        }
    }
    return sprites
}

// This function is specifically made to piece out the bricks from the
// sprite sheet. We return a subset of generateQuads
function generateQuadBricks(spritesheet) {
    return generateQuads(spritesheet, 32, 16).slice(0, 20)
}

// generates single quad
function newQuad(x, y, quadWidth, quadHeight, spritesheet) {
    return spritesheet.get(x, y, quadWidth, quadHeight)
}

// This function is specifically made to piece out the paddles from the
// sprite sheet. For this, we have to piece out the paddles a little more
// manually, since they are all different sizes.
function generateQuadPaddles(spritesheet) {
    let x = 0
    let y = 64

    let quads = []

    for (let i = 0; i < 4; i++) {
        // smallest
        quads.push(newQuad(x, y, 32, 16, spritesheet))

        // medium
        quads.push(newQuad(x + 32, y, 64, 16, spritesheet))

        // large
        quads.push(newQuad(x + 96, y, 96, 16, spritesheet))

        // huge
        quads.push(newQuad(x, y + 16, 128, 16, spritesheet))

        x = 0
        y += 32
    }
    return quads
}

// This function is specifically made to piece out the balls from the
// sprite sheet. For this, we have to piece out the balls a little more
// manually, since they are in an awkward part of the sheet and small.
function generateQuadBalls(spritesheet) {
    let x = 96
    let y = 48

    let quads = []

    for (let i = 0; i < 4; i++) {
        quads.push(newQuad(x, y, 8, 8, spritesheet))
        x += 8
    }

    x = 96
    y = 56

    for (let i = 0; i < 3; i++) {
        quads.push(newQuad(x, y, 8, 8, spritesheet))
        x += 8
    }

    return quads
}

// generates an array with both hearts
function generateHearts(spritesheet) {
    let quads = []
    let x = y = 0
    for (let i = 0; i < 2; i++) {
        quads.push(newQuad(x, y, 10, 9, spritesheet))
        x += 9
    }
    return quads
}

// generates an array with both arrows
function generateArrows(spritesheet) {
    let quads = []
    let x = y = 0
    for (let i = 0; i < 2; i++) {
        quads.push(newQuad(x, y, 24, 24, spritesheet))
        x += 24
    }
    return quads
}