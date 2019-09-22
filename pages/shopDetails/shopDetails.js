// pages/shopDetails/shopDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectPage:0,
    list1: ["1", "1", "1", "1", "1"],
    list2: ["1", "1"],
    // 评分这里，最大5星 创建一个数组 marke， 根据返回的评分（number）push "Star-active.png" ,不满5的 push "Star.png"
    marke:[
      "../../images/Star-active.png",
      "../../images/Star-active.png",
      "../../images/Star-active.png",
      "../../images/Star-active.png",
      "../../images/Star.png"
    ]
  },
  handelTabs(e){
    this.setData({
      selectPage: e.currentTarget.dataset.idx
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