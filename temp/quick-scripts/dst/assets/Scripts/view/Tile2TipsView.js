
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/Tile2TipsView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '560f6VG13FMo7OZkh9mPiQh', 'Tile2TipsView');
// Scripts/view/Tile2TipsView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../framework/ui/UIView");
var Tile2TipsView = /** @class */ (function (_super) {
    __extends(Tile2TipsView, _super);
    function Tile2TipsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._contentNode = null;
        _this._lbNode = null;
        return _this;
    }
    Tile2TipsView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._contentNode = this.node.getChildByName("content");
        this._lbNode = this._contentNode.getChildByName("string");
        this._lbNode.on(cc.Node.EventType.SIZE_CHANGED, this.updateBgSize, this);
        this.updateBgSize();
    };
    Tile2TipsView.prototype.stopAndHide = function () {
        this.stopAnimation();
        this._contentNode.active = false;
    };
    Tile2TipsView.prototype.playAnimation = function () {
        var e = this;
        this._contentNode.active = true;
        this._contentNode.scale = 0.5;
        this._contentNode.opacity = 0;
        cc.tween(this._contentNode).to(0.06, {
            scale: 1,
            opacity: 255
        }).delay(1.106).to(0.494, {
            scale: 0.5,
            opacity: 0
        }).call(function () {
            e.stopAndHide();
        }).start();
    };
    Tile2TipsView.prototype.showTile2Tips = function (e) {
        null != e && (this._lbNode.getComponent(cc.Label).string = e);
        this.stopAnimation();
        this.playAnimation();
    };
    Tile2TipsView.prototype.stopAnimation = function () {
        this._contentNode.stopAllActions();
    };
    Tile2TipsView.prototype.updateBgSize = function () {
        if (cc.isValid(this._lbNode) && cc.isValid(this._contentNode)) {
            var e = this._lbNode.getContentSize();
            this._contentNode.setContentSize(e.width + 20, e.height + 20);
        }
    };
    Tile2TipsView.prefabUrl = "prefabs/ui/tile2/Tile2TipsView";
    Tile2TipsView = __decorate([
        mj.class
    ], Tile2TipsView);
    return Tile2TipsView;
}(UIView_1.default));
exports.default = Tile2TipsView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvVGlsZTJUaXBzVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBRTVDO0lBQTJDLGlDQUFNO0lBQWpEO1FBQUEscUVBNENDO1FBM0NDLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGFBQU8sR0FBRyxJQUFJLENBQUM7O0lBMENqQixDQUFDO0lBeENDLDhCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxxQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtZQUNuQyxLQUFLLEVBQUUsQ0FBQztZQUNSLE9BQU8sRUFBRSxHQUFHO1NBQ2IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ3hCLEtBQUssRUFBRSxHQUFHO1lBQ1YsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELHFDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QscUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNELG9DQUFZLEdBQVo7UUFDRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7SUF4Q00sdUJBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztJQUhqQyxhQUFhO1FBRGpDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksYUFBYSxDQTRDakM7SUFBRCxvQkFBQztDQTVDRCxBQTRDQyxDQTVDMEMsZ0JBQU0sR0E0Q2hEO2tCQTVDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVZpZXcgZnJvbSAnLi4vZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyVGlwc1ZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBfY29udGVudE5vZGUgPSBudWxsO1xuICBfbGJOb2RlID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy91aS90aWxlMi9UaWxlMlRpcHNWaWV3XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb250ZW50Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XG4gICAgdGhpcy5fbGJOb2RlID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdHJpbmdcIik7XG4gICAgdGhpcy5fbGJOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy51cGRhdGVCZ1NpemUsIHRoaXMpO1xuICAgIHRoaXMudXBkYXRlQmdTaXplKCk7XG4gIH1cbiAgc3RvcEFuZEhpZGUoKSB7XG4gICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7XG4gICAgdGhpcy5fY29udGVudE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gIH1cbiAgcGxheUFuaW1hdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5fY29udGVudE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9jb250ZW50Tm9kZS5zY2FsZSA9IDAuNTtcbiAgICB0aGlzLl9jb250ZW50Tm9kZS5vcGFjaXR5ID0gMDtcbiAgICBjYy50d2Vlbih0aGlzLl9jb250ZW50Tm9kZSkudG8oMC4wNiwge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICBvcGFjaXR5OiAyNTVcbiAgICB9KS5kZWxheSgxLjEwNikudG8oMC40OTQsIHtcbiAgICAgIHNjYWxlOiAwLjUsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICBlLnN0b3BBbmRIaWRlKCk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBzaG93VGlsZTJUaXBzKGUpIHtcbiAgICBudWxsICE9IGUgJiYgKHRoaXMuX2xiTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGUpO1xuICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgIHRoaXMucGxheUFuaW1hdGlvbigpO1xuICB9XG4gIHN0b3BBbmltYXRpb24oKSB7XG4gICAgdGhpcy5fY29udGVudE5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgfVxuICB1cGRhdGVCZ1NpemUoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbGJOb2RlKSAmJiBjYy5pc1ZhbGlkKHRoaXMuX2NvbnRlbnROb2RlKSkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9sYk5vZGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgIHRoaXMuX2NvbnRlbnROb2RlLnNldENvbnRlbnRTaXplKGUud2lkdGggKyAyMCwgZS5oZWlnaHQgKyAyMCk7XG4gICAgfVxuICB9XG59Il19