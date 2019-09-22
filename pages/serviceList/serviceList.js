// pages/serviceList/serviceList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex:0,
    navlist: [
      {
        name: "综合信息"
      },
      {
        name: "家政服务"
      },
      {
        name: "求职招聘"
      },
      {
        name: "房产/租售"
      },
      {
        name: "二手交易"
      },
      {
        name: "汽车周边"
      },
      {
        name: "本地商务"
      },
      {
        name: "城际搭车"
      },
      {
        name: "寻人寻物"
      },
      {
        name: "家居建材"
      }
    ],
    imglist: [
      {
        author: "",
        authorIcon: "../../images/p1.png",
        des: "",
        picture: [
          "../../images/p1.png", "../../images/p2.png", "../../images/p3.png", "../../images/p4.png", "../../images/p3.png", "../../images/p4.png", "../../images/p1.png", "../../images/p2.png", "../../images/p3.png"
        ]
      },
      {
        author: "",
        authorIcon: "../../images/p2.png",
        des: "",
        picture: [
          "../../images/p1.png", "../../images/p2.png", "../../images/p3.png", "../../images/p4.png", "../../images/p4.png"
        ]
      },
      {
        author: "",
        authorIcon: "../../images/p3.png",
        des: "",
        picture: [
          "../../images/p1.png", "../../images/p2.png", "../../images/p3.png", "../../images/p4.png"
        ]
      },
      {
        author: "",
        authorIcon: "../../images/p4.png",
        des: "",
        picture: [
          "../../images/p1.png", "../../images/p2.png", "../../images/p3.png"
        ]
      },
      {
        author: "",
        authorIcon: "../../images/p4.png",
        des: "",
        picture: [
          "../../images/p1.png", "../../images/p2.png"
        ]
      },
      {
        author: "",
        authorIcon: "../../images/p4.png",
        des: "",
        picture: [
          "../../images/p1.png"
        ]
      },
      {
        author: "",
        authorIcon: "../../images/p4.png",
        des: "",
        picture: []
      }
    ]
  },
  selectpage(e){
    this.setData({
      activeIndex:e.currentTarget.dataset.index
    })
  },
  bindMakePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: '15102988385',
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