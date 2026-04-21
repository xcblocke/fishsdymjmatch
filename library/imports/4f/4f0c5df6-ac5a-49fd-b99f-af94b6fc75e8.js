"use strict";
cc._RF.push(module, '4f0c532rFpJ/bmfr5S2/HXo', 'WordsScreenFitTrait');
// subpackages/l_wordsScreenFit/Scripts/WordsScreenFitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var EffectLayerEnum_1 = require("../../../Scripts/constant/EffectLayerEnum");
var WordsScreenFitTrait = /** @class */ (function (_super) {
    __extends(WordsScreenFitTrait, _super);
    function WordsScreenFitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WordsScreenFitTrait_1 = WordsScreenFitTrait;
    WordsScreenFitTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WordsScreenFitTrait.prototype.isLv4Enabled = function () {
        var t, r = mj.getClassByName("MotivationalWordsLv4Trait");
        return true === (null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.eventEnabled);
    };
    WordsScreenFitTrait.prototype.onMotivWordsBhv_getSize = function (t, r) {
        try {
            var o = t.args[0];
            if (this.isLv4Enabled()) {
                var i = [{
                        width: 300,
                        height: 200
                    }, {
                        width: 320,
                        height: 200
                    }, {
                        width: 550,
                        height: 200
                    }, {
                        width: 700,
                        height: 200
                    }, {
                        width: 860,
                        height: 200
                    }][o] || {
                    width: 450,
                    height: 200
                };
                r({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: i
                });
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + WordsScreenFitTrait_1.traitKey + "] 获取尺寸失败: " + t.message);
            r();
        }
    };
    WordsScreenFitTrait.prototype.onMotivWordsBhv_getParent = function (t, r) {
        try {
            var o = t.ins.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
            if (!o || !cc.isValid(o)) {
                r();
                return;
            }
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: o
            });
        }
        catch (t) {
            console.error("[" + WordsScreenFitTrait_1.traitKey + "] 获取父节点失败: " + t.message);
            r();
        }
    };
    WordsScreenFitTrait.prototype.onMotivWordsBhv_safePos = function (t, r) {
        try {
            var o = t.ins, i = t.args[0], n = t.args[1], a = t.args[2], s = o.clampToScreenWorld(i, n, a);
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: s
            });
        }
        catch (t) {
            console.error("[" + WordsScreenFitTrait_1.traitKey + "] 屏幕适配失败: " + t.message);
            r();
        }
    };
    var WordsScreenFitTrait_1;
    WordsScreenFitTrait.traitKey = "WordsScreenFit";
    WordsScreenFitTrait = WordsScreenFitTrait_1 = __decorate([
        mj.trait,
        mj.class("WordsScreenFitTrait")
    ], WordsScreenFitTrait);
    return WordsScreenFitTrait;
}(Trait_1.default));
exports.default = WordsScreenFitTrait;

cc._RF.pop();