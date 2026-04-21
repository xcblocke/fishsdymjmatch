
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/analyze/ScreenUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f574eAhyQZJb4iMJhid8uAI', 'ScreenUtils');
// Scripts/gamePlay/analyze/ScreenUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ScreenUtils = /** @class */ (function () {
    function ScreenUtils() {
    }
    ScreenUtils.getPhysicalWidthInInches = function () {
        return this.getPhysicalSize().width;
    };
    ScreenUtils.getPhysicalHeightInInches = function () {
        return this.getPhysicalSize().height;
    };
    ScreenUtils.getPhysicalDiagonalInInches = function () {
        return this.getPhysicalSize().diagonal;
    };
    ScreenUtils.getPhysicalSize = function () {
        var e = cc.view.getFrameSize(), t = e.width, o = e.height, n = this.getDPI(), i = t / n, r = o / n, a = Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2));
        return {
            width: parseFloat(i.toFixed(2)),
            height: parseFloat(r.toFixed(2)),
            diagonal: parseFloat(a.toFixed(2)),
            dpi: n
        };
    };
    ScreenUtils.getDPI = function () {
        return 96;
    };
    return ScreenUtils;
}());
exports.default = ScreenUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2FuYWx5emUvU2NyZWVuVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUE0QkEsQ0FBQztJQTNCUSxvQ0FBd0IsR0FBL0I7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUNNLHFDQUF5QixHQUFoQztRQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUN2QyxDQUFDO0lBQ00sdUNBQTJCLEdBQWxDO1FBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ3pDLENBQUM7SUFDTSwyQkFBZSxHQUF0QjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQzVCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUNaLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQ2pCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNULENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNULENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTztZQUNMLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztJQUNKLENBQUM7SUFDTSxrQkFBTSxHQUFiO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuVXRpbHMge1xuICBzdGF0aWMgZ2V0UGh5c2ljYWxXaWR0aEluSW5jaGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFBoeXNpY2FsU2l6ZSgpLndpZHRoO1xuICB9XG4gIHN0YXRpYyBnZXRQaHlzaWNhbEhlaWdodEluSW5jaGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFBoeXNpY2FsU2l6ZSgpLmhlaWdodDtcbiAgfVxuICBzdGF0aWMgZ2V0UGh5c2ljYWxEaWFnb25hbEluSW5jaGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFBoeXNpY2FsU2l6ZSgpLmRpYWdvbmFsO1xuICB9XG4gIHN0YXRpYyBnZXRQaHlzaWNhbFNpemUoKSB7XG4gICAgdmFyIGUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLFxuICAgICAgdCA9IGUud2lkdGgsXG4gICAgICBvID0gZS5oZWlnaHQsXG4gICAgICBuID0gdGhpcy5nZXREUEkoKSxcbiAgICAgIGkgPSB0IC8gbixcbiAgICAgIHIgPSBvIC8gbixcbiAgICAgIGEgPSBNYXRoLnNxcnQoTWF0aC5wb3coaSwgMikgKyBNYXRoLnBvdyhyLCAyKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBwYXJzZUZsb2F0KGkudG9GaXhlZCgyKSksXG4gICAgICBoZWlnaHQ6IHBhcnNlRmxvYXQoci50b0ZpeGVkKDIpKSxcbiAgICAgIGRpYWdvbmFsOiBwYXJzZUZsb2F0KGEudG9GaXhlZCgyKSksXG4gICAgICBkcGk6IG5cbiAgICB9O1xuICB9XG4gIHN0YXRpYyBnZXREUEkoKSB7XG4gICAgcmV0dXJuIDk2O1xuICB9XG59Il19