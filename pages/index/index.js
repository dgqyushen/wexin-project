// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      sessionId: ''
    },
    active: 0,
    stockNum: '',
    isLogin: false,
    selectedList: [1, 2, 3]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // let that = this
    // wx.getStorage({
    //   key: 'userInfo',
    //   success(res) {
    //     console.log('success');
    //     that.setData({
    //       userInfo: res
    //     });
    //     console.log(that.data.userInfo);
    //   },
    //   fail(err) {
    //     console.log('err');
    //     that.setData({
    //       userInfo: {
    //         data:{
    //           nickName: '游客'
    //         }

    //       }
    //     })
    //   }
    // })


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
    // let that = this
    // wx.getStorage({
    //   key: 'userInfo',
    //   success(res) {
    //     console.log('success');
    //     that.setData({
    //       userInfo: res
    //     });
    //     console.log(that.data.userInfo)
    //   },
    //   fail(err) {
    //     console.log('err');
    //     that.setData({
    //       userInfo: {
    //         nickName: '游客'
    //       }
    //     })
    //   }
    // })

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

  },

  login() {
    wx.login({
      timeout: 3000,
      success(res) {
        wx.request({
          url: 'http://localhost:7890/wx/login',
          timeout: 3000,
          method: "POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            code: res.code
          },
          success(res) {
            wx.setStorageSync('sessionId', res.data);
            console.log(res.data);
            
            // let sessionId = wx.getStorageSync('sessionId');
            // console.log(sessionId);
          }
        })
      },
      fail(err) {
        console.log(err);
      }
    });
    let that = this;
    wx.getUserProfile({
      desc: '获取用户授权',
      success(resp) {
        console.log(resp);
        wx.setStorageSync('isLogin', true);
      
        wx.setStorageSync('nickName', resp.userInfo.nickName);
        that.setData({
          isLogin: true
        });
        that.onLoad();

      },
      fail(err) {
        // console.log(err);
        wx.getStorageSync('isLogin');
        that.setData({
          isLogin: false
        });
        that.onLoad();
      }
    })
    
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    // this.setData({ active: event.detail });
    this.setData({
      active: 0
    })
  },
  search(){
      let stockNum = this.data.stockNum;
      // let regex = ^\d{6}$;


      if (!(/^\d{6}$$/.test(stockNum))) {
        // console.log("not match");
        wx.showToast({
          title: '代码为6位数字',
          icon: "error"
        })
      }else {
        console.log("match");
      }
  }


})