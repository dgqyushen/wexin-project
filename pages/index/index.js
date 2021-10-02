// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      // data: {
      //   nickName: '游客'
      // }
    }
  },

  login() {
    wx.getUserProfile({
      desc: 'desc',
      success: res => {
        // console.log(res);
        try {
          wx.setStorage({
            key: 'userInfo',
            data: res.userInfo
          });
          wx.getStorage({
            key: 'userInfo',
            success(res) {
              // console.log(res)
            }
          })
        } catch (e) {
          console.log(e)
        }
      },
      fail: err => {
        console.log(err);
        wx.showToast({
          title: '失败',
          icon: 'fail',
          duration: 2000
        })

      }
    })
  },


  // toLogs(){
  //   // console.log('tap test');
  //   wx.navigateTo({
  //     url: '/pages/logs/logs',
  //   })
  //   // wx.redirectTo({
  //   //   url: '/pages/logs/logs',
  //   // })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that = this
    wx.getStorage({
      key: 'userInfo',
      success(res) {
        console.log('success');
        that.setData({
          userInfo: res
        });
        console.log(that.data.userInfo)
      },
      fail(err) {
        console.log('err');
        that.setData({
          userInfo: {
            data:{
              nickName: '游客'
            }

          }
        })
      }
    })


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

  }
})
