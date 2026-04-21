
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineComboTipsEff/Scripts/ValentineComboTipsEffTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1474dPq3ElPU6Mb0S49DT5W', 'ValentineComboTipsEffTrait');
// subpackages/r_valentineComboTipsEff/Scripts/ValentineComboTipsEffTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ValentineComboTipsEffTrait = /** @class */ (function (_super) {
    __extends(ValentineComboTipsEffTrait, _super);
    function ValentineComboTipsEffTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._comboTipsEff = null;
        _this._comboParent = null;
        return _this;
    }
    ValentineComboTipsEffTrait_1 = ValentineComboTipsEffTrait;
    ValentineComboTipsEffTrait.prototype.onScoreItem_playComboAni = function (t, e) {
        t.ins;
        e();
    };
    ValentineComboTipsEffTrait.prototype.onScoreItem_forceUpdScore = function (t, e) {
        this.setComboActive(false);
        e();
    };
    ValentineComboTipsEffTrait.prototype.onScoreItem_updScore = function (t, e) {
        var o, i = t.ins, n = null === (o = t.args) || void 0 === o ? void 0 : o[2];
        this._comboParent = i.node;
        if (this.isComboTipsEffActive()) {
            i._skeCombo.node.active = false;
            this.setComboActive(n);
        }
        else {
            i._skeCombo.node.active = n;
            this.setComboActive(false);
        }
        e();
    };
    ValentineComboTipsEffTrait.prototype.setComboActive = function (t) {
        if (cc.isValid(this._comboParent))
            if (cc.isValid(this._comboTipsEff))
                this._comboTipsEff.node.active = t;
            else {
                if (!t)
                    return;
                this._comboTipsEff = BaseSpine_1.default.create("spine/gameplay_comboTips", "init", -1, null, false, ValentineComboTipsEffTrait_1.BundleName);
                this._comboTipsEff.node.parent = this._comboParent;
                this._comboTipsEff.node.position = cc.v3(0, -10, 0);
                this._comboTipsEff.node.active = true;
                this._comboTipsEff.node.setSiblingIndex(0);
            }
    };
    ValentineComboTipsEffTrait.prototype.isComboTipsEffActive = function () {
        if (null != this._traitData.comboTipsEffect)
            return this._traitData.comboTipsEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineComboTipsEffTrait_1;
    ValentineComboTipsEffTrait.traitKey = "ValentineComboTipsEff";
    ValentineComboTipsEffTrait.BundleName = "r_valentineComboTipsEff";
    ValentineComboTipsEffTrait = ValentineComboTipsEffTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineComboTipsEffTrait")
    ], ValentineComboTipsEffTrait);
    return ValentineComboTipsEffTrait;
}(Trait_1.default));
exports.default = ValentineComboTipsEffTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZUNvbWJvVGlwc0VmZi9TY3JpcHRzL1ZhbGVudGluZUNvbWJvVGlwc0VmZlRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QseUVBQW9FO0FBR3BFO0lBQXdELDhDQUFLO0lBQTdEO1FBQUEscUVBMENDO1FBekNDLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGtCQUFZLEdBQUcsSUFBSSxDQUFDOztJQXdDdEIsQ0FBQzttQ0ExQ29CLDBCQUEwQjtJQUs3Qyw2REFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNOLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDhEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHlEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDVCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7WUFDL0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxtREFBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQUUsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztpQkFBSztnQkFDN0csSUFBSSxDQUFDLENBQUM7b0JBQUUsT0FBTztnQkFDZixJQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFTLENBQUMsTUFBTSxDQUFDLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLDRCQUEwQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNsSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUM7SUFDSCxDQUFDO0lBQ0QseURBQW9CLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlO1lBQUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUNwRixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2RCxDQUFDOztJQXRDTSxtQ0FBUSxHQUFHLHVCQUF1QixDQUFDO0lBQ25DLHFDQUFVLEdBQUcseUJBQXlCLENBQUM7SUFKM0IsMEJBQTBCO1FBRjlDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztPQUNsQiwwQkFBMEIsQ0EwQzlDO0lBQUQsaUNBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3VELGVBQUssR0EwQzVEO2tCQTFDb0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlZhbGVudGluZUNvbWJvVGlwc0VmZlRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxlbnRpbmVDb21ib1RpcHNFZmZUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbWJvVGlwc0VmZiA9IG51bGw7XG4gIF9jb21ib1BhcmVudCA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVmFsZW50aW5lQ29tYm9UaXBzRWZmXCI7XG4gIHN0YXRpYyBCdW5kbGVOYW1lID0gXCJyX3ZhbGVudGluZUNvbWJvVGlwc0VmZlwiO1xuICBvblNjb3JlSXRlbV9wbGF5Q29tYm9BbmkodCwgZSkge1xuICAgIHQuaW5zO1xuICAgIGUoKTtcbiAgfVxuICBvblNjb3JlSXRlbV9mb3JjZVVwZFNjb3JlKHQsIGUpIHtcbiAgICB0aGlzLnNldENvbWJvQWN0aXZlKGZhbHNlKTtcbiAgICBlKCk7XG4gIH1cbiAgb25TY29yZUl0ZW1fdXBkU2NvcmUodCwgZSkge1xuICAgIHZhciBvLFxuICAgICAgaSA9IHQuaW5zLFxuICAgICAgbiA9IG51bGwgPT09IChvID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvWzJdO1xuICAgIHRoaXMuX2NvbWJvUGFyZW50ID0gaS5ub2RlO1xuICAgIGlmICh0aGlzLmlzQ29tYm9UaXBzRWZmQWN0aXZlKCkpIHtcbiAgICAgIGkuX3NrZUNvbWJvLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnNldENvbWJvQWN0aXZlKG4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpLl9za2VDb21iby5ub2RlLmFjdGl2ZSA9IG47XG4gICAgICB0aGlzLnNldENvbWJvQWN0aXZlKGZhbHNlKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIHNldENvbWJvQWN0aXZlKHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9jb21ib1BhcmVudCkpIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2NvbWJvVGlwc0VmZikpIHRoaXMuX2NvbWJvVGlwc0VmZi5ub2RlLmFjdGl2ZSA9IHQ7ZWxzZSB7XG4gICAgICBpZiAoIXQpIHJldHVybjtcbiAgICAgIHRoaXMuX2NvbWJvVGlwc0VmZiA9IEJhc2VTcGluZS5jcmVhdGUoXCJzcGluZS9nYW1lcGxheV9jb21ib1RpcHNcIiwgXCJpbml0XCIsIC0xLCBudWxsLCBmYWxzZSwgVmFsZW50aW5lQ29tYm9UaXBzRWZmVHJhaXQuQnVuZGxlTmFtZSk7XG4gICAgICB0aGlzLl9jb21ib1RpcHNFZmYubm9kZS5wYXJlbnQgPSB0aGlzLl9jb21ib1BhcmVudDtcbiAgICAgIHRoaXMuX2NvbWJvVGlwc0VmZi5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTEwLCAwKTtcbiAgICAgIHRoaXMuX2NvbWJvVGlwc0VmZi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLl9jb21ib1RpcHNFZmYubm9kZS5zZXRTaWJsaW5nSW5kZXgoMCk7XG4gICAgfVxuICB9XG4gIGlzQ29tYm9UaXBzRWZmQWN0aXZlKCkge1xuICAgIGlmIChudWxsICE9IHRoaXMuX3RyYWl0RGF0YS5jb21ib1RpcHNFZmZlY3QpIHJldHVybiB0aGlzLl90cmFpdERhdGEuY29tYm9UaXBzRWZmZWN0O1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJWYWxlbnRpbmVNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCAhPSB0ICYmIHQuZ2V0SW5zdGFuY2UoKS5pc0VmZmVjdEFjdGl2ZSgpO1xuICB9XG59Il19