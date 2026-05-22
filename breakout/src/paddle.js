class Paddle {

    // the Paddle will initialize at the same spot every time, in the middle
    // of the world horizontally, toward the bottom.

    constructor(skin) {
        // x is placed in the middle
        this.x = VIRTUAL_WIDTH / 2 - 32

        // y is placed a little above the bottom edge of the screen
        this.y = VIRTUAL_HEIGHT - 32

        // start us off with no velocity
        this.dx = 0

        // starting dimensions
        this.width = 64 
        this.height = 16

        // the skin only has the effect of changing our color
        this.skin = skin

        // this is the starting size, as the smallest is too tough to start with
        this.size = 2
    }

    update() {
        // keyboard input
        if (keyIsDown(LEFT_ARROW)) {
            this.dx = -PADDLE_SPEED
        }
        else if (keyIsDown(RIGHT_ARROW)) {
            this.dx = PADDLE_SPEED
        }
        else {
            this.dx = 0
        }

        // make sure paddle doesn't go off left or right sides of canvas
        this.x = constrain(this.dx + this.x, 0, VIRTUAL_WIDTH - this.width)
    }

    render() {
        // render the paddle by passing in the quad that corresponds to the size and skin
        image(paddles[this.size + 4 * this.skin - 1], this.x, this.y, this.width, this.height)
    }
}