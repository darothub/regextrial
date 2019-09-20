// import fetch from 'node-fetch';
console.log("hello")

const getData=()=>{
    return new Promise(function(resolve, reject){
        var data = ""
        const fs = require('fs')
        fs.readFile('file.txt', function (err, resp) {
            if (err) throw err;
            data += resp.toString()
            resolve(data)

        })
    })  
}
const findMatch=()=>{
    const patternNumber = /\+?\d{11,13}/g
    const patternToken = /\b[0-9a-f]{6}\b/g
    const patternAddress = /(\d+\s)(\w+\s\w+,\s\w+.)/g
    
    getData()
        .then(data => {
            const resultNumber = data.match(patternNumber)
            const resultToken = data.match(patternToken)
            const resultAddress = data.match(patternAddress)
            console.log(`Phone: [${resultNumber}]\nToken: [${resultToken}]\nAddress: [${resultAddress}]`)
        })
        .catch(error => console.log(error))
}

findMatch()

    // console.log(getData('./file.txt'))
// const findMatch =()=>{
//     let data = getData('file.txt')
//     console.log(data)

// }

// pattern = /\+?\d{11,13}/gm
// console.log("data:", data)

// findMatch()