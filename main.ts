radio.onReceivedNumber(function (receivedNumber) {
    alarma = receivedNumber
})
let alarma = 0
radio.setGroup(111)
basic.forever(function () {
    if (alarma == 1) {
        basic.showIcon(IconNames.Sad)
    } else if (alarma == 0) {
        basic.showIcon(IconNames.Happy)
    }
})
