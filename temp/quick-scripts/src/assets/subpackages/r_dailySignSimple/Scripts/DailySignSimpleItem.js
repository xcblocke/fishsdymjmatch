"use strict";
cc._RF.push(module, '67f9foE++lG+5HoyDzgra+I', 'DailySignSimpleItem');
// subpackages/r_dailySignSimple/Scripts/DailySignSimpleItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var DailySignSimpleModel_1 = require("./DailySignSimpleModel");
var DailySignSimpleItem = /** @class */ (function (_super) {
    __extends(DailySignSimpleItem, _super);
    function DailySignSimpleItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nodeUncompleted = null;
        _this._nodeReady = null;
        _this._nodeClaimed = null;
        _this._nodeClaimedAni = null;
        _this._box = null;
        _this._btn = null;
        _this._index = 0;
        _this._model = null;
        _this._dayData = null;
        _this._currentState = DailySignSimpleModel_1.DailySignSimpleState.Uncompleted;
        _this.onClaimCallback = null;
        _this.onBoxClickCallback = null;
        return _this;
    }
    DailySignSimpleItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._model = DailySignSimpleModel_1.default.getInstance();
        this._nodeClaimed = this.node.getChildByName("node_getted");
        this._nodeClaimedAni = this._nodeClaimed.getChildByName("spine");
        this._nodeReady = this.node.getChildByName("node_isReady");
        this._nodeUncompleted = this.node.getChildByName("node_uncompletted");
        this._box = this.node.getChildByName("box");
        this._btn = this.node.getChildByName("btn");
        this.registerBoxClick();
    };
    DailySignSimpleItem.prototype.registerBoxClick = function () {
        this._btn && this.OnButtonClick(this._btn, this.onBoxClick.bind(this));
    };
    DailySignSimpleItem.prototype.onBoxClick = function () {
        if (this._currentState != DailySignSimpleModel_1.DailySignSimpleState.Claimed) {
            var t = this._box.convertToWorldSpaceAR(cc.Vec2.ZERO), e = cc.v3(t.x, t.y, 0);
            this.onBoxClickCallback && this.onBoxClickCallback(this._index, e);
        }
    };
    DailySignSimpleItem.prototype.setState = function (t) {
        var e = this._currentState;
        this._currentState = t;
        this._nodeUncompleted && (this._nodeUncompleted.active = t === DailySignSimpleModel_1.DailySignSimpleState.Uncompleted);
        this._nodeReady && (this._nodeReady.active = t === DailySignSimpleModel_1.DailySignSimpleState.Ready);
        this._nodeClaimed && (this._nodeClaimed.active = t === DailySignSimpleModel_1.DailySignSimpleState.Claimed);
        var i = this._box.getComponent(sp.Skeleton);
        if (i)
            if (t === DailySignSimpleModel_1.DailySignSimpleState.Uncompleted)
                CommonUtils_1.playSpineAnim(i, 1, this._index + 1 + "_init_1", null, false);
            else if (t === DailySignSimpleModel_1.DailySignSimpleState.Ready)
                ;
            else if (t === DailySignSimpleModel_1.DailySignSimpleState.Claimed) {
                CommonUtils_1.playSpineAnim(i, 1, this._index + 1 + "_init_2", null, false);
                if (e == DailySignSimpleModel_1.DailySignSimpleState.Ready) {
                    CommonUtils_1.playSpineAnim(this._nodeClaimedAni.getComponent(sp.Skeleton), 1, "in", null, false);
                }
                else {
                    CommonUtils_1.playSpineAnim(this._nodeClaimedAni.getComponent(sp.Skeleton), 1, "init", null, false);
                }
            }
    };
    DailySignSimpleItem.prototype.setIndex = function (t) {
        this._index = t;
        this._model && (this._dayData = this._model.getDay(t));
        this._nodeReady && (e = this._nodeReady.getChildByName("txt")) && (e.getComponent(cc.Label).string = (t + 1).toString());
        if (this._nodeUncompleted) {
            var e;
            (e = this._nodeUncompleted.getChildByName("txt")) && (e.getComponent(cc.Label).string = (t + 1).toString());
        }
    };
    DailySignSimpleItem.prototype.refresh = function () {
        if (this._model) {
            this._dayData = this._model.getDay(this._index);
            var t = this._model.getDayState(this._index);
            this.setState(t);
        }
    };
    DailySignSimpleItem.prototype.getIndex = function () {
        return this._index;
    };
    DailySignSimpleItem.prototype.getDayData = function () {
        return this._dayData;
    };
    DailySignSimpleItem.prototype.canClaim = function () {
        return !!this._model && this._model.getDayState(this._index) === DailySignSimpleModel_1.DailySignSimpleState.Ready;
    };
    DailySignSimpleItem.prototype.playReadyAnimation = function () {
        var t, e = this;
        if (this._model && this._dayData && this._model.getDayState(this._index) === DailySignSimpleModel_1.DailySignSimpleState.Ready) {
            var i = null === (t = this._box) || void 0 === t ? void 0 : t.getComponent(sp.Skeleton);
            if (i) {
                CommonUtils_1.playSpineAnim(i, 1, this._index + 1 + "_in", function () { }, false);
                this.scheduleOnce(function () {
                    e.onClaimCallback && e.onClaimCallback(e._index);
                }, 0.8);
            }
        }
    };
    DailySignSimpleItem.prefabUrl = "prefabs/DailySignSimpleItem";
    DailySignSimpleItem.bundleName = "r_dailySignSimple";
    DailySignSimpleItem = __decorate([
        mj.class
    ], DailySignSimpleItem);
    return DailySignSimpleItem;
}(BaseUI_1.default));
exports.default = DailySignSimpleItem;

cc._RF.pop();