"use strict";
cc._RF.push(module, '40cf7NAedxD7JnLw37pLl/R', 'UserInfoCellItem');
// subpackages/l_userInfo/Scripts/UserInfoCellItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCell_1 = require("../../../Scripts/base/ui/BaseCell");
var UserInfoManager_1 = require("../../../Scripts/gamePlay/base/user/UserInfoManager");
var UserInfoCellItem = /** @class */ (function (_super) {
    __extends(UserInfoCellItem, _super);
    function UserInfoCellItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._itemNodes = [];
        return _this;
    }
    UserInfoCellItem.prototype.uiOnLoad = function () {
        for (var e, t, r = this, n = function n(n) {
            var o = cc.find("node" + (n + 1), a._cellUI);
            if (!o)
                return "continue";
            a._itemNodes[n] = {
                container: o,
                headImg: null === (e = cc.find("btn/headImg", o)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite),
                selectNode: cc.find("btn/select", o),
                frameImg: null === (t = cc.find("btn/frameImg", o)) || void 0 === t ? void 0 : t.getComponent(cc.Sprite),
                btnNode: cc.find("btn", o)
            };
            a._itemNodes[n].headImg.node.active = false;
            a._itemNodes[n].frameImg.node.active = false;
            a._itemNodes[n].btnNode && a.OnButtonClick(a._itemNodes[n].btnNode, function () {
                return r.onItemClick(n);
            });
        }, a = this, o = 0; o < 4; o++)
            n(o);
    };
    UserInfoCellItem.prototype.updateUI = function () {
        if (this._data && this._data.items)
            for (var e = 0; e < 4; e++) {
                var t = this._data.items[e], r = this._itemNodes[e];
                if (r)
                    if (t) {
                        r.container.active = true;
                        r.selectNode && (r.selectNode.active = t.isSelected);
                        if ("avatar" === t.type) {
                            this.loadAvatarIcon(e, t);
                            r.frameImg && (r.frameImg.node.active = false);
                        }
                        else if ("frame" === t.type) {
                            this.loadFrameIcon(e, t);
                            r.frameImg && (r.frameImg.node.active = true);
                        }
                    }
                    else
                        r.container.active = false;
            }
    };
    UserInfoCellItem.prototype.loadAvatarIcon = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var r, n, a;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this._itemNodes[e];
                        if (!(null == t ? void 0 : t.icon) || !(null == r ? void 0 : r.headImg)) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadRes(t.icon, cc.SpriteFrame, UserInfoManager_1.default.getInstance().getDefaultIconBundleName())];
                    case 1:
                        n = _a.sent();
                        a = Array.isArray(n) ? n[0] : n;
                        if (cc.isValid(r.headImg) && a) {
                            r.headImg.spriteFrame = a;
                            r.headImg.node.active = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserInfoCellItem.prototype.loadFrameIcon = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var r, n, a, o, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(r = this._itemNodes[e])) {
                            return [2 /*return*/];
                        }
                        if (!r.headImg) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadRes(UserInfoManager_1.AvatarIconPath + "profile_img_head_1", cc.SpriteFrame, UserInfoManager_1.default.getInstance().getDefaultIconBundleName())];
                    case 1:
                        n = _a.sent();
                        a = Array.isArray(n) ? n[0] : n;
                        if (cc.isValid(r.headImg) && a) {
                            r.headImg.spriteFrame = a;
                            r.headImg.node.active = true;
                        }
                        _a.label = 2;
                    case 2:
                        if (!(r.frameImg && (null == t ? void 0 : t.icon))) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.loadRes(t.icon, cc.SpriteFrame, "mainRes")];
                    case 3:
                        o = _a.sent();
                        i = Array.isArray(o) ? o[0] : o;
                        if (cc.isValid(r.frameImg) && i) {
                            r.frameImg.spriteFrame = i;
                            r.frameImg.node.active = true;
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserInfoCellItem.prototype.onItemClick = function (e) {
        if (this._data && this._data.items && this._data.items[e]) {
            var t = this._data.items[e];
            t.isSelected || mj.EventManager.emit("onItemSelect", {
                id: t.id,
                type: t.type
            });
        }
    };
    UserInfoCellItem.prototype.getCellData = function () {
        return this._data;
    };
    UserInfoCellItem.prefabUrl = "prefabs/ui/userInfo/UserInfoCellItem";
    UserInfoCellItem.bundleName = "mainRes";
    __decorate([
        mj.traitEvent("UsrInfoCell_loadAvatar")
    ], UserInfoCellItem.prototype, "loadAvatarIcon", null);
    UserInfoCellItem = __decorate([
        mj.class
    ], UserInfoCellItem);
    return UserInfoCellItem;
}(BaseCell_1.default));
exports.default = UserInfoCellItem;

cc._RF.pop();