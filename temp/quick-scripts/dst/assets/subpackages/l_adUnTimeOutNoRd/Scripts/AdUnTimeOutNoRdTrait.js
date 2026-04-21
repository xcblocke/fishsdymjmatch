
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_adUnTimeOutNoRd/Scripts/AdUnTimeOutNoRdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2997FiMWlG4JsmRQ9uDlks', 'AdUnTimeOutNoRdTrait');
// subpackages/l_adUnTimeOutNoRd/Scripts/AdUnTimeOutNoRdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdUnTimeOutNoRdTrait = /** @class */ (function (_super) {
    __extends(AdUnTimeOutNoRdTrait, _super);
    function AdUnTimeOutNoRdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdUnTimeOutNoRdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AdUnTimeOutNoRdTrait.prototype.onAdUnavailCtrl_triggerCB = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdUnTimeOutNoRdTrait.traitKey = "AdUnTimeOutNoRd";
    AdUnTimeOutNoRdTrait = __decorate([
        mj.trait,
        mj.class("AdUnTimeOutNoRdTrait")
    ], AdUnTimeOutNoRdTrait);
    return AdUnTimeOutNoRdTrait;
}(Trait_1.default));
exports.default = AdUnTimeOutNoRdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2FkVW5UaW1lT3V0Tm9SZC9TY3JpcHRzL0FkVW5UaW1lT3V0Tm9SZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXNGO0FBSXRGO0lBQWtELHdDQUFLO0lBQXZEOztJQWFBLENBQUM7SUFWRyxxQ0FBTSxHQUFOO1FBQ0ksaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0RBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQztZQUNFLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07U0FDN0MsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVhNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEbkIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQWF4QztJQUFELDJCQUFDO0NBYkQsQUFhQyxDQWJpRCxlQUFLLEdBYXREO2tCQWJvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSBcIi4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0XCI7XG5pbXBvcnQge1RyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyXCI7XG5cbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQWRVblRpbWVPdXROb1JkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkVW5UaW1lT3V0Tm9SZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICAgIHN0YXRpYyB0cmFpdEtleSA9IFwiQWRVblRpbWVPdXROb1JkXCI7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIG9uQWRVbmF2YWlsQ3RybF90cmlnZ2VyQ0IodCwgcikge1xuICAgICAgICByKHtcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==