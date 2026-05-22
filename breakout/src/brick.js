// some of the colors in our palette (to be used with particle systems)
const paletteColors = [
    // blue [0]
    {
        r: 99,
        g: 155,
        b: 255
    },
    // green [1]
    {
        r: 106,
        g: 190,
        b: 47
    },
    // red [2]
    {
        r: 217,
        g: 87,
        b: 99
    },
    // purple [3]
    {
        r: 215,
        g: 123,
        b: 186
    },
    // gold [4]
    {
        r: 251,
        g: 242,
        b: 54
    }
]


class Brick {
    constructor(x, y) {
        // used for coloring and score calculation
        this.color = 0
        this.tier = 0
        this.x = x
        this.y = y
        this.width = 32
        this.height = 16

        // used to determine whether this brick should be rendered
        this.inPlay = true

        // particle system belonging to the brick, emitted on hit
        this.psystem = new Emitter(this.x + this.width/2, this.y + this.height/2)
    }

    render() {
        if (this.inPlay) {
            // multiply color by 4 to get our color offset, then add tier to that
            image(bricks[(this.color) * 4 + this.tier], this.x, this.y, this.width, this.height)
        }
    }

    hit() {

        // emit partcles from brick and colorize
        this.psystem.emit(64)
        this.psystem.setColor(paletteColors[this.color])

        // sound on hit
        brickHit2.stop()
        brickHit2.play()

        // if we're at a higher tier than the base, we need to go down a tier
        // if we're already at the lowest color, else just go down a color
        if (this.tier > 0) {
            if (this.color == 0) {
                this.tier -= 1
                this.color = 4
            }
            else {
                this.color -= 1
            }
        }
        else {
            // if we're in the first tier and the base color, remove brick from play
            if (this.color == 0) {
                this.inPlay = false
            }
            else {
                this.color -= 1
            }
        }

        // play a second layer sound if the brick is destroyed
        if (!this.inPlay) {
            brickHit1.stop()
            brickHit1.play()
        }
    }
}