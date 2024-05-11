// import fs from "fs";
import fs from "fs/promises";

// Read file - Callback version

// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Read File - Synchronous version

// try {
//   const data1 = fs.readFileSync("./test.txt", "utf8");
//   console.log(data1);
// } catch (error) {
//   console.log(error);
// }

// Read File - Promise Version

// fs.readFile('./test1.txt', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err)=>console.log(err));

// Read File - async/await
const fileRead = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log("Reading text...");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile()

const writeData = async () => {
  try {
    await fs.writeFile(
      "./test.txt",
      "I am writing here ,probably I am over writing the text"
    );
    console.log("File overwriting...");
  } catch (error) {
    console.log(error);
  }
};

const appendedFile = async () => {
  try {
    await fs.appendFile(
      "./test.txt",
      "\nThis is a appendened line to old test text file"
    );
    console.log("The appendened text...");
  } catch (error) {
    console.log(error);
  }
};

writeData();
appendedFile();
fileRead();
