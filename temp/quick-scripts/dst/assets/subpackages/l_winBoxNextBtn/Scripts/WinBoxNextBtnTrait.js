
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winBoxNextBtn/Scripts/WinBoxNextBtnTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43701tfqxVJ+rprLcoTy5WT', 'WinBoxNextBtnTrait');
// subpackages/l_winBoxNextBtn/Scripts/WinBoxNextBtnTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinBoxNextBtnTrait = /** @class */ (function (_super) {
    __extends(WinBoxNextBtnTrait, _super);
    function WinBoxNextBtnTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._zIndex = 2;
        return _this;
    }
    WinBoxNextBtnTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinBoxNextBtnTrait.prototype.onWinCtrl_viewShow = function (t, e) {
        var n = t.ins;
        if (n && cc.isValid(n.rootView)) {
            n.viewDoAction("setBtnNextZIndex", this._zIndex);
            e();
        }
        else
            e();
    };
    WinBoxNextBtnTrait.prototype.onTLWinCtrl_viewShow = function (t, e) {
        var n = t.ins;
        if (n && cc.isValid(n.rootView)) {
            n.viewDoAction("setBtnNextZIndex", this._zIndex);
            e();
        }
        else
            e();
    };
    WinBoxNextBtnTrait.prototype.onTile2WinCtrl_viewShow = function (t, e) {
        var n = t.ins;
        if (n && cc.isValid(n.rootView)) {
            n.viewDoAction("setBtnNextZIndex", this._zIndex);
            e();
        }
        else
            e();
    };
    WinBoxNextBtnTrait.prototype.onBoxRwdUI_initCpts = function (t, e) {
        var n = t.ins;
        n && n.hideBoxBtn && cc.isValid(n.hideBoxBtn) && (n.hideBoxBtn.zIndex = -1);
        e();
    };
    WinBoxNextBtnTrait.prototype.onLvBoxPrgs_initCpts = function (t, e) {
        var n = t.ins;
        n && n.hideBoxBtn && cc.isValid(n.hideBoxBtn) && (n.hideBoxBtn.zIndex = -1);
        e();
    };
    WinBoxNextBtnTrait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        var n = t.ins;
        n && n.fullScreenBtn && cc.isValid(n.fullScreenBtn) && (n.fullScreenBtn.zIndex = -1);
        e();
    };
    WinBoxNextBtnTrait.traitKey = "WinBoxNextBtn";
    WinBoxNextBtnTrait = __decorate([
        mj.trait,
        mj.class("WinBoxNextBtnTrait")
    ], WinBoxNextBtnTrait);
    return WinBoxNextBtnTrait;
}(Trait_1.default));
exports.default = WinBoxNextBtnTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpbkJveE5leHRCdG4vU2NyaXB0cy9XaW5Cb3hOZXh0QnRuVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFnRCxzQ0FBSztJQUFyRDtRQUFBLHFFQTBDQztRQXpDQyxhQUFPLEdBQUcsQ0FBQyxDQUFDOztJQXlDZCxDQUFDO0lBdkNDLG1DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwrQ0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQy9CLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsaURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMvQixDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRCxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELG9EQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDL0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxnREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxpREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxrREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUF2Q00sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFGZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBMEN0QztJQUFELHlCQUFDO0NBMUNELEFBMENDLENBMUMrQyxlQUFLLEdBMENwRDtrQkExQ29CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIldpbkJveE5leHRCdG5UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luQm94TmV4dEJ0blRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfekluZGV4ID0gMjtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJXaW5Cb3hOZXh0QnRuXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbldpbkN0cmxfdmlld1Nob3codCwgZSkge1xuICAgIHZhciBuID0gdC5pbnM7XG4gICAgaWYgKG4gJiYgY2MuaXNWYWxpZChuLnJvb3RWaWV3KSkge1xuICAgICAgbi52aWV3RG9BY3Rpb24oXCJzZXRCdG5OZXh0WkluZGV4XCIsIHRoaXMuX3pJbmRleCk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvblRMV2luQ3RybF92aWV3U2hvdyh0LCBlKSB7XG4gICAgdmFyIG4gPSB0LmlucztcbiAgICBpZiAobiAmJiBjYy5pc1ZhbGlkKG4ucm9vdFZpZXcpKSB7XG4gICAgICBuLnZpZXdEb0FjdGlvbihcInNldEJ0bk5leHRaSW5kZXhcIiwgdGhpcy5fekluZGV4KTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uVGlsZTJXaW5DdHJsX3ZpZXdTaG93KHQsIGUpIHtcbiAgICB2YXIgbiA9IHQuaW5zO1xuICAgIGlmIChuICYmIGNjLmlzVmFsaWQobi5yb290VmlldykpIHtcbiAgICAgIG4udmlld0RvQWN0aW9uKFwic2V0QnRuTmV4dFpJbmRleFwiLCB0aGlzLl96SW5kZXgpO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25Cb3hSd2RVSV9pbml0Q3B0cyh0LCBlKSB7XG4gICAgdmFyIG4gPSB0LmlucztcbiAgICBuICYmIG4uaGlkZUJveEJ0biAmJiBjYy5pc1ZhbGlkKG4uaGlkZUJveEJ0bikgJiYgKG4uaGlkZUJveEJ0bi56SW5kZXggPSAtMSk7XG4gICAgZSgpO1xuICB9XG4gIG9uTHZCb3hQcmdzX2luaXRDcHRzKHQsIGUpIHtcbiAgICB2YXIgbiA9IHQuaW5zO1xuICAgIG4gJiYgbi5oaWRlQm94QnRuICYmIGNjLmlzVmFsaWQobi5oaWRlQm94QnRuKSAmJiAobi5oaWRlQm94QnRuLnpJbmRleCA9IC0xKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UTFdpblZ3X3Nob3dUTFdpblZ3KHQsIGUpIHtcbiAgICB2YXIgbiA9IHQuaW5zO1xuICAgIG4gJiYgbi5mdWxsU2NyZWVuQnRuICYmIGNjLmlzVmFsaWQobi5mdWxsU2NyZWVuQnRuKSAmJiAobi5mdWxsU2NyZWVuQnRuLnpJbmRleCA9IC0xKTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=