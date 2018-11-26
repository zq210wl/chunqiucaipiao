var fs = require('fs');

var cleanFilename = process.argv[2];
var beginIssue = '' + cleanFilename + '0420'; // 7:00 开始
var endIssue = '' + cleanFilename + '1140'; // 7:00 结束

var exportData = {
  isSuccess: true,
  data: {
    original_data: [],
    statistics_data: []
  }
};

var dataArr = [];
var dirsFiles = fs.readdirSync('./tencent/originData');
if (dirsFiles.indexOf('.DS_Store') !== -1) {
  dirsFiles = dirsFiles.slice(1);
}
var curFilenameIndex = dirsFiles.indexOf(cleanFilename + '.json');
dirsFiles.forEach(function(fileName, index){
  if (index >= (curFilenameIndex - 1) && index <= (curFilenameIndex + 1) ) {
    console.log('filename:', fileName);
    dataArr = dataArr.concat(JSON.parse(fs.readFileSync('./tencent/originData/' + fileName, 'utf8')).data.original_data);
  }
});

dataArr.forEach(function(data, index){
  if (Number(data.issue) >= Number(beginIssue) && Number(data.issue) <= Number(endIssue)) {
    var hasExsit = false;
    exportData.data.original_data.forEach(function(d){
      if (Number(d.issue) === Number(data.issue)) {
        hasExsit = true;
      }
    });
    if (!hasExsit) {
      exportData.data.original_data.push(data);
    }
  }
});

fs.writeFileSync('./tencent/cleanedData/' + cleanFilename + '.json' , JSON.stringify(exportData));

console.log('数据清理完成');



