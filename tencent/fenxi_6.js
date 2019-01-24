var fs = require('fs');

function hasSame(lotteryArr, way) {
  var index1 = 0;
  var index2 = 0;
  var index3 = 0;
  if (way === 1) {
    index1 = 0;
    index2 = 1;
    index3 = 2;
  } else if (way === 2) {
    index1 = 1;
    index2 = 2;
    index3 = 3;
  } else if (way === 3) {
    index1 = 2;
    index2 = 3;
    index3 = 4;
  }
  if ((lotteryArr[index1] === lotteryArr[index2] || lotteryArr[index1] === lotteryArr[index3] || lotteryArr[index2] === lotteryArr[index3]) 
  && !(lotteryArr[index1] === lotteryArr[index2] && lotteryArr[index2] === lotteryArr[index3])) {
    return true;
  } else {
    return false;
  }
}

function allSame(lotteryArr, way) {
  var index1 = 0;
  var index2 = 0;
  var index3 = 0;
  if (way === 1) {
    index1 = 0;
    index2 = 1;
    index3 = 2;
  } else if (way === 2) {
    index1 = 1;
    index2 = 2;
    index3 = 3;
  } else if (way === 3) {
    index1 = 2;
    index2 = 3;
    index3 = 4;
  }
  if (lotteryArr[index1] === lotteryArr[index2] && lotteryArr[index2] === lotteryArr[index3]) {
    return true;
  } else {
    return false;
  }
}

var dataArr = [];
var dirsFiles = fs.readdirSync('./tencent/cleanedData');
if (dirsFiles.indexOf('.DS_Store') !== -1) {
  dirsFiles = dirsFiles.slice(1);
}
// 参数说明：如果不带参数就统计所有的数据
var arg1 = process.argv[2]; // 从倒数第几条开始看
var arg2 = process.argv[3]; // 一共看几条
var lastFromNum = arg1 ? (arg1 - 1) : 0;
var acountNum = arg1 && arg2 ? arg2 : dirsFiles.length;
var idx1 = dirsFiles.length - lastFromNum - acountNum;
var idx2 = dirsFiles.length - lastFromNum;
dirsFiles = dirsFiles.slice(idx1, idx2);
console.log(dirsFiles);

dirsFiles.forEach(function(fileName){
  dataArr = dataArr.concat(JSON.parse(fs.readFileSync('./tencent/cleanedData/' + fileName, 'utf8')).data.original_data);
});
dataArr = dataArr.reverse();

var hackDayNum = arg1 ? 0 : 4;

console.log('一共处理了' + (dirsFiles.length + hackDayNum) + '天' + dataArr.length + '条数据');


// dataArr = [
//   { "lottery": ["9","9","5","5","9"] },
//   { "lottery": ["9","9","5","5","9"] },
//   { "lottery": ["1","2","5","4","9"] },
//   { "lottery": ["4","4","8","8","9"] },
//   { "lottery": ["4","4","8","8","9"] },
//   { "lottery": ["4","4","8","8","9"] },
//   { "lottery": ["1","2","5","4","9"] },
//   { "lottery": ["3","3","8","8","9"] },
//   { "lottery": ["3","3","8","8","9"] },
//   { "lottery": ["1","2","5","4","9"] },
//   { "lottery": ["3","3","8","8","9"] },
//   { "lottery": ["3","3","8","8","9"] },
//   { "lottery": ["1","2","5","4","9"] },
//   { "lottery": ["1","2","5","5","9"] },
//   { "lottery": ["1","2","5","4","9"] },
//   { "lottery": ["4","1","5","4","9"] },
//   { "lottery": ["3","3","8","8","9"] },
//   { "lottery": ["3","3","8","8","9"] },
//   { "lottery": ["4","1","5","4","9"] },
//   { "lottery": ["3","3","5","5","9"] },
//   { "lottery": ["4","1","5","4","9"] }
// ];


var qianObj = {
  progress: {
    isFind: 'three',
    zero: {
      1: false,
      2: false
    },
    one: 0,
    two: 0,
    three: 0
  },
  matchNum: 0
};
var zhongObj = {
  progress: {
    isFind: 'three',
    zero: {
      1: false,
      2: false
    },
    one: 0,
    two: 0,
    three: 0
  },
  matchNum: 0
};
var houObj = {
  progress: {
    isFind: 'three',
    zero: {
      1: false,
      2: false
    },
    one: 0,
    two: 0,
    three: 0
  },
  matchNum: 0
};

for (var i = 0; i < dataArr.length; i++) {
  var curData = dataArr[i];
  if (qianObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.three++;
    } else {
      if (qianObj.progress.three >= 2) {
        qianObj.progress.isFind = 'two';
      } else {
        qianObj.progress.isFind = 'three';
        qianObj.progress.three = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.two++;
    } else {
      if (qianObj.progress.two >= 2) {
        qianObj.progress.isFind = 'one';
      } else if (qianObj.progress.two === 1) { 
        qianObj.progress.isFind = 'three';
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.one++;
    } else {
      if (qianObj.progress.one >= 2) {
        qianObj.progress.isFind = 'zero';
      } else if (qianObj.progress.one === 1) { 
        qianObj.progress.isFind = 'three';
        qianObj.progress.one = 0;
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'zero') {
    if (qianObj.progress.zero[2] === false) {
      if (hasSame(curData.lottery, 1) === true) {
        qianObj.progress.zero[2] = true
      }
    } else if (allSame(curData.lottery, 1) === false && hasSame(curData.lottery, 1) === false) {
      qianObj.progress.zero[1] = true
      qianObj.matchNum++;
      qianObj.progress.isFind = 'three';
      qianObj.progress.zero[1] = false
      qianObj.progress.zero[2] = false
      qianObj.progress.one = 0;
      qianObj.progress.two = 0;
      qianObj.progress.three = 0;
    } else if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.isFind = 'one';
      qianObj.progress.one = 2;

      qianObj.progress.zero[1] = false
      qianObj.progress.zero[2] = false
    } else {
      qianObj.progress.isFind = 'three';
      qianObj.progress.zero[1] = false
      qianObj.progress.zero[2] = false
      qianObj.progress.one = 0;
      qianObj.progress.two = 0;
      qianObj.progress.three = 0;
    }
  }


  if (zhongObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.three++;
    } else {
      if (zhongObj.progress.three >= 2) {
        zhongObj.progress.isFind = 'two';
      } else {
        zhongObj.progress.isFind = 'three';
        zhongObj.progress.three = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.two++;
    } else {
      if (zhongObj.progress.two >= 2) {
        zhongObj.progress.isFind = 'one';
      } else if (zhongObj.progress.two === 1) { 
        zhongObj.progress.isFind = 'three';
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.one++;
    } else {
      if (zhongObj.progress.one >= 2) {
        zhongObj.progress.isFind = 'zero';
      } else if (zhongObj.progress.one === 1) { 
        zhongObj.progress.isFind = 'three';
        zhongObj.progress.one = 0;
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'zero') {
    if (zhongObj.progress.zero[2] === false) {
      if (hasSame(curData.lottery, 2) === true) {
        zhongObj.progress.zero[2] = true
      }
    } else if (allSame(curData.lottery, 2) === false && hasSame(curData.lottery, 2) === false) {
      zhongObj.progress.zero[1] = true
      zhongObj.matchNum++;
      zhongObj.progress.isFind = 'three';
      zhongObj.progress.zero[1] = false
      zhongObj.progress.zero[2] = false
      zhongObj.progress.one = 0;
      zhongObj.progress.two = 0;
      zhongObj.progress.three = 0;
    } else if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.isFind = 'one';
      zhongObj.progress.one = 2;

      zhongObj.progress.zero[1] = false
      zhongObj.progress.zero[2] = false
    } else {
      zhongObj.progress.isFind = 'three';
      zhongObj.progress.zero[1] = false
      zhongObj.progress.zero[2] = false
      zhongObj.progress.one = 0;
      zhongObj.progress.two = 0;
      zhongObj.progress.three = 0;
    }
  }


  if (houObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.three++;
    } else {
      if (houObj.progress.three >= 2) {
        houObj.progress.isFind = 'two';
      } else {
        houObj.progress.isFind = 'three';
        houObj.progress.three = 0;
      }
    }
  } else if (houObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.two++;
    } else {
      if (houObj.progress.two >= 2) {
        houObj.progress.isFind = 'one';
      } else if (houObj.progress.two === 1) { 
        houObj.progress.isFind = 'three';
        houObj.progress.two = 0;
        houObj.progress.three = 0;
      }
    }
  } else if (houObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.one++;
    } else {
      if (houObj.progress.one >= 2) {
        houObj.progress.isFind = 'zero';
      } else if (houObj.progress.one === 1) { 
        houObj.progress.isFind = 'three';
        houObj.progress.one = 0;
        houObj.progress.two = 0;
        houObj.progress.three = 0;
      }
    }
  } else if (houObj.progress.isFind === 'zero') {
    if (houObj.progress.zero[2] === false) {
      if (hasSame(curData.lottery, 3) === true) {
        houObj.progress.zero[2] = true
      }
    } else if (allSame(curData.lottery, 3) === false && hasSame(curData.lottery, 3) === false) {
      houObj.progress.zero[1] = true
      houObj.matchNum++;
      houObj.progress.isFind = 'three';
      houObj.progress.zero[1] = false
      houObj.progress.zero[2] = false
      houObj.progress.one = 0;
      houObj.progress.two = 0;
      houObj.progress.three = 0;
    } else if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.isFind = 'one';
      houObj.progress.one = 2;

      houObj.progress.zero[1] = false
      houObj.progress.zero[2] = false
    } else {
      houObj.progress.isFind = 'three';
      houObj.progress.zero[1] = false
      houObj.progress.zero[2] = false
      houObj.progress.one = 0;
      houObj.progress.two = 0;
      houObj.progress.three = 0;
    }
  }  
}

console.log(`=========== 前 ===========`);
console.log(qianObj.matchNum);

console.log(`=========== 中 ===========`);
console.log(zhongObj.matchNum);

console.log(`=========== 后 ===========`);
console.log(houObj.matchNum);



// ---------------------------------4

qianObj = {
  progress: {
    isFind: 'four',
    zero: {
      1: false,
      2: false
    },
    one: 0,
    two: 0,
    three: 0,
    four: 0
  },
  matchNum: 0
};
zhongObj = {
  progress: {
    isFind: 'four',
    zero: {
      1: false,
      2: false
    },
    one: 0,
    two: 0,
    three: 0,
    four: 0
  },
  matchNum: 0
};
houObj = {
  progress: {
    isFind: 'four',
    zero: {
      1: false,
      2: false
    },
    one: 0,
    two: 0,
    three: 0,
    four: 0
  },
  matchNum: 0
};

for (var i = 0; i < dataArr.length; i++) {
  var curData = dataArr[i];
  if (qianObj.progress.isFind === 'four') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.four++;
    } else {
      if (qianObj.progress.four >= 2) {
        qianObj.progress.isFind = 'three';
      } else {
        qianObj.progress.isFind = 'four';
        qianObj.progress.four = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.three++;
    } else {
      if (qianObj.progress.three >= 2) {
        qianObj.progress.isFind = 'two';
      } else if (qianObj.progress.three === 1) { 
        qianObj.progress.isFind = 'four';
        qianObj.progress.three = 0;
        qianObj.progress.four = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.two++;
    } else {
      if (qianObj.progress.two >= 2) {
        qianObj.progress.isFind = 'one';
      } else if (qianObj.progress.two === 1) { 
        qianObj.progress.isFind = 'three';
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
        qianObj.progress.four = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.one++;
    } else {
      if (qianObj.progress.one >= 2) {
        qianObj.progress.isFind = 'zero';
      } else if (qianObj.progress.one === 1) { 
        qianObj.progress.isFind = 'three';
        qianObj.progress.one = 0;
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
        qianObj.progress.four = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'zero') {
    if (qianObj.progress.zero[2] === false) {
      if (hasSame(curData.lottery, 1) === true) {
        qianObj.progress.zero[2] = true
      }
    } else if (allSame(curData.lottery, 1) === false && hasSame(curData.lottery, 1) === false) {
      qianObj.progress.zero[1] = true
      qianObj.matchNum++;
      qianObj.progress.isFind = 'three';
      qianObj.progress.zero[1] = false
      qianObj.progress.zero[2] = false
      qianObj.progress.one = 0;
      qianObj.progress.two = 0;
      qianObj.progress.three = 0;
      qianObj.progress.four = 0;
    } else if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.isFind = 'one';
      qianObj.progress.one = 2;

      qianObj.progress.zero[1] = false
      qianObj.progress.zero[2] = false
    } else {
      qianObj.progress.isFind = 'three';
      qianObj.progress.zero[1] = false
      qianObj.progress.zero[2] = false
      qianObj.progress.one = 0;
      qianObj.progress.two = 0;
      qianObj.progress.three = 0;
      qianObj.progress.four = 0;
    }
  }



  if (zhongObj.progress.isFind === 'four') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.four++;
    } else {
      if (zhongObj.progress.four >= 2) {
        zhongObj.progress.isFind = 'three';
      } else {
        zhongObj.progress.isFind = 'four';
        zhongObj.progress.four = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.three++;
    } else {
      if (zhongObj.progress.three >= 2) {
        zhongObj.progress.isFind = 'two';
      } else if (zhongObj.progress.three === 1) { 
        zhongObj.progress.isFind = 'four';
        zhongObj.progress.three = 0;
        zhongObj.progress.four = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.two++;
    } else {
      if (zhongObj.progress.two >= 2) {
        zhongObj.progress.isFind = 'one';
      } else if (zhongObj.progress.two === 1) { 
        zhongObj.progress.isFind = 'three';
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
        zhongObj.progress.four = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.one++;
    } else {
      if (zhongObj.progress.one >= 2) {
        zhongObj.progress.isFind = 'zero';
      } else if (zhongObj.progress.one === 1) { 
        zhongObj.progress.isFind = 'three';
        zhongObj.progress.one = 0;
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
        zhongObj.progress.four = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'zero') {
    if (zhongObj.progress.zero[2] === false) {
      if (hasSame(curData.lottery, 2) === true) {
        zhongObj.progress.zero[2] = true
      }
    } else if (allSame(curData.lottery, 2) === false && hasSame(curData.lottery, 2) === false) {
      zhongObj.progress.zero[1] = true
      zhongObj.matchNum++;
      zhongObj.progress.isFind = 'three';
      zhongObj.progress.zero[1] = false
      zhongObj.progress.zero[2] = false
      zhongObj.progress.one = 0;
      zhongObj.progress.two = 0;
      zhongObj.progress.three = 0;
      zhongObj.progress.four = 0;
    } else if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.isFind = 'one';
      zhongObj.progress.one = 2;

      zhongObj.progress.zero[1] = false
      zhongObj.progress.zero[2] = false
    } else {
      zhongObj.progress.isFind = 'three';
      zhongObj.progress.zero[1] = false
      zhongObj.progress.zero[2] = false
      zhongObj.progress.one = 0;
      zhongObj.progress.two = 0;
      zhongObj.progress.three = 0;
      zhongObj.progress.four = 0;
    }
  }

  

  if (houObj.progress.isFind === 'four') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.four++;
    } else {
      if (houObj.progress.four >= 2) {
        houObj.progress.isFind = 'three';
      } else {
        houObj.progress.isFind = 'four';
        houObj.progress.four = 0;
      }
    }
  } else if (houObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.three++;
    } else {
      if (houObj.progress.three >= 2) {
        houObj.progress.isFind = 'two';
      } else if (houObj.progress.three === 1) { 
        houObj.progress.isFind = 'four';
        houObj.progress.three = 0;
        houObj.progress.four = 0;
      }
    }
  } else if (houObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.two++;
    } else {
      if (houObj.progress.two >= 2) {
        houObj.progress.isFind = 'one';
      } else if (houObj.progress.two === 1) { 
        houObj.progress.isFind = 'three';
        houObj.progress.two = 0;
        houObj.progress.three = 0;
        houObj.progress.four = 0;
      }
    }
  } else if (houObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.one++;
    } else {
      if (houObj.progress.one >= 2) {
        houObj.progress.isFind = 'zero';
      } else if (houObj.progress.one === 1) { 
        houObj.progress.isFind = 'three';
        houObj.progress.one = 0;
        houObj.progress.two = 0;
        houObj.progress.three = 0;
        houObj.progress.four = 0;
      }
    }
  } else if (houObj.progress.isFind === 'zero') {
    if (houObj.progress.zero[2] === false) {
      if (hasSame(curData.lottery, 3) === true) {
        houObj.progress.zero[2] = true
      }
    } else if (allSame(curData.lottery, 3) === false && hasSame(curData.lottery, 3) === false) {
      houObj.progress.zero[1] = true
      houObj.matchNum++;
      houObj.progress.isFind = 'three';
      houObj.progress.zero[1] = false
      houObj.progress.zero[2] = false
      houObj.progress.one = 0;
      houObj.progress.two = 0;
      houObj.progress.three = 0;
      houObj.progress.four = 0;
    } else if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.isFind = 'one';
      houObj.progress.one = 2;

      houObj.progress.zero[1] = false
      houObj.progress.zero[2] = false
    } else {
      houObj.progress.isFind = 'three';
      houObj.progress.zero[1] = false
      houObj.progress.zero[2] = false
      houObj.progress.one = 0;
      houObj.progress.two = 0;
      houObj.progress.three = 0;
      houObj.progress.four = 0;
    }
  }  
}

console.log(`=========== 前X ===========`);
console.log(qianObj.matchNum);

console.log(`=========== 中X ===========`);
console.log(zhongObj.matchNum);

console.log(`=========== 后X ===========`);
console.log(houObj.matchNum);




// ---------------------------------5

qianObj = {
  progress: {
    isFind: 'fifth',
    zero: {
      1: false,
      2: false
    },
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    fifth: 0
  },
  matchNum: 0
};
zhongObj = {
  progress: {
    isFind: 'fifth',
    zero: {
      1: false,
      2: false
    },
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    fifth: 0
  },
  matchNum: 0
};
houObj = {
  progress: {
    isFind: 'fifth',
    zero: {
      1: false,
      2: false
    },
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    fifth: 0
  },
  matchNum: 0
};

for (var i = 0; i < dataArr.length; i++) {
  var curData = dataArr[i];
  if (qianObj.progress.isFind === 'fifth') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.fifth++;
    } else {
      if (qianObj.progress.fifth >= 2) {
        qianObj.progress.isFind = 'four';
      } else {
        qianObj.progress.isFind = 'fifth';
        qianObj.progress.fifth = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'four') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.four++;
    } else {
      if (qianObj.progress.four >= 2) {
        qianObj.progress.isFind = 'three';
      } else if (qianObj.progress.four === 1) { 
        qianObj.progress.isFind = 'fifth';
        qianObj.progress.four = 0;
        qianObj.progress.fifth = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.three++;
    } else {
      if (qianObj.progress.three >= 2) {
        qianObj.progress.isFind = 'two';
      } else if (qianObj.progress.three === 1) { 
        qianObj.progress.isFind = 'fifth';
        qianObj.progress.three = 0;
        qianObj.progress.four = 0;
        qianObj.progress.fifth = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.two++;
    } else {
      if (qianObj.progress.two >= 2) {
        qianObj.progress.isFind = 'one';
      } else if (qianObj.progress.two === 1) { 
        qianObj.progress.isFind = 'fifth';
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
        qianObj.progress.four = 0;
        qianObj.progress.fifth = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.one++;
    } else {
      if (qianObj.progress.one >= 2) {
        qianObj.progress.isFind = 'zero';
      } else if (qianObj.progress.one === 1) { 
        qianObj.progress.isFind = 'fifth';
        qianObj.progress.one = 0;
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
        qianObj.progress.four = 0;
        qianObj.progress.fifth = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'zero') {
    if (qianObj.progress.zero[2] === false) {
      if (hasSame(curData.lottery, 1) === true) {
        qianObj.progress.zero[2] = true
      }
    } else if (allSame(curData.lottery, 1) === false && hasSame(curData.lottery, 1) === false) {
      qianObj.progress.zero[1] = true
      qianObj.matchNum++;
      qianObj.progress.isFind = 'three';
      qianObj.progress.zero[1] = false
      qianObj.progress.zero[2] = false
      qianObj.progress.one = 0;
      qianObj.progress.two = 0;
      qianObj.progress.three = 0;
      qianObj.progress.four = 0;
    } else if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.isFind = 'one';
      qianObj.progress.one = 2;

      qianObj.progress.zero[1] = false
      qianObj.progress.zero[2] = false
    } else {
      qianObj.progress.isFind = 'three';
      qianObj.progress.zero[1] = false
      qianObj.progress.zero[2] = false
      qianObj.progress.one = 0;
      qianObj.progress.two = 0;
      qianObj.progress.three = 0;
      qianObj.progress.four = 0;
    }
  }

  if (zhongObj.progress.isFind === 'fifth') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.fifth++;
    } else {
      if (zhongObj.progress.fifth >= 2) {
        zhongObj.progress.isFind = 'four';
      } else {
        zhongObj.progress.isFind = 'fifth';
        zhongObj.progress.fifth = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'four') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.four++;
    } else {
      if (zhongObj.progress.four >= 2) {
        zhongObj.progress.isFind = 'three';
      } else if (zhongObj.progress.four === 1) { 
        zhongObj.progress.isFind = 'fifth';
        zhongObj.progress.four = 0;
        zhongObj.progress.fifth = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.three++;
    } else {
      if (zhongObj.progress.three >= 2) {
        zhongObj.progress.isFind = 'two';
      } else if (zhongObj.progress.three === 1) { 
        zhongObj.progress.isFind = 'fifth';
        zhongObj.progress.three = 0;
        zhongObj.progress.four = 0;
        zhongObj.progress.fifth = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.two++;
    } else {
      if (zhongObj.progress.two >= 2) {
        zhongObj.progress.isFind = 'one';
      } else if (zhongObj.progress.two === 1) { 
        zhongObj.progress.isFind = 'fifth';
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
        zhongObj.progress.four = 0;
        zhongObj.progress.fifth = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.one++;
    } else {
      if (zhongObj.progress.one >= 2) {
        zhongObj.progress.isFind = 'zero';
      } else if (zhongObj.progress.one === 1) { 
        zhongObj.progress.isFind = 'fifth';
        zhongObj.progress.one = 0;
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
        zhongObj.progress.four = 0;
        zhongObj.progress.fifth = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'zero') {
    if (zhongObj.progress.zero[2] === false) {
      if (hasSame(curData.lottery, 2) === true) {
        zhongObj.progress.zero[2] = true
      }
    } else if (allSame(curData.lottery, 2) === false && hasSame(curData.lottery, 2) === false) {
      zhongObj.progress.zero[1] = true
      zhongObj.matchNum++;
      zhongObj.progress.isFind = 'three';
      zhongObj.progress.zero[1] = false
      zhongObj.progress.zero[2] = false
      zhongObj.progress.one = 0;
      zhongObj.progress.two = 0;
      zhongObj.progress.three = 0;
      zhongObj.progress.four = 0;
    } else if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.isFind = 'one';
      zhongObj.progress.one = 2;

      zhongObj.progress.zero[1] = false
      zhongObj.progress.zero[2] = false
    } else {
      zhongObj.progress.isFind = 'three';
      zhongObj.progress.zero[1] = false
      zhongObj.progress.zero[2] = false
      zhongObj.progress.one = 0;
      zhongObj.progress.two = 0;
      zhongObj.progress.three = 0;
      zhongObj.progress.four = 0;
    }
  }

  if (houObj.progress.isFind === 'fifth') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.fifth++;
    } else {
      if (houObj.progress.fifth >= 2) {
        houObj.progress.isFind = 'four';
      } else {
        houObj.progress.isFind = 'fifth';
        houObj.progress.fifth = 0;
      }
    }
  } else if (houObj.progress.isFind === 'four') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.four++;
    } else {
      if (houObj.progress.four >= 2) {
        houObj.progress.isFind = 'three';
      } else if (houObj.progress.four === 1) { 
        houObj.progress.isFind = 'fifth';
        houObj.progress.four = 0;
        houObj.progress.fifth = 0;
      }
    }
  } else if (houObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.three++;
    } else {
      if (houObj.progress.three >= 2) {
        houObj.progress.isFind = 'two';
      } else if (houObj.progress.three === 1) { 
        houObj.progress.isFind = 'fifth';
        houObj.progress.three = 0;
        houObj.progress.four = 0;
        houObj.progress.fifth = 0;
      }
    }
  } else if (houObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.two++;
    } else {
      if (houObj.progress.two >= 2) {
        houObj.progress.isFind = 'one';
      } else if (houObj.progress.two === 1) { 
        houObj.progress.isFind = 'fifth';
        houObj.progress.two = 0;
        houObj.progress.three = 0;
        houObj.progress.four = 0;
        houObj.progress.fifth = 0;
      }
    }
  } else if (houObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.one++;
    } else {
      if (houObj.progress.one >= 2) {
        houObj.progress.isFind = 'zero';
      } else if (houObj.progress.one === 1) { 
        houObj.progress.isFind = 'fifth';
        houObj.progress.one = 0;
        houObj.progress.two = 0;
        houObj.progress.three = 0;
        houObj.progress.four = 0;
        houObj.progress.fifth = 0;
      }
    }
  } else if (houObj.progress.isFind === 'zero') {
    if (houObj.progress.zero[2] === false) {
      if (hasSame(curData.lottery, 3) === true) {
        houObj.progress.zero[2] = true
      }
    } else if (allSame(curData.lottery, 3) === false && hasSame(curData.lottery, 3) === false) {
      houObj.progress.zero[1] = true
      houObj.matchNum++;
      houObj.progress.isFind = 'three';
      houObj.progress.zero[1] = false
      houObj.progress.zero[2] = false
      houObj.progress.one = 0;
      houObj.progress.two = 0;
      houObj.progress.three = 0;
      houObj.progress.four = 0;
    } else if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.isFind = 'one';
      houObj.progress.one = 2;

      houObj.progress.zero[1] = false
      houObj.progress.zero[2] = false
    } else {
      houObj.progress.isFind = 'three';
      houObj.progress.zero[1] = false
      houObj.progress.zero[2] = false
      houObj.progress.one = 0;
      houObj.progress.two = 0;
      houObj.progress.three = 0;
      houObj.progress.four = 0;
    }
  }
}

console.log(`=========== 前5 ===========`);
console.log(qianObj.matchNum);

console.log(`=========== 中5 ===========`);
console.log(zhongObj.matchNum);

console.log(`=========== 后5 ===========`);
console.log(houObj.matchNum);