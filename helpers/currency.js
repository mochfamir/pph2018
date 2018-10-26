function currency(number) {
    let string = String(number)
    let output = ''
    let count = 0
    for (let i = string.length - 1; i >= 0; i--) {
        if (count === 3) {
            output = string[i] + '.' + output
            count = 0
        } else {
            output = string[i] + output
        }
        count += 1
    }
    return `Rp ${output},00`
}

module.exports = currency