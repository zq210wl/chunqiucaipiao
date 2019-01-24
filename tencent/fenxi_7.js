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

// var readDir = './tencent/cleanedData';
var readDir = './chongqing/data';
// var readDir = './xinjiang/data';
// var readDir = './heilongjiang/data';

var dataArr = [];
var dirsFiles = fs.readdirSync(readDir);
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
  dataArr = dataArr.concat(JSON.parse(fs.readFileSync(readDir + '/'  + fileName, 'utf8')).data.original_data);
});
dataArr = dataArr.reverse();

var hackDayNum = arg1 ? 0 : 4;

console.log('一共处理了' + (dirsFiles.length + hackDayNum) + '天' + dataArr.length + '条数据');


// dataArr = [
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },

//   { "lottery": ["0","1","2","3","4"] },

//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },

//   { "lottery": ["0","1","2","3","4"] },

//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },

//   { "lottery": ["0","1","2","3","4"] },

//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },

//   { "lottery": ["0","1","2","3","4"] },

//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
  
//   { "lottery": ["0","1","2","3","4"] }
// ];


var qianObj = {
  progress: {
    isFind: 'three',
    zero: 0,
    one: 0,
    two: 0,
    three: 0
  },
  matchNum: 0
};
var zhongObj = {
  progress: {
    isFind: 'three',
    zero: 0,
    one: 0,
    two: 0,
    three: 0
  },
  matchNum: 0
};
var houObj = {
  progress: {
    isFind: 'three',
    zero: 0,
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
      if (qianObj.progress.three >= 3) {
        qianObj.progress.isFind = 'two';
      } else if (qianObj.progress.three === 1 && qianObj.progress.three === 2) { 
        qianObj.progress.isFind = 'three';
        qianObj.progress.three = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.two++;
    } else {
      if (qianObj.progress.two >= 3) {
        qianObj.progress.isFind = 'one';
      } else if (qianObj.progress.two === 1 && qianObj.progress.two === 2) { 
        qianObj.progress.isFind = 'three';
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.one++;
    } else {
      if (qianObj.progress.one >= 3) {
        qianObj.progress.isFind = 'zero';
      } else if (qianObj.progress.one === 1 && qianObj.progress.one === 2) { 
        qianObj.progress.isFind = 'three';
        qianObj.progress.one = 0;
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'zero') {
    if (qianObj.progress.zero === 0) {
      if (hasSame(curData.lottery, 1) === true) {
        qianObj.progress.zero++;
      }
    } else if (qianObj.progress.zero === 1) {
      if (hasSame(curData.lottery, 1) === true) {
        qianObj.progress.zero++;
      } else {
        qianObj.progress.isFind = 'three';
        qianObj.progress.zero = 0;
        qianObj.progress.one = 0;
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
      }
    } else if (qianObj.progress.zero === 2) {
      if (hasSame(curData.lottery, 1) === true) {
        qianObj.progress.isFind = 'one';
        qianObj.progress.one = 3;

        qianObj.progress.zero = 0;
      } else if (allSame(curData.lottery, 1) === true) {
        qianObj.progress.isFind = 'three';
        qianObj.progress.zero = 0;
        qianObj.progress.one = 0;
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
      } else {
        qianObj.matchNum++;
        qianObj.progress.isFind = 'three';
        qianObj.progress.zero = 0;
        qianObj.progress.one = 0;
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
      }
    }
  }


  if (zhongObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.three++;
    } else {
      if (zhongObj.progress.three >= 3) {
        zhongObj.progress.isFind = 'two';
      } else if (zhongObj.progress.three === 1 && zhongObj.progress.three === 2) { 
        zhongObj.progress.isFind = 'three';
        zhongObj.progress.three = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.two++;
    } else {
      if (zhongObj.progress.two >= 3) {
        zhongObj.progress.isFind = 'one';
      } else if (zhongObj.progress.two === 1 && zhongObj.progress.two === 2) { 
        zhongObj.progress.isFind = 'three';
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.one++;
    } else {
      if (zhongObj.progress.one >= 3) {
        zhongObj.progress.isFind = 'zero';
      } else if (zhongObj.progress.one === 1 && zhongObj.progress.one === 2) { 
        zhongObj.progress.isFind = 'three';
        zhongObj.progress.one = 0;
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'zero') {
    if (zhongObj.progress.zero === 0) {
      if (hasSame(curData.lottery, 2) === true) {
        zhongObj.progress.zero++;
      }
    } else if (zhongObj.progress.zero === 1) {
      if (hasSame(curData.lottery, 2) === true) {
        zhongObj.progress.zero++;
      } else {
        zhongObj.progress.isFind = 'three';
        zhongObj.progress.zero = 0;
        zhongObj.progress.one = 0;
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
      }
    } else if (zhongObj.progress.zero === 2) {
      if (hasSame(curData.lottery, 2) === true) {
        zhongObj.progress.isFind = 'one';
        qianObj.progress.one = 3;

        qianObj.progress.zero = 0;
      } else if (allSame(curData.lottery, 2) === true) {
        zhongObj.progress.isFind = 'three';
        zhongObj.progress.zero = 0;
        zhongObj.progress.one = 0;
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
      } else {
        zhongObj.matchNum++;
        zhongObj.progress.isFind = 'three';
        zhongObj.progress.zero = 0;
        zhongObj.progress.one = 0;
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
      }
    }
  }


  if (houObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.three++;
    } else {
      if (houObj.progress.three >= 3) {
        houObj.progress.isFind = 'two';
      } else if (houObj.progress.three === 1 && houObj.progress.three === 2) { 
        houObj.progress.isFind = 'three';
        houObj.progress.three = 0;
      }
    }
  } else if (houObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.two++;
    } else {
      if (houObj.progress.two >= 3) {
        houObj.progress.isFind = 'one';
      } else if (houObj.progress.two === 1 && houObj.progress.two === 2) { 
        houObj.progress.isFind = 'three';
        houObj.progress.two = 0;
        houObj.progress.three = 0;
      }
    }
  } else if (houObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.one++;
    } else {
      if (houObj.progress.one >= 3) {
        houObj.progress.isFind = 'zero';
      } else if (houObj.progress.one === 1 && houObj.progress.one === 2) { 
        houObj.progress.isFind = 'three';
        houObj.progress.one = 0;
        houObj.progress.two = 0;
        houObj.progress.three = 0;
      }
    }
  } else if (houObj.progress.isFind === 'zero') {
    if (houObj.progress.zero === 0) {
      if (hasSame(curData.lottery, 3) === true) {
        houObj.progress.zero++;
      }
    } else if (houObj.progress.zero === 1) {
      if (hasSame(curData.lottery, 3) === true) {
        houObj.progress.zero++;
      } else {
        houObj.progress.isFind = 'three';
        houObj.progress.zero = 0;
        houObj.progress.one = 0;
        houObj.progress.two = 0;
        houObj.progress.three = 0;
      }
    } else if (houObj.progress.zero === 2) {
      if (hasSame(curData.lottery, 3) === true) {
        houObj.progress.isFind = 'one';
        qianObj.progress.one = 3;

        qianObj.progress.zero = 0;
      } else if (allSame(curData.lottery, 3) === true) {
        houObj.progress.isFind = 'three';
        houObj.progress.zero = 0;
        houObj.progress.one = 0;
        houObj.progress.two = 0;
        houObj.progress.three = 0;
      } else {
        houObj.matchNum++;
        houObj.progress.isFind = 'three';
        houObj.progress.zero = 0;
        houObj.progress.one = 0;
        houObj.progress.two = 0;
        houObj.progress.three = 0;
      }
    }
  }
 
}

console.log(`=========== 前3 ===========`);
console.log(qianObj.matchNum);

console.log(`=========== 中3 ===========`);
console.log(zhongObj.matchNum);

console.log(`=========== 后3 ===========`);
console.log(houObj.matchNum);



// =========================

qianObj = {
  progress: {
    isFind: 'four',
    zero: 0,
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
    zero: 0,
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
    zero: 0,
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
      if (qianObj.progress.four >= 3) {
        qianObj.progress.isFind = 'three';
      } else if (qianObj.progress.four === 1 && qianObj.progress.four === 2) { 
        qianObj.progress.isFind = 'four';
        qianObj.progress.four = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.three++;
    } else {
      if (qianObj.progress.three >= 3) {
        qianObj.progress.isFind = 'two';
      } else if (qianObj.progress.three === 1 && qianObj.progress.three === 2) { 
        qianObj.progress.isFind = 'four';
        qianObj.progress.three = 0;
        qianObj.progress.four = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.two++;
    } else {
      if (qianObj.progress.two >= 3) {
        qianObj.progress.isFind = 'one';
      } else if (qianObj.progress.two === 1 && qianObj.progress.two === 2) { 
        qianObj.progress.isFind = 'four';
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
        qianObj.progress.four = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 1) === true) {
      qianObj.progress.one++;
    } else {
      if (qianObj.progress.one >= 3) {
        qianObj.progress.isFind = 'zero';
      } else if (qianObj.progress.one === 1 && qianObj.progress.one === 2) { 
        qianObj.progress.isFind = 'four';
        qianObj.progress.one = 0;
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
        qianObj.progress.four = 0;
      }
    }
  } else if (qianObj.progress.isFind === 'zero') {
    if (qianObj.progress.zero === 0) {
      if (hasSame(curData.lottery, 1) === true) {
        qianObj.progress.zero++;
      }
    } else if (qianObj.progress.zero === 1) {
      if (hasSame(curData.lottery, 1) === true) {
        qianObj.progress.zero++;
      } else {
        qianObj.progress.isFind = 'four';
        qianObj.progress.zero = 0;
        qianObj.progress.one = 0;
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
        qianObj.progress.four = 0;
      }
    } else if (qianObj.progress.zero === 2) {
      if (hasSame(curData.lottery, 1) === true) {
        qianObj.progress.isFind = 'one';
        qianObj.progress.one = 3;

        qianObj.progress.zero = 0;
      } else if (allSame(curData.lottery, 1) === true) {
        qianObj.progress.isFind = 'four';
        qianObj.progress.zero = 0;
        qianObj.progress.one = 0;
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
        qianObj.progress.four = 0;
      } else {
        qianObj.matchNum++;
        qianObj.progress.isFind = 'four';
        qianObj.progress.zero = 0;
        qianObj.progress.one = 0;
        qianObj.progress.two = 0;
        qianObj.progress.three = 0;
        qianObj.progress.four = 0;
      }
    }
  }


  if (zhongObj.progress.isFind === 'four') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.four++;
    } else {
      if (zhongObj.progress.four >= 3) {
        zhongObj.progress.isFind = 'three';
      } else if (zhongObj.progress.four === 1 && zhongObj.progress.four === 2) { 
        zhongObj.progress.isFind = 'four';
        zhongObj.progress.four = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.three++;
    } else {
      if (zhongObj.progress.three >= 3) {
        zhongObj.progress.isFind = 'two';
      } else if (zhongObj.progress.three === 1 && zhongObj.progress.three === 2) { 
        zhongObj.progress.isFind = 'four';
        zhongObj.progress.three = 0;
        zhongObj.progress.four = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.two++;
    } else {
      if (zhongObj.progress.two >= 3) {
        zhongObj.progress.isFind = 'one';
      } else if (zhongObj.progress.two === 1 && zhongObj.progress.two === 2) { 
        zhongObj.progress.isFind = 'four';
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
        zhongObj.progress.four = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 2) === true) {
      zhongObj.progress.one++;
    } else {
      if (zhongObj.progress.one >= 3) {
        zhongObj.progress.isFind = 'zero';
      } else if (zhongObj.progress.one === 1 && zhongObj.progress.one === 2) { 
        zhongObj.progress.isFind = 'four';
        zhongObj.progress.one = 0;
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
        zhongObj.progress.four = 0;
      }
    }
  } else if (zhongObj.progress.isFind === 'zero') {
    if (zhongObj.progress.zero === 0) {
      if (hasSame(curData.lottery, 2) === true) {
        zhongObj.progress.zero++;
      }
    } else if (zhongObj.progress.zero === 1) {
      if (hasSame(curData.lottery, 2) === true) {
        zhongObj.progress.zero++;
      } else {
        zhongObj.progress.isFind = 'four';
        zhongObj.progress.zero = 0;
        zhongObj.progress.one = 0;
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
        zhongObj.progress.four = 0;
      }
    } else if (zhongObj.progress.zero === 2) {
      if (hasSame(curData.lottery, 2) === true) {
        zhongObj.progress.isFind = 'one';
        zhongObj.progress.one = 3;

        zhongObj.progress.zero = 0;
      } else if (allSame(curData.lottery, 2) === true) {
        zhongObj.progress.isFind = 'four';
        zhongObj.progress.zero = 0;
        zhongObj.progress.one = 0;
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
        zhongObj.progress.four = 0;
      } else {
        zhongObj.matchNum++;
        zhongObj.progress.isFind = 'four';
        zhongObj.progress.zero = 0;
        zhongObj.progress.one = 0;
        zhongObj.progress.two = 0;
        zhongObj.progress.three = 0;
        zhongObj.progress.four = 0;
      }
    }
  }


  if (houObj.progress.isFind === 'four') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.four++;
    } else {
      if (houObj.progress.four >= 3) {
        houObj.progress.isFind = 'three';
      } else if (houObj.progress.four === 1 && houObj.progress.four === 2) { 
        houObj.progress.isFind = 'four';
        houObj.progress.four = 0;
      }
    }
  } else if (houObj.progress.isFind === 'three') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.three++;
    } else {
      if (houObj.progress.three >= 3) {
        houObj.progress.isFind = 'two';
      } else if (houObj.progress.three === 1 && houObj.progress.three === 2) { 
        houObj.progress.isFind = 'four';
        houObj.progress.three = 0;
        houObj.progress.four = 0;
      }
    }
  } else if (houObj.progress.isFind === 'two') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.two++;
    } else {
      if (houObj.progress.two >= 3) {
        houObj.progress.isFind = 'one';
      } else if (houObj.progress.two === 1 && houObj.progress.two === 2) { 
        houObj.progress.isFind = 'four';
        houObj.progress.two = 0;
        houObj.progress.three = 0;
        houObj.progress.four = 0;
      }
    }
  } else if (houObj.progress.isFind === 'one') {
    if (hasSame(curData.lottery, 3) === true) {
      houObj.progress.one++;
    } else {
      if (houObj.progress.one >= 3) {
        houObj.progress.isFind = 'zero';
      } else if (houObj.progress.one === 1 && houObj.progress.one === 2) { 
        houObj.progress.isFind = 'four';
        houObj.progress.one = 0;
        houObj.progress.two = 0;
        houObj.progress.three = 0;
        houObj.progress.four = 0;
      }
    }
  } else if (houObj.progress.isFind === 'zero') {
    if (houObj.progress.zero === 0) {
      if (hasSame(curData.lottery, 3) === true) {
        houObj.progress.zero++;
      }
    } else if (houObj.progress.zero === 1) {
      if (hasSame(curData.lottery, 3) === true) {
        houObj.progress.zero++;
      } else {
        houObj.progress.isFind = 'four';
        houObj.progress.zero = 0;
        houObj.progress.one = 0;
        houObj.progress.two = 0;
        houObj.progress.three = 0;
        houObj.progress.four = 0;
      }
    } else if (houObj.progress.zero === 2) {
      if (hasSame(curData.lottery, 3) === true) {
        houObj.progress.isFind = 'one';
        houObj.progress.one = 3;

        houObj.progress.zero = 0;
      } else if (allSame(curData.lottery, 3) === true) {
        houObj.progress.isFind = 'four';
        houObj.progress.zero = 0;
        houObj.progress.one = 0;
        houObj.progress.two = 0;
        houObj.progress.three = 0;
        houObj.progress.four = 0;
      } else {
        houObj.matchNum++;
        houObj.progress.isFind = 'four';
        houObj.progress.zero = 0;
        houObj.progress.one = 0;
        houObj.progress.two = 0;
        houObj.progress.three = 0;
        houObj.progress.four = 0;
      }
    }
  }

}

console.log(`=========== 前4 ===========`);
console.log(qianObj.matchNum);

console.log(`=========== 中4 ===========`);
console.log(zhongObj.matchNum);

console.log(`=========== 后4 ===========`);
console.log(houObj.matchNum);



