
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dieAutoShuffle/Scripts/AutoShuffleTipsView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '897581TEBJEwJ9wMDbYHR8l', 'AutoShuffleTipsView');
// subpackages/r_dieAutoShuffle/Scripts/AutoShuffleTipsView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var DieAutoShuffleTrait_1 = require("./DieAutoShuffleTrait");
var AutoShuffleTipsView = /** @class */ (function (_super) {
    __extends(AutoShuffleTipsView, _super);
    function AutoShuffleTipsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnUse = null;
        _this.btnReplay = null;
        _this.lblUse = null;
        _this.lblReplay = null;
        _this.lblDesc = null;
        return _this;
    }
    AutoShuffleTipsView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this.node.getChildByName("content_node");
        this.btnUse = e.getChildByName("btn_use");
        this.btnReplay = e.getChildByName("btn_replay");
        this.lblUse = this.btnUse.getChildByName("use").getComponent(cc.Label);
        this.lblReplay = this.btnReplay.getChildByName("replay").getComponent(cc.Label);
        this.lblDesc = e.getChildByName("desc").getComponent(cc.Label);
        this.btnUse && this.OnButtonClick(this.btnUse, this.onAutoBtnClick.bind(this));
        this.btnReplay && this.OnButtonClick(this.btnReplay, this.onUnAutoBtnClick.bind(this));
    };
    AutoShuffleTipsView.prototype.onCloseBtnClick = function () {
        this.delegate.close();
    };
    AutoShuffleTipsView.prototype.show = function () {
        var t, e, i, o = null === (t = this.btnUse) || void 0 === t ? void 0 : t.getChildByName("nodeNum"), n = null === (e = this.btnUse) || void 0 === e ? void 0 : e.getChildByName("use"), l = null === (i = this.btnUse) || void 0 === i ? void 0 : i.getChildByName("ad");
        cc.isValid(o) && (o.active = false);
        cc.isValid(l) && (l.active = false);
        cc.isValid(n) && (n.active = true);
        this.lblDesc.string = I18NStrings_1.default.get("AutoShuffleTips_01", "AutoShuffleTips_01");
        this.lblUse.string = I18NStrings_1.default.get("AutoShuffleTips_02", "AutoShuffleTips_02");
        this.lblReplay.string = I18NStrings_1.default.get("AutoShuffleTips_03", "AutoShuffleTips_03");
    };
    AutoShuffleTipsView.prototype.onAutoBtnClick = function () {
        var t = DieAutoShuffleTrait_1.default.getActiveSettingsInstance();
        t && t.setAutoShuffleEnabled(true, "AutoShuffleTipsView_onAutoBtnClick");
        this.onCloseBtnClick();
    };
    AutoShuffleTipsView.prototype.onUnAutoBtnClick = function () {
        var t = DieAutoShuffleTrait_1.default.getActiveSettingsInstance();
        t && t.setAutoShuffleEnabled(false, "AutoShuffleTipsView_onUnAutoBtnClick");
        this.onCloseBtnClick();
    };
    AutoShuffleTipsView.prefabUrl = "prefabs/ui/FailView";
    AutoShuffleTipsView.bundleName = "mainRes";
    AutoShuffleTipsView = __decorate([
        mj.class
    ], AutoShuffleTipsView);
    return AutoShuffleTipsView;
}(UIView_1.default));
exports.default = AutoShuffleTipsView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RpZUF1dG9TaHVmZmxlL1NjcmlwdHMvQXV0b1NodWZmbGVUaXBzVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELDJFQUFzRTtBQUN0RSw2REFBd0Q7QUFFeEQ7SUFBaUQsdUNBQU07SUFBdkQ7UUFBQSxxRUE4Q0M7UUE3Q0MsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsYUFBTyxHQUFHLElBQUksQ0FBQzs7SUF5Q2pCLENBQUM7SUF0Q0Msb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FB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LENBOEN2QztJQUFELDBCQUFDO0NBOUNELEFBOENDLENBOUNnRCxnQkFBTSxHQThDdEQ7a0JBOUNvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlWaWV3IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgRGllQXV0b1NodWZmbGVUcmFpdCBmcm9tICcuL0RpZUF1dG9TaHVmZmxlVHJhaXQnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvU2h1ZmZsZVRpcHNWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgYnRuVXNlID0gbnVsbDtcbiAgYnRuUmVwbGF5ID0gbnVsbDtcbiAgbGJsVXNlID0gbnVsbDtcbiAgbGJsUmVwbGF5ID0gbnVsbDtcbiAgbGJsRGVzYyA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdWkvRmFpbFZpZXdcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcIm1haW5SZXNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29udGVudF9ub2RlXCIpO1xuICAgIHRoaXMuYnRuVXNlID0gZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl91c2VcIik7XG4gICAgdGhpcy5idG5SZXBsYXkgPSBlLmdldENoaWxkQnlOYW1lKFwiYnRuX3JlcGxheVwiKTtcbiAgICB0aGlzLmxibFVzZSA9IHRoaXMuYnRuVXNlLmdldENoaWxkQnlOYW1lKFwidXNlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5sYmxSZXBsYXkgPSB0aGlzLmJ0blJlcGxheS5nZXRDaGlsZEJ5TmFtZShcInJlcGxheVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMubGJsRGVzYyA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJkZXNjXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5idG5Vc2UgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuYnRuVXNlLCB0aGlzLm9uQXV0b0J0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuYnRuUmVwbGF5ICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLmJ0blJlcGxheSwgdGhpcy5vblVuQXV0b0J0bkNsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gIH1cbiAgc2hvdygpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUsXG4gICAgICBpLFxuICAgICAgbyA9IG51bGwgPT09ICh0ID0gdGhpcy5idG5Vc2UpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlTnVtXCIpLFxuICAgICAgbiA9IG51bGwgPT09IChlID0gdGhpcy5idG5Vc2UpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VcIiksXG4gICAgICBsID0gbnVsbCA9PT0gKGkgPSB0aGlzLmJ0blVzZSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nZXRDaGlsZEJ5TmFtZShcImFkXCIpO1xuICAgIGNjLmlzVmFsaWQobykgJiYgKG8uYWN0aXZlID0gZmFsc2UpO1xuICAgIGNjLmlzVmFsaWQobCkgJiYgKGwuYWN0aXZlID0gZmFsc2UpO1xuICAgIGNjLmlzVmFsaWQobikgJiYgKG4uYWN0aXZlID0gdHJ1ZSk7XG4gICAgdGhpcy5sYmxEZXNjLnN0cmluZyA9IEkxOE5TdHJpbmdzLmdldChcIkF1dG9TaHVmZmxlVGlwc18wMVwiLCBcIkF1dG9TaHVmZmxlVGlwc18wMVwiKTtcbiAgICB0aGlzLmxibFVzZS5zdHJpbmcgPSBJMThOU3RyaW5ncy5nZXQoXCJBdXRvU2h1ZmZsZVRpcHNfMDJcIiwgXCJBdXRvU2h1ZmZsZVRpcHNfMDJcIik7XG4gICAgdGhpcy5sYmxSZXBsYXkuc3RyaW5nID0gSTE4TlN0cmluZ3MuZ2V0KFwiQXV0b1NodWZmbGVUaXBzXzAzXCIsIFwiQXV0b1NodWZmbGVUaXBzXzAzXCIpO1xuICB9XG4gIG9uQXV0b0J0bkNsaWNrKCkge1xuICAgIHZhciB0ID0gRGllQXV0b1NodWZmbGVUcmFpdC5nZXRBY3RpdmVTZXR0aW5nc0luc3RhbmNlKCk7XG4gICAgdCAmJiB0LnNldEF1dG9TaHVmZmxlRW5hYmxlZCh0cnVlLCBcIkF1dG9TaHVmZmxlVGlwc1ZpZXdfb25BdXRvQnRuQ2xpY2tcIik7XG4gICAgdGhpcy5vbkNsb3NlQnRuQ2xpY2soKTtcbiAgfVxuICBvblVuQXV0b0J0bkNsaWNrKCkge1xuICAgIHZhciB0ID0gRGllQXV0b1NodWZmbGVUcmFpdC5nZXRBY3RpdmVTZXR0aW5nc0luc3RhbmNlKCk7XG4gICAgdCAmJiB0LnNldEF1dG9TaHVmZmxlRW5hYmxlZChmYWxzZSwgXCJBdXRvU2h1ZmZsZVRpcHNWaWV3X29uVW5BdXRvQnRuQ2xpY2tcIik7XG4gICAgdGhpcy5vbkNsb3NlQnRuQ2xpY2soKTtcbiAgfVxufSJdfQ==