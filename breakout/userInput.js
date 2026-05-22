function keyPressed() {
    if (key == " ") {
        if (gameState == "play") {
            paused = !paused
            pause.play()
        }
    }
    switch (gameState) {
        case "start":
            if (keyCode == UP_ARROW) {
                highlighted = 1
            }
            if (keyCode == DOWN_ARROW) {
                highlighted = 2
            }
            paddleHit.play()
            if (keyCode == ENTER || keyCode == RETURN) {
                if (highlighted == 1) {
                    gameState = "paddleSelect"
                }
                else {
                    gameState = "highScores"
                }
            }
            break

        case "paddleSelect":
            if (keyCode == LEFT_ARROW) {
                if (currentPaddle == 0) {
                    noSelect.play()
                }
                else {
                    select.play()
                    currentPaddle--
                }
            }
            else if (keyCode == RIGHT_ARROW) {
                if (currentPaddle == 3) {
                    noSelect.play()
                }
                else {
                    select.play()
                    currentPaddle++
                }
            }
            if (keyCode == ENTER || keyCode == RETURN) {
                paddle = new Paddle(currentPaddle)
                health = 3
                score = 0
                level = 1
                recoverPoints = 5000
                confirmSound.play()
                init()
                gameState = "serve"
            }
            break

        case "serve":
            if (keyCode == ENTER || keyCode == RETURN) {
                ball.dx = random(-3, 3)
                ball.dy = random(-2, -1)
                gameState = "play"
            }
            break

        case "victory":
            if (keyCode == ENTER || keyCode == RETURN) {
                level++
                gbricks = createMap(level)
                paused = false
                gameState = "serve"
            }
            break

        case "gameOver":
            if (keyCode == ENTER || keyCode == RETURN) {
                if (checkIfHighScore()) {
                    highScore.play()
                    gameState = "enterHighScore"
                }
                else {
                    init()
                    gameState = "start"
                }
            }
            break

        case "enterHighScore":
            if (keyCode == LEFT_ARROW) {
                select.play()
                highlightedChar =
                    highlightedChar == 0 ? 2 : highlightedChar - 1
            }
            else if (keyCode == RIGHT_ARROW) {
                select.play()
                highlightedChar =
                    highlightedChar == 2 ? 0 : highlightedChar + 1
            }
            if (keyCode == UP_ARROW) {
                chars[highlightedChar]++
                if (chars[highlightedChar] > 90) {
                    chars[highlightedChar] = 65
                }
            }
            else if (keyCode == DOWN_ARROW) {
                chars[highlightedChar]--
                if (chars[highlightedChar] < 65) {
                    chars[highlightedChar] = 90
                }
            }
            else if (keyCode == ENTER || keyCode == RETURN) {
                saveNewHighScore()
                gameState = "highScores"
            }
            break

        case "highScores":
            if (keyCode == ESCAPE) {
                wallHit.play()
                init()
                gameState = "start"
            }
            break
    }
}
