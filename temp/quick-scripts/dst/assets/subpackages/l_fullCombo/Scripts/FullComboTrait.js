
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_fullCombo/Scripts/FullComboTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80d4c0LrOdPFLLMXTo67R2S', 'FullComboTrait');
// subpackages/l_fullCombo/Scripts/FullComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FullComboTrait = /** @class */ (function (_super) {
    __extends(FullComboTrait, _super);
    function FullComboTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FullComboTrait.prototype.onFullComboChk_getLim = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._traitData.fullLimit
        });
    };
    FullComboTrait.prototype.onFullComboChk_rate = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._traitData.fullRate
        });
    };
    FullComboTrait.traitKey = "FullCombo";
    FullComboTrait = __decorate([
        mj.trait,
        mj.class("FullComboTrait")
    ], FullComboTrait);
    return FullComboTrait;
}(Trait_1.default));
exports.default = FullComboTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Z1bGxDb21iby9TY3JpcHRzL0Z1bGxDb21ib1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQTRDLGtDQUFLO0lBQWpEOztJQW1CQSxDQUFDO0lBakJDLCtCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCw4Q0FBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCw0Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQk0sdUJBQVEsR0FBRyxXQUFXLENBQUM7SUFEWCxjQUFjO1FBRmxDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0FtQmxDO0lBQUQscUJBQUM7Q0FuQkQsQUFtQkMsQ0FuQjJDLGVBQUssR0FtQmhEO2tCQW5Cb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZ1bGxDb21ib1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsQ29tYm9UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGdWxsQ29tYm9cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uRnVsbENvbWJvQ2hrX2dldExpbSh0LCByKSB7XG4gICAgcih7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLl90cmFpdERhdGEuZnVsbExpbWl0XG4gICAgfSk7XG4gIH1cbiAgb25GdWxsQ29tYm9DaGtfcmF0ZSh0LCByKSB7XG4gICAgcih7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLl90cmFpdERhdGEuZnVsbFJhdGVcbiAgICB9KTtcbiAgfVxufSJdfQ==