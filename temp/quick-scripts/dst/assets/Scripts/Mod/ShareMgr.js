
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mod/ShareMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b4c7AXPuFDnarPbQkFRvnP', 'ShareMgr');
// Scripts/Mod/ShareMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WxApi_1 = require("../Libs/WxApi");
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var ShareMgr = /** @class */ (function () {
    function ShareMgr() {
        this.path = '';
        this.picCount = 3;
        this.preT = 0;
        this.shareTips = [
            '请分享到活跃的群！',
            '请分享到不同群！',
            '请分享给好友！',
            '请分享给20人以上的群！'
        ];
    }
    Object.defineProperty(ShareMgr, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new ShareMgr();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    //初始化分享  
    ShareMgr.prototype.initShare = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            //开启右上角的分享
            window["wx"].showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
            var dir_1 = ExportUtils_1.default.instance.exportCfg.front_share_config.image;
            var content_1 = ExportUtils_1.default.instance.exportCfg.front_share_config.title;
            window["wx"].onShareAppMessage(function (res) {
                return {
                    title: content_1,
                    imageUrl: dir_1,
                };
            });
            // cc.loader.loadRes(dir, function (err, data) {
            //     window["wx"].onShareAppMessage(function (res) {
            //         return {
            //             title: content,
            //             imageUrl: data.url,
            //         }
            //     })
            // });
            window["wx"].onShow(function (para) {
                if (WxApi_1.default.shareCallback) {
                    var t = new Date().getTime();
                    var diff = t - WxApi_1.default.shareTime;
                    if (diff / 1000 >= 3 && !WxApi_1.default.firstShare) {
                        WxApi_1.default.shareCallback();
                        WxApi_1.default.front_share_number--;
                        window["wx"].showToast({
                            title: '分享成功',
                            icon: 'none',
                            duration: 2000
                        });
                        WxApi_1.default.shareCallback = null;
                    }
                    else {
                        WxApi_1.default.firstShare = false;
                        window["wx"].showModal({
                            title: '提示',
                            content: _this.shareTips[Math.floor(Math.random() * _this.shareTips.length)],
                            confirmText: '重新分享',
                            success: function (res) {
                                if (res.confirm) {
                                    console.log('用户点击确定');
                                    ShareMgr.instance.shareGame(WxApi_1.default.shareCallback);
                                }
                                else if (res.cancel) {
                                    console.log('用户点击取消');
                                }
                            }
                        });
                    }
                }
            });
        }
    };
    ShareMgr.prototype.shareGame = function (cb) {
        // if (WxApi.front_share_number <= 0) {
        //     AdMgr.instance.showVideo(cb)
        //     return
        // }
        WxApi_1.default.shareCallback = cb;
        if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
            cb();
            return;
        }
        WxApi_1.default.shareTime = new Date().getTime();
        var dir = ExportUtils_1.default.instance.exportCfg.front_share_config.image;
        var content = ExportUtils_1.default.instance.exportCfg.front_share_config.title;
        window["wx"].shareAppMessage({
            title: content,
            imageUrl: dir
        });
        // cc.loader.loadRes(dir, (err, data) => {
        //     window["wx"].shareAppMessage({
        //         title: content,
        //         imageUrl: data.url
        //     })
        // });
    };
    return ShareMgr;
}());
exports.default = ShareMgr;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxTaGFyZU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHVDQUFpQztBQUNqQyw0REFBZ0Q7QUFHaEQ7SUFBQTtRQVNZLFNBQUksR0FBVyxFQUFFLENBQUE7UUFDakIsYUFBUSxHQUFXLENBQUMsQ0FBQTtRQUVwQixTQUFJLEdBQVcsQ0FBQyxDQUFBO1FBRXhCLGNBQVMsR0FBYTtZQUNsQixXQUFXO1lBQ1gsVUFBVTtZQUNWLFNBQVM7WUFDVCxjQUFjO1NBQUMsQ0FBQTtJQXdGdkIsQ0FBQztJQXhHRyxzQkFBa0Isb0JBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFBO2FBQ2xDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBYUQsU0FBUztJQUNULDRCQUFTLEdBQVQ7UUFBQSxpQkF5REM7UUF4REcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUN4QyxVQUFVO1lBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDdkIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzthQUM5QyxDQUFDLENBQUM7WUFFSCxJQUFJLEtBQUcsR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFBO1lBQzNELElBQUksU0FBTyxHQUFHLHFCQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUE7WUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRztnQkFD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UUFDN0IsU0FBUztRQUNULE1BQU07SUFDVixDQUFDO0lBRUwsZUFBQztBQUFELENBMUdBLEFBMEdDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuL0FkTWdyXCJcclxuaW1wb3J0IFd4QXBpIGZyb20gXCIuLi9MaWJzL1d4QXBpXCJcclxuaW1wb3J0IEpKTWdyIGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZU1nciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNoYXJlTWdyXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBTaGFyZU1nciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTaGFyZU1ncigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGF0aDogc3RyaW5nID0gJydcclxuICAgIHByaXZhdGUgcGljQ291bnQ6IG51bWJlciA9IDNcclxuXHJcbiAgICBwcml2YXRlIHByZVQ6IG51bWJlciA9IDBcclxuXHJcbiAgICBzaGFyZVRpcHM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICfor7fliIbkuqvliLDmtLvot4PnmoTnvqTvvIEnLFxyXG4gICAgICAgICfor7fliIbkuqvliLDkuI3lkIznvqTvvIEnLFxyXG4gICAgICAgICfor7fliIbkuqvnu5nlpb3lj4vvvIEnLFxyXG4gICAgICAgICfor7fliIbkuqvnu5kyMOS6uuS7peS4iueahOe+pO+8gSddXHJcblxyXG4gICAgLy/liJ3lp4vljJbliIbkuqsgIFxyXG4gICAgaW5pdFNoYXJlKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAvL+W8gOWQr+WPs+S4iuinkueahOWIhuS6q1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5zaG93U2hhcmVNZW51KHtcclxuICAgICAgICAgICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lbnVzOiBbJ3NoYXJlQXBwTWVzc2FnZScsICdzaGFyZVRpbWVsaW5lJ11cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlyID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3NoYXJlX2NvbmZpZy5pbWFnZVxyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9zaGFyZV9jb25maWcudGl0bGVcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogZGlyLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhkaXIsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gICAgIHdpbmRvd1tcInd4XCJdLm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogY29udGVudCxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25TaG93KChwYXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoV3hBcGkuc2hhcmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZiA9IHQgLSBXeEFwaS5zaGFyZVRpbWVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZiAvIDEwMDAgPj0gMyAmJiAhV3hBcGkuZmlyc3RTaGFyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBXeEFwaS5zaGFyZUNhbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgV3hBcGkuZnJvbnRfc2hhcmVfbnVtYmVyLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93W1wid3hcIl0uc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5YiG5Lqr5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFd4QXBpLnNoYXJlQ2FsbGJhY2sgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgV3hBcGkuZmlyc3RTaGFyZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNoYXJlVGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNoYXJlVGlwcy5sZW5ndGgpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn6YeN5paw5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaGFyZU1nci5pbnN0YW5jZS5zaGFyZUdhbWUoV3hBcGkuc2hhcmVDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hhcmVHYW1lKGNiOiBGdW5jdGlvbikge1xyXG4gICAgICAgIC8vIGlmIChXeEFwaS5mcm9udF9zaGFyZV9udW1iZXIgPD0gMCkge1xyXG4gICAgICAgIC8vICAgICBBZE1nci5pbnN0YW5jZS5zaG93VmlkZW8oY2IpXHJcbiAgICAgICAgLy8gICAgIHJldHVyblxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgV3hBcGkuc2hhcmVDYWxsYmFjayA9IGNiXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSAhPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgV3hBcGkuc2hhcmVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICBsZXQgZGlyID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3NoYXJlX2NvbmZpZy5pbWFnZVxyXG4gICAgICAgIGxldCBjb250ZW50ID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3NoYXJlX2NvbmZpZy50aXRsZVxyXG4gICAgICAgIHdpbmRvd1tcInd4XCJdLnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgICAgICBpbWFnZVVybDogZGlyXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhkaXIsIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAvLyAgICAgd2luZG93W1wid3hcIl0uc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAvLyAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgIC8vICAgICAgICAgaW1hZ2VVcmw6IGRhdGEudXJsXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG59Il19