// pages/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/banner.png',
      '../../images/banner.png',
      '../../images/banner.png',
      '../../images/banner.png'
    ],
    current:0
  },
  swiperChange: function (e) {
    let that = this;
    if (e.detail.source == 'touch') {
      that.setData({
        current: e.detail.current,

      })
    }
  }, 
  detailes() {
    wx.navigateTo({
      url: "/pages/shopDetails/shopDetails",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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