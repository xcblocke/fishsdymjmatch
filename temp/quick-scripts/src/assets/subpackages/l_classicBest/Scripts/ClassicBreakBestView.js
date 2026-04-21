"use strict";
cc._RF.push(module, '8eb15dTfIJLqZOcbE3r/kRG', 'ClassicBreakBestView');
// subpackages/l_classicBest/Scripts/ClassicBreakBestView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Adapter_1 = require("../../../Scripts/component/Adapter");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ClassicBestTypes_1 = require("./ClassicBestTypes");
var ClassicBreakBestView = /** @class */ (function (_super) {
    __extends(ClassicBreakBestView, _super);
    function ClassicBreakBestView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgNode = null;
        _this.effect1 = null;
        _this.effect2 = null;
        _this.effect3 = null;
        _this.effect4 = null;
        _this.spine1 = null;
        _this.spine2 = null;
        _this.spine3 = null;
        _this.spine4 = null;
        _this.type = ClassicBestTypes_1.EClassicBreakType.None;
        _this.isInit = false;
        return _this;
    }
    ClassicBreakBestView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponent();
        this.tryPlayAction();
    };
    ClassicBreakBestView.prototype.initComponent = function () {
        if (!this.isInit) {
            this.bgNode = cc.find("bg", this.node);
            this.bgNode.active = false;
            this.effect1 = cc.find("Effect1", this.node);
            this.effect2 = cc.find("Effect2", this.node);
            this.effect3 = cc.find("Effect3", this.node);
            this.effect4 = cc.find("Effect4", this.node);
            this.spine1 = this.effect1.addComponent(BaseSpine_1.default);
            this.spine2 = this.effect2.addComponent(BaseSpine_1.default);
            this.spine3 = this.effect3.addComponent(BaseSpine_1.default);
            this.spine4 = this.effect4.addComponent(BaseSpine_1.default);
            this.spine1.markReady("");
            this.spine2.markReady("");
            this.spine3.markReady("");
            this.spine4.markReady("");
            Adapter_1.default.adaptBgSize(this.bgNode);
            this.isInit = true;
        }
    };
    ClassicBreakBestView.prototype.setBreakType = function (e) {
        this.type = e;
        this.tryPlayAction();
    };
    ClassicBreakBestView.prototype.tryPlayAction = function () {
        this.type !== ClassicBestTypes_1.EClassicBreakType.None && cc.isValid(this.bgNode) && this.startPlayAction();
    };
    ClassicBreakBestView.prototype.startPlayAction = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.ClassicBreakRecord);
        this.spineAnim();
    };
    ClassicBreakBestView.prototype.spineAnim = function () {
        this.effect1.active = false;
        this.effect2.active = false;
        this.effect3.active = false;
        this.effect4.active = false;
        switch (this.type) {
            case ClassicBestTypes_1.EClassicBreakType.Best:
                this.playBestAnim();
                break;
            case ClassicBestTypes_1.EClassicBreakType.Today:
                this.playTodayAnim();
                break;
            case ClassicBestTypes_1.EClassicBreakType.Week:
                this.playWeekAnim();
                break;
            default:
                this.hideEffect();
        }
    };
    ClassicBreakBestView.prototype.playBestAnim = function () {
        var e = this;
        this.effect1.active = true;
        this.effect2.active = true;
        this.spine1.setAnimation("in", 1, null);
        this.spine2.setAnimation("in", 1, function () {
            e.hideEffect();
        });
    };
    ClassicBreakBestView.prototype.playTodayAnim = function () {
        var e = this;
        this.effect3.active = true;
        this.spine3.setAnimation("in_todayBest", 1, function () {
            e.hideEffect();
        });
    };
    ClassicBreakBestView.prototype.playWeekAnim = function () {
        var e = this;
        this.effect4.active = true;
        this.spine4.setAnimation("in_weekBest", 1, function () {
            e.hideEffect();
        });
    };
    ClassicBreakBestView.prototype.hideEffect = function () {
        var e = this;
        this.bgNode.opacity = 190;
        cc.tween(this.bgNode).to(0.2, {
            opacity: 0
        }).call(function () {
            cc.isValid(e.node) && e.node.destroy();
        }).start();
    };
    ClassicBreakBestView.prefabUrl = "prefabs/BestScoreWord";
    ClassicBreakBestView.bundleName = "l_classicBest";
    ClassicBreakBestView = __decorate([
        mj.class
    ], ClassicBreakBestView);
    return ClassicBreakBestView;
}(BaseUI_1.default));
exports.default = ClassicBreakBestView;

cc._RF.pop();