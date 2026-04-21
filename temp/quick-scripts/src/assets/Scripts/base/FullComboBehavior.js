"use strict";
cc._RF.push(module, 'f404e+RpD1O5aU3hIcQyTMn', 'FullComboBehavior');
// Scripts/base/FullComboBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FullComboBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var FullComboItem_1 = require("../items/FullComboItem");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var FullComboBehavior = /** @class */ (function (_super) {
    __extends(FullComboBehavior, _super);
    function FullComboBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 12000;
        return _this;
    }
    FullComboBehavior.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e, t, o, n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = this;
                        if (this.shouldSkip()) {
                            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                            return [2 /*return*/];
                        }
                        e = this.context.gameView.effectNode;
                        return [4 /*yield*/, FullComboItem_1.default.createUI()];
                    case 1:
                        if (!(t = _a.sent())) {
                            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                            return [2 /*return*/];
                        }
                        t.setParent(e);
                        t.position = cc.v3(0, 0, 0);
                        if (!(o = t.getComponent(FullComboItem_1.default))) {
                            t.destroy();
                            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                            return [2 /*return*/];
                        }
                        this.playAudio();
                        this.context.gameView.setSwallowEventNodeActive(true);
                        o.startPlayAni(t, function () {
                            n.shouldSkipAutoMerge() || n.autoMerger();
                        }, function () {
                            n.finish(GameInputEnum_1.EBehaviorEnum.Success);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FullComboBehavior.prototype.autoMerger = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.StartAutoMerge,
            type: "fullCombo"
        });
    };
    FullComboBehavior.prototype.playAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.FullCombo);
    };
    FullComboBehavior.prototype.shouldSkip = function () {
        return false;
    };
    FullComboBehavior.prototype.shouldSkipAutoMerge = function () {
        return false;
    };
    __decorate([
        mj.traitEvent("FullComboBhv_playAudio")
    ], FullComboBehavior.prototype, "playAudio", null);
    __decorate([
        mj.traitEvent("FullComboBhv_shouldSkip")
    ], FullComboBehavior.prototype, "shouldSkip", null);
    __decorate([
        mj.traitEvent("FullComboBhv_skipMerge")
    ], FullComboBehavior.prototype, "shouldSkipAutoMerge", null);
    return FullComboBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.FullComboBehavior = FullComboBehavior;

cc._RF.pop();