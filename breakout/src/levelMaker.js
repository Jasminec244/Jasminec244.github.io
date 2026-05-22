function createMap(level) {
    let mbricks = []

    // randomly choose the number of rows
    let numRows = parseInt(random(1, 5))

    // randomly choose the number of columns, ensuring odd
    let numCols = parseInt(random(7, 13))
    numCols = numCols % 2 == 0 ? (numCols + 1) : numCols

    // highest possible spawned brick color in this level; ensure we
    // don't go above 3
    let highestTier = min(2, floor(level / 4))

    // highest color of the highest tier, no higher than 5
    let highestColor = min(4, level % 4 + 3)

    // lay out bricks such that they touch each other and fill the space
    for (let i = 1; i <= numRows; i++) {
        // whether we want to enable skipping for this row
        let skipPattern = random(2) < 1 ? true : false

        // whether we want to enable alternating colors for this row
        let alternatePattern = random(2) < 1 ? true : false
        
        // choose two colors to alternate between
        let alternateColor1 = parseInt(random(0, highestColor))
        let alternateColor2 = parseInt(random(0, highestColor))
        let alternateTier1 = parseInt(random(0, highestTier))
        let alternateTier2 = parseInt(random(0, highestTier))
        
        // used only when we want to skip a block, for skip pattern
        let skipFlag = random(2) < 1 ? true : false

        // used only when we want to alternate a block, for alternate pattern
        let alternateFlag = random(2) < 1 ? true : false

        // solid color we'll use if we're not skipping or alternating
        let solidColor = parseInt(random(0, highestColor))
        let solidTier = parseInt(random(0, highestTier))

        for (let j = 0; j < numCols; j++) {
            // if skipping is turned on and we're on a skip iteration...
            if (skipPattern && skipFlag){
                // turn skipping off for the next iteration
                skipFlag = !skipFlag
                continue
            }

            else {
                // flip the flag to true on an iteration we don't use it
                skipFlag = ! skipFlag
            }

            let b = new Brick(j * 32 + (13 - numCols) * 16, i * 16)

            // if we're alternating, figure out which color/tier we're on
            if (alternatePattern && alternateFlag) {
                b.color = alternateColor1
                b.tier = alternateTier1
                alternateFlag = !alternateFlag
            }
            else {
                b.color = alternateColor2
                b.tier = alternateTier2
                alternateFlag = !alternateFlag
            }
                
            // if not alternating and we made it here, use the solid color/tier
            if (!alternatePattern) {
                b.color = solidColor
                b.tier = solidTier
            }
            mbricks.push(b)
        }
    }
    if (mbricks.length == 0) {
        return this.createMap(level)
    }
    else {
        return mbricks
    }
}