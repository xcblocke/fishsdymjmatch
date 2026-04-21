
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/user/UserInfoManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fd9fMiDwFKNJUZHEgNT7PG', 'UserInfoManager');
// Scripts/gamePlay/base/user/UserInfoManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarIconPath = void 0;
var LoginModel_1 = require("../../login/model/LoginModel");
var UserModel_1 = require("../../user/UserModel");
var CommonUtils_1 = require("../../../framework/utils/CommonUtils");
var DataReader_1 = require("../../../framework/data/DataReader");
exports.AvatarIconPath = "texture/avatar/";
var UserInfoManager = /** @class */ (function () {
    function UserInfoManager() {
    }
    UserInfoManager_1 = UserInfoManager;
    UserInfoManager.getInstance = function () {
        this._instance || (this._instance = new UserInfoManager_1());
        return this._instance;
    };
    UserInfoManager.prototype.init = function () {
        this.setDefaultUserAvatar();
        this.setDefaultUserFrame();
        this.setDefaultUserName();
    };
    UserInfoManager.prototype.loadCurrentUserAvatar = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (_a) {
                t = UserModel_1.default.getInstance().getAvatarId() || 1;
                return [2 /*return*/, this.loadAvatarSprite(t, e.loadRes.bind(e))];
            });
        });
    };
    UserInfoManager.prototype.loadCurrentUserFrame = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (_a) {
                t = UserModel_1.default.getInstance().getFrameId() || 1;
                return [2 /*return*/, this.loadFrameSprite(t, e.loadRes.bind(e))];
            });
        });
    };
    UserInfoManager.prototype.loadUserAvatarAndFrame = function (e, t, o) {
        return __awaiter(this, void 0, void 0, function () {
            var n, i, l, s, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        n = o.loadRes.bind(o);
                        _b = (_a = __read).apply;
                        _c = [void 0];
                        return [4 /*yield*/, Promise.all([this.loadAvatarSprite(e, n), this.loadFrameSprite(t, n)])];
                    case 1:
                        i = _b.apply(_a, _c.concat([[_d.sent(), 2]])), l = i[0], s = i[1];
                        return [2 /*return*/, {
                                avatar: l,
                                frame: s
                            }];
                }
            });
        });
    };
    UserInfoManager.prototype.setupUserAvatar = function (e, t, o, n) {
        return __awaiter(this, void 0, void 0, function () {
            var i, a, l, c, u, p, __error_0_0_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        i = (null == n ? void 0 : n.avatarId) || UserModel_1.default.getInstance().getAvatarId() || 1;
                        a = (null == n ? void 0 : n.frameId) || UserModel_1.default.getInstance().getFrameId() || 1;
                        return [4 /*yield*/, this.loadUserAvatarAndFrame(i, a, e)];
                    case 1:
                        l = _a.sent(), c = l.avatar, u = l.frame;
                        c && t && cc.isValid(t.node) && (t.spriteFrame = c);
                        u && o && cc.isValid(o.node) && (o.spriteFrame = u);
                        return [2 /*return*/, true];
                    case 2:
                        __error_0_0_1 = _a.sent();
                        p = __error_0_0_1;
                        console.error("[UserInfoManager] 设置用户头像失败: " + p.message);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserInfoManager.prototype.getAvatarConfig = function (e) {
        return DataReader_1.DataReader.getByKey("headConfig", e);
    };
    UserInfoManager.prototype.getFrameConfig = function (e) {
        return DataReader_1.DataReader.getByKey("headRingConfig", e);
    };
    UserInfoManager.prototype.getAllAvatarConfigs = function () {
        return DataReader_1.DataReader.getList("headConfig");
    };
    UserInfoManager.prototype.getAllFrameConfigs = function () {
        return DataReader_1.DataReader.getList("headRingConfig");
    };
    UserInfoManager.prototype.getAvatarIconPath = function (e) {
        var t = this.getAvatarConfig(e);
        t || (t = this.getAvatarConfig(1));
        return exports.AvatarIconPath + t.Icon;
    };
    UserInfoManager.prototype.getFrameIconPath = function (e) {
        return exports.AvatarIconPath + this.getFrameConfig(e).Icon;
    };
    UserInfoManager.prototype.getRandomName = function (e) {
        var t = e || this.getCurrentLanguageCode(), o = DataReader_1.DataReader.getByKey("playerRoleName", t);
        o && o.Rolename && 0 !== o.Rolename.length || (o = DataReader_1.DataReader.getByKey("playerRoleName", "EN_US"));
        var n = Math.floor(Math.random() * o.Rolename.length);
        return o.Rolename[n];
    };
    UserInfoManager.prototype.getRandomAvatarId = function () {
        var e = DataReader_1.DataReader.getList("headConfig");
        return e && 0 !== e.length ? e[Math.floor(Math.random() * e.length)].ID : 1;
    };
    UserInfoManager.prototype.getRandomFrameId = function () {
        var e = DataReader_1.DataReader.getList("headRingConfig");
        return e && 0 !== e.length ? e[Math.floor(Math.random() * e.length)].ID : 1;
    };
    UserInfoManager.prototype.getNameListByLanguage = function (e) {
        var t = DataReader_1.DataReader.getByKey("playerRoleName", e);
        t && t.Rolename && 0 !== t.Rolename.length || (t = DataReader_1.DataReader.getByKey("playerRoleName", "EN_US"));
        return t.Rolename;
    };
    UserInfoManager.prototype.isKoreanName = function (e) {
        if (!e)
            return false;
        var t = DataReader_1.DataReader.getByKey("playerRoleName", "KO");
        return ((null == t ? void 0 : t.Rolename) || []).includes(e);
    };
    UserInfoManager.prototype.isRussianName = function (e) {
        if (!e)
            return false;
        var t = DataReader_1.DataReader.getByKey("playerRoleName", "RU");
        return ((null == t ? void 0 : t.Rolename) || []).includes(e);
    };
    UserInfoManager.prototype.getCurrentLanguageCode = function () {
        var e = LoginModel_1.default.getInstance().language;
        return CommonUtils_1.formatLanguageCodeToString(e);
    };
    UserInfoManager.prototype.loadAvatarSprite = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var n, i, a, __error_1_0_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(n = this.getAvatarConfig(e))) {
                            return [2 /*return*/, null];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, t(exports.AvatarIconPath + n.Icon, cc.SpriteFrame, this.getDefaultIconBundleName())];
                    case 2:
                        i = _a.sent();
                        return [2 /*return*/, Array.isArray(i) ? i[0] : i];
                    case 3:
                        __error_1_0_1 = _a.sent();
                        a = __error_1_0_1;
                        console.error("[UserInfoManager] 加载头像失败: avatarId=" + e + ", " + a.message);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserInfoManager.prototype.loadFrameSprite = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var n, i, a, __error_1_0_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(n = this.getFrameConfig(e))) {
                            return [2 /*return*/, null];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, t(exports.AvatarIconPath + n.Icon, cc.SpriteFrame, "mainRes")];
                    case 2:
                        i = _a.sent();
                        return [2 /*return*/, Array.isArray(i) ? i[0] : i];
                    case 3:
                        __error_1_0_2 = _a.sent();
                        a = __error_1_0_2;
                        console.error("[UserInfoManager] 加载头像框失败: frameId=" + e + ", " + a.message);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserInfoManager.prototype.setDefaultUserName = function () {
        var e = UserModel_1.default.getInstance().getUserName();
        e && "" !== e || UserModel_1.default.getInstance().setUserName(this.getRandomName());
    };
    UserInfoManager.prototype.setDefaultUserAvatar = function () {
        var e = UserModel_1.default.getInstance().getAvatarId();
        e && 0 !== e || UserModel_1.default.getInstance().setAvatarId(1);
    };
    UserInfoManager.prototype.setDefaultUserFrame = function () {
        var e = UserModel_1.default.getInstance().getFrameId();
        e && 0 !== e || UserModel_1.default.getInstance().setFrameId(1);
    };
    UserInfoManager.prototype.getDefaultIconBundleName = function () {
        return "mainRes";
    };
    var UserInfoManager_1;
    UserInfoManager._instance = null;
    __decorate([
        mj.traitEvent("InfoMgr_getAvatarId")
    ], UserInfoManager.prototype, "getRandomAvatarId", null);
    __decorate([
        mj.traitEvent("InfoMgr_setDefAvatar")
    ], UserInfoManager.prototype, "setDefaultUserAvatar", null);
    __decorate([
        mj.traitEvent("InfoMgr_setDefFrame")
    ], UserInfoManager.prototype, "setDefaultUserFrame", null);
    __decorate([
        mj.traitEvent("InfoMgr_getDftIconBdNm")
    ], UserInfoManager.prototype, "getDefaultIconBundleName", null);
    UserInfoManager = UserInfoManager_1 = __decorate([
        mj.class("UserInfoManager")
    ], UserInfoManager);
    return UserInfoManager;
}());
exports.default = UserInfoManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdXNlci9Vc2VySW5mb01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsa0RBQTZDO0FBQzdDLG9FQUFrRjtBQUNsRixpRUFBZ0U7QUFDckQsUUFBQSxjQUFjLEdBQUcsaUJBQWlCLENBQUM7QUFFOUM7SUFBQTtJQXFKQSxDQUFDO3dCQXJKb0IsZUFBZTtJQUUzQiwyQkFBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQWUsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNLLCtDQUFxQixHQUEzQixVQUE0QixDQUFDOzs7O2dCQUUzQixDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLHNCQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQzs7O0tBQ3BEO0lBQ0ssOENBQW9CLEdBQTFCLFVBQTJCLENBQUM7Ozs7Z0JBRTFCLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDOUMsc0JBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQzs7O0tB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SUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsNkNBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM3QyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsa0RBQXdCLEdBQXhCO1FBQ0UsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7SUFuSk0seUJBQVMsR0FBRyxJQUFJLENBQUM7SUF5RXhCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzs0REFJcEM7SUEyREQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOytEQUlyQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzs4REFJcEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7bUVBR3ZDO0lBcEprQixlQUFlO1FBRG5DLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7T0FDUCxlQUFlLENBcUpuQztJQUFELHNCQUFDO0NBckpELEFBcUpDLElBQUE7a0JBckpvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ2luTW9kZWwgZnJvbSAnLi4vLi4vbG9naW4vbW9kZWwvTG9naW5Nb2RlbCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uL3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IGZvcm1hdExhbmd1YWdlQ29kZVRvU3RyaW5nIH0gZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9mcmFtZXdvcmsvZGF0YS9EYXRhUmVhZGVyJztcbmV4cG9ydCB2YXIgQXZhdGFySWNvblBhdGggPSBcInRleHR1cmUvYXZhdGFyL1wiO1xuQG1qLmNsYXNzKFwiVXNlckluZm9NYW5hZ2VyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mb01hbmFnZXIge1xuICBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDtcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyBVc2VySW5mb01hbmFnZXIoKSk7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5zZXREZWZhdWx0VXNlckF2YXRhcigpO1xuICAgIHRoaXMuc2V0RGVmYXVsdFVzZXJGcmFtZSgpO1xuICAgIHRoaXMuc2V0RGVmYXVsdFVzZXJOYW1lKCk7XG4gIH1cbiAgYXN5bmMgbG9hZEN1cnJlbnRVc2VyQXZhdGFyKGUpIHtcbiAgICB2YXIgdDtcbiAgICB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0QXZhdGFySWQoKSB8fCAxO1xuICAgIHJldHVybiB0aGlzLmxvYWRBdmF0YXJTcHJpdGUodCwgZS5sb2FkUmVzLmJpbmQoZSkpO1xuICB9XG4gIGFzeW5jIGxvYWRDdXJyZW50VXNlckZyYW1lKGUpIHtcbiAgICB2YXIgdDtcbiAgICB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0RnJhbWVJZCgpIHx8IDE7XG4gICAgcmV0dXJuIHRoaXMubG9hZEZyYW1lU3ByaXRlKHQsIGUubG9hZFJlcy5iaW5kKGUpKTtcbiAgfVxuICBhc3luYyBsb2FkVXNlckF2YXRhckFuZEZyYW1lKGUsIHQsIG8pIHtcbiAgICB2YXIgbiwgaSwgbCwgcztcbiAgICBuID0gby5sb2FkUmVzLmJpbmQobyk7XG4gICAgaSA9IF9fcmVhZC5hcHBseSh2b2lkIDAsIFthd2FpdCBQcm9taXNlLmFsbChbdGhpcy5sb2FkQXZhdGFyU3ByaXRlKGUsIG4pLCB0aGlzLmxvYWRGcmFtZVNwcml0ZSh0LCBuKV0pLCAyXSksIGwgPSBpWzBdLCBzID0gaVsxXTtcbiAgICByZXR1cm4ge1xuICAgICAgYXZhdGFyOiBsLFxuICAgICAgZnJhbWU6IHNcbiAgICB9O1xuICB9XG4gIGFzeW5jIHNldHVwVXNlckF2YXRhcihlLCB0LCBvLCBuKSB7XG4gICAgdmFyIGksIGEsIGwsIGMsIHUsIHA7XG4gICAgdHJ5IHtcbiAgICAgIGkgPSAobnVsbCA9PSBuID8gdm9pZCAwIDogbi5hdmF0YXJJZCkgfHwgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0QXZhdGFySWQoKSB8fCAxO1xuICAgICAgYSA9IChudWxsID09IG4gPyB2b2lkIDAgOiBuLmZyYW1lSWQpIHx8IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEZyYW1lSWQoKSB8fCAxO1xuICAgICAgbCA9IGF3YWl0IHRoaXMubG9hZFVzZXJBdmF0YXJBbmRGcmFtZShpLCBhLCBlKSwgYyA9IGwuYXZhdGFyLCB1ID0gbC5mcmFtZTtcbiAgICAgIGMgJiYgdCAmJiBjYy5pc1ZhbGlkKHQubm9kZSkgJiYgKHQuc3ByaXRlRnJhbWUgPSBjKTtcbiAgICAgIHUgJiYgbyAmJiBjYy5pc1ZhbGlkKG8ubm9kZSkgJiYgKG8uc3ByaXRlRnJhbWUgPSB1KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKF9fZXJyb3JfMF8wKSB7XG4gICAgICBwID0gX19lcnJvcl8wXzA7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1VzZXJJbmZvTWFuYWdlcl0g6K6+572u55So5oi35aS05YOP5aSx6LSlOiBcIiArIHAubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBnZXRBdmF0YXJDb25maWcoZSkge1xuICAgIHJldHVybiBEYXRhUmVhZGVyLmdldEJ5S2V5KFwiaGVhZENvbmZpZ1wiLCBlKTtcbiAgfVxuICBnZXRGcmFtZUNvbmZpZyhlKSB7XG4gICAgcmV0dXJuIERhdGFSZWFkZXIuZ2V0QnlLZXkoXCJoZWFkUmluZ0NvbmZpZ1wiLCBlKTtcbiAgfVxuICBnZXRBbGxBdmF0YXJDb25maWdzKCkge1xuICAgIHJldHVybiBEYXRhUmVhZGVyLmdldExpc3QoXCJoZWFkQ29uZmlnXCIpO1xuICB9XG4gIGdldEFsbEZyYW1lQ29uZmlncygpIHtcbiAgICByZXR1cm4gRGF0YVJlYWRlci5nZXRMaXN0KFwiaGVhZFJpbmdDb25maWdcIik7XG4gIH1cbiAgZ2V0QXZhdGFySWNvblBhdGgoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRBdmF0YXJDb25maWcoZSk7XG4gICAgdCB8fCAodCA9IHRoaXMuZ2V0QXZhdGFyQ29uZmlnKDEpKTtcbiAgICByZXR1cm4gQXZhdGFySWNvblBhdGggKyB0Lkljb247XG4gIH1cbiAgZ2V0RnJhbWVJY29uUGF0aChlKSB7XG4gICAgcmV0dXJuIEF2YXRhckljb25QYXRoICsgdGhpcy5nZXRGcmFtZUNvbmZpZyhlKS5JY29uO1xuICB9XG4gIGdldFJhbmRvbU5hbWUoZSkge1xuICAgIHZhciB0ID0gZSB8fCB0aGlzLmdldEN1cnJlbnRMYW5ndWFnZUNvZGUoKSxcbiAgICAgIG8gPSBEYXRhUmVhZGVyLmdldEJ5S2V5KFwicGxheWVyUm9sZU5hbWVcIiwgdCk7XG4gICAgbyAmJiBvLlJvbGVuYW1lICYmIDAgIT09IG8uUm9sZW5hbWUubGVuZ3RoIHx8IChvID0gRGF0YVJlYWRlci5nZXRCeUtleShcInBsYXllclJvbGVOYW1lXCIsIFwiRU5fVVNcIikpO1xuICAgIHZhciBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogby5Sb2xlbmFtZS5sZW5ndGgpO1xuICAgIHJldHVybiBvLlJvbGVuYW1lW25dO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSW5mb01ncl9nZXRBdmF0YXJJZFwiKVxuICBnZXRSYW5kb21BdmF0YXJJZCgpIHtcbiAgICB2YXIgZSA9IERhdGFSZWFkZXIuZ2V0TGlzdChcImhlYWRDb25maWdcIik7XG4gICAgcmV0dXJuIGUgJiYgMCAhPT0gZS5sZW5ndGggPyBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGUubGVuZ3RoKV0uSUQgOiAxO1xuICB9XG4gIGdldFJhbmRvbUZyYW1lSWQoKSB7XG4gICAgdmFyIGUgPSBEYXRhUmVhZGVyLmdldExpc3QoXCJoZWFkUmluZ0NvbmZpZ1wiKTtcbiAgICByZXR1cm4gZSAmJiAwICE9PSBlLmxlbmd0aCA/IGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZS5sZW5ndGgpXS5JRCA6IDE7XG4gIH1cbiAgZ2V0TmFtZUxpc3RCeUxhbmd1YWdlKGUpIHtcbiAgICB2YXIgdCA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoXCJwbGF5ZXJSb2xlTmFtZVwiLCBlKTtcbiAgICB0ICYmIHQuUm9sZW5hbWUgJiYgMCAhPT0gdC5Sb2xlbmFtZS5sZW5ndGggfHwgKHQgPSBEYXRhUmVhZGVyLmdldEJ5S2V5KFwicGxheWVyUm9sZU5hbWVcIiwgXCJFTl9VU1wiKSk7XG4gICAgcmV0dXJuIHQuUm9sZW5hbWU7XG4gIH1cbiAgaXNLb3JlYW5OYW1lKGUpIHtcbiAgICBpZiAoIWUpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgdCA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoXCJwbGF5ZXJSb2xlTmFtZVwiLCBcIktPXCIpO1xuICAgIHJldHVybiAoKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuUm9sZW5hbWUpIHx8IFtdKS5pbmNsdWRlcyhlKTtcbiAgfVxuICBpc1J1c3NpYW5OYW1lKGUpIHtcbiAgICBpZiAoIWUpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgdCA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoXCJwbGF5ZXJSb2xlTmFtZVwiLCBcIlJVXCIpO1xuICAgIHJldHVybiAoKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuUm9sZW5hbWUpIHx8IFtdKS5pbmNsdWRlcyhlKTtcbiAgfVxuICBnZXRDdXJyZW50TGFuZ3VhZ2VDb2RlKCkge1xuICAgIHZhciBlID0gTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmxhbmd1YWdlO1xuICAgIHJldHVybiBmb3JtYXRMYW5ndWFnZUNvZGVUb1N0cmluZyhlKTtcbiAgfVxuICBhc3luYyBsb2FkQXZhdGFyU3ByaXRlKGUsIHQpIHtcbiAgICB2YXIgbiwgaSwgYTtcbiAgICBpZiAoIShuID0gdGhpcy5nZXRBdmF0YXJDb25maWcoZSkpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGkgPSBhd2FpdCB0KEF2YXRhckljb25QYXRoICsgbi5JY29uLCBjYy5TcHJpdGVGcmFtZSwgdGhpcy5nZXREZWZhdWx0SWNvbkJ1bmRsZU5hbWUoKSk7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpKSA/IGlbMF0gOiBpO1xuICAgIH0gY2F0Y2ggKF9fZXJyb3JfMV8wKSB7XG4gICAgICBhID0gX19lcnJvcl8xXzA7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1VzZXJJbmZvTWFuYWdlcl0g5Yqg6L295aS05YOP5aSx6LSlOiBhdmF0YXJJZD1cIiArIGUgKyBcIiwgXCIgKyBhLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBhc3luYyBsb2FkRnJhbWVTcHJpdGUoZSwgdCkge1xuICAgIHZhciBuLCBpLCBhO1xuICAgIGlmICghKG4gPSB0aGlzLmdldEZyYW1lQ29uZmlnKGUpKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBpID0gYXdhaXQgdChBdmF0YXJJY29uUGF0aCArIG4uSWNvbiwgY2MuU3ByaXRlRnJhbWUsIFwibWFpblJlc1wiKTtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGkpID8gaVswXSA6IGk7XG4gICAgfSBjYXRjaCAoX19lcnJvcl8xXzApIHtcbiAgICAgIGEgPSBfX2Vycm9yXzFfMDtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbVXNlckluZm9NYW5hZ2VyXSDliqDovb3lpLTlg4/moYblpLHotKU6IGZyYW1lSWQ9XCIgKyBlICsgXCIsIFwiICsgYS5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgc2V0RGVmYXVsdFVzZXJOYW1lKCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0VXNlck5hbWUoKTtcbiAgICBlICYmIFwiXCIgIT09IGUgfHwgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0VXNlck5hbWUodGhpcy5nZXRSYW5kb21OYW1lKCkpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSW5mb01ncl9zZXREZWZBdmF0YXJcIilcbiAgc2V0RGVmYXVsdFVzZXJBdmF0YXIoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRBdmF0YXJJZCgpO1xuICAgIGUgJiYgMCAhPT0gZSB8fCBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRBdmF0YXJJZCgxKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkluZm9NZ3Jfc2V0RGVmRnJhbWVcIilcbiAgc2V0RGVmYXVsdFVzZXJGcmFtZSgpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEZyYW1lSWQoKTtcbiAgICBlICYmIDAgIT09IGUgfHwgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0RnJhbWVJZCgxKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkluZm9NZ3JfZ2V0RGZ0SWNvbkJkTm1cIilcbiAgZ2V0RGVmYXVsdEljb25CdW5kbGVOYW1lKCkge1xuICAgIHJldHVybiBcIm1haW5SZXNcIjtcbiAgfVxufSJdfQ==