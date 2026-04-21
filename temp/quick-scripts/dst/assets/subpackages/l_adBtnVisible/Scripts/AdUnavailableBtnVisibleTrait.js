
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_adBtnVisible/Scripts/AdUnavailableBtnVisibleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87c3erlCHFDUq5eSjK7Vx17', 'AdUnavailableBtnVisibleTrait');
// subpackages/l_adBtnVisible/Scripts/AdUnavailableBtnVisibleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AdUnavailableBtnVisibleTrait = /** @class */ (function (_super) {
    __extends(AdUnavailableBtnVisibleTrait, _super);
    function AdUnavailableBtnVisibleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._showCloseBtn = true;
        _this._showCancelBtn = true;
        return _this;
    }
    AdUnavailableBtnVisibleTrait.prototype.onLoad = function () {
        var e, o;
        _super.prototype.onLoad.call(this);
        this._showCloseBtn = null === (e = this._traitData.showCloseBtn) || void 0 === e || e;
        this._showCancelBtn = null === (o = this._traitData.showCancelBtn) || void 0 === o || o;
    };
    AdUnavailableBtnVisibleTrait.prototype.onAdUnavailVw_onLoad = function (t, e) {
        var o = t.ins;
        if (o && o.node) {
            var r = cc.find("content_node/btn_close", o.node), i = cc.find("content_node/btn_cancel", o.node);
            r && (r.active = this._showCloseBtn);
            i && (i.active = this._showCancelBtn);
            e();
        }
        else
            e();
    };
    AdUnavailableBtnVisibleTrait.traitKey = "AdUnavailableBtnVisible";
    AdUnavailableBtnVisibleTrait = __decorate([
        mj.trait,
        mj.class("AdUnavailableBtnVisibleTrait")
    ], AdUnavailableBtnVisibleTrait);
    return AdUnavailableBtnVisibleTrait;
}(Trait_1.default));
exports.default = AdUnavailableBtnVisibleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2FkQnRuVmlzaWJsZS9TY3JpcHRzL0FkVW5hdmFpbGFibGVCdG5WaXNpYmxlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUEwRCxnREFBSztJQUEvRDtRQUFBLHFFQW9CQztRQW5CQyxtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixvQkFBYyxHQUFHLElBQUksQ0FBQzs7SUFrQnhCLENBQUM7SUFoQkMsNkNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0QsMkRBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQy9DLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN0QyxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWhCTSxxQ0FBUSxHQUFHLHlCQUF5QixDQUFDO0lBSHpCLDRCQUE0QjtRQUZoRCxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUM7T0FDcEIsNEJBQTRCLENBb0JoRDtJQUFELG1DQUFDO0NBcEJELEFBb0JDLENBcEJ5RCxlQUFLLEdBb0I5RDtrQkFwQm9CLDRCQUE0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkFkVW5hdmFpbGFibGVCdG5WaXNpYmxlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkVW5hdmFpbGFibGVCdG5WaXNpYmxlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9zaG93Q2xvc2VCdG4gPSB0cnVlO1xuICBfc2hvd0NhbmNlbEJ0biA9IHRydWU7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQWRVbmF2YWlsYWJsZUJ0blZpc2libGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCBvO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3Nob3dDbG9zZUJ0biA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhLnNob3dDbG9zZUJ0bikgfHwgdm9pZCAwID09PSBlIHx8IGU7XG4gICAgdGhpcy5fc2hvd0NhbmNlbEJ0biA9IG51bGwgPT09IChvID0gdGhpcy5fdHJhaXREYXRhLnNob3dDYW5jZWxCdG4pIHx8IHZvaWQgMCA9PT0gbyB8fCBvO1xuICB9XG4gIG9uQWRVbmF2YWlsVndfb25Mb2FkKHQsIGUpIHtcbiAgICB2YXIgbyA9IHQuaW5zO1xuICAgIGlmIChvICYmIG8ubm9kZSkge1xuICAgICAgdmFyIHIgPSBjYy5maW5kKFwiY29udGVudF9ub2RlL2J0bl9jbG9zZVwiLCBvLm5vZGUpLFxuICAgICAgICBpID0gY2MuZmluZChcImNvbnRlbnRfbm9kZS9idG5fY2FuY2VsXCIsIG8ubm9kZSk7XG4gICAgICByICYmIChyLmFjdGl2ZSA9IHRoaXMuX3Nob3dDbG9zZUJ0bik7XG4gICAgICBpICYmIChpLmFjdGl2ZSA9IHRoaXMuX3Nob3dDYW5jZWxCdG4pO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=