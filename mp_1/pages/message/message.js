// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    page: 1,
    ltlist: [],
    pagesize: 10,
    total: 0,
    isloding: false
  },

  getlist(){
    wx.showLoading({
      title: '加载中',
    })

    this.setData({
      isloding: true
    })

    wx.request({
      url: `https://applet-base-api-t.itheima.net/categories/${this.data.query.id}/shops`,
      method: 'GET',
      data:{
        _page: this.data.page,
        _limit: this.data.pagesize
      },
      success: (res) =>{
        console.log(res)
        this.setData({
          ltlist: [...this.data.ltlist, ...res.data],
          total: res.header['X-Total-Count']-0
        })
      },
      complete: () => {
        wx.hideLoading()
        this.setData({
          isloding: false
        })
        wx.stopPullDownRefresh()
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad(options) {
    // 保存传参
    // console.log(options)
    
    this.setData({
      query: options
    })
    this.getlist()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.name
    })
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
    this.setData({
      page: 1,
      ltlist:[],
      total: 0
    })
    this.getlist()
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.isloding) return

    this.setData({
      page: this.data.page + 1
    })

    this.getlist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})