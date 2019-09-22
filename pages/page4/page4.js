// pages/page4/page4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/banner4.png',
      '../../images/banner4.png',
      '../../images/banner4.png'
    ],

    navlist: [
      {
        name: "综合信息",
        icon: "../../images/shop-icon1.png",
        path: ""
      },
      {
        name: "家政服务",
        icon: "../../images/shop-icon2.png",
        path: ""
      },
      {
        name: "求职招聘",
        icon: "../../images/shop-icon3.png",
        path: ""
      },
      {
        name: "房产/租售",
        icon: "../../images/shop-icon4.png",
        path: ""
      },
      {
        name: "二手交易",
        icon: "../../images/shop-icon5.png",
        path: ""
      },
      {
        name: "汽车周边",
        icon: "../../images/shop-icon6.png",
        path: ""
      },
      {
        name: "本地商务",
        icon: "../../images/shop-icon7.png",
        path: ""
      },
      {
        name: "城际搭车",
        icon: "../../images/shop-icon8.png",
        path: ""
      },
      {
        name: "寻人寻物",
        icon: "../../images/shop-icon9.png",
        path: ""
      },
      {
        name: "家居建材",
        icon: "../../images/shop-icon10.png",
        path: ""
      }
    ],

    imglist:[
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
        author:"",
        authorIcon:"../../images/p4.png",
        des:"",
        picture:[
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

  bindMakePhoneCall(){
    wx.makePhoneCall({
      phoneNumber: '15102988385',
    })
  },

  routeTolist(){
    wx.navigateTo({
      url: '/pages/serviceList/serviceList',
    })
  },

  send(){
    wx.navigateTo({
      url: '/pages/Release/Release',
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