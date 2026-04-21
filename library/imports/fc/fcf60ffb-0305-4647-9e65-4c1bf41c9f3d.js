"use strict";
cc._RF.push(module, 'fcf60/7AwVGR55lTBv0HJ89', 'ChangeBatchAnimBehavior');
// Scripts/base/ChangeBatchAnimBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeBatchAnimBehavior = void 0;
var BaseLabel_1 = require("../gamePlay/base/ui/BaseLabel");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var ChangeBatchAnimBehavior = /** @class */ (function (_super) {
    __extends(ChangeBatchAnimBehavior, _super);
    function ChangeBatchAnimBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isOpenGenerateState = false;
        return _this;
    }
    ChangeBatchAnimBehavior.prototype.onAbort = function () {
        this.isOpenGenerateState || this.context.gameView.setSwallowEventNodeActive(false);
        _super.prototype.onAbort.call(this);
    };
    ChangeBatchAnimBehavior.prototype.start = function (e) {
        var t = this, o = e.data.batchId;
        this.isOpenGenerateState = e.data.isOpenGenerateState;
        this.isOpenGenerateState || this.context.gameView.setSwallowEventNodeActive(true);
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.ClassicBatch);
        this.playStageAnim(o, function () {
            t.onAnimFinish();
            t.isOpenGenerateState || t.context.gameView.setSwallowEventNodeActive(false);
            t.finish();
        });
    };
    ChangeBatchAnimBehavior.prototype.onAnimFinish = function () { };
    ChangeBatchAnimBehavior.prototype.playStageAnim = function (e, t) {
        if (e === void 0) { e = 0; }
        var o;
        e += 1;
        var n = this.context.gameView.effectNode, i = BaseSpine_1.default.create("spine/classicstage/gameplay_tile_newStage", "in", 1, null, true);
        i.node.name = "Stage";
        null === (o = i.getSkeleton()) || void 0 === o || o.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        i.attachNodeWithAlpha("hook_text", "slot_text", function () {
            var t = I18NStrings_1.default.get("classic_stage", "Stage"), o = I18NStrings_1.default.stringFormat(t + " {0}", e), n = BaseLabel_1.default.create(o, "font/SPARTAN-BOLD", "mainRes", 70);
            n.node.name = "Stage";
            n.setColor(new cc.Color().fromHEX("#fff5c5"));
            var i = n.node.addComponent(cc.LabelOutline);
            i.color = new cc.Color().fromHEX("#d14a00");
            i.width = 3;
            n.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
            return n.node;
        });
        i.getSkeleton().setEventListener(function (e, o) {
            "newStage" === o.data.name && (null == t || t());
        });
        n.addChild(i.node);
    };
    __decorate([
        mj.traitEvent("ChgBatchAnimBhv_start")
    ], ChangeBatchAnimBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("ChgBatchAnimBhv_finish")
    ], ChangeBatchAnimBehavior.prototype, "onAnimFinish", null);
    return ChangeBatchAnimBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ChangeBatchAnimBehavior = ChangeBatchAnimBehavior;

cc._RF.pop();