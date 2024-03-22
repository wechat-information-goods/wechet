// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: 'hello world',
    imgsrc: '/image/IMG_5045.JPG',
    random1: Math.random()*10,
    count: 0,
    msg: '个性签名：',
    type: 1,
    flag: true,
    arr1:['苹果','华为','小米'],
    userlist:[
      {id: 1, name: '小红'},
      {id: 2, name: '小黄'},
      {id: 3, name: '小白'}
    ]
  },
  //定义按钮事件
  btn(e){
    console.log(e)
  },
  //加1按钮的事件处理函数
  countchange(e){
    this.setData({
      count: this.data.count + 1
    })
  },
//事件传参数和参数的使用
  delivernumber(e){
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },
  //input输入框的事件处理函数,拿文本框里的值，实时显示再调试器的appdata中,数据绑定，文本框里是什么，msg里就是什么
  bipt(e){
    console.log(e.detail.value)
    this.setData({
      msg: e.detail.value
    })
  },
 



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    // console.log('触发')
    this.setData({
      count:0
    })
    wx.stopPullDownRefresh()
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