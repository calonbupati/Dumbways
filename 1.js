const cetakGambar = (value) => {
    let string = ''
    
    if (value % 2 === 1) {
        for (let i = 0; i < value; i++) {
            for (let j = 0; j < value; j++) {
                if (j === 0) {
                    string += '*'
                } else if (j === (value - 1)) {
                    string += '*'
                } else if (i === Math.floor(value / 2)) {
                    string += '*'
                } else {
                    string += '='
                }
            }
    
            console.log(string)
            string = ''
        }
    } else {
        console.log('Value tidak ganjil')
    }
}

cetakGambar(5)
