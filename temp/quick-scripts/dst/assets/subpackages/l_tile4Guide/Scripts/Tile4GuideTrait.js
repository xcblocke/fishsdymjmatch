
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile4Guide/Scripts/Tile4GuideTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4999ekR66JMfLIMmLvyO2/W', 'Tile4GuideTrait');
// subpackages/l_tile4Guide/Scripts/Tile4GuideTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Tile4GuideMask_1 = require("./Tile4GuideMask");
var Tile4GuideTrait = /** @class */ (function (_super) {
    __extends(Tile4GuideTrait, _super);
    function Tile4GuideTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pendingWarnTimer = null;
        _this._guideMaskNode = null;
        return _this;
    }
    Tile4GuideTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        GameUtils_1.default.isEmpty(this.localData.slotFullWarnShown) && (this.localData.slotFullWarnShown = false);
    };
    Tile4GuideTrait.prototype._showT4GuideMask = function (e, t) {
        this._clearWarnTimer();
        cc.isValid(this._guideMaskNode) || this._showT4GuideMaskImmediately(e, t);
    };
    Tile4GuideTrait.prototype._showT4GuideMaskImmediately = function (e, t) {
        var i = this;
        this.localData.slotFullWarnShown = true;
        Tile4GuideMask_1.default.createUI().then(function (o) {
            if (cc.isValid(e) && cc.isValid(t)) {
                var n = o.getComponent(Tile4GuideMask_1.default);
                o.parent = e.parent;
                n.setCloseCallback(e.zIndex, e.getSiblingIndex(), function (t, i) {
                    !cc.isValid(e) || t < 0 || i < 0 || e.setSiblingIndex(i);
                });
                e.setSiblingIndex(t.getSiblingIndex() - 1);
                o.setSiblingIndex(t.getSiblingIndex() - 1);
                i._guideMaskNode = o;
            }
        });
    };
    Tile4GuideTrait.prototype.onTile2FailVw_onLoad = function (e, t) {
        if (cc.isValid(this._guideMaskNode)) {
            this._guideMaskNode.destroy();
            this._guideMaskNode = null;
        }
        t();
    };
    Tile4GuideTrait.prototype.onT2GameCtrl_initRes = function (e, t) {
        e.ins.addPreloadRes("Prefab", "l_tile4Guide:prefabs/Tile4GuideMask");
        t();
    };
    Tile4GuideTrait.prototype.onT2SlotNumChg_start = function (e, t) {
        this._clearWarnTimer();
        var i = UserModel_1.default.getInstance().tile2NormalData.getLevelId();
        if (this.localData.slotFullWarnShown || i < 2)
            t();
        else {
            var o = e.ins.context.gameView, n = o.nodeDragCardRoot, r = o.getSlotBarNode();
            if (3 == e.args[0].data.endSlotBarCardCount) {
                this._showT4GuideMask(r, n);
            }
            else {
                this._clearWarnTimer();
            }
            t();
        }
    };
    Tile4GuideTrait.prototype._clearWarnTimer = function () {
        if (null != this._pendingWarnTimer) {
            clearTimeout(this._pendingWarnTimer);
            this._pendingWarnTimer = null;
        }
    };
    Tile4GuideTrait.traitKey = "Tile4Guide";
    Tile4GuideTrait = __decorate([
        mj.trait,
        mj.class("Tile4GuideTrait")
    ], Tile4GuideTrait);
    return Tile4GuideTrait;
}(Trait_1.default));
exports.default = Tile4GuideTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGU0R3VpZGUvU2NyaXB0cy9UaWxlNEd1aWRlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSxnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBQ2pFLG1EQUE4QztBQUc5QztJQUE2QyxtQ0FBSztJQUFsRDtRQUFBLHFFQTREQztRQTNEQyx1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsb0JBQWMsR0FBRyxJQUFJLENBQUM7O0lBMER4QixDQUFDO0lBeERDLGdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLG1CQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUNELDBDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBQ0QscURBQTJCLEdBQTNCLFVBQTRCLENBQUMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLHdCQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN4QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtn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Um9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgVGlsZTRHdWlkZU1hc2sgZnJvbSAnLi9UaWxlNEd1aWRlTWFzayc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGU0R3VpZGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTRHdWlkZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfcGVuZGluZ1dhcm5UaW1lciA9IG51bGw7XG4gIF9ndWlkZU1hc2tOb2RlID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlNEd1aWRlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBHYW1lVXRpbHMuaXNFbXB0eSh0aGlzLmxvY2FsRGF0YS5zbG90RnVsbFdhcm5TaG93bikgJiYgKHRoaXMubG9jYWxEYXRhLnNsb3RGdWxsV2FyblNob3duID0gZmFsc2UpO1xuICB9XG4gIF9zaG93VDRHdWlkZU1hc2soZSwgdCkge1xuICAgIHRoaXMuX2NsZWFyV2FyblRpbWVyKCk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9ndWlkZU1hc2tOb2RlKSB8fCB0aGlzLl9zaG93VDRHdWlkZU1hc2tJbW1lZGlhdGVseShlLCB0KTtcbiAgfVxuICBfc2hvd1Q0R3VpZGVNYXNrSW1tZWRpYXRlbHkoZSwgdCkge1xuICAgIHZhciBpID0gdGhpcztcbiAgICB0aGlzLmxvY2FsRGF0YS5zbG90RnVsbFdhcm5TaG93biA9IHRydWU7XG4gICAgVGlsZTRHdWlkZU1hc2suY3JlYXRlVUkoKS50aGVuKGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChlKSAmJiBjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgIHZhciBuID0gby5nZXRDb21wb25lbnQoVGlsZTRHdWlkZU1hc2spO1xuICAgICAgICBvLnBhcmVudCA9IGUucGFyZW50O1xuICAgICAgICBuLnNldENsb3NlQ2FsbGJhY2soZS56SW5kZXgsIGUuZ2V0U2libGluZ0luZGV4KCksIGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgICAgICAgIWNjLmlzVmFsaWQoZSkgfHwgdCA8IDAgfHwgaSA8IDAgfHwgZS5zZXRTaWJsaW5nSW5kZXgoaSk7XG4gICAgICAgIH0pO1xuICAgICAgICBlLnNldFNpYmxpbmdJbmRleCh0LmdldFNpYmxpbmdJbmRleCgpIC0gMSk7XG4gICAgICAgIG8uc2V0U2libGluZ0luZGV4KHQuZ2V0U2libGluZ0luZGV4KCkgLSAxKTtcbiAgICAgICAgaS5fZ3VpZGVNYXNrTm9kZSA9IG87XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25UaWxlMkZhaWxWd19vbkxvYWQoZSwgdCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2d1aWRlTWFza05vZGUpKSB7XG4gICAgICB0aGlzLl9ndWlkZU1hc2tOb2RlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2d1aWRlTWFza05vZGUgPSBudWxsO1xuICAgIH1cbiAgICB0KCk7XG4gIH1cbiAgb25UMkdhbWVDdHJsX2luaXRSZXMoZSwgdCkge1xuICAgIGUuaW5zLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgXCJsX3RpbGU0R3VpZGU6cHJlZmFicy9UaWxlNEd1aWRlTWFza1wiKTtcbiAgICB0KCk7XG4gIH1cbiAgb25UMlNsb3ROdW1DaGdfc3RhcnQoZSwgdCkge1xuICAgIHRoaXMuX2NsZWFyV2FyblRpbWVyKCk7XG4gICAgdmFyIGkgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS50aWxlMk5vcm1hbERhdGEuZ2V0TGV2ZWxJZCgpO1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5zbG90RnVsbFdhcm5TaG93biB8fCBpIDwgMikgdCgpO2Vsc2Uge1xuICAgICAgdmFyIG8gPSBlLmlucy5jb250ZXh0LmdhbWVWaWV3LFxuICAgICAgICBuID0gby5ub2RlRHJhZ0NhcmRSb290LFxuICAgICAgICByID0gby5nZXRTbG90QmFyTm9kZSgpO1xuICAgICAgaWYgKDMgPT0gZS5hcmdzWzBdLmRhdGEuZW5kU2xvdEJhckNhcmRDb3VudCkge1xuICAgICAgICB0aGlzLl9zaG93VDRHdWlkZU1hc2sociwgbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jbGVhcldhcm5UaW1lcigpO1xuICAgICAgfVxuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBfY2xlYXJXYXJuVGltZXIoKSB7XG4gICAgaWYgKG51bGwgIT0gdGhpcy5fcGVuZGluZ1dhcm5UaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3BlbmRpbmdXYXJuVGltZXIpO1xuICAgICAgdGhpcy5fcGVuZGluZ1dhcm5UaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG59Il19