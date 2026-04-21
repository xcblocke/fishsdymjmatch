
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_userInfo/Scripts/UserInfoCellItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3VzZXJJbmZvL1NjcmlwdHMvVXNlckluZm9DZWxsSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELHVGQUFzRztBQUV0RztJQUE4QyxvQ0FBUTtJQUF0RDtRQUFBLHFFQXlGQztRQXhGQyxnQkFBVSxHQUFHLEVBQUUsQ0FBQzs7SUF3RmxCLENBQUM7SUFyRkMsbUNBQVEsR0FBUjtRQUNFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxDQUFDO2dCQUFFLE9BQU8sVUFBVSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUc7Z0JBQ2hCLFNBQVMsRUFBRSxDQUFDO2dCQUNaLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3RHLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENB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WUFDNUIsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ25ELEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDUixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7YUFDYixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCxzQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUF0Rk0sMEJBQVMsR0FBRyxzQ0FBc0MsQ0FBQztJQUNuRCwyQkFBVSxHQUFHLFNBQVMsQ0FBQztJQXFDOUI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzBEQWN2QztJQXJEa0IsZ0JBQWdCO1FBRHBDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksZ0JBQWdCLENBeUZwQztJQUFELHVCQUFDO0NBekZELEFBeUZDLENBekY2QyxrQkFBUSxHQXlGckQ7a0JBekZvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUNlbGwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL3VpL0Jhc2VDZWxsJztcbmltcG9ydCBVc2VySW5mb01hbmFnZXIsIHsgQXZhdGFySWNvblBhdGggfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdXNlci9Vc2VySW5mb01hbmFnZXInO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mb0NlbGxJdGVtIGV4dGVuZHMgQmFzZUNlbGwge1xuICBfaXRlbU5vZGVzID0gW107XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdWkvdXNlckluZm8vVXNlckluZm9DZWxsSXRlbVwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwibWFpblJlc1wiO1xuICB1aU9uTG9hZCgpIHtcbiAgICBmb3IgKHZhciBlLCB0LCByID0gdGhpcywgbiA9IGZ1bmN0aW9uIG4obikge1xuICAgICAgICB2YXIgbyA9IGNjLmZpbmQoXCJub2RlXCIgKyAobiArIDEpLCBhLl9jZWxsVUkpO1xuICAgICAgICBpZiAoIW8pIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgIGEuX2l0ZW1Ob2Rlc1tuXSA9IHtcbiAgICAgICAgICBjb250YWluZXI6IG8sXG4gICAgICAgICAgaGVhZEltZzogbnVsbCA9PT0gKGUgPSBjYy5maW5kKFwiYnRuL2hlYWRJbWdcIiwgbykpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksXG4gICAgICAgICAgc2VsZWN0Tm9kZTogY2MuZmluZChcImJ0bi9zZWxlY3RcIiwgbyksXG4gICAgICAgICAgZnJhbWVJbWc6IG51bGwgPT09ICh0ID0gY2MuZmluZChcImJ0bi9mcmFtZUltZ1wiLCBvKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSxcbiAgICAgICAgICBidG5Ob2RlOiBjYy5maW5kKFwiYnRuXCIsIG8pXG4gICAgICAgIH07XG4gICAgICAgIGEuX2l0ZW1Ob2Rlc1tuXS5oZWFkSW1nLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGEuX2l0ZW1Ob2Rlc1tuXS5mcmFtZUltZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBhLl9pdGVtTm9kZXNbbl0uYnRuTm9kZSAmJiBhLk9uQnV0dG9uQ2xpY2soYS5faXRlbU5vZGVzW25dLmJ0bk5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gci5vbkl0ZW1DbGljayhuKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBhID0gdGhpcywgbyA9IDA7IG8gPCA0OyBvKyspIG4obyk7XG4gIH1cbiAgdXBkYXRlVUkoKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5pdGVtcykgZm9yICh2YXIgZSA9IDA7IGUgPCA0OyBlKyspIHtcbiAgICAgIHZhciB0ID0gdGhpcy5fZGF0YS5pdGVtc1tlXSxcbiAgICAgICAgciA9IHRoaXMuX2l0ZW1Ob2Rlc1tlXTtcbiAgICAgIGlmIChyKSBpZiAodCkge1xuICAgICAgICByLmNvbnRhaW5lci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICByLnNlbGVjdE5vZGUgJiYgKHIuc2VsZWN0Tm9kZS5hY3RpdmUgPSB0LmlzU2VsZWN0ZWQpO1xuICAgICAgICBpZiAoXCJhdmF0YXJcIiA9PT0gdC50eXBlKSB7XG4gICAgICAgICAgdGhpcy5sb2FkQXZhdGFySWNvbihlLCB0KTtcbiAgICAgICAgICByLmZyYW1lSW1nICYmIChyLmZyYW1lSW1nLm5vZGUuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKFwiZnJhbWVcIiA9PT0gdC50eXBlKSB7XG4gICAgICAgICAgdGhpcy5sb2FkRnJhbWVJY29uKGUsIHQpO1xuICAgICAgICAgIHIuZnJhbWVJbWcgJiYgKHIuZnJhbWVJbWcubm9kZS5hY3RpdmUgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHIuY29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlVzckluZm9DZWxsX2xvYWRBdmF0YXJcIilcbiAgYXN5bmMgbG9hZEF2YXRhckljb24oZSwgdCkge1xuICAgIHZhciByLCBuLCBhO1xuICAgIHIgPSB0aGlzLl9pdGVtTm9kZXNbZV07XG4gICAgaWYgKCEobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5pY29uKSB8fCAhKG51bGwgPT0gciA/IHZvaWQgMCA6IHIuaGVhZEltZykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbiA9IGF3YWl0IHRoaXMubG9hZFJlcyh0Lmljb24sIGNjLlNwcml0ZUZyYW1lLCBVc2VySW5mb01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREZWZhdWx0SWNvbkJ1bmRsZU5hbWUoKSk7XG4gICAgYSA9IEFycmF5LmlzQXJyYXkobikgPyBuWzBdIDogbjtcbiAgICBpZiAoY2MuaXNWYWxpZChyLmhlYWRJbWcpICYmIGEpIHtcbiAgICAgIHIuaGVhZEltZy5zcHJpdGVGcmFtZSA9IGE7XG4gICAgICByLmhlYWRJbWcubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgYXN5bmMgbG9hZEZyYW1lSWNvbihlLCB0KSB7XG4gICAgdmFyIHIsIG4sIGEsIG8sIGk7XG4gICAgaWYgKCEociA9IHRoaXMuX2l0ZW1Ob2Rlc1tlXSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHIuaGVhZEltZykge1xuICAgICAgbiA9IGF3YWl0IHRoaXMubG9hZFJlcyhBdmF0YXJJY29uUGF0aCArIFwicHJvZmlsZV9pbWdfaGVhZF8xXCIsIGNjLlNwcml0ZUZyYW1lLCBVc2VySW5mb01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREZWZhdWx0SWNvbkJ1bmRsZU5hbWUoKSk7XG4gICAgICBhID0gQXJyYXkuaXNBcnJheShuKSA/IG5bMF0gOiBuO1xuICAgICAgaWYgKGNjLmlzVmFsaWQoci5oZWFkSW1nKSAmJiBhKSB7XG4gICAgICAgIHIuaGVhZEltZy5zcHJpdGVGcmFtZSA9IGE7XG4gICAgICAgIHIuaGVhZEltZy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyLmZyYW1lSW1nICYmIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lmljb24pKSB7XG4gICAgICBvID0gYXdhaXQgdGhpcy5sb2FkUmVzKHQuaWNvbiwgY2MuU3ByaXRlRnJhbWUsIFwibWFpblJlc1wiKTtcbiAgICAgIGkgPSBBcnJheS5pc0FycmF5KG8pID8gb1swXSA6IG87XG4gICAgICBpZiAoY2MuaXNWYWxpZChyLmZyYW1lSW1nKSAmJiBpKSB7XG4gICAgICAgIHIuZnJhbWVJbWcuc3ByaXRlRnJhbWUgPSBpO1xuICAgICAgICByLmZyYW1lSW1nLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIG9uSXRlbUNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zICYmIHRoaXMuX2RhdGEuaXRlbXNbZV0pIHtcbiAgICAgIHZhciB0ID0gdGhpcy5fZGF0YS5pdGVtc1tlXTtcbiAgICAgIHQuaXNTZWxlY3RlZCB8fCBtai5FdmVudE1hbmFnZXIuZW1pdChcIm9uSXRlbVNlbGVjdFwiLCB7XG4gICAgICAgIGlkOiB0LmlkLFxuICAgICAgICB0eXBlOiB0LnR5cGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnZXRDZWxsRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxufSJdfQ==