radio.onReceivedNumber(function (receivedNumber) {
    estado_de_alarma = receivedNumber
})
let estado_de_alarma = 0
radio.setGroup(111)
basic.forever(function () {
    let alarma = 0
    if (alarma == 1) {
        basic.showIcon(IconNames.Sad)
    } else if (alarma == 1) {
        basic.showIcon(IconNames.Happy)
    }
})
