const {fromDollarToYen} = require("./app.js")
const {fromEuroToDollar} = require("./app.js")
const {fromYenToPound} = require("./app.js")

test("1 Euro should equal 1.2 USD", ()=>{
    let total = fromEuroToDollar(3.5);
    const expected = 3.5*1.2
    expect(total).toBe(expected);
})

test("1.2 Dollars should equal 127.9 Yen", ()=>{
    let total = fromDollarToYen(1.2)
    const expected = 127.9
    expect(total).toBe(expected);
})

test("127.9 Yen should equal 0.8 GBP", ()=>{
    let total = fromYenToPound(127.9)
    const expected = 0.8
    expect(total).toBe(expected);
})