var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btuBottom: "",
    imglist:[],
    activeidx:0,
    switch1Checked: false
  },
  upload(){
    let self = this
    let arr = this.data.imglist

    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        let newdata = arr.concat(tempFilePaths)
        self.setData({
          imglist: newdata
        })
      }
    })


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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