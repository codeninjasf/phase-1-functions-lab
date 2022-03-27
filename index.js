// Functions Lab ( Phase1) Flariron School

const hq = 42;    // hq location

// distanceFromHqInBlocks()     first function test
//returns distance from pickup to Hq in blocks
function distanceFromHqInBlocks(pickup){
    return Math.abs(hq - pickup)             
}

// distanceFromHqInFeet()      second function test
// returns distance from  pickup to hq in feet
function distanceFromHqInFeet(pickup) {
    return Math.abs(hq - pickup) * 264   // one block is 264 feet
}

// distanceTravelledInFeet()    third function test
//returns number of feet travelled from start to destination
function distanceTravelledInFeet(start, destination){
    return Math.abs((start - destination) * 264)   
}

//  calculatesFarePrice()       fourth function test
//returns fare to customer
function calculatesFarePrice(start, destination){
    let feetDistance = (Math.abs((start - destination)* 264))
    if (feetDistance <= 400){
        return 0 
}   else if (feetDistance >= 400 && feetDistance <= 2000){
        return ((feetDistance - 400) * 0.02)
}   else if (feetDistance >= 2000 && feetDistance <= 2500){
        return 25
}   else if (feetDistance >= 2500){
        return ('cannot travel that far')
}
}   
calculatesFarePrice(start, destination)

