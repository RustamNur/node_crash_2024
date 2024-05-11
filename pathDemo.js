import path from 'path'

const filePath = './dir1//dir2/test.txt'


// path.normalize()
let data = path.normalize(filePath)
console.log(data);
// OUT : dir1\dir2\test.txt

// path.basename()
 data = path.basename(filePath)
console.log(data);
// OUT : test.txt

// path.dirname()
data = path.dirname(filePath)
console.log(data);
// OUT : ./dir1//dir2

// path.extname()
data = path.extname(filePath)
console.log(data);
// OUT : .txt

// path.parse()
data = path.parse(filePath)
console.log(data);
// OUT :{
            //  root: ''
            // dir : './dir1//dir2
            // base : 'test.txt'
            // ext : '.txt'
            // name : 'test'
        //}

