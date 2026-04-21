"use strict";
cc._RF.push(module, '9233exXundB84Rjfz9Rs/b1', 'UserInfoController');
// subpackages/l_userInfo/Scripts/UserInfoController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var UserInfoView_1 = require("./UserInfoView");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UserInfoManager_1 = require("../../../Scripts/gamePlay/base/user/UserInfoManager");
var UserInfoController = /** @class */ (function (_super) {
    __extends(UserInfoController, _super);
    function UserInfoController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = UserInfoView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this._tempSelectedAvatarId = 1;
        _this._tempSelectedFrameId = 1;
        _this._tempSelectedUserName = "";
        _this._userInfoManager = UserInfoManager_1.default.getInstance();
        return _this;
    }
    UserInfoController.prototype.viewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.viewDidLoad.call(this);
                        this._tempSelectedAvatarId = UserModel_1.default.getInstance().getAvatarId();
                        this._tempSelectedFrameId = UserModel_1.default.getInstance().getFrameId();
                        this._tempSelectedUserName = UserModel_1.default.getInstance().getUserName();
                        return [4 /*yield*/, this.refreshTopDisplay()];
                    case 1:
                        _a.sent();
                        this.viewDoAction("updateTabButtonState", "avatar");
                        return [2 /*return*/];
                }
            });
        });
    };
    UserInfoController.prototype.refreshTopDisplay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e, t, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._userInfoManager.loadUserAvatarAndFrame(this._tempSelectedAvatarId, this._tempSelectedFrameId, this)];
                    case 1:
                        e = _a.sent(), t = e.avatar, r = e.frame;
                        this.viewDoAction("refreshTopDisplay", {
                            avatarSprite: t,
                            frameSprite: r
                        });
                        this.viewDoAction("refreshUserName", this._tempSelectedUserName);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserInfoController.prototype.loadAvatarData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e;
            return __generator(this, function (_a) {
                e = this.generateAvatarList();
                this.viewDoAction("showDataList", e);
                return [2 /*return*/];
            });
        });
    };
    UserInfoController.prototype.loadFrameData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e;
            return __generator(this, function (_a) {
                e = this.generateFrameList();
                this.viewDoAction("showDataList", e);
                return [2 /*return*/];
            });
        });
    };
    UserInfoController.prototype.generateAvatarList = function () {
        var e = this, t = [], r = this._userInfoManager.getAllAvatarConfigs();
        if (0 === r.length)
            return this.getAvatarList(t);
        var n = __spreadArrays(r), a = n.findIndex(function (t) {
            return t.ID === e._tempSelectedAvatarId;
        });
        if (a > 0) {
            var o = n.splice(a, 1)[0];
            n.unshift(o);
        }
        for (var i = 0; i < n.length; i++) {
            var s = n[i];
            t.push({
                id: s.ID,
                icon: UserInfoManager_1.AvatarIconPath + s.Icon,
                isSelected: s.ID === this._tempSelectedAvatarId,
                type: "avatar"
            });
        }
        return this.getAvatarList(t);
    };
    UserInfoController.prototype.getAvatarList = function (e) {
        return e;
    };
    UserInfoController.prototype.generateFrameList = function () {
        var e = this, t = [], r = this._userInfoManager.getAllFrameConfigs();
        if (0 === r.length)
            return t;
        var n = __spreadArrays(r), a = n.findIndex(function (t) {
            return t.ID === e._tempSelectedFrameId;
        });
        if (a > 0) {
            var o = n.splice(a, 1)[0];
            n.unshift(o);
        }
        for (var i = 0; i < n.length; i++) {
            var s = n[i];
            t.push({
                id: s.ID,
                icon: UserInfoManager_1.AvatarIconPath + s.Icon,
                isSelected: s.ID === this._tempSelectedFrameId,
                type: "frame"
            });
        }
        return t;
    };
    UserInfoController.prototype.onSaveSuccess = function () {
        this.close();
    };
    UserInfoController.prototype.refreshForReuse = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.refreshForReuse.call(this, t);
                        this._tempSelectedAvatarId = UserModel_1.default.getInstance().getAvatarId() || 1;
                        this._tempSelectedFrameId = UserModel_1.default.getInstance().getFrameId() || 1;
                        return [4 /*yield*/, this.refreshTopDisplay()];
                    case 1:
                        _a.sent();
                        this.viewDoAction("updateTabButtonState", "avatar");
                        return [2 /*return*/];
                }
            });
        });
    };
    UserInfoController.prototype.updateSelectAvatar = function (e) {
        this._tempSelectedAvatarId = e;
        this.refreshTopDisplay();
    };
    UserInfoController.prototype.updateSelectFrame = function (e) {
        this._tempSelectedFrameId = e;
        this.refreshTopDisplay();
    };
    UserInfoController.prototype.changeUserName = function () {
        this._tempSelectedUserName = this._userInfoManager.getRandomName();
        this.viewDoAction("refreshUserName", this._tempSelectedUserName);
    };
    UserInfoController.prototype.saveUserInfo = function () {
        UserModel_1.default.getInstance().setAvatarId(this._tempSelectedAvatarId);
        UserModel_1.default.getInstance().setFrameId(this._tempSelectedFrameId);
        UserModel_1.default.getInstance().setUserName(this._tempSelectedUserName);
        this.onSaveSuccess();
    };
    __decorate([
        mj.traitEvent("UsrInfoCtrl_avatarList")
    ], UserInfoController.prototype, "getAvatarList", null);
    UserInfoController = __decorate([
        mj.class("UserInfoController")
    ], UserInfoController);
    return UserInfoController;
}(ViewController_1.default));
exports.default = UserInfoController;

cc._RF.pop();