// problem-1
function seerToMon(seer){
    // Check if the parameter is not a number
    if (typeof seer != 'number'){
        return 'Error: Please put a number';
    }
    const mon = seer / 40;
    return mon;
}
const result = seerToMon(80);
console.log(result);