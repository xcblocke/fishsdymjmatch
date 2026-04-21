"use strict";
cc._RF.push(module, '1ee73HXAOpG0aO8jG3RwDVv', 'SelectBehavior');
// Scripts/base/SelectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var SelectBehavior = /** @class */ (function (_super) {
    __extends(SelectBehavior, _super);
    function SelectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectBehavior.prototype.start = function (e) {
        var t = this.context.getTileNodeMap().get(e.data.tileId);
        if (t) {
            this.playCheckAudio(e);
            if (e.data.isCancel)
                t.cancelSelected();
            else {
                if (t.isSelect()) {
                    t.touchEndForMove();
                    this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    return;
                }
                t.selected();
            }
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    SelectBehavior.prototype.playCheckAudio = function (e) {
        if (e.data.isUserOperation) {
            if (e.data.isCancel) {
                this.playCancelAudio();
                return;
            }
            this.playAudio();
        }
    };
    SelectBehavior.prototype.playCancelAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Uncheck);
    };
    SelectBehavior.prototype.playAudio = function () {
        var e = this.effect, t = this.context.getTileNodeMap().get(e.data.tileId);
        if (t && t.tileObject.type == TileTypeEnum_1.ETileType.RankCard) {
            this.playRankCardAudio();
        }
        else {
            if (t && t.tileObject.type == TileTypeEnum_1.ETileType.RollCard && t.isBack) {
                this.playRollCardAudio();
            }
            else {
                this.playNormalAudio();
            }
        }
    };
    SelectBehavior.prototype.playRankCardAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.SpecialTouch);
    };
    SelectBehavior.prototype.playRollCardAudio = function () {
        this.playNormalAudio();
    };
    SelectBehavior.prototype.playNormalAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Check1);
    };
    __decorate([
        mj.traitEvent("SelectBhv_rankCardAud")
    ], SelectBehavior.prototype, "playRankCardAudio", null);
    __decorate([
        mj.traitEvent("SelectBhv_rollCardAud")
    ], SelectBehavior.prototype, "playRollCardAudio", null);
    __decorate([
        mj.traitEvent("SelectBhv_playNmlAud")
    ], SelectBehavior.prototype, "playNormalAudio", null);
    return SelectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.SelectBehavior = SelectBehavior;

cc._RF.pop();