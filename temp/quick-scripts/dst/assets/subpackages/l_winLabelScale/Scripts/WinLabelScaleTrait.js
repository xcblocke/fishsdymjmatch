
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winLabelScale/Scripts/WinLabelScaleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '809f025tSRNiLExst1DRBTl', 'WinLabelScaleTrait');
// subpackages/l_winLabelScale/Scripts/WinLabelScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinLabelScaleTrait = /** @class */ (function (_super) {
    __extends(WinLabelScaleTrait, _super);
    function WinLabelScaleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WinLabelScaleTrait.prototype, "scale", {
        get: function () {
            var e;
            return null !== (e = this._traitData.scale) && void 0 !== e ? e : 1.15;
        },
        enumerable: false,
        configurable: true
    });
    WinLabelScaleTrait.prototype.onWinVw_showWinVw = function (e, t) {
        var n = e.ins;
        this.scaleWinLab(null == n ? void 0 : n.node);
        t();
    };
    WinLabelScaleTrait.prototype.onTLWinVw_showTLWinVw = function (e, t) {
        var n = e.ins;
        this.scaleWinLab(null == n ? void 0 : n.node);
        t();
    };
    WinLabelScaleTrait.prototype.onDCWinVw_showWinVw = function (e, t) {
        var n = e.ins;
        this.scaleWinLab(null == n ? void 0 : n.node);
        t();
    };
    WinLabelScaleTrait.prototype.onTile2WinVw_show = function (e, t) {
        var n = e.ins;
        this.scaleWinLab(null == n ? void 0 : n.node);
        t();
    };
    WinLabelScaleTrait.prototype.scaleWinLab = function (e) {
        var t = new Set(["btn_next"]);
        cc.isValid(e) && this.scaleLabelRecursive(e, t);
    };
    WinLabelScaleTrait.prototype.scaleLabelRecursive = function (e, t) {
        var n, r;
        if (cc.isValid(e)) {
            var i = e.getComponent(cc.Label) || e.getComponent(cc.RichText);
            if (i) {
                i.fontSize = i.fontSize * this.scale;
                i.lineHeight = i.lineHeight * this.scale;
            }
            try {
                for (var o = __values(e.children), c = o.next(); !c.done; c = o.next()) {
                    var l = c.value;
                    t.has(l.name) || this.scaleLabelRecursive(l, t);
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    c && !c.done && (r = o.return) && r.call(o);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
        }
    };
    WinLabelScaleTrait.traitKey = "WinLabelScale";
    WinLabelScaleTrait = __decorate([
        mj.trait,
        mj.class("WinLabelScaleTrait")
    ], WinLabelScaleTrait);
    return WinLabelScaleTrait;
}(Trait_1.default));
exports.default = WinLabelScaleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpbkxhYmVsU2NhbGUvU2NyaXB0cy9XaW5MYWJlbFNjYWxlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFnRCxzQ0FBSztJQUFyRDs7SUF3REEsQ0FBQztJQXREQyxzQkFBSSxxQ0FBSzthQUFUO1lBQ0UsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekUsQ0FBQzs7O09BQUE7SUFDRCw4Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxrREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxnREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw4Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx3Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELGdEQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzFDO1lBQ0QsSUFBSTtnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDakQ7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLENBQUMsR0FBRztvQkFDRixLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDO2FBQ0g7b0JBQVM7Z0JBQ1IsSUFBSTtvQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3Qzt3QkFBUztvQkFDUixJQUFJLENBQUM7d0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUN0QjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBdERNLDJCQUFRLEdBQUcsZUFBZSxDQUFDO0lBRGYsa0JBQWtCO1FBRnRDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQXdEdEM7SUFBRCx5QkFBQztDQXhERCxBQXdEQyxDQXhEK0MsZUFBSyxHQXdEcEQ7a0JBeERvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJXaW5MYWJlbFNjYWxlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbkxhYmVsU2NhbGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJXaW5MYWJlbFNjYWxlXCI7XG4gIGdldCBzY2FsZSgpIHtcbiAgICB2YXIgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSB0aGlzLl90cmFpdERhdGEuc2NhbGUpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiAxLjE1O1xuICB9XG4gIG9uV2luVndfc2hvd1dpblZ3KGUsIHQpIHtcbiAgICB2YXIgbiA9IGUuaW5zO1xuICAgIHRoaXMuc2NhbGVXaW5MYWIobnVsbCA9PSBuID8gdm9pZCAwIDogbi5ub2RlKTtcbiAgICB0KCk7XG4gIH1cbiAgb25UTFdpblZ3X3Nob3dUTFdpblZ3KGUsIHQpIHtcbiAgICB2YXIgbiA9IGUuaW5zO1xuICAgIHRoaXMuc2NhbGVXaW5MYWIobnVsbCA9PSBuID8gdm9pZCAwIDogbi5ub2RlKTtcbiAgICB0KCk7XG4gIH1cbiAgb25EQ1dpblZ3X3Nob3dXaW5WdyhlLCB0KSB7XG4gICAgdmFyIG4gPSBlLmlucztcbiAgICB0aGlzLnNjYWxlV2luTGFiKG51bGwgPT0gbiA/IHZvaWQgMCA6IG4ubm9kZSk7XG4gICAgdCgpO1xuICB9XG4gIG9uVGlsZTJXaW5Wd19zaG93KGUsIHQpIHtcbiAgICB2YXIgbiA9IGUuaW5zO1xuICAgIHRoaXMuc2NhbGVXaW5MYWIobnVsbCA9PSBuID8gdm9pZCAwIDogbi5ub2RlKTtcbiAgICB0KCk7XG4gIH1cbiAgc2NhbGVXaW5MYWIoZSkge1xuICAgIHZhciB0ID0gbmV3IFNldChbXCJidG5fbmV4dFwiXSk7XG4gICAgY2MuaXNWYWxpZChlKSAmJiB0aGlzLnNjYWxlTGFiZWxSZWN1cnNpdmUoZSwgdCk7XG4gIH1cbiAgc2NhbGVMYWJlbFJlY3Vyc2l2ZShlLCB0KSB7XG4gICAgdmFyIG4sIHI7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIHZhciBpID0gZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpIHx8IGUuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KTtcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIGkuZm9udFNpemUgPSBpLmZvbnRTaXplICogdGhpcy5zY2FsZTtcbiAgICAgICAgaS5saW5lSGVpZ2h0ID0gaS5saW5lSGVpZ2h0ICogdGhpcy5zY2FsZTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyhlLmNoaWxkcmVuKSwgYyA9IG8ubmV4dCgpOyAhYy5kb25lOyBjID0gby5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgbCA9IGMudmFsdWU7XG4gICAgICAgICAgdC5oYXMobC5uYW1lKSB8fCB0aGlzLnNjYWxlTGFiZWxSZWN1cnNpdmUobCwgdCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbiA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjICYmICFjLmRvbmUgJiYgKHIgPSBvLnJldHVybikgJiYgci5jYWxsKG8pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19