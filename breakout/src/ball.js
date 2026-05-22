class Ball {
    constructor(skin) {
        // initial position
        this.x = VIRTUAL_WIDTH / 2 - 4
        this.y = VIRTUAL_HEIGHT - 42

        // size of ball
        this.width = 8
        this.height = 8

        // these keep track of velocity
        this.dx = 0
        this.dy = 0

        // this will represent the color of the ball
        this.skin = skin
    }

    collides(target) {
        // first, check to see if the left edge of either is farther to the right
        // than the right edge of the other
        if (this.x > target.x + target.width || target.x > this.x + this.width) {
            return false
        }
        
        // then check to see if the bottom edge of either is higher than the top
        // edge of the other
        if (this.y > target.y + target.height || target.y > this.y + this.height) {
            return false
        }

        // if the above aren't true, they're overlapping
        return true
    }

    reset() {
        this.x = (width / SCALE) / 2 - 4
        this.y = (height / SCALE) - 42
        this.dx = 0
        this.dy = 0
    }

    update() {
        this.x += this.dx
        this.y += this.dy

        // allow ball to bounce off walls
        if (this.x <= 0) {
            this.x = 0
            this.dx = -this.dx
            wallHit.play()
        }

        if (this.x >= width / SCALE - 8) {
            this.x = width / SCALE - 8
            this.dx = -this.dx
            wallHit.play()
        }

        if (this.y <= 0) {
            this.y = 0
            this.dy = -this.dy
            wallHit.play()
        } 
    }

    render() {
        // draws ball of color corresponding to skin
        image(balls[this.skin], this.x, this.y, this.width, this.height)
    }
}