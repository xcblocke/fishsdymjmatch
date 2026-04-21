
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/Tile2GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvVGlsZTJHYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXNGO0FBQ3RGLDBEQUFxRDtBQUNyRCxnRUFBK0Q7QUFFL0Q7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFxSUM7UUFwSUMsY0FBUSxHQUFHLGVBQWUsQ0FBQztRQUMzQixlQUFTLEdBQUcsMEJBQVUsQ0FBQyxXQUFXLENBQUM7UUFDbkMsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsaUJBQVcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHdCQUFrQixHQUFHLENBQUMsQ0FBQzs7SUE4SHpCLENBQUM7SUE1SEMsc0JBQUksc0NBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHlDQUFjO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksc0NBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUNELHNDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFDRCxzQ0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCx3Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBQ0QseUNBQWlCLEdBQWpCLFVBQWtCLENBQUM7UUFD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QkFBNEIsQ0FBQztJQXVDaEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO21EQVNyQztJQXZEa0IsYUFBYTtRQURqQyxFQUFFLENBQUMsS0FBSztPQUNZLGFBQWEsQ0FxSWpDO0lBQUQsb0JBQUM7Q0FySUQsQUFxSUMsQ0FySTBDLHNCQUFZLEdBcUl0RDtrQkFySW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlLCBFVGlsZTJTbG90VHlwZSB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IE1haW5HYW1lVmlldyBmcm9tICcuLi9nYW1lL3ZpZXcvTWFpbkdhbWVWaWV3JztcbmltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuLi9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkdhbWVWaWV3IGV4dGVuZHMgTWFpbkdhbWVWaWV3IHtcbiAgX2xvZ05hbWUgPSBcIlRpbGUyR2FtZVZpZXdcIjtcbiAgX2dhbWVUeXBlID0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbDtcbiAgX3Nsb3RCYXJWaWV3ID0gbnVsbDtcbiAgX25vZGVCb3R0b21WaWV3ID0gbnVsbDtcbiAgX25vZGVUb3BWaWV3ID0gbnVsbDtcbiAgX2Rpc1BsYXlNYXAgPSBuZXcgTWFwKCk7XG4gIF9kaXNQbGF5Q2hlY2tUaW1lciA9IDA7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvZ2FtZS9NYWluR2FtZVRpbGUyXCI7XG4gIGdldCBzbG90QmFyVmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2xvdEJhclZpZXc7XG4gIH1cbiAgZ2V0IG5vZGVCb3R0b21WaWV3KCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlQm90dG9tVmlldztcbiAgfVxuICBnZXQgbm9kZVRvcFZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGVUb3BWaWV3O1xuICB9XG4gIGdldFNsb3RCYXJOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJHTE1haGpvbmdHYW1lVmlld1wiKS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVTbG90QmFyXCIpO1xuICB9XG4gIHNldFNsb3RCYXJWaWV3KGUpIHtcbiAgICB0aGlzLl9zbG90QmFyVmlldyA9IGU7XG4gIH1cbiAgZ2V0VGlsZTJTbG90VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5nZXRUaWxlMlNsb3RUeXBlKCk7XG4gIH1cbiAgc2V0Tm9kZUJvdHRvbVZpZXcoZSkge1xuICAgIHRoaXMuX25vZGVCb3R0b21WaWV3ID0gZTtcbiAgfVxuICBnZXRCb3R0b21Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9ib3R0b21Sb290Tm9kZTtcbiAgfVxuICBzZXROb2RlVG9wVmlldyhlKSB7XG4gICAgdGhpcy5fbm9kZVRvcFZpZXcgPSBlO1xuICB9XG4gIGdldFRvcE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvcFJvb3ROb2RlO1xuICB9XG4gIGNoYW5nZVRvcExvY2FsQm90dG9tKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRTbG90QmFyTm9kZSgpO1xuICAgIGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgdmFyIHQgPSB0aGlzLmdldFRpbGUyU2xvdFR5cGUoKSA9PT0gRVRpbGUyU2xvdFR5cGUuU2xvdDQgPyAtMTIgOiAwLFxuICAgICAgbyA9IGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC1lLmhlaWdodCAqIGUuYW5jaG9yWSAtIDQwICsgdCkpO1xuICAgIHJldHVybiBlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyR21Wd19pbml0TGF5ZXJzXCIpXG4gIGluaXRMYXllcnMoKSB7XG4gICAgdGhpcy5pbml0RWZmZWN0TGF5ZXJzKCk7XG4gICAgdGhpcy5fbm9kZUNhcmRSb290ID0gdGhpcy5fZ2FtZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlQ2FyZFJvb3RcIik7XG4gICAgdGhpcy5fbm9kZURyYWdDYXJkUm9vdCA9IHRoaXMuX2dhbWVOb2RlLmdldENoaWxkQnlOYW1lKFwibm9kZURyYWdDYXJkUm9vdFwiKTtcbiAgICB0aGlzLl9zd2FsbG93RXZlbnROb2RlID0gdGhpcy5fZ2FtZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlU3dhbGxvd0V2ZW50XCIpO1xuICAgIHRoaXMuX2d1aWRlUm9vdE5vZGUgPSB0aGlzLl9nYW1lTm9kZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlUm9vdFwiKTtcbiAgICB0aGlzLl90b3BSb290Tm9kZSA9IHRoaXMuX2dhbWVOb2RlLmdldENoaWxkQnlOYW1lKFwibm9kZVRvcFwiKTtcbiAgICB0aGlzLl9ib3R0b21Sb290Tm9kZSA9IHRoaXMuX2dhbWVOb2RlLmdldENoaWxkQnlOYW1lKFwibm9kZUJvdHRvbVwiKTtcbiAgfVxuICBpbml0Q291bnRCbG9ja05vZGUoKSB7XG4gICAgdGhpcy5fY291bnRCbG9ja05vZGUgPSBuZXcgY2MuTm9kZShcIkNvdW50QmxvY2tOb2RlXCIpO1xuICAgIHRoaXMuX2NvdW50QmxvY2tOb2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLl9jb3VudEJsb2NrTm9kZS5wYXJlbnQgPSB0aGlzLl9nYW1lTm9kZTtcbiAgICB0aGlzLl9jb3VudEJsb2NrTm9kZS56SW5kZXggPSA5OTk5O1xuICAgIHRoaXMuX2NvdW50QmxvY2tOb2RlLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgICB0aGlzLl9jb3VudEJsb2NrTm9kZS5zZXRDb250ZW50U2l6ZSg5OTk5LCA5OTk5KTtcbiAgICB0aGlzLnJlc2V0Q291bnRCbG9ja05vZGUoKTtcbiAgfVxuICBpbml0U2NvcmVJdGVtKCkge31cbiAgY2xlYXJBbGxOb2RlKCkge1xuICAgIHZhciB0O1xuICAgIHN1cGVyLmNsZWFyQWxsTm9kZS5jYWxsKHRoaXMpO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5fbm9kZVRvcFZpZXcpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnJlc2V0U2NvcmUoKTtcbiAgfVxuICBzdGFydFNpbXVsYXRvcigpIHtcbiAgICB2YXIgdDtcbiAgICBudWxsID09PSAodCA9IHRoaXMuX3Nsb3RCYXJWaWV3KSB8fCB2b2lkIDAgPT09IHQgfHwgdC5yZXNldFNsb3RCYXIoKTtcbiAgICBzdXBlci5zdGFydFNpbXVsYXRvci5jYWxsKHRoaXMpO1xuICB9XG4gIG9uU2ltdWxhdG9yRGlzcGxheSh0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuID0gbnVsbCA9PT0gKG8gPSB0LmJlaGF2aW9yRXhlY3V0aW9uKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmtleTtcbiAgICBpZiAobnVsbCAhPSBuICYmIG51bGwgIT0gdGhpcy5fZ2FtZUJlaGF2aW9yUGFyc2VyKSB7XG4gICAgICB0aGlzLl9kaXNQbGF5TWFwLnNldChuLCAwKTtcbiAgICAgIHRoaXMuZGVsZWdhdGUuYWRkRGlzUGxheWluZ0NvdW50KCk7XG4gICAgfVxuICAgIHN1cGVyLm9uU2ltdWxhdG9yRGlzcGxheS5jYWxsKHRoaXMsIHQpO1xuICB9XG4gIG9uRGlzcGxheUZpbmlzaCh0LCBvLCBuLCBpKSB7XG4gICAgdmFyIHIgPSBpO1xuICAgIGlmIChudWxsICE9IHIgJiYgdGhpcy5fZGlzUGxheU1hcC5oYXMocikpIHtcbiAgICAgIHRoaXMuX2Rpc1BsYXlNYXAuZGVsZXRlKHIpO1xuICAgICAgdGhpcy5kZWxlZ2F0ZS5yZW1vdmVEaXNQbGF5aW5nQ291bnQoKTtcbiAgICB9XG4gICAgc3VwZXIub25EaXNwbGF5RmluaXNoLmNhbGwodGhpcywgdCwgbywgbiwgaSk7XG4gIH1cbiAgY2xlYXJCZWhhdmlvclBhcnNlcigpIHtcbiAgICB2YXIgdCwgbztcbiAgICBudWxsID09PSAodCA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnJlc2V0RGlzUGxheWluZ0NvdW50KCk7XG4gICAgbnVsbCA9PT0gKG8gPSB0aGlzLl9kaXNQbGF5TWFwKSB8fCB2b2lkIDAgPT09IG8gfHwgby5jbGVhcigpO1xuICAgIHN1cGVyLmNsZWFyQmVoYXZpb3JQYXJzZXIuY2FsbCh0aGlzKTtcbiAgfVxuICBpbml0U2ltdWxhdG9yRGlzcGxheSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8gPSB0aGlzO1xuICAgIHRoaXMuZGVsZWdhdGUucmVzZXREaXNQbGF5aW5nQ291bnQoKTtcbiAgICB0aGlzLl9kaXNQbGF5TWFwLmNsZWFyKCk7XG4gICAgc3VwZXIuaW5pdFNpbXVsYXRvckRpc3BsYXkuY2FsbCh0aGlzKTtcbiAgICB2YXIgbiA9IFtCZWhhdmlvcnNNYXBwaW5nLlRpbGUyQ2xlYXJFZmZlY3QsIEJlaGF2aW9yc01hcHBpbmcuRW1wdHksIEJlaGF2aW9yc01hcHBpbmcuVGlsZTJTY29yZUZsb2F0XTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuX2dhbWVCZWhhdmlvclBhcnNlcikgfHwgdm9pZCAwID09PSB0IHx8IHQuc2V0UHJvZ3Jlc3NDYWxsYmFjayhmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgaWYgKGUubGVuZ3RoID4gMCAmJiBlLmV2ZXJ5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBuLmluY2x1ZGVzKGUpO1xuICAgICAgfSkgJiYgby5fZGlzUGxheU1hcC5oYXModCkpIHtcbiAgICAgICAgby5fZGlzUGxheU1hcC5kZWxldGUodCk7XG4gICAgICAgIG8uZGVsZWdhdGUucmVtb3ZlRGlzUGxheWluZ0NvdW50KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgdXBkYXRlKHQpIHtcbiAgICBzdXBlci51cGRhdGUuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLl9kaXNQbGF5Q2hlY2tUaW1lciArPSB0O1xuICAgIHRoaXMuY2hlY2tEaXNwbGF5VGltZW91dCgpO1xuICB9XG4gIGNoZWNrRGlzcGxheVRpbWVvdXQoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9kaXNQbGF5Q2hlY2tUaW1lciA+PSAwLjUpIHtcbiAgICAgIHRoaXMuX2Rpc1BsYXlDaGVja1RpbWVyIC09IDAuNTtcbiAgICAgIHRoaXMuX2Rpc1BsYXlNYXAuZm9yRWFjaChmdW5jdGlvbiAodCwgbykge1xuICAgICAgICB2YXIgbiA9IHQgKyAwLjU7XG4gICAgICAgIGlmIChuID4gMikge1xuICAgICAgICAgIGUuX2Rpc1BsYXlNYXAuZGVsZXRlKG8pO1xuICAgICAgICAgIGUuZGVsZWdhdGUucmVtb3ZlRGlzUGxheWluZ0NvdW50KCk7XG4gICAgICAgIH0gZWxzZSBlLl9kaXNQbGF5TWFwLnNldChvLCBuKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSJdfQ==