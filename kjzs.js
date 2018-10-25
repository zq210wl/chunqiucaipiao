// 请求重试
function retry2(resolve, reject, method, url, data, retryAttempt) {
  Zepto.ajax({
    type: method,
    url:  url,
    dataType: 'json',
    data: data || {},
    success: function (res) {
      resolve(res);
    },
    error: function () {
      if (retryAttempt < 3) {
        setTimeout(function(){
          retry(resolve, reject, method, url, data, ++retryAttempt);
        }, 300);
      } else {
        printError('下面的url请求异常:', url);
        reject(new CustomError('网络接口请求异常，请检查网络是否有问题'));
      }
    }
  });
}
function http2(method, url, data) {
  return new Promise(function(resolve, reject){
    retry2(resolve, reject, method, url, data, 1);
  });
}


// https://kjh.55128.cn/k/kjls/gpc-chongqingssc.html
http2('POST', 'https://kjh.55128.cn/k/Template/_getKjData', {
  lotterytype: 'GP_SSC_ChongQing'
}).then(function(res){
  console.log('--重庆结果：--');
  console.log(res);
}).catch(function(err){

});

// https://kjh.55128.cn/k/kjls/gpc-xjssc.html
http2('POST', 'https://kjh.55128.cn/k/Template/_getKjData', {
  lotterytype: 'GP_SSC_XinJiang'
}).then(function(res){
  console.log('--新疆结果：--');
  console.log(res);
}).catch(function(err){

});

// https://kjh.55128.cn/k/kjls/gpc-hljiangssc.html
http2('POST', 'https://kjh.55128.cn/k/Template/_getKjData', {
  lotterytype: 'GP_SSC_HeiLongJiang'
}).then(function(res){
  console.log('--黑龙江结果：--');
  console.log(res);
}).catch(function(err){

});