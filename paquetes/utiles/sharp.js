const sharp = require('sharp')

sharp('./pngegg.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');