"use strict";
cc._RF.push(module, 'f8bedlah4tLPqHg8xd+MDK7', 'InputTouchEnd');
// Scripts/InputTouchEnd.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var InputBaseTouchEnd_1 = require("./inputbase/InputBaseTouchEnd");
var ClearHelper_1 = require("./ClearHelper");
var InputTouchEnd = /** @class */ (function (_super) {
    __extends(InputTouchEnd, _super);
    function InputTouchEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTouchEnd.prototype.runTouchStartClear = function (t) {
        _super.prototype.runTouchStartClear.call(this, t);
        this.playClickAudio();
    };
    InputTouchEnd.prototype.playRankCardAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.SpecialTouch);
    };
    InputTouchEnd.prototype.playNormalAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Check1);
    };
    InputTouchEnd.prototype.getTouchTileObject = function () {
        var e = this.gameContext.touchData.tileId;
        return e ? this.gameContext.getTileMapObject().getTileObject(e) : null;
    };
    InputTouchEnd.prototype.playClickAudio = function () {
        var e = this.getTouchTileObject();
        if (e && e.type == TileTypeEnum_1.ETileType.RankCard) {
            this.playRankCardAudio();
        }
        else {
            this.playNormalAudio();
        }
    };
    InputTouchEnd.prototype.runSelectCardSuccess = function (t) {
        _super.prototype.runSelectCardSuccess.call(this, t);
        this.onSelectCardSuccess();
    };
    InputTouchEnd.prototype.runClear = function (t) {
        _super.prototype.runClear.call(this, t);
        ClearHelper_1.default.runClear(this.gameContext, t, this);
    };
    InputTouchEnd.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
    };
    InputTouchEnd.prototype.onSelectCardSuccess = function () { };
    __decorate([
        mj.traitEvent("IptTchEnd_rankCardAud")
    ], InputTouchEnd.prototype, "playRankCardAudio", null);
    __decorate([
        mj.traitEvent("IptTchEnd_Success")
    ], InputTouchEnd.prototype, "onSelectCardSuccess", null);
    return InputTouchEnd;
}(InputBaseTouchEnd_1.default));
exports.default = InputTouchEnd;

cc._RF.pop();