


// http('POST', 'https://api.chunqiu1.com/trends', {
//   lottery_id: 64,
//   count: "2880"
// }).then(function(res){

// }).catch(function(err){

// });

function hasSame(lotteryArr, way) {
  // ["7","0","6","8","2"]
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
  if (lotteryArr[index1] === lotteryArr[index2] || lotteryArr[index1] === lotteryArr[index3] || 
      lotteryArr[index2] === lotteryArr[index1] || lotteryArr[index2] === lotteryArr[index3] ||
      lotteryArr[index3] === lotteryArr[index1] || lotteryArr[index3] === lotteryArr[index2]
  ) {
    return true;
  } else {
    return false;
  }
}

var dataArr = tentHistoryDataOf8Hours.data.original_data.concat(tentHistoryDataOf8Hours2.data.original_data);
// dataArr = [
//   { lottery: [1,2,3,4,5] },
//   { lottery: [1,2,1,4,5] },
//   { lottery: [1,2,3,4,5] },
//   { lottery: [1,2,3,4,5] },
//   { lottery: [3,2,3,4,5] },1
//   { lottery: [1,2,3,4,5] },2
//   { lottery: [1,2,3,4,5] },3
//   { lottery: [1,2,3,4,5] },4
//   { lottery: [1,2,2,4,5] },5
//   { lottery: [1,2,2,4,5] },
//   { lottery: [1,2,2,4,5] },
//   { lottery: [1,2,3,4,5] },
//   { lottery: [1,2,2,4,5] },
//   { lottery: [1,2,0,4,5] },
//   { lottery: [1,2,0,4,5] },
//   { lottery: [1,2,2,4,5] }
// ];
for (var x = 8; x < 25; x++) {
  console.log('-----' + x + '-----');
  (function(){
    var index1 = -1;
    var index2 = -1;
    var qiansanAcount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 1)) { 
        if (index1 === -1) {
          index1 = i;
          continue;
        } else {
          index2 = i;
        }
        if (index1 !== -1 && index2 !== -1 && (index2 - index1) > x) {
          qiansanAcount++;
          i = (index2 + 1);
        }
        index1 = index2;
      }
    }
    console.log('前:', qiansanAcount);
  })();

  (function(){
    var index1 = -1;
    var index2 = -1;
    var qiansanAcount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 2)) { 
        if (index1 === -1) {
          index1 = i;
          continue;
        } else {
          index2 = i;
        }
        if (index1 !== -1 && index2 !== -1 && (index2 - index1) > x) {
          qiansanAcount++;
          i = (index2 + 1);
        }
        index1 = index2;
      }
    }
    console.log('中:', qiansanAcount);
  })();

  (function(){
    var index1 = -1;
    var index2 = -1;
    var qiansanAcount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 3)) { 
        if (index1 === -1) {
          index1 = i;
          continue;
        } else {
          index2 = i;
        }
        if (index1 !== -1 && index2 !== -1 && (index2 - index1) > x) {
          qiansanAcount++;
          i = (index2 + 1);
        }
        index1 = index2;
      }
    }
    console.log('后:', qiansanAcount);
  })();
}