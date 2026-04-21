
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_selectScale/Scripts/SelectScaleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d726p9NIhD8KlB4gS6Gj/o', 'SelectScaleTrait');
// subpackages/l_selectScale/Scripts/SelectScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var SelectScaleTrait = /** @class */ (function (_super) {
    __extends(SelectScaleTrait, _super);
    function SelectScaleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectScale = 1.2;
        return _this;
    }
    SelectScaleTrait.prototype.getSelectScale = function () {
        return this._selectScale;
    };
    SelectScaleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._selectScale = this._traitData.selectScale || 1.2;
    };
    SelectScaleTrait.prototype.onTileNodeObj_getScale = function (t, e) {
        t.ins;
        t.args[0] = this._selectScale;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: this._selectScale
        });
    };
    SelectScaleTrait.traitKey = "SelectScaleTrait";
    SelectScaleTrait = __decorate([
        mj.trait,
        mj.class("SelectScaleTrait")
    ], SelectScaleTrait);
    return SelectScaleTrait;
}(Trait_1.default));
exports.default = SelectScaleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NlbGVjdFNjYWxlL1NjcmlwdHMvU2VsZWN0U2NhbGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUE4QyxvQ0FBSztJQUFuRDtRQUFBLHFFQWtCQztRQWpCQyxrQkFBWSxHQUFHLEdBQUcsQ0FBQzs7SUFpQnJCLENBQUM7SUFmQyx5Q0FBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsaURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDTixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDOUIsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLElBQUk7WUFDeEMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFmTSx5QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRmxCLGdCQUFnQjtRQUZwQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7T0FDUixnQkFBZ0IsQ0FrQnBDO0lBQUQsdUJBQUM7Q0FsQkQsQUFrQkMsQ0FsQjZDLGVBQUssR0FrQmxEO2tCQWxCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2VsZWN0U2NhbGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0U2NhbGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3NlbGVjdFNjYWxlID0gMS4yO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNlbGVjdFNjYWxlVHJhaXRcIjtcbiAgZ2V0U2VsZWN0U2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdFNjYWxlO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9zZWxlY3RTY2FsZSA9IHRoaXMuX3RyYWl0RGF0YS5zZWxlY3RTY2FsZSB8fCAxLjI7XG4gIH1cbiAgb25UaWxlTm9kZU9ial9nZXRTY2FsZSh0LCBlKSB7XG4gICAgdC5pbnM7XG4gICAgdC5hcmdzWzBdID0gdGhpcy5fc2VsZWN0U2NhbGU7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLl9zZWxlY3RTY2FsZVxuICAgIH0pO1xuICB9XG59Il19