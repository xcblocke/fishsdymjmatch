
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_mainGameBottomBtns/Scripts/MainGameBottomBtnsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41696r9tFdNtZR9oLI0Rr1E', 'MainGameBottomBtnsTrait');
// subpackages/r_mainGameBottomBtns/Scripts/MainGameBottomBtnsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var MainGameBottomBtnsTrait = /** @class */ (function (_super) {
    __extends(MainGameBottomBtnsTrait, _super);
    function MainGameBottomBtnsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameBottomBtnsTrait_1 = MainGameBottomBtnsTrait;
    MainGameBottomBtnsTrait.prototype.onLoad = function () {
        var e, i;
        _super.prototype.onLoad.call(this);
        var n = null === (e = this._traitData) || void 0 === e ? void 0 : e.configs;
        this._bundle = (null === (i = this._traitData) || void 0 === i ? void 0 : i.bundle) || MainGameBottomBtnsTrait_1.DEFAULT_BUNDLE;
        this._imgRefreshPath = (null == n ? void 0 : n.imgRefreshPath) || MainGameBottomBtnsTrait_1.DEFAULT_IMG_REFRESH_PATH;
        this._imgHintPath = (null == n ? void 0 : n.imgHintPath) || MainGameBottomBtnsTrait_1.DEFAULT_IMG_HINT_PATH;
    };
    MainGameBottomBtnsTrait.prototype.onGameUI_onLoad = function (t, e) {
        var r = t.ins;
        if (r) {
            this.refreshBtnBackground(r.btnShuffle, this._imgRefreshPath);
            this.refreshBtnBackground(r.btnHitTips, this._imgHintPath);
            e();
        }
        else
            e();
    };
    MainGameBottomBtnsTrait.prototype.refreshBtnBackground = function (t, e) {
        if (t) {
            var r = t.getChildByName("Background");
            r && BaseSprite_1.default.refreshWithNode(r, e, false, true, this._bundle);
        }
    };
    var MainGameBottomBtnsTrait_1;
    MainGameBottomBtnsTrait.traitKey = "MainGameBottomBtns";
    MainGameBottomBtnsTrait.DEFAULT_BUNDLE = "r_mainGameBottomBtns";
    MainGameBottomBtnsTrait.DEFAULT_IMG_REFRESH_PATH = "texture/gameplay_btn_refresh";
    MainGameBottomBtnsTrait.DEFAULT_IMG_HINT_PATH = "texture/gameplay_btn_hint";
    MainGameBottomBtnsTrait = MainGameBottomBtnsTrait_1 = __decorate([
        mj.trait,
        mj.class("MainGameBottomBtnsTrait")
    ], MainGameBottomBtnsTrait);
    return MainGameBottomBtnsTrait;
}(Trait_1.default));
exports.default = MainGameBottomBtnsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX21haW5HYW1lQm90dG9tQnRucy9TY3JpcHRzL01haW5HYW1lQm90dG9tQnRuc1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyRUFBc0U7QUFDdEUsZ0VBQTJEO0FBRzNEO0lBQXFELDJDQUFLO0lBQTFEOztJQTJCQSxDQUFDO2dDQTNCb0IsdUJBQXVCO0lBSzFDLHdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM1RSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUkseUJBQXVCLENBQUMsY0FBYyxDQUFDO1FBQzlILElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLHlCQUF1QixDQUFDLHdCQUF3QixDQUFDO1FBQ25ILElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLHlCQUF1QixDQUFDLHFCQUFxQixDQUFDO0lBQzVHLENBQUM7SUFDRCxpREFBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxzREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsSUFBSSxvQkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQzs7SUF6Qk0sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQUNoQyxzQ0FBYyxHQUFHLHNCQUFzQixDQUFDO0lBQ3hDLGdEQUF3QixHQUFHLDhCQUE4QixDQUFDO0lBQzFELDZDQUFxQixHQUFHLDJCQUEyQixDQUFDO0lBSnhDLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0EyQjNDO0lBQUQsOEJBQUM7Q0EzQkQsQUEyQkMsQ0EzQm9ELGVBQUssR0EyQnpEO2tCQTNCb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWFpbkdhbWVCb3R0b21CdG5zVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5HYW1lQm90dG9tQnRuc1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk1haW5HYW1lQm90dG9tQnRuc1wiO1xuICBzdGF0aWMgREVGQVVMVF9CVU5ETEUgPSBcInJfbWFpbkdhbWVCb3R0b21CdG5zXCI7XG4gIHN0YXRpYyBERUZBVUxUX0lNR19SRUZSRVNIX1BBVEggPSBcInRleHR1cmUvZ2FtZXBsYXlfYnRuX3JlZnJlc2hcIjtcbiAgc3RhdGljIERFRkFVTFRfSU1HX0hJTlRfUEFUSCA9IFwidGV4dHVyZS9nYW1lcGxheV9idG5faGludFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIGk7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIG4gPSBudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jb25maWdzO1xuICAgIHRoaXMuX2J1bmRsZSA9IChudWxsID09PSAoaSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5idW5kbGUpIHx8IE1haW5HYW1lQm90dG9tQnRuc1RyYWl0LkRFRkFVTFRfQlVORExFO1xuICAgIHRoaXMuX2ltZ1JlZnJlc2hQYXRoID0gKG51bGwgPT0gbiA/IHZvaWQgMCA6IG4uaW1nUmVmcmVzaFBhdGgpIHx8IE1haW5HYW1lQm90dG9tQnRuc1RyYWl0LkRFRkFVTFRfSU1HX1JFRlJFU0hfUEFUSDtcbiAgICB0aGlzLl9pbWdIaW50UGF0aCA9IChudWxsID09IG4gPyB2b2lkIDAgOiBuLmltZ0hpbnRQYXRoKSB8fCBNYWluR2FtZUJvdHRvbUJ0bnNUcmFpdC5ERUZBVUxUX0lNR19ISU5UX1BBVEg7XG4gIH1cbiAgb25HYW1lVUlfb25Mb2FkKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuaW5zO1xuICAgIGlmIChyKSB7XG4gICAgICB0aGlzLnJlZnJlc2hCdG5CYWNrZ3JvdW5kKHIuYnRuU2h1ZmZsZSwgdGhpcy5faW1nUmVmcmVzaFBhdGgpO1xuICAgICAgdGhpcy5yZWZyZXNoQnRuQmFja2dyb3VuZChyLmJ0bkhpdFRpcHMsIHRoaXMuX2ltZ0hpbnRQYXRoKTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIHJlZnJlc2hCdG5CYWNrZ3JvdW5kKHQsIGUpIHtcbiAgICBpZiAodCkge1xuICAgICAgdmFyIHIgPSB0LmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKTtcbiAgICAgIHIgJiYgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUociwgZSwgZmFsc2UsIHRydWUsIHRoaXMuX2J1bmRsZSk7XG4gICAgfVxuICB9XG59Il19