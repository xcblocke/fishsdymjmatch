"use strict";
cc._RF.push(module, 'af483dGDM9Lg6Tc9r6Ajzll', 'InitNextLevelBehavior');
// Scripts/base/InitNextLevelBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InitNextLevelBehavior = void 0;
var UserModel_1 = require("../gamePlay/user/UserModel");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var InitNextLevelBehavior = /** @class */ (function (_super) {
    __extends(InitNextLevelBehavior, _super);
    function InitNextLevelBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    InitNextLevelBehavior.prototype.onAbort = function () {
        _super.prototype.onAbort.call(this);
    };
    InitNextLevelBehavior.prototype.start = function (e) {
        var t = this;
        Date.now();
        e.data.addGameLayerInfo.openGenerateState || this.cancelAnim(e);
        this.createNextLevelTileNodes(e).then(function () {
            Date.now();
            e.data.addGameLayerInfo.openGenerateState || t.refreshCardLockDarken(e);
            t.finish();
        });
    };
    InitNextLevelBehavior.prototype.refreshCardLockDarken = function () {
        UserModel_1.default.getInstance().isLockHighlightEnabled() && GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.RefreshCardLockDarken,
            isShowAni: false
        });
    };
    InitNextLevelBehavior.prototype.cancelAnim = function (e) {
        var t, o, n = this.context.getTileNodeManager();
        (null !== (o = null === (t = e.data.addGameLayerInfo.failingTiles) || void 0 === t ? void 0 : t.map(function (e) {
            return e.tile.id;
        })) && void 0 !== o ? o : []).forEach(function (e) {
            var t = n.getTileNodeByTileId(e);
            if (t) {
                t.cancelSelected();
                t.hidePropHint();
                t.stopAllAnimation();
            }
        });
    };
    InitNextLevelBehavior.prototype.createNextLevelTileNodes = function (e) {
        return this.context.getTileNodeManager().createNextLevelTileNodes(e.data.addGameLayerInfo);
    };
    return InitNextLevelBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.InitNextLevelBehavior = InitNextLevelBehavior;

cc._RF.pop();