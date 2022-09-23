input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= X; Y++) {
            led.plotBrightness(Y, 4 - X, 255)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= X; Y++) {
            led.plotBrightness(Y, X, 255)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= X; Y++) {
            led.plotBrightness(X, 4 - Y, 255)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= X; Y++) {
            led.plot(X, Y)
            basic.pause(100)
        }
    }
})
