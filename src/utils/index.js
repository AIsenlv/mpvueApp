let objfun={
  formatNumber (n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
  },
  formatTime (date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const t1 = [year, month, day].map(this.formatNumber).join('/')
    const t2 = [hour, minute, second].map(this.formatNumber).join(':')
    return `${t1} ${t2}`
  },
  ajax(url,data,type){ //
    wx.request({
      url: url, // 接口地址
      data:data, //请求的参数
      method:type, //请求的参数
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) { //成功
        return res;
      },
      fail(res){ //失败
        return res;
      }
    })
  }
}


export default objfun;

