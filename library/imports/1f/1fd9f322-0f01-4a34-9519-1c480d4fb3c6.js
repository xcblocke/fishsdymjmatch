"use strict";
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