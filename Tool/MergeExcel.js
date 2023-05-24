const path = require("path");
const fs = require("fs");

const get_excel = path.join(__dirname, "AllExcel");
const found_excel = path.join(__dirname, "FoundExcel");

fs.readdir(get_excel, function (err, files) {
  if (err) {
    console.error(err);
    return;
  }

  // Read the JSON file
  const jsonFile = path.join(__dirname, "ExcelGC.json");
  fs.readFile(jsonFile, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      return;
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Extract the filters from the JSON data
    const filters = jsonData.map((item) => item.name);

    // Filter the existing filenames from the directory based on the filters
    /*
     &&
        file !== "TalkExcelConfigData.json" &&
        file !== "QuestExcelConfigData.json"
    */
    const existingFilenames = files.filter((file) => filters.includes(file));

    console.log(existingFilenames);

    // Copy the files to the FoundExcel folder
    existingFilenames.forEach((filename) => {
      const sourceFile = path.join(get_excel, filename);
      const destinationFile = path.join(found_excel, filename);

      fs.copyFile(sourceFile, destinationFile, (err) => {
        if (err) {
          console.error(`Error copying file ${filename}:`, err);
        } else {
          console.log(`File ${filename} copied successfully.`);
        }
      });
    });
  });
});
