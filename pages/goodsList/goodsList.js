// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    navlist: [
      {
        name: "美食天地"
      },
      {
        name: "丽人美发"
      },
      {
        name: "生活服务"
      },
      {
        name: "建材家居"
      },
      {
        name: "婚庆摄影"
      },
      {
        name: "休闲娱乐"
      },
      {
        name: "教育培训"
      },
      {
        name: "购物天地"
      }
    ]
  },
  selectpage(e) {
    this.setData({
      activeIndex: e.currentTarget.dataset.index
    })
  },
  detailes() {
    wx.navigateTo({
      url: "/pages/goodDetails/goodDetails",
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