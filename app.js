function fromEuroToDollar (amountInEuro){
    let result = amountInEuro*1.2
    return result
}

function fromDollarToYen (amountInDollars){
    //1.2 dollars = 127.9 Yen
    let result = (amountInDollars/1.2)*127.9
    return result
}

function fromYenToPound (amountInYen){
    //127.9 Yen = 0.8 Pounds
    let result = (amountInYen/127.9)*0.8
    return result
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}


