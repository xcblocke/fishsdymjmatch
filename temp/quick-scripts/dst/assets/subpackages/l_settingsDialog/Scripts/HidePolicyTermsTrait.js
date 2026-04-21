
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsDialog/Scripts/HidePolicyTermsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fa54aAxmJO7YYOR7PDJSBJ', 'HidePolicyTermsTrait');
// subpackages/l_settingsDialog/Scripts/HidePolicyTermsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var HidePolicyTermsTrait = /** @class */ (function (_super) {
    __extends(HidePolicyTermsTrait, _super);
    function HidePolicyTermsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HEIGHT_REDUCE = 65;
        return _this;
    }
    HidePolicyTermsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HidePolicyTermsTrait.prototype.onUISetDlg_adjustPH = function (t, e) {
        var i = t.ins;
        if (cc.isValid(i) && cc.isValid(i.node)) {
            var o = i.node.getChildByName("content");
            if (cc.isValid(o)) {
                var n = o.getChildByName("bottom_node");
                if (cc.isValid(n)) {
                    var a = n.getChildByName("privacy_policy");
                    cc.isValid(a) && (a.active = false);
                    var r = n.getChildByName("terms");
                    cc.isValid(r) && (r.active = false);
                    this.adjustBottomWidgets(o);
                }
            }
        }
        e();
    };
    HidePolicyTermsTrait.prototype.adjustBottomWidgets = function (t) {
        var e = t.getChildByName("bottom_layout");
        if (cc.isValid(e)) {
            var i = e.getComponent(cc.Widget);
            if (cc.isValid(i) && i.isAlignBottom) {
                i.bottom -= this.HEIGHT_REDUCE;
                i.updateAlignment();
            }
        }
    };
    HidePolicyTermsTrait.prototype.onUISetDlg_getDch = function (t, e) {
        var i = (t.beforReturnVal || 1100) - this.HEIGHT_REDUCE;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: i
        });
    };
    HidePolicyTermsTrait.traitKey = "HidePolicyTerms";
    HidePolicyTermsTrait = __decorate([
        mj.trait,
        mj.class("HidePolicyTermsTrait")
    ], HidePolicyTermsTrait);
    return HidePolicyTermsTrait;
}(Trait_1.default));
exports.default = HidePolicyTermsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzRGlhbG9nL1NjcmlwdHMvSGlkZVBvbGljeVRlcm1zVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBa0Qsd0NBQUs7SUFBdkQ7UUFBQSxxRUF3Q0M7UUF2Q0MsbUJBQWEsR0FBRyxFQUFFLENBQUM7O0lBdUNyQixDQUFDO0lBckNDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxrREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUMzQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0I7YUFDRjtTQUNGO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BDLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3JCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3hELENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXJDTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRmpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0F3Q3hDO0lBQUQsMkJBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q2lELGVBQUssR0F3Q3REO2tCQXhDb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSGlkZVBvbGljeVRlcm1zVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpZGVQb2xpY3lUZXJtc1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBIRUlHSFRfUkVEVUNFID0gNjU7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSGlkZVBvbGljeVRlcm1zXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblVJU2V0RGxnX2FkanVzdFBIKHQsIGUpIHtcbiAgICB2YXIgaSA9IHQuaW5zO1xuICAgIGlmIChjYy5pc1ZhbGlkKGkpICYmIGNjLmlzVmFsaWQoaS5ub2RlKSkge1xuICAgICAgdmFyIG8gPSBpLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgdmFyIG4gPSBvLmdldENoaWxkQnlOYW1lKFwiYm90dG9tX25vZGVcIik7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG4pKSB7XG4gICAgICAgICAgdmFyIGEgPSBuLmdldENoaWxkQnlOYW1lKFwicHJpdmFjeV9wb2xpY3lcIik7XG4gICAgICAgICAgY2MuaXNWYWxpZChhKSAmJiAoYS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgICAgdmFyIHIgPSBuLmdldENoaWxkQnlOYW1lKFwidGVybXNcIik7XG4gICAgICAgICAgY2MuaXNWYWxpZChyKSAmJiAoci5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5hZGp1c3RCb3R0b21XaWRnZXRzKG8pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBhZGp1c3RCb3R0b21XaWRnZXRzKHQpIHtcbiAgICB2YXIgZSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJib3R0b21fbGF5b3V0XCIpO1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICB2YXIgaSA9IGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICBpZiAoY2MuaXNWYWxpZChpKSAmJiBpLmlzQWxpZ25Cb3R0b20pIHtcbiAgICAgICAgaS5ib3R0b20gLT0gdGhpcy5IRUlHSFRfUkVEVUNFO1xuICAgICAgICBpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvblVJU2V0RGxnX2dldERjaCh0LCBlKSB7XG4gICAgdmFyIGkgPSAodC5iZWZvclJldHVyblZhbCB8fCAxMTAwKSAtIHRoaXMuSEVJR0hUX1JFRFVDRTtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogaVxuICAgIH0pO1xuICB9XG59Il19