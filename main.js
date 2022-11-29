module.exports = async function (input) {  
    // основная функция  
    function openArr (AsyncArr) {
        let returnArr = [];
        for (let i = 0; i < AsyncArr.size(); i++) {
            if (Number.isInteger(AsyncArr.read(i))) {
                returnArr.push(AsyncArr.read(i));
            } else {
                returnArr = returnArr.concat(openArr(AsyncArr.read(i))) 
            }
        }
        return returnArr
    }

    let answer = openArr(input);
    return answer;  
}