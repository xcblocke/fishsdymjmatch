
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_gameLayoutAdapt/Scripts/GameLayoutAdaptTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '546dcFYqclBf63m3u7KB9K0', 'GameLayoutAdaptTrait');
// subpackages/l_gameLayoutAdapt/Scripts/GameLayoutAdaptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var GameLayoutAdaptTrait = /** @class */ (function (_super) {
    __extends(GameLayoutAdaptTrait, _super);
    function GameLayoutAdaptTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isWideScreen = false;
        _this._config = {
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            bottomNodeOffsetY: 0
        };
        return _this;
    }
    GameLayoutAdaptTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._isWideScreen = this.checkIsWideScreen();
        this._config = {
            paddingLeft: this.getValueByScreenType("paddingLeft"),
            paddingRight: this.getValueByScreenType("paddingRight"),
            paddingTop: this.getValueByScreenType("paddingTop"),
            paddingBottom: this.getValueByScreenType("paddingBottom"),
            bottomNodeOffsetY: this.getValueByScreenType("bottomNodeOffsetY")
        };
    };
    GameLayoutAdaptTrait.prototype.checkIsWideScreen = function () {
        var t = cc.view.getFrameSize();
        return t.height / t.width <= cc.Canvas.instance.designResolution.height / cc.Canvas.instance.designResolution.width;
    };
    GameLayoutAdaptTrait.prototype.getValueByScreenType = function (t) {
        var e, o, n;
        if (this._isWideScreen) {
            var r = "wide" + t.charAt(0).toUpperCase() + t.slice(1), i = null === (e = this._traitData) || void 0 === e ? void 0 : e[r];
            if (null != i)
                return i;
        }
        return null !== (n = null === (o = this._traitData) || void 0 === o ? void 0 : o[t]) && void 0 !== n ? n : 0;
    };
    GameLayoutAdaptTrait.prototype.updateConfig = function (t) {
        this._config = Object.assign(Object.assign({}, this._config), t);
    };
    GameLayoutAdaptTrait.prototype.getConfig = function () {
        return Object.assign({}, this._config);
    };
    GameLayoutAdaptTrait.prototype.onLayoutSel_getPadLeft = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.paddingLeft
        });
    };
    GameLayoutAdaptTrait.prototype.onLayoutSel_getPadRight = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.paddingRight
        });
    };
    GameLayoutAdaptTrait.prototype.onLayoutSel_getPadTop = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.paddingTop
        });
    };
    GameLayoutAdaptTrait.prototype.onLayoutSel_getPadBottom = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.paddingBottom
        });
    };
    GameLayoutAdaptTrait.prototype.getBottomNodeOffsetY = function () {
        return this._config.bottomNodeOffsetY;
    };
    GameLayoutAdaptTrait.prototype.onMainGmVw_calcAreaSz = function (t, e) {
        var o, n, r, i = t.ins, a = this.getBottomNodeOffsetY();
        if (0 !== a && cc.isValid(i)) {
            var p = null === (n = null === (o = i._gameNode) || void 0 === o ? void 0 : o.getChildByName) || void 0 === n ? void 0 : n.call(o, "nodeBottom"), c = null === (r = null == p ? void 0 : p.getComponent) || void 0 === r ? void 0 : r.call(p, cc.Widget);
            if (c) {
                c.bottom = a;
                c.updateAlignment();
            }
        }
        this.isHideBottomBanner() && AdManager_1.default.getInstance().hideBanner();
        e();
    };
    GameLayoutAdaptTrait.prototype.onMainGmVw_getMidY = function (t, e) {
        if (t.args[0] && t.args[1]) {
            t.args[0].y -= this._config.paddingTop;
            t.args[1].y += this._config.paddingBottom;
            e();
        }
        else
            e();
    };
    GameLayoutAdaptTrait.prototype.onAdMgr_showBanner = function (t, e) {
        if (this.isHideBottomBanner()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    GameLayoutAdaptTrait.prototype.isHideBottomBanner = function () {
        var t;
        return !(null === (t = this._traitData) || void 0 === t ? void 0 : t.showBanner);
    };
    GameLayoutAdaptTrait.traitKey = "GameLayoutAdapt";
    __decorate([
        mj.traitEvent("GmLtApt_getBtmNOffsetY")
    ], GameLayoutAdaptTrait.prototype, "getBottomNodeOffsetY", null);
    GameLayoutAdaptTrait = __decorate([
        mj.trait,
        mj.class("GameLayoutAdaptTrait")
    ], GameLayoutAdaptTrait);
    return GameLayoutAdaptTrait;
}(Trait_1.default));
exports.default = GameLayoutAdaptTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2dhbWVMYXlvdXRBZGFwdC9TY3JpcHRzL0dhbWVMYXlvdXRBZGFwdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLGdFQUEyRDtBQUczRDtJQUFrRCx3Q0FBSztJQUF2RDtRQUFBLHFFQTBHQztRQXpHQyxtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixhQUFPLEdBQUc7WUFDUixXQUFXLEVBQUUsQ0FBQztZQUNkLFlBQVksRUFBRSxDQUFDO1lBQ2YsVUFBVSxFQUFFLENBQUM7WUFDYixhQUFhLEVBQUUsQ0FBQztZQUNoQixpQkFBaUIsRUFBRSxDQUFDO1NBQ3JCLENBQUM7O0lBa0dKLENBQUM7SUFoR0MscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsV0FBVyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7WUFDckQsWUFBWSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUM7WUFDdkQsVUFBVSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUM7WUFDbkQsYUFBYSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUM7WUFDekQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDO1NBQ2xFLENBQUM7SUFDSixDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtB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MUdpRCxlQUFLLEdBMEd0RDtrQkExR29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgQWRNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9hZC9BZE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJHYW1lTGF5b3V0QWRhcHRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxheW91dEFkYXB0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9pc1dpZGVTY3JlZW4gPSBmYWxzZTtcbiAgX2NvbmZpZyA9IHtcbiAgICBwYWRkaW5nTGVmdDogMCxcbiAgICBwYWRkaW5nUmlnaHQ6IDAsXG4gICAgcGFkZGluZ1RvcDogMCxcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgIGJvdHRvbU5vZGVPZmZzZXRZOiAwXG4gIH07XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiR2FtZUxheW91dEFkYXB0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9pc1dpZGVTY3JlZW4gPSB0aGlzLmNoZWNrSXNXaWRlU2NyZWVuKCk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgcGFkZGluZ0xlZnQ6IHRoaXMuZ2V0VmFsdWVCeVNjcmVlblR5cGUoXCJwYWRkaW5nTGVmdFwiKSxcbiAgICAgIHBhZGRpbmdSaWdodDogdGhpcy5nZXRWYWx1ZUJ5U2NyZWVuVHlwZShcInBhZGRpbmdSaWdodFwiKSxcbiAgICAgIHBhZGRpbmdUb3A6IHRoaXMuZ2V0VmFsdWVCeVNjcmVlblR5cGUoXCJwYWRkaW5nVG9wXCIpLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhpcy5nZXRWYWx1ZUJ5U2NyZWVuVHlwZShcInBhZGRpbmdCb3R0b21cIiksXG4gICAgICBib3R0b21Ob2RlT2Zmc2V0WTogdGhpcy5nZXRWYWx1ZUJ5U2NyZWVuVHlwZShcImJvdHRvbU5vZGVPZmZzZXRZXCIpXG4gICAgfTtcbiAgfVxuICBjaGVja0lzV2lkZVNjcmVlbigpIHtcbiAgICB2YXIgdCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgcmV0dXJuIHQuaGVpZ2h0IC8gdC53aWR0aCA8PSBjYy5DYW52YXMuaW5zdGFuY2UuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQgLyBjYy5DYW52YXMuaW5zdGFuY2UuZGVzaWduUmVzb2x1dGlvbi53aWR0aDtcbiAgfVxuICBnZXRWYWx1ZUJ5U2NyZWVuVHlwZSh0KSB7XG4gICAgdmFyIGUsIG8sIG47XG4gICAgaWYgKHRoaXMuX2lzV2lkZVNjcmVlbikge1xuICAgICAgdmFyIHIgPSBcIndpZGVcIiArIHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0LnNsaWNlKDEpLFxuICAgICAgICBpID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGVbcl07XG4gICAgICBpZiAobnVsbCAhPSBpKSByZXR1cm4gaTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGwgIT09IChuID0gbnVsbCA9PT0gKG8gPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bdF0pICYmIHZvaWQgMCAhPT0gbiA/IG4gOiAwO1xuICB9XG4gIHVwZGF0ZUNvbmZpZyh0KSB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcpLCB0KTtcbiAgfVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZyk7XG4gIH1cbiAgb25MYXlvdXRTZWxfZ2V0UGFkTGVmdCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHRoaXMuX2NvbmZpZy5wYWRkaW5nTGVmdFxuICAgIH0pO1xuICB9XG4gIG9uTGF5b3V0U2VsX2dldFBhZFJpZ2h0KHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdGhpcy5fY29uZmlnLnBhZGRpbmdSaWdodFxuICAgIH0pO1xuICB9XG4gIG9uTGF5b3V0U2VsX2dldFBhZFRvcCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHRoaXMuX2NvbmZpZy5wYWRkaW5nVG9wXG4gICAgfSk7XG4gIH1cbiAgb25MYXlvdXRTZWxfZ2V0UGFkQm90dG9tKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdGhpcy5fY29uZmlnLnBhZGRpbmdCb3R0b21cbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkdtTHRBcHRfZ2V0QnRtTk9mZnNldFlcIilcbiAgZ2V0Qm90dG9tTm9kZU9mZnNldFkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5ib3R0b21Ob2RlT2Zmc2V0WTtcbiAgfVxuICBvbk1haW5HbVZ3X2NhbGNBcmVhU3oodCwgZSkge1xuICAgIHZhciBvLFxuICAgICAgbixcbiAgICAgIHIsXG4gICAgICBpID0gdC5pbnMsXG4gICAgICBhID0gdGhpcy5nZXRCb3R0b21Ob2RlT2Zmc2V0WSgpO1xuICAgIGlmICgwICE9PSBhICYmIGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgIHZhciBwID0gbnVsbCA9PT0gKG4gPSBudWxsID09PSAobyA9IGkuX2dhbWVOb2RlKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmdldENoaWxkQnlOYW1lKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmNhbGwobywgXCJub2RlQm90dG9tXCIpLFxuICAgICAgICBjID0gbnVsbCA9PT0gKHIgPSBudWxsID09IHAgPyB2b2lkIDAgOiBwLmdldENvbXBvbmVudCkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5jYWxsKHAsIGNjLldpZGdldCk7XG4gICAgICBpZiAoYykge1xuICAgICAgICBjLmJvdHRvbSA9IGE7XG4gICAgICAgIGMudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaXNIaWRlQm90dG9tQmFubmVyKCkgJiYgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuaGlkZUJhbm5lcigpO1xuICAgIGUoKTtcbiAgfVxuICBvbk1haW5HbVZ3X2dldE1pZFkodCwgZSkge1xuICAgIGlmICh0LmFyZ3NbMF0gJiYgdC5hcmdzWzFdKSB7XG4gICAgICB0LmFyZ3NbMF0ueSAtPSB0aGlzLl9jb25maWcucGFkZGluZ1RvcDtcbiAgICAgIHQuYXJnc1sxXS55ICs9IHRoaXMuX2NvbmZpZy5wYWRkaW5nQm90dG9tO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25BZE1ncl9zaG93QmFubmVyKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc0hpZGVCb3R0b21CYW5uZXIoKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgaXNIaWRlQm90dG9tQmFubmVyKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAhKG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnNob3dCYW5uZXIpO1xuICB9XG59Il19