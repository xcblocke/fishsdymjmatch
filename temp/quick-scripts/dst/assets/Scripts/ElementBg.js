
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ElementBg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31063DMAWVOFrTTNp6N0qWb', 'ElementBg');
// Scripts/ElementBg.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ElementBase_1 = require("./ElementBase");
var ElementBg = /** @class */ (function (_super) {
    __extends(ElementBg, _super);
    function ElementBg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementBg.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        cc.isValid(this.node.parent) && this.node.setContentSize(cc.size(this.node.parent.width, this.node.height));
        this.adapterBg();
    };
    ElementBg.prototype.adapterBg = function () {
        var e = this.node.getComponent(cc.Widget) || this.node.addComponent(cc.Widget);
        e.isAlignTop = false;
        e.isAlignBottom = false;
        e.isAlignLeft = true;
        e.isAlignRight = true;
        e.isAbsoluteBottom = false;
        e.isAbsoluteTop = false;
        e.isAbsoluteLeft = true;
        e.isAbsoluteRight = true;
        e.left = 0;
        e.right = 0;
    };
    ElementBg.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
    };
    ElementBg.prefabUrl = "";
    ElementBg.size = new cc.Size(1080, 1920);
    return ElementBg;
}(ElementBase_1.default));
exports.default = ElementBg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0VsZW1lbnRCZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDO0lBQXVDLDZCQUFXO0lBQWxEOztJQXdCQSxDQUFDO0lBckJDLDRCQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCw2QkFBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBQ0QsNEJBQVEsR0FBUjtRQUNFLGlCQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQXRCTSxtQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLGNBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBc0J4QyxnQkFBQztDQXhCRCxBQXdCQyxDQXhCc0MscUJBQVcsR0F3QmpEO2tCQXhCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuL0VsZW1lbnRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRCZyBleHRlbmRzIEVsZW1lbnRCYXNlIHtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwiXCI7XG4gIHN0YXRpYyBzaXplID0gbmV3IGNjLlNpemUoMTA4MCwgMTkyMCk7XG4gIHVpT25Mb2FkKCkge1xuICAgIHN1cGVyLnVpT25Mb2FkLmNhbGwodGhpcyk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLm5vZGUucGFyZW50KSAmJiB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUoY2Muc2l6ZSh0aGlzLm5vZGUucGFyZW50LndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0KSk7XG4gICAgdGhpcy5hZGFwdGVyQmcoKTtcbiAgfVxuICBhZGFwdGVyQmcoKSB7XG4gICAgdmFyIGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkgfHwgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgIGUuaXNBbGlnblRvcCA9IGZhbHNlO1xuICAgIGUuaXNBbGlnbkJvdHRvbSA9IGZhbHNlO1xuICAgIGUuaXNBbGlnbkxlZnQgPSB0cnVlO1xuICAgIGUuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcbiAgICBlLmlzQWJzb2x1dGVCb3R0b20gPSBmYWxzZTtcbiAgICBlLmlzQWJzb2x1dGVUb3AgPSBmYWxzZTtcbiAgICBlLmlzQWJzb2x1dGVMZWZ0ID0gdHJ1ZTtcbiAgICBlLmlzQWJzb2x1dGVSaWdodCA9IHRydWU7XG4gICAgZS5sZWZ0ID0gMDtcbiAgICBlLnJpZ2h0ID0gMDtcbiAgfVxuICB1cGRhdGVVSSgpIHtcbiAgICBzdXBlci51cGRhdGVVSS5jYWxsKHRoaXMpO1xuICB9XG59Il19