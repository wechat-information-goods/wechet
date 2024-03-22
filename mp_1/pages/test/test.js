// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: [],
    isloding: false,
    
  },
//获取随机颜色,和加载
  getcolor(){
    this.setData({
      isloding: true
    }),

    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/color',
      method:'GET',
      success: ({data: res}) =>{
        this.setData({
          color:[...this.data.color,...res.data]
        })
      },

      complete: () => {
        wx.hideLoading()
        this.setData({
          isloding: false
        })
      }
      
    })

  
  },
  getmessage1(){
    wx.request({
      url: "http://localhost:8080/index.jsp",
      method:"GET",
      success: ({res}) =>{
        console.log(res)
      }
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getmessage1()
    this.getcolor()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.isloding)
    return
    // console.log("触发")
    this.getcolor()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})