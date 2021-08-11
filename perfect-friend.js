// problem-4
function perfectFriend(arr){
    let fiveLettersName = arr[0];
    for (let i = 0; i < arr.length; i++) {
        // Check if all elements in array are not strings
        if(typeof arr[i] != "string") {
            return 'Error: Please put a valid name!';
        }
        let element = arr[i];
        if(element.length == 5){
            fiveLettersName = element;
            break;
        }
    }
    return fiveLettersName;
}

const  friends = ["Naim","Nahid","Tanvir","Rabiul","Turja","Rafiq"];
const myPerfectFriend = perfectFriend(friends);
console.log(myPerfectFriend);