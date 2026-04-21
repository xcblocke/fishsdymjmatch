
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_normalBtnDiff/Scripts/NormalBtnDiffUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28f5cRCaEJKmJ/8OpWcCh3Q', 'NormalBtnDiffUI');
// subpackages/l_normalBtnDiff/Scripts/NormalBtnDiffUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ELevelDiff = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var ELevelDiff;
(function (ELevelDiff) {
    ELevelDiff[ELevelDiff["Normal"] = 0] = "Normal";
    ELevelDiff[ELevelDiff["Expert"] = 1] = "Expert";
    ELevelDiff[ELevelDiff["Hard"] = 2] = "Hard";
})(ELevelDiff = exports.ELevelDiff || (exports.ELevelDiff = {}));
var NormalBtnDiffUI = /** @class */ (function (_super) {
    __extends(NormalBtnDiffUI, _super);
    function NormalBtnDiffUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expertBgNode = null;
        _this.expertUpBgNode = null;
        _this.hardBgNode = null;
        _this.hardUpBgNode = null;
        _this.labelUpNode = null;
        return _this;
    }
    NormalBtnDiffUI.prototype.getMessageListeners = function () {
        return {
            "language-changed": this.onLanguageChanged.bind(this)
        };
    };
    NormalBtnDiffUI.prototype.onLanguageChanged = function () {
        var t = this;
        this.enabledInHierarchy && this.scheduleOnce(function () {
            cc.isValid(t.labelUpNode) && t.labelUpNode.active && t.updateBgWidth();
        }, 0);
    };
    NormalBtnDiffUI.prototype.updateBgWidth = function () {
        this.hardUpBgNode.width = this.labelUpNode.width + 50;
        this.expertUpBgNode.width = this.labelUpNode.width + 50;
    };
    NormalBtnDiffUI.prototype.updateDiff = function (t) {
        if (!cc.isValid(this.expertBgNode))
            return false;
        this.expertBgNode.active = false;
        this.expertUpBgNode.active = false;
        this.hardBgNode.active = false;
        this.hardUpBgNode.active = false;
        this.labelUpNode.active = false;
        if (t === ELevelDiff.Expert) {
            this.showExpert();
        }
        else {
            if (t === ELevelDiff.Hard) {
                this.showHard();
            }
            else {
                t === ELevelDiff.Normal && this.showNormal();
            }
        }
        this.onLanguageChanged();
        return true;
    };
    NormalBtnDiffUI.prototype.showExpert = function () {
        this.expertBgNode.active = true;
        this.expertUpBgNode.active = true;
        this.labelUpNode.active = true;
        I18NStrings_1.default.setText(this.labelUpNode, "Expert", "MahjongTiles_VeryHard");
    };
    NormalBtnDiffUI.prototype.showHard = function () {
        this.hardBgNode.active = true;
        this.hardUpBgNode.active = true;
        this.labelUpNode.active = true;
        I18NStrings_1.default.setText(this.labelUpNode, "Hard", "MahjongTiles_Hard");
    };
    NormalBtnDiffUI.prototype.showNormal = function () { };
    NormalBtnDiffUI.prefabUrl = "prefabs/hall/NormalBtnDiff";
    __decorate([
        mj.node("BgExpert")
    ], NormalBtnDiffUI.prototype, "expertBgNode", void 0);
    __decorate([
        mj.node("BgExpertUp")
    ], NormalBtnDiffUI.prototype, "expertUpBgNode", void 0);
    __decorate([
        mj.node("BgHard")
    ], NormalBtnDiffUI.prototype, "hardBgNode", void 0);
    __decorate([
        mj.node("BgHardUP")
    ], NormalBtnDiffUI.prototype, "hardUpBgNode", void 0);
    __decorate([
        mj.node("LabeUp")
    ], NormalBtnDiffUI.prototype, "labelUpNode", void 0);
    __decorate([
        mj.traitEvent("NorBtnDiffUI_updateBgW")
    ], NormalBtnDiffUI.prototype, "updateBgWidth", null);
    __decorate([
        mj.traitEvent("NorBtnDiffUI_showExpert")
    ], NormalBtnDiffUI.prototype, "showExpert", null);
    __decorate([
        mj.traitEvent("NorBtnDiffUI_showHard")
    ], NormalBtnDiffUI.prototype, "showHard", null);
    __decorate([
        mj.traitEvent("NorBtnDiffUI_showNormal")
    ], NormalBtnDiffUI.prototype, "showNormal", null);
    NormalBtnDiffUI = __decorate([
        mj.class
    ], NormalBtnDiffUI);
    return NormalBtnDiffUI;
}(BaseUI_1.default));
exports.default = NormalBtnDiffUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX25vcm1hbEJ0bkRpZmYvU2NyaXB0cy9Ob3JtYWxCdG5EaWZmVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsMkVBQXNFO0FBQ3RFLElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNwQiwrQ0FBVSxDQUFBO0lBQ1YsK0NBQVUsQ0FBQTtJQUNWLDJDQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckI7QUFFRDtJQUE2QyxtQ0FBTTtJQUFuRDtRQUFBLHFFQStEQztRQTdEQyxrQkFBWSxHQUFlLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsa0JBQVksR0FBZSxJQUFJLENBQUM7UUFFaEMsaUJBQVcsR0FBYSxJQUFJLENBQUM7O0lBcUQvQixDQUFDO0lBbkRDLDZDQUFtQixHQUFuQjtRQUNFLE9BQU87WUFDTCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN0RCxDQUFDO0lBQ0osQ0FBQztJQUNELDJDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6RSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEVB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aWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5leHBvcnQgZW51bSBFTGV2ZWxEaWZmIHtcbiAgTm9ybWFsID0gMCxcbiAgRXhwZXJ0ID0gMSxcbiAgSGFyZCA9IDIsXG59XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vcm1hbEJ0bkRpZmZVSSBleHRlbmRzIEJhc2VVSSB7XG4gIEBtai5ub2RlKFwiQmdFeHBlcnRcIilcbiAgZXhwZXJ0QmdOb2RlOiBcIkJnRXhwZXJ0XCIgPSBudWxsO1xuICBAbWoubm9kZShcIkJnRXhwZXJ0VXBcIilcbiAgZXhwZXJ0VXBCZ05vZGU6IFwiQmdFeHBlcnRVcFwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJCZ0hhcmRcIilcbiAgaGFyZEJnTm9kZTogXCJCZ0hhcmRcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQmdIYXJkVVBcIilcbiAgaGFyZFVwQmdOb2RlOiBcIkJnSGFyZFVQXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkxhYmVVcFwiKVxuICBsYWJlbFVwTm9kZTogXCJMYWJlVXBcIiA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvaGFsbC9Ob3JtYWxCdG5EaWZmXCI7XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwibGFuZ3VhZ2UtY2hhbmdlZFwiOiB0aGlzLm9uTGFuZ3VhZ2VDaGFuZ2VkLmJpbmQodGhpcylcbiAgICB9O1xuICB9XG4gIG9uTGFuZ3VhZ2VDaGFuZ2VkKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSAmJiB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBjYy5pc1ZhbGlkKHQubGFiZWxVcE5vZGUpICYmIHQubGFiZWxVcE5vZGUuYWN0aXZlICYmIHQudXBkYXRlQmdXaWR0aCgpO1xuICAgIH0sIDApO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTm9yQnRuRGlmZlVJX3VwZGF0ZUJnV1wiKVxuICB1cGRhdGVCZ1dpZHRoKCkge1xuICAgIHRoaXMuaGFyZFVwQmdOb2RlLndpZHRoID0gdGhpcy5sYWJlbFVwTm9kZS53aWR0aCArIDUwO1xuICAgIHRoaXMuZXhwZXJ0VXBCZ05vZGUud2lkdGggPSB0aGlzLmxhYmVsVXBOb2RlLndpZHRoICsgNTA7XG4gIH1cbiAgdXBkYXRlRGlmZih0KSB7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMuZXhwZXJ0QmdOb2RlKSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuZXhwZXJ0QmdOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZXhwZXJ0VXBCZ05vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5oYXJkQmdOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGFyZFVwQmdOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubGFiZWxVcE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKHQgPT09IEVMZXZlbERpZmYuRXhwZXJ0KSB7XG4gICAgICB0aGlzLnNob3dFeHBlcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHQgPT09IEVMZXZlbERpZmYuSGFyZCkge1xuICAgICAgICB0aGlzLnNob3dIYXJkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ID09PSBFTGV2ZWxEaWZmLk5vcm1hbCAmJiB0aGlzLnNob3dOb3JtYWwoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vbkxhbmd1YWdlQ2hhbmdlZCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTm9yQnRuRGlmZlVJX3Nob3dFeHBlcnRcIilcbiAgc2hvd0V4cGVydCgpIHtcbiAgICB0aGlzLmV4cGVydEJnTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZXhwZXJ0VXBCZ05vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmxhYmVsVXBOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLmxhYmVsVXBOb2RlLCBcIkV4cGVydFwiLCBcIk1haGpvbmdUaWxlc19WZXJ5SGFyZFwiKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIk5vckJ0bkRpZmZVSV9zaG93SGFyZFwiKVxuICBzaG93SGFyZCgpIHtcbiAgICB0aGlzLmhhcmRCZ05vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmhhcmRVcEJnTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubGFiZWxVcE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMubGFiZWxVcE5vZGUsIFwiSGFyZFwiLCBcIk1haGpvbmdUaWxlc19IYXJkXCIpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTm9yQnRuRGlmZlVJX3Nob3dOb3JtYWxcIilcbiAgc2hvd05vcm1hbCgpIHt9XG59Il19