"use strict";
cc._RF.push(module, '2cc1frF0+tAy7RoVqqFGJlx', 'TravelGameView');
// Scripts/view/TravelGameView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var MainGameView_1 = require("../game/view/MainGameView");
var TravelGameView = /** @class */ (function (_super) {
    __extends(TravelGameView, _super);
    function TravelGameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._logName = "TravelGameView";
        _this._gameType = GameTypeEnums_1.MjGameType.Travel;
        return _this;
    }
    Object.defineProperty(TravelGameView.prototype, "nodeCollect", {
        get: function () {
            return this._nodeCollect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelGameView.prototype, "nodeCollectShow", {
        get: function () {
            return this._nodeCollectShow;
        },
        enumerable: false,
        configurable: true
    });
    TravelGameView.prototype.initScoreItem = function () {
        this.scoreRootNode && (this.scoreRootNode.active = false);
    };
    TravelGameView.prototype.initExpandNodes = function () {
        this._nodeCollect = this.topRootNode.getChildByName("nodeCollect");
        this._nodeCollectShow = this.gameUI.node.getChildByName("collectShowRoot");
    };
    TravelGameView.prototype.clearAllNode = function () {
        _super.prototype.clearAllNode.call(this);
        this._nodeCollect.removeAllChildren();
    };
    TravelGameView.prefabUrl = "prefabs/game/MainGameTravel";
    __decorate([
        mj.traitEvent("TravelGmVw_initExpands")
    ], TravelGameView.prototype, "initExpandNodes", null);
    TravelGameView = __decorate([
        mj.class
    ], TravelGameView);
    return TravelGameView;
}(MainGameView_1.default));
exports.default = TravelGameView;

cc._RF.pop();