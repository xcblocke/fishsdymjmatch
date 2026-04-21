
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ElementBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '865d1rFzaFO2ZEl2BRAjd0b', 'ElementBase');
// Scripts/ElementBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCell_1 = require("./base/ui/BaseCell");
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var ElementBase = /** @class */ (function (_super) {
    __extends(ElementBase, _super);
    function ElementBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementBase.prototype.uiOnLoad = function () { };
    ElementBase.prototype.updateUI = function () {
        if (cc.isValid(this.node.parent)) {
            var e = this.getDesignZOrder();
            this.node.setSiblingIndex(e);
        }
    };
    ElementBase.prototype.getDesignZOrder = function () {
        return 0;
    };
    ElementBase.prototype.getBaseSpine = function (e) {
        var t = BaseSpine_1.default.refreshWithNode(e);
        t.markReady("");
        return t;
    };
    ElementBase.prototype.hookNode = function (e, t, o, n) {
        e && cc.isValid(o) && cc.isValid(n) && cc.isValid(this.node.parent) && o.parent === n && e.attachNode(t, function () {
            return o;
        });
    };
    ElementBase.size = new cc.Size(0, 0);
    ElementBase = __decorate([
        mj.class
    ], ElementBase);
    return ElementBase;
}(BaseCell_1.default));
exports.default = ElementBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0VsZW1lbnRCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDMUMsMERBQXFEO0FBRXJEO0lBQXlDLCtCQUFRO0lBQWpEOztJQXNCQSxDQUFDO0lBcEJDLDhCQUFRLEdBQVIsY0FBWSxDQUFDO0lBQ2IsOEJBQVEsR0FBUjtRQUNFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFDRCxxQ0FBZSxHQUFmO1FBQ0UsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsa0NBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELDhCQUFRLEdBQVIsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2pCLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQ3ZHLE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBcEJNLGdCQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQURiLFdBQVc7UUFEL0IsRUFBRSxDQUFDLEtBQUs7T0FDWSxXQUFXLENBc0IvQjtJQUFELGtCQUFDO0NBdEJELEFBc0JDLENBdEJ3QyxrQkFBUSxHQXNCaEQ7a0JBdEJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VDZWxsIGZyb20gJy4vYmFzZS91aS9CYXNlQ2VsbCc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50QmFzZSBleHRlbmRzIEJhc2VDZWxsIHtcbiAgc3RhdGljIHNpemUgPSBuZXcgY2MuU2l6ZSgwLCAwKTtcbiAgdWlPbkxvYWQoKSB7fVxuICB1cGRhdGVVSSgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm5vZGUucGFyZW50KSkge1xuICAgICAgdmFyIGUgPSB0aGlzLmdldERlc2lnblpPcmRlcigpO1xuICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleChlKTtcbiAgICB9XG4gIH1cbiAgZ2V0RGVzaWduWk9yZGVyKCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGdldEJhc2VTcGluZShlKSB7XG4gICAgdmFyIHQgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGUpO1xuICAgIHQubWFya1JlYWR5KFwiXCIpO1xuICAgIHJldHVybiB0O1xuICB9XG4gIGhvb2tOb2RlKGUsIHQsIG8sIG4pIHtcbiAgICBlICYmIGNjLmlzVmFsaWQobykgJiYgY2MuaXNWYWxpZChuKSAmJiBjYy5pc1ZhbGlkKHRoaXMubm9kZS5wYXJlbnQpICYmIG8ucGFyZW50ID09PSBuICYmIGUuYXR0YWNoTm9kZSh0LCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbztcbiAgICB9KTtcbiAgfVxufSJdfQ==