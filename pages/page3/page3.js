// pages/page3/page3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navlist: [
      {
        name: "美食天地",
        icon: "../../images/shop-icon1.png",
        path: ""
      },
      {
        name: "丽人美发",
        icon: "../../images/shop-icon2.png",
        path: ""
      },
      {
        name: "生活服务",
        icon: "../../images/shop-icon3.png",
        path: ""
      },
      {
        name: "建材家居",
        icon: "../../images/shop-icon4.png",
        path: ""
      },
      {
        name: "婚庆摄影",
        icon: "../../images/shop-icon5.png",
        path: ""
      },
      {
        name: "休闲娱乐",
        icon: "../../images/shop-icon6.png",
        path: ""
      },
      {
        name: "教育培训",
        icon: "../../images/shop-icon7.png",
        path: ""
      },
      {
        name: "购物天地",
        icon: "../../images/shop-icon8.png",
        path: ""
      },
      {
        name: "教育培训",
        icon: "../../images/shop-icon9.png",
        path: ""
      },
      {
        name: "购物天地",
        icon: "../../images/shop-icon10.png",
        path: ""
      }
    ],
  },
  detailes(){
    wx.navigateTo({
      url: "/pages/goodDetails/goodDetails",
    })
  },
  routerTolist() {
    wx.navigateTo({
      url: '/pages/goodsList/goodsList',
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