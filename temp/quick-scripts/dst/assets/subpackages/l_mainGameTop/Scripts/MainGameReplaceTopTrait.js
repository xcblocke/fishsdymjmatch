
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mainGameTop/Scripts/MainGameReplaceTopTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23622w58HFO+65DegWQODFt', 'MainGameReplaceTopTrait');
// subpackages/l_mainGameTop/Scripts/MainGameReplaceTopTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MainGameReplaceTopTrait = /** @class */ (function (_super) {
    __extends(MainGameReplaceTopTrait, _super);
    function MainGameReplaceTopTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._skinKey = "MainGameReplaceTop_1";
        return _this;
    }
    MainGameReplaceTopTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameReplaceTopTrait.prototype.onMainGmVw_getUrl = function (e, t) {
        t();
    };
    MainGameReplaceTopTrait.prototype.onMainGmVw_initLayers = function (e, t) {
        var o = e.ins;
        if (o.gameType !== GameTypeEnums_1.MjGameType.Classic) {
            this.applyTopSkinConfig(o);
            t();
        }
        else
            t();
    };
    MainGameReplaceTopTrait.prototype.applyTopSkinConfig = function (e) {
        var t;
        if (e && e.topRootNode) {
            var o = DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", (null === (t = this._traitData.config) || void 0 === t ? void 0 : t.skinKey) || this._skinKey), r = e.topRootNode;
            o && 0 !== o.length && NodeSkinTool_1.default.parseConfigList(r, o, e.gameType, "nodeTop");
        }
    };
    MainGameReplaceTopTrait.traitKey = "MainGameReplaceTop";
    __decorate([
        mj.traitEvent("MainGRTop_applyTSCfg")
    ], MainGameReplaceTopTrait.prototype, "applyTopSkinConfig", null);
    MainGameReplaceTopTrait = __decorate([
        mj.trait,
        mj.class("MainGameReplaceTopTrait")
    ], MainGameReplaceTopTrait);
    return MainGameReplaceTopTrait;
}(Trait_1.default));
exports.default = MainGameReplaceTopTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21haW5HYW1lVG9wL1NjcmlwdHMvTWFpbkdhbWVSZXBsYWNlVG9wVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUF3RTtBQUN4RSxnRUFBMkQ7QUFDM0QsNkVBQTRFO0FBQzVFLDhEQUF5RDtBQUN6RCx3RkFBb0Y7QUFHcEY7SUFBcUQsMkNBQUs7SUFBMUQ7UUFBQSxxRUF5QkM7UUF4QkMsY0FBUSxHQUFHLHNCQUFzQixDQUFDOztJQXdCcEMsQ0FBQztJQXRCQyx3Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsbURBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHVEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELG9EQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyx1QkFBVSxDQUFDLFdBQVcsQ0FBQyx1QkFBVSxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUNsSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUNwQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksc0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0gsQ0FBQztJQXRCTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBZXZDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztxRUFRckM7SUF4QmtCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0F5QjNDO0lBQUQsOEJBQUM7Q0F6QkQsQUF5QkMsQ0F6Qm9ELGVBQUssR0F5QnpEO2tCQXpCb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IE5vZGVTa2luVG9vbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL05vZGVTa2luVG9vbCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWFpbkdhbWVSZXBsYWNlVG9wVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5HYW1lUmVwbGFjZVRvcFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfc2tpbktleSA9IFwiTWFpbkdhbWVSZXBsYWNlVG9wXzFcIjtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNYWluR2FtZVJlcGxhY2VUb3BcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uTWFpbkdtVndfZ2V0VXJsKGUsIHQpIHtcbiAgICB0KCk7XG4gIH1cbiAgb25NYWluR21Wd19pbml0TGF5ZXJzKGUsIHQpIHtcbiAgICB2YXIgbyA9IGUuaW5zO1xuICAgIGlmIChvLmdhbWVUeXBlICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHRoaXMuYXBwbHlUb3BTa2luQ29uZmlnKG8pO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNYWluR1JUb3BfYXBwbHlUU0NmZ1wiKVxuICBhcHBseVRvcFNraW5Db25maWcoZSkge1xuICAgIHZhciB0O1xuICAgIGlmIChlICYmIGUudG9wUm9vdE5vZGUpIHtcbiAgICAgIHZhciBvID0gRGF0YVJlYWRlci5nZXRUeXBlTGlzdChDb25maWdUeXBlLm1haW5HYW1lVG9wU2tpbiwgXCJTa2luS2V5XCIsIChudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YS5jb25maWcpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuc2tpbktleSkgfHwgdGhpcy5fc2tpbktleSksXG4gICAgICAgIHIgPSBlLnRvcFJvb3ROb2RlO1xuICAgICAgbyAmJiAwICE9PSBvLmxlbmd0aCAmJiBOb2RlU2tpblRvb2wucGFyc2VDb25maWdMaXN0KHIsIG8sIGUuZ2FtZVR5cGUsIFwibm9kZVRvcFwiKTtcbiAgICB9XG4gIH1cbn0iXX0=