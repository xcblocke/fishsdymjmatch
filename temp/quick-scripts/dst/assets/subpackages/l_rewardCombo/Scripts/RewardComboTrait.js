
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rewardCombo/Scripts/RewardComboTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4426bEDbP5KVpmfKkgGdxb7', 'RewardComboTrait');
// subpackages/l_rewardCombo/Scripts/RewardComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RewardComboTrait = /** @class */ (function (_super) {
    __extends(RewardComboTrait, _super);
    function RewardComboTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RewardComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = {
            lvMultRt: this._traitData.lvMultRt || 1,
            othLvRate: this._traitData.othLvRate || 0.3,
            lvMult: this._traitData.lvMult || 4
        };
    };
    RewardComboTrait.prototype.onRwdComboChk_lvMultRt = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.lvMultRt
        });
    };
    RewardComboTrait.prototype.onRwdComboChk_othLvRt = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.othLvRate
        });
    };
    RewardComboTrait.prototype.onRwdComboChk_lvMult = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.lvMult
        });
    };
    RewardComboTrait.traitKey = "RewardCombo";
    RewardComboTrait = __decorate([
        mj.trait,
        mj.class("RewardComboTrait")
    ], RewardComboTrait);
    return RewardComboTrait;
}(Trait_1.default));
exports.default = RewardComboTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Jld2FyZENvbWJvL1NjcmlwdHMvUmV3YXJkQ29tYm9UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUE4QyxvQ0FBSztJQUFuRDs7SUErQkEsQ0FBQztJQTdCQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUM7WUFDdkMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLEdBQUc7WUFDM0MsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUM7U0FDcEMsQ0FBQztJQUNKLENBQUM7SUFDRCxpREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxnREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1NBQ2xDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCwrQ0FBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7SUE3Qk0seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFEYixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBK0JwQztJQUFELHVCQUFDO0NBL0JELEFBK0JDLENBL0I2QyxlQUFLLEdBK0JsRDtrQkEvQm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlJld2FyZENvbWJvVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld2FyZENvbWJvVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmV3YXJkQ29tYm9cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIGx2TXVsdFJ0OiB0aGlzLl90cmFpdERhdGEubHZNdWx0UnQgfHwgMSxcbiAgICAgIG90aEx2UmF0ZTogdGhpcy5fdHJhaXREYXRhLm90aEx2UmF0ZSB8fCAwLjMsXG4gICAgICBsdk11bHQ6IHRoaXMuX3RyYWl0RGF0YS5sdk11bHQgfHwgNFxuICAgIH07XG4gIH1cbiAgb25Sd2RDb21ib0Noa19sdk11bHRSdCh0LCByKSB7XG4gICAgcih7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLl9jb25maWcubHZNdWx0UnRcbiAgICB9KTtcbiAgfVxuICBvblJ3ZENvbWJvQ2hrX290aEx2UnQodCwgcikge1xuICAgIHIoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdGhpcy5fY29uZmlnLm90aEx2UmF0ZVxuICAgIH0pO1xuICB9XG4gIG9uUndkQ29tYm9DaGtfbHZNdWx0KHQsIHIpIHtcbiAgICByKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHRoaXMuX2NvbmZpZy5sdk11bHRcbiAgICB9KTtcbiAgfVxufSJdfQ==