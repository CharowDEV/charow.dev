import fs from "fs";

const dir = "./posts/drafts";

console.log("Check if drafts folder exists...");

if (!fs.existsSync(dir)) {
    console.log("Creating drafts folder...");
    fs.mkdirSync(dir, { recursive: true });
}