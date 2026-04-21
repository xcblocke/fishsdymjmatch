
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallRedPoint/Scripts/HallDailyBtnRPTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a201eVEi6NL+7seJpozwFqz', 'HallDailyBtnRPTrait');
// subpackages/l_hallRedPoint/Scripts/HallDailyBtnRPTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var HallDailyBtnRPTrait = /** @class */ (function (_super) {
    __extends(HallDailyBtnRPTrait, _super);
    function HallDailyBtnRPTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    HallDailyBtnRPTrait_1 = HallDailyBtnRPTrait;
    Object.defineProperty(HallDailyBtnRPTrait.prototype, "isClicked", {
        get: function () {
            return true === this.localData.clicked;
        },
        enumerable: false,
        configurable: true
    });
    HallDailyBtnRPTrait.prototype.setClicked = function () {
        this.localData.clicked = true;
    };
    HallDailyBtnRPTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    HallDailyBtnRPTrait.prototype.getRedDotPath = function () {
        return this._config.redDotPath || HallDailyBtnRPTrait_1.DEFAULT_CONFIG.redDotPath;
    };
    HallDailyBtnRPTrait.prototype.updateRedDotOnNode = function (t, e, o) {
        if (cc.isValid(e)) {
            var i = e.getChildByName("unlockRedDot_daily");
            if (o) {
                var r = null == e ? void 0 : e.getChildByName("img_red");
                r && (r.active = false);
                if (i)
                    i.active = true;
                else if (i = new cc.Node("unlockRedDot_daily")) {
                    var n = i.addComponent(cc.Sprite);
                    if (n) {
                        n.sizeMode = cc.Sprite.SizeMode.RAW;
                        n.trim = false;
                    }
                    BaseSprite_1.default.refreshWithNode(i, this.getRedDotPath(), false, false, "mainRes");
                    i.setPosition(cc.v2(64, 58));
                    e.addChild(i);
                }
            }
            else
                i && (i.active = false);
        }
    };
    HallDailyBtnRPTrait.prototype.onHDailyBtn_updateRed = function (t, e) {
        var o;
        try {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
            if (!cc.isValid(i)) {
                e();
                return;
            }
            var r = t.args[0];
            this.updateRedDotOnNode(t.ins, i, r);
        }
        catch (t) {
            console.error("[HallDailyBtnRPTrait] onHDailyBtn_onLoad 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    HallDailyBtnRPTrait.prototype.onHDailyBtn_onBClick = function (t, e) {
        var o, i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
        if (cc.isValid(i)) {
            var r = i.getChildByName("unlockRedDot_daily");
            if (r && r.active) {
                this.setClicked();
                r.active = false;
            }
        }
        e();
    };
    HallDailyBtnRPTrait.prototype.onDCMedalPush_showPopVw = function (t, e) {
        var o;
        if (this.isClicked)
            e();
        else {
            var i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
            null == i || i(false);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    var HallDailyBtnRPTrait_1;
    HallDailyBtnRPTrait.traitKey = "HallDailyBtnRP";
    HallDailyBtnRPTrait.DEFAULT_CONFIG = {
        enabled: true,
        redDotPath: "texture/gamePlay/gameplay_img_hongdian"
    };
    HallDailyBtnRPTrait = HallDailyBtnRPTrait_1 = __decorate([
        mj.trait,
        mj.class("HallDailyBtnRPTrait")
    ], HallDailyBtnRPTrait);
    return HallDailyBtnRPTrait;
}(Trait_1.default));
exports.default = HallDailyBtnRPTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxSZWRQb2ludC9TY3JpcHRzL0hhbGxEYWlseUJ0blJQVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsMkVBQXNFO0FBR3RFO0lBQWlELHVDQUFLO0lBQXREO1FBQUEscUVBNkVDO1FBNUVDLGFBQU8sR0FBRyxFQUFFLENBQUM7O0lBNEVmLENBQUM7NEJBN0VvQixtQkFBbUI7SUFPdEMsc0JBQUksMENBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBQ0Qsd0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsMkNBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUkscUJBQW1CLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUNsRixDQUFDO0lBQ0QsZ0RBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxD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QUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxDQUFDLEVBQUUsQ0FBQzthQUFLO1lBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O0lBMUVNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFDNUIsa0NBQWMsR0FBRztRQUN0QixPQUFPLEVBQUUsSUFBSTtRQUNiLFVBQVUsRUFBRSx3Q0FBd0M7S0FDckQsQ0FBQztJQU5pQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBNkV2QztJQUFELDBCQUFDO0NBN0VELEFBNkVDLENBN0VnRCxlQUFLLEdBNkVyRDtrQkE3RW9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhhbGxEYWlseUJ0blJQVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbGxEYWlseUJ0blJQVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jb25maWcgPSB7fTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJIYWxsRGFpbHlCdG5SUFwiO1xuICBzdGF0aWMgREVGQVVMVF9DT05GSUcgPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICByZWREb3RQYXRoOiBcInRleHR1cmUvZ2FtZVBsYXkvZ2FtZXBsYXlfaW1nX2hvbmdkaWFuXCJcbiAgfTtcbiAgZ2V0IGlzQ2xpY2tlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZSA9PT0gdGhpcy5sb2NhbERhdGEuY2xpY2tlZDtcbiAgfVxuICBzZXRDbGlja2VkKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmNsaWNrZWQgPSB0cnVlO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl90cmFpdERhdGEgfHwge307XG4gIH1cbiAgZ2V0UmVkRG90UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnJlZERvdFBhdGggfHwgSGFsbERhaWx5QnRuUlBUcmFpdC5ERUZBVUxUX0NPTkZJRy5yZWREb3RQYXRoO1xuICB9XG4gIHVwZGF0ZVJlZERvdE9uTm9kZSh0LCBlLCBvKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIHZhciBpID0gZS5nZXRDaGlsZEJ5TmFtZShcInVubG9ja1JlZERvdF9kYWlseVwiKTtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIHZhciByID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5nZXRDaGlsZEJ5TmFtZShcImltZ19yZWRcIik7XG4gICAgICAgIHIgJiYgKHIuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICBpZiAoaSkgaS5hY3RpdmUgPSB0cnVlO2Vsc2UgaWYgKGkgPSBuZXcgY2MuTm9kZShcInVubG9ja1JlZERvdF9kYWlseVwiKSkge1xuICAgICAgICAgIHZhciBuID0gaS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgbi5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5SQVc7XG4gICAgICAgICAgICBuLnRyaW0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoaSwgdGhpcy5nZXRSZWREb3RQYXRoKCksIGZhbHNlLCBmYWxzZSwgXCJtYWluUmVzXCIpO1xuICAgICAgICAgIGkuc2V0UG9zaXRpb24oY2MudjIoNjQsIDU4KSk7XG4gICAgICAgICAgZS5hZGRDaGlsZChpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGkgJiYgKGkuYWN0aXZlID0gZmFsc2UpO1xuICAgIH1cbiAgfVxuICBvbkhEYWlseUJ0bl91cGRhdGVSZWQodCwgZSkge1xuICAgIHZhciBvO1xuICAgIHRyeSB7XG4gICAgICB2YXIgaSA9IG51bGwgPT09IChvID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubm9kZTtcbiAgICAgIGlmICghY2MuaXNWYWxpZChpKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByID0gdC5hcmdzWzBdO1xuICAgICAgdGhpcy51cGRhdGVSZWREb3RPbk5vZGUodC5pbnMsIGksIHIpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbSGFsbERhaWx5QnRuUlBUcmFpdF0gb25IRGFpbHlCdG5fb25Mb2FkIOW8guW4uDogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvbkhEYWlseUJ0bl9vbkJDbGljayh0LCBlKSB7XG4gICAgdmFyIG8sXG4gICAgICBpID0gbnVsbCA9PT0gKG8gPSB0LmlucykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5ub2RlO1xuICAgIGlmIChjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICB2YXIgciA9IGkuZ2V0Q2hpbGRCeU5hbWUoXCJ1bmxvY2tSZWREb3RfZGFpbHlcIik7XG4gICAgICBpZiAociAmJiByLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldENsaWNrZWQoKTtcbiAgICAgICAgci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uRENNZWRhbFB1c2hfc2hvd1BvcFZ3KHQsIGUpIHtcbiAgICB2YXIgbztcbiAgICBpZiAodGhpcy5pc0NsaWNrZWQpIGUoKTtlbHNlIHtcbiAgICAgIHZhciBpID0gbnVsbCA9PT0gKG8gPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bMF07XG4gICAgICBudWxsID09IGkgfHwgaShmYWxzZSk7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXX0=