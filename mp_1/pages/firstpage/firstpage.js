// pages/firstpage/firstpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存放九宫格数据列表
    gridlist: []
  },
  //发起get数据请求
  getinfo(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/get',//地址
      method: "GET",         //请求方式
    data: {             //发送到服务器的数据
      name: 'zs',
      age: 19
    },
    success: (res) => {        //请求成功后的回调函数
      console.log(res.data)
    }
    })
  },

  //发起post请求
  postinfo(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/post',
      method: 'post',
      data: {
        name: 'ls',
        age: 32
      },
      success: (res) =>{
        console.log(res.data)
      }
    })
  },

//获取九宫格数据
  getgridlist() {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/categories',
      method: "GET",
      success: (res) =>{
        this.setData({
          gridlist: res.data
        })
      }
    })
  },
//通过编程式导航跳转到test(是tabBar)
gototest(){
    wx.switchTab({
      url: '/pages/test/test'
    })
  },
  //通过编程式导航跳转到message
  gotomessage(){
    wx.navigateTo({
      url: '/pages/message/message',
    })
  },
//通过编程式导航跳转到message,并传参数
  bcdhcc(){
    wx.navigateTo({
      url: '/pages/message/message?name=zs&age=22',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getgridlist()
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})