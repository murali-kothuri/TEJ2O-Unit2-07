/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Murali Kothuri
 * Created on: Feb 2026
 * This program is a cookie clicker game.
*/

let cookieCount: number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// adding cookies when button A pressed
input.onButtonPressed(Button.A, function () {
    cookieCount = cookieCount + 1
    basic.pause(100)
    basic.showNumber(cookieCount)
})

// reset score back to 0
input.onButtonPressed(Button.B, function () {
    cookieCount = 0
    basic.showNumber(cookieCount)
})
