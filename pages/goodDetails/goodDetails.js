var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    statusBarHeight: '',
    btuBottom: "",

    imgUrls: [
      '../../images/p1.png',
      '../../images/p4.png',
      '../../images/p2.png'
    ],

  },
  black() {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        self.setData({
          statusBarHeight: res.statusBarHeight
        })
      },
    })
    let isPhone = app.globalData.isIphoneX;
    if (isPhone) {
      this.setData({
        btuBottom: "68rpx",
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})