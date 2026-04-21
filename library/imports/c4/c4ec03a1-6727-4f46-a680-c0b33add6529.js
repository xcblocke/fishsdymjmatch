"use strict";
cc._RF.push(module, 'c4ec0OhZydPRqaAwLM63WUp', 'Tile2GameView');
// Scripts/view/Tile2GameView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var MainGameView_1 = require("../game/view/MainGameView");
var BehaviorsMapping_1 = require("../mapping/BehaviorsMapping");
var Tile2GameView = /** @class */ (function (_super) {
    __extends(Tile2GameView, _super);
    function Tile2GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._logName = "Tile2GameView";
        _this._gameType = GameTypeEnums_1.MjGameType.Tile2Normal;
        _this._slotBarView = null;
        _this._nodeBottomView = null;
        _this._nodeTopView = null;
        _this._disPlayMap = new Map();
        _this._disPlayCheckTimer = 0;
        return _this;
    }
    Object.defineProperty(Tile2GameView.prototype, "slotBarView", {
        get: function () {
            return this._slotBarView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2GameView.prototype, "nodeBottomView", {
        get: function () {
            return this._nodeBottomView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2GameView.prototype, "nodeTopView", {
        get: function () {
            return this._nodeTopView;
        },
        enumerable: false,
        configurable: true
    });
    Tile2GameView.prototype.getSlotBarNode = function () {
        return this.node.getChildByName("GLMahjongGameView").getChildByName("nodeSlotBar");
    };
    Tile2GameView.prototype.setSlotBarView = function (e) {
        this._slotBarView = e;
    };
    Tile2GameView.prototype.getTile2SlotType = function () {
        return this.delegate.getTile2SlotType();
    };
    Tile2GameView.prototype.setNodeBottomView = function (e) {
        this._nodeBottomView = e;
    };
    Tile2GameView.prototype.getBottomNode = function () {
        return this._bottomRootNode;
    };
    Tile2GameView.prototype.setNodeTopView = function (e) {
        this._nodeTopView = e;
    };
    Tile2GameView.prototype.getTopNode = function () {
        return this._topRootNode;
    };
    Tile2GameView.prototype.changeTopLocalBottom = function () {
        var e = this.getSlotBarNode();
        e.getComponent(cc.Widget).updateAlignment();
        var t = this.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot4 ? -12 : 0, o = e.convertToWorldSpaceAR(cc.v2(0, -e.height * e.anchorY - 40 + t));
        return e.parent.convertToNodeSpaceAR(o);
    };
    Tile2GameView.prototype.initLayers = function () {
        this.initEffectLayers();
        this._nodeCardRoot = this._gameNode.getChildByName("nodeCardRoot");
        this._nodeDragCardRoot = this._gameNode.getChildByName("nodeDragCardRoot");
        this._swallowEventNode = this._gameNode.getChildByName("nodeSwallowEvent");
        this._guideRootNode = this._gameNode.getChildByName("guideRoot");
        this._topRootNode = this._gameNode.getChildByName("nodeTop");
        this._bottomRootNode = this._gameNode.getChildByName("nodeBottom");
    };
    Tile2GameView.prototype.initCountBlockNode = function () {
        this._countBlockNode = new cc.Node("CountBlockNode");
        this._countBlockNode.setAnchorPoint(0.5, 0.5);
        this._countBlockNode.parent = this._gameNode;
        this._countBlockNode.zIndex = 9999;
        this._countBlockNode.addComponent(cc.BlockInputEvents);
        this._countBlockNode.setContentSize(9999, 9999);
        this.resetCountBlockNode();
    };
    Tile2GameView.prototype.initScoreItem = function () { };
    Tile2GameView.prototype.clearAllNode = function () {
        var t;
        _super.prototype.clearAllNode.call(this);
        null === (t = this._nodeTopView) || void 0 === t || t.resetScore();
    };
    Tile2GameView.prototype.startSimulator = function () {
        var t;
        null === (t = this._slotBarView) || void 0 === t || t.resetSlotBar();
        _super.prototype.startSimulator.call(this);
    };
    Tile2GameView.prototype.onSimulatorDisplay = function (t) {
        var o, n = null === (o = t.behaviorExecution) || void 0 === o ? void 0 : o.key;
        if (null != n && null != this._gameBehaviorParser) {
            this._disPlayMap.set(n, 0);
            this.delegate.addDisPlayingCount();
        }
        _super.prototype.onSimulatorDisplay.call(this, t);
    };
    Tile2GameView.prototype.onDisplayFinish = function (t, o, n, i) {
        var r = i;
        if (null != r && this._disPlayMap.has(r)) {
            this._disPlayMap.delete(r);
            this.delegate.removeDisPlayingCount();
        }
        _super.prototype.onDisplayFinish.call(this, t, o, n, i);
    };
    Tile2GameView.prototype.clearBehaviorParser = function () {
        var t, o;
        null === (t = this.delegate) || void 0 === t || t.resetDisPlayingCount();
        null === (o = this._disPlayMap) || void 0 === o || o.clear();
        _super.prototype.clearBehaviorParser.call(this);
    };
    Tile2GameView.prototype.initSimulatorDisplay = function () {
        var t, o = this;
        this.delegate.resetDisPlayingCount();
        this._disPlayMap.clear();
        _super.prototype.initSimulatorDisplay.call(this);
        var n = [BehaviorsMapping_1.BehaviorsMapping.Tile2ClearEffect, BehaviorsMapping_1.BehaviorsMapping.Empty, BehaviorsMapping_1.BehaviorsMapping.Tile2ScoreFloat];
        null === (t = this._gameBehaviorParser) || void 0 === t || t.setProgressCallback(function (e, t) {
            if (e.length > 0 && e.every(function (e) {
                return n.includes(e);
            }) && o._disPlayMap.has(t)) {
                o._disPlayMap.delete(t);
                o.delegate.removeDisPlayingCount();
            }
        });
    };
    Tile2GameView.prototype.update = function (t) {
        _super.prototype.update.call(this, t);
        this._disPlayCheckTimer += t;
        this.checkDisplayTimeout();
    };
    Tile2GameView.prototype.checkDisplayTimeout = function () {
        var e = this;
        if (this._disPlayCheckTimer >= 0.5) {
            this._disPlayCheckTimer -= 0.5;
            this._disPlayMap.forEach(function (t, o) {
                var n = t + 0.5;
                if (n > 2) {
                    e._disPlayMap.delete(o);
                    e.delegate.removeDisPlayingCount();
                }
                else
                    e._disPlayMap.set(o, n);
            });
        }
    };
    Tile2GameView.prefabUrl = "prefabs/game/MainGameTile2";
    __decorate([
        mj.traitEvent("Tile2GmVw_initLayers")
    ], Tile2GameView.prototype, "initLayers", null);
    Tile2GameView = __decorate([
        mj.class
    ], Tile2GameView);
    return Tile2GameView;
}(MainGameView_1.default));
exports.default = Tile2GameView;

cc._RF.pop();