
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_userInfo/Scripts/UserInfoController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3VzZXJJbmZvL1NjcmlwdHMvVXNlckluZm9Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0c7QUFDaEcsK0NBQTBDO0FBQzFDLHNFQUFpRTtBQUNqRSx1RkFBc0c7QUFFdEc7SUFBZ0Qsc0NBQWM7SUFBOUQ7UUFBQSxxRUF1SEM7UUF0SEMsZUFBUyxHQUFHLHNCQUFZLENBQUM7UUFDekIsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDO1FBQzFCLDJCQUFxQixHQUFHLENBQUMsQ0FBQztRQUMxQiwwQkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekIsMkJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLHNCQUFnQixHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7O0lBaUhuRCxDQUFDO0lBaEhPLHdDQUFXLEdBQWpCOzs7Ozt3QkFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbkUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ2pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNuRSxxQkFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQTs7d0JBQTlCLFNBQThCLENBQUM7d0JBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQ3BELHNCQUFPOzs7O0tBQ1I7SUFDSyw4Q0FBaUIsR0FBdkI7Ozs7OzRCQUVNLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxJ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LHdCQUFjLEdBdUg3RDtrQkF2SG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IFVzZXJJbmZvVmlldyBmcm9tICcuL1VzZXJJbmZvVmlldyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IFVzZXJJbmZvTWFuYWdlciwgeyBBdmF0YXJJY29uUGF0aCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91c2VyL1VzZXJJbmZvTWFuYWdlcic7XG5AbWouY2xhc3MoXCJVc2VySW5mb0NvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gVXNlckluZm9WaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLkFMRVJUO1xuICBfdGVtcFNlbGVjdGVkQXZhdGFySWQgPSAxO1xuICBfdGVtcFNlbGVjdGVkRnJhbWVJZCA9IDE7XG4gIF90ZW1wU2VsZWN0ZWRVc2VyTmFtZSA9IFwiXCI7XG4gIF91c2VySW5mb01hbmFnZXIgPSBVc2VySW5mb01hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgYXN5bmMgdmlld0RpZExvYWQoKSB7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl90ZW1wU2VsZWN0ZWRBdmF0YXJJZCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEF2YXRhcklkKCk7XG4gICAgdGhpcy5fdGVtcFNlbGVjdGVkRnJhbWVJZCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEZyYW1lSWQoKTtcbiAgICB0aGlzLl90ZW1wU2VsZWN0ZWRVc2VyTmFtZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFVzZXJOYW1lKCk7XG4gICAgYXdhaXQgdGhpcy5yZWZyZXNoVG9wRGlzcGxheSgpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwidXBkYXRlVGFiQnV0dG9uU3RhdGVcIiwgXCJhdmF0YXJcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFzeW5jIHJlZnJlc2hUb3BEaXNwbGF5KCkge1xuICAgIHZhciBlLCB0LCByO1xuICAgIGUgPSBhd2FpdCB0aGlzLl91c2VySW5mb01hbmFnZXIubG9hZFVzZXJBdmF0YXJBbmRGcmFtZSh0aGlzLl90ZW1wU2VsZWN0ZWRBdmF0YXJJZCwgdGhpcy5fdGVtcFNlbGVjdGVkRnJhbWVJZCwgdGhpcyksIHQgPSBlLmF2YXRhciwgciA9IGUuZnJhbWU7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJyZWZyZXNoVG9wRGlzcGxheVwiLCB7XG4gICAgICBhdmF0YXJTcHJpdGU6IHQsXG4gICAgICBmcmFtZVNwcml0ZTogclxuICAgIH0pO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwicmVmcmVzaFVzZXJOYW1lXCIsIHRoaXMuX3RlbXBTZWxlY3RlZFVzZXJOYW1lKTtcbiAgICByZXR1cm47XG4gIH1cbiAgYXN5bmMgbG9hZEF2YXRhckRhdGEoKSB7XG4gICAgdmFyIGU7XG4gICAgZSA9IHRoaXMuZ2VuZXJhdGVBdmF0YXJMaXN0KCk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJzaG93RGF0YUxpc3RcIiwgZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFzeW5jIGxvYWRGcmFtZURhdGEoKSB7XG4gICAgdmFyIGU7XG4gICAgZSA9IHRoaXMuZ2VuZXJhdGVGcmFtZUxpc3QoKTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dEYXRhTGlzdFwiLCBlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZ2VuZXJhdGVBdmF0YXJMaXN0KCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSBbXSxcbiAgICAgIHIgPSB0aGlzLl91c2VySW5mb01hbmFnZXIuZ2V0QWxsQXZhdGFyQ29uZmlncygpO1xuICAgIGlmICgwID09PSByLmxlbmd0aCkgcmV0dXJuIHRoaXMuZ2V0QXZhdGFyTGlzdCh0KTtcbiAgICB2YXIgbiA9IFsuLi5yXSxcbiAgICAgIGEgPSBuLmZpbmRJbmRleChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5JRCA9PT0gZS5fdGVtcFNlbGVjdGVkQXZhdGFySWQ7XG4gICAgICB9KTtcbiAgICBpZiAoYSA+IDApIHtcbiAgICAgIHZhciBvID0gbi5zcGxpY2UoYSwgMSlbMF07XG4gICAgICBuLnVuc2hpZnQobyk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHMgPSBuW2ldO1xuICAgICAgdC5wdXNoKHtcbiAgICAgICAgaWQ6IHMuSUQsXG4gICAgICAgIGljb246IEF2YXRhckljb25QYXRoICsgcy5JY29uLFxuICAgICAgICBpc1NlbGVjdGVkOiBzLklEID09PSB0aGlzLl90ZW1wU2VsZWN0ZWRBdmF0YXJJZCxcbiAgICAgICAgdHlwZTogXCJhdmF0YXJcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldEF2YXRhckxpc3QodCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJVc3JJbmZvQ3RybF9hdmF0YXJMaXN0XCIpXG4gIGdldEF2YXRhckxpc3QoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG4gIGdlbmVyYXRlRnJhbWVMaXN0KCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSBbXSxcbiAgICAgIHIgPSB0aGlzLl91c2VySW5mb01hbmFnZXIuZ2V0QWxsRnJhbWVDb25maWdzKCk7XG4gICAgaWYgKDAgPT09IHIubGVuZ3RoKSByZXR1cm4gdDtcbiAgICB2YXIgbiA9IFsuLi5yXSxcbiAgICAgIGEgPSBuLmZpbmRJbmRleChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5JRCA9PT0gZS5fdGVtcFNlbGVjdGVkRnJhbWVJZDtcbiAgICAgIH0pO1xuICAgIGlmIChhID4gMCkge1xuICAgICAgdmFyIG8gPSBuLnNwbGljZShhLCAxKVswXTtcbiAgICAgIG4udW5zaGlmdChvKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcyA9IG5baV07XG4gICAgICB0LnB1c2goe1xuICAgICAgICBpZDogcy5JRCxcbiAgICAgICAgaWNvbjogQXZhdGFySWNvblBhdGggKyBzLkljb24sXG4gICAgICAgIGlzU2VsZWN0ZWQ6IHMuSUQgPT09IHRoaXMuX3RlbXBTZWxlY3RlZEZyYW1lSWQsXG4gICAgICAgIHR5cGU6IFwiZnJhbWVcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIG9uU2F2ZVN1Y2Nlc3MoKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG4gIGFzeW5jIHJlZnJlc2hGb3JSZXVzZSh0KSB7XG4gICAgc3VwZXIucmVmcmVzaEZvclJldXNlLmNhbGwodGhpcywgdCk7XG4gICAgdGhpcy5fdGVtcFNlbGVjdGVkQXZhdGFySWQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRBdmF0YXJJZCgpIHx8IDE7XG4gICAgdGhpcy5fdGVtcFNlbGVjdGVkRnJhbWVJZCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEZyYW1lSWQoKSB8fCAxO1xuICAgIGF3YWl0IHRoaXMucmVmcmVzaFRvcERpc3BsYXkoKTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInVwZGF0ZVRhYkJ1dHRvblN0YXRlXCIsIFwiYXZhdGFyXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICB1cGRhdGVTZWxlY3RBdmF0YXIoZSkge1xuICAgIHRoaXMuX3RlbXBTZWxlY3RlZEF2YXRhcklkID0gZTtcbiAgICB0aGlzLnJlZnJlc2hUb3BEaXNwbGF5KCk7XG4gIH1cbiAgdXBkYXRlU2VsZWN0RnJhbWUoZSkge1xuICAgIHRoaXMuX3RlbXBTZWxlY3RlZEZyYW1lSWQgPSBlO1xuICAgIHRoaXMucmVmcmVzaFRvcERpc3BsYXkoKTtcbiAgfVxuICBjaGFuZ2VVc2VyTmFtZSgpIHtcbiAgICB0aGlzLl90ZW1wU2VsZWN0ZWRVc2VyTmFtZSA9IHRoaXMuX3VzZXJJbmZvTWFuYWdlci5nZXRSYW5kb21OYW1lKCk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJyZWZyZXNoVXNlck5hbWVcIiwgdGhpcy5fdGVtcFNlbGVjdGVkVXNlck5hbWUpO1xuICB9XG4gIHNhdmVVc2VySW5mbygpIHtcbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRBdmF0YXJJZCh0aGlzLl90ZW1wU2VsZWN0ZWRBdmF0YXJJZCk7XG4gICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0RnJhbWVJZCh0aGlzLl90ZW1wU2VsZWN0ZWRGcmFtZUlkKTtcbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRVc2VyTmFtZSh0aGlzLl90ZW1wU2VsZWN0ZWRVc2VyTmFtZSk7XG4gICAgdGhpcy5vblNhdmVTdWNjZXNzKCk7XG4gIH1cbn0iXX0=