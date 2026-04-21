
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_badge/Scripts/BadgeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e51acdsbZA8qvXFee3gLvu', 'BadgeTrait');
// subpackages/l_badge/Scripts/BadgeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HallBadgeBtn_1 = require("./HallBadgeBtn");
var BadgeTrait = /** @class */ (function (_super) {
    __extends(BadgeTrait, _super);
    function BadgeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BadgeTrait_1 = BadgeTrait;
    BadgeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BadgeTrait.prototype.onHallVw_initBtns = function (t, e) {
        var r;
        this.createHallButton(null === (r = t.ins) || void 0 === r ? void 0 : r.node);
        e();
    };
    BadgeTrait.prototype.onHallVw_updateUI = function (t, e) {
        e();
    };
    BadgeTrait.prototype.createHallButton = function (t) {
        cc.isValid(t) && HallBadgeBtn_1.default.createUI().then(function (e) {
            cc.isValid(e) && cc.isValid(t) && t.addChild(e);
        }).catch(function (t) {
            console.error("[" + BadgeTrait_1.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallBadgeBtn按钮加载失败"));
        });
    };
    var BadgeTrait_1;
    BadgeTrait.traitKey = "Badge";
    BadgeTrait = BadgeTrait_1 = __decorate([
        mj.trait,
        mj.class("BadgeTrait")
    ], BadgeTrait);
    return BadgeTrait;
}(Trait_1.default));
exports.default = BadgeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JhZGdlL1NjcmlwdHMvQmFkZ2VUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELCtDQUEwQztBQUcxQztJQUF3Qyw4QkFBSztJQUE3Qzs7SUFvQkEsQ0FBQzttQkFwQm9CLFVBQVU7SUFFN0IsMkJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHNDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RSxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxzQ0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QscUNBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxzQkFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDdkQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxZQUFVLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDekgsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztJQWxCTSxtQkFBUSxHQUFHLE9BQU8sQ0FBQztJQURQLFVBQVU7UUFGOUIsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztPQUNGLFVBQVUsQ0FvQjlCO0lBQUQsaUJBQUM7Q0FwQkQsQUFvQkMsQ0FwQnVDLGVBQUssR0FvQjVDO2tCQXBCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgSGFsbEJhZGdlQnRuIGZyb20gJy4vSGFsbEJhZGdlQnRuJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQmFkZ2VUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFkZ2VUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJCYWRnZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25IYWxsVndfaW5pdEJ0bnModCwgZSkge1xuICAgIHZhciByO1xuICAgIHRoaXMuY3JlYXRlSGFsbEJ1dHRvbihudWxsID09PSAociA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLm5vZGUpO1xuICAgIGUoKTtcbiAgfVxuICBvbkhhbGxWd191cGRhdGVVSSh0LCBlKSB7XG4gICAgZSgpO1xuICB9XG4gIGNyZWF0ZUhhbGxCdXR0b24odCkge1xuICAgIGNjLmlzVmFsaWQodCkgJiYgSGFsbEJhZGdlQnRuLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgY2MuaXNWYWxpZChlKSAmJiBjYy5pc1ZhbGlkKHQpICYmIHQuYWRkQ2hpbGQoZSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBCYWRnZVRyYWl0LnRyYWl0S2V5ICsgXCJdIOa4uOaIj+WGheWIm+W7uuaMiemSruWksei0pTpcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIkhhbGxCYWRnZUJ0buaMiemSruWKoOi9veWksei0pVwiKSk7XG4gICAgfSk7XG4gIH1cbn0iXX0=