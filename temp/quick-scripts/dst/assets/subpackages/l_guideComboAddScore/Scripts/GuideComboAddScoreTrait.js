
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guideComboAddScore/Scripts/GuideComboAddScoreTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc1ceZbKANMsIPcUBv67w9L', 'GuideComboAddScoreTrait');
// subpackages/l_guideComboAddScore/Scripts/GuideComboAddScoreTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GuideComboAddScoreTrait = /** @class */ (function (_super) {
    __extends(GuideComboAddScoreTrait, _super);
    function GuideComboAddScoreTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideComboAddScoreTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GuideComboAddScoreTrait.prototype.onScoreMod_set1stComboScr = function (t, r) {
        r({
            returnVal: t.args[0],
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    GuideComboAddScoreTrait.traitKey = "GuideComboAddScore";
    GuideComboAddScoreTrait = __decorate([
        mj.trait,
        mj.class("GuideComboAddScoreTrait")
    ], GuideComboAddScoreTrait);
    return GuideComboAddScoreTrait;
}(Trait_1.default));
exports.default = GuideComboAddScoreTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlQ29tYm9BZGRTY29yZS9TY3JpcHRzL0d1aWRlQ29tYm9BZGRTY29yZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQXFELDJDQUFLO0lBQTFEOztJQVlBLENBQUM7SUFWQyx3Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsMkRBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFWTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRHBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FZM0M7SUFBRCw4QkFBQztDQVpELEFBWUMsQ0Fab0QsZUFBSyxHQVl6RDtrQkFab0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiR3VpZGVDb21ib0FkZFNjb3JlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aWRlQ29tYm9BZGRTY29yZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkd1aWRlQ29tYm9BZGRTY29yZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25TY29yZU1vZF9zZXQxc3RDb21ib1Njcih0LCByKSB7XG4gICAgcih7XG4gICAgICByZXR1cm5WYWw6IHQuYXJnc1swXSxcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICB9KTtcbiAgfVxufSJdfQ==