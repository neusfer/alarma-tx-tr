radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        estado_de_alarma = 1
    } else if (receivedNumber == 2) {
        estado_de_alarma = 2
    }
})
let estado_de_alarma = 0
radio.setGroup(111)
music.setVolume(35)
basic.forever(function () {
	
})
