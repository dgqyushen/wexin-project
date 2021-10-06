// pages/manage/manage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {

        },
        nickName: '',
        isLogin: 'true',
        selectedList: []

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        // console.log("enter it!")

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // let that = this
        // wx.getStorageSync({
        //     key: 'userInfo',
        //     success(res) {
        //         console.log('success');
        //         that.setData({
        //             userInfo: res
        //         });
        //         // console.log(that.data.userInfo);
        //         // wx.redirectTo({
        //         //     url: '/pages/home/home'
        //         // })
        //     },
        //     fail(err) {
        //         // console.log('err');
        //         that.setData({
        //             userInfo: {
        //                 data: {
        //                     nickName: '游客'
        //                 }

        //             }
        //         })
        //     }
        // })
        console.log("ready");
        let that = this
        wx.getStorageSync({
            key: 'nickName',
            success(res) {
                console.log('success');
                that.setData({
                    nickName: res
                });
                // console.log(that.data.userInfo);
                // wx.redirectTo({
                //     url: '/pages/home/home'
                // })
            },
            fail(err) {
                // console.log('err');
                that.setData({
                    userInfo: {
                        data: {
                            nickName: '游客'
                        }

                    }
                })
            }
        })
        console.log("finish");
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // console.log("Enter it")
        // let that = this;
        // wx.getStorageSync({
        //     key: 'nickName',
        //     success(res){
        //         that.setData({
        //             nickName: res
        //         })
        //         console.log('success');
        //     },
        //     fail(err){
        //         that.setData({
        //             nickName: '游客'
        //         })
        //         console.log('fail')
        //     }
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