
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DDAStrategyBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '960a8H9kPpCQKQ9YRHmV0Fo', 'DDAStrategyBase');
// Scripts/DDAStrategyBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDAStrategyBase = void 0;
var Common_1 = require("./types/Common");
var DDAStrategyBase = /** @class */ (function () {
    function DDAStrategyBase() {
        this.priority = 0;
        this.param = {};
    }
    DDAStrategyBase.prototype.setPriority = function (e) {
        this.priority = e;
    };
    DDAStrategyBase.prototype.getPriority = function () {
        return this.priority;
    };
    DDAStrategyBase.prototype.setStrategyParam = function (e) {
        this.param = e;
    };
    DDAStrategyBase.prototype.getStrategyParam = function () {
        return this.param;
    };
    DDAStrategyBase.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_DDA; }
    };
    return DDAStrategyBase;
}());
exports.DDAStrategyBase = DDAStrategyBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0REQVN0cmF0ZWd5QmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUEwQztBQUMxQztJQUFBO1FBQ0UsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLFVBQUssR0FBRyxFQUFFLENBQUM7SUFjYixDQUFDO0lBYkMscUNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0QscUNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsMENBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNELDBDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsaUNBQU8sR0FBUCxVQUFRLENBQUMsRUFBRSxDQUFzQjtRQUF0QixrQkFBQSxFQUFBLElBQUksaUJBQVEsQ0FBQyxTQUFTO0lBQUcsQ0FBQztJQUN2QyxzQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFRENDb2xvciB9IGZyb20gJy4vdHlwZXMvQ29tbW9uJztcbmV4cG9ydCBjbGFzcyBEREFTdHJhdGVneUJhc2Uge1xuICBwcmlvcml0eSA9IDA7XG4gIHBhcmFtID0ge307XG4gIHNldFByaW9yaXR5KGUpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gZTtcbiAgfVxuICBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuICBzZXRTdHJhdGVneVBhcmFtKGUpIHtcbiAgICB0aGlzLnBhcmFtID0gZTtcbiAgfVxuICBnZXRTdHJhdGVneVBhcmFtKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtO1xuICB9XG4gIGxvZ0luZm8oZSwgdCA9IEVEQ0NvbG9yLkxBWUVSX0REQSkge31cbn0iXX0=