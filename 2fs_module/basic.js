const fs = require('fs');
const {add,sub} = require('./math');
const _ = require('lodash');

fs.readFile('./code.txt','utf-8',(err,data)=>{ //'utf-8' helps us to get actual data otherwise data returns buffer.
    if (!err) {
        console.log("Content Async:", data) //returns the data if utf-8 passed in readFile argument otherwise it give us buffer.
    }else{
        console.log(err.message);
        
    }
});

let content = fs.readFileSync('./code.txt','utf-8');
console.log("File Content Sync:",content);

console.log("This should be print after the file content.")


//using modules
console.log(add(5,10));
console.log(sub(5,10));


// third party module lodash
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkedArr = _.chunk(arr,2);
console.log("Chunked Array:", chunkedArr);



