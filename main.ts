radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        estado_de_alarma = 1
    } else if (receivedNumber == 2) {
        estado_de_alarma = 2
    }
})
let alarma = 0
let estado_de_alarma = 0
radio.setGroup(111)
music.setVolume(35)
basic.forever(function () {
    if (estado_de_alarma == 1) {
        if (input.magneticForce(Dimension.Strength) == 150) {
            radio.sendNumber(1)
            alarma = 1
            music.ringTone(262)
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.pause(10)
            music.stopAllSounds()
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.pause(10)
        } else {
            radio.sendNumber(0)
            alarma = 0
            basic.clearScreen()
        }
    }
})
