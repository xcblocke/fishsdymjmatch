
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicOver/Scripts/ClassicOverTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4766eLVapNH+7wBfnJSLaSm', 'ClassicOverTrait');
// subpackages/l_classicOver/Scripts/ClassicOverTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var ClassicGameData_1 = require("../../../Scripts/core/simulator/data/ClassicGameData");
var ClassicOverTypes_1 = require("./ClassicOverTypes");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var ClassicOverTrait = /** @class */ (function (_super) {
    __extends(ClassicOverTrait, _super);
    function ClassicOverTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicOverTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ClassicOverTrait.prototype.onClcFailBhv_start = function (e, t) {
        var i = e.args[0];
        if (i && i.data) {
            this.showOverView(i.data);
            t();
        }
        else
            t();
    };
    ClassicOverTrait.prototype.showOverView = function () {
        var e = ClassicGameData_1.default.getInstance(), t = e.getScore(), i = e.getMaxScore(), o = e.getPreBestScore(), s = __read(e.getPreTodayScore(), 2), n = s[0], c = s[1], f = __read(e.getPreWeekScore(), 2), d = f[0], h = f[1], y = __read(e.getTodayScore(), 2), v = y[0], m = y[1], S = __read(e.getWeekScore(), 2), _ = S[0], b = S[1], w = GameUtils_1.default.isSameDay(m, c), g = GameUtils_1.default.isSameWeek(b, h), C = {
            curScore: t,
            bestScore: i,
            winType: ClassicOverTypes_1.EClassicWinType.Lose
        };
        if (t > o) {
            C.winType = ClassicOverTypes_1.EClassicWinType.Best;
        }
        else {
            if (g && _ > d) {
                C.winType = ClassicOverTypes_1.EClassicWinType.Week;
            }
            else {
                if (g || t !== _) {
                    if (w && v > n) {
                        C.winType = ClassicOverTypes_1.EClassicWinType.Today;
                    }
                    else {
                        w || t !== v || (C.winType = ClassicOverTypes_1.EClassicWinType.Today);
                    }
                }
                else {
                    C.winType = ClassicOverTypes_1.EClassicWinType.Week;
                }
            }
        }
        var P = C.winType === ClassicOverTypes_1.EClassicWinType.Lose ? "ClassicLoseController" : "ClassicWinController";
        ControllerManager_1.default.getInstance().pushViewByController(P, {
            bgStyle: {
                blackOpacity: 0
            },
            isShowAction: false,
            data: C
        });
    };
    ClassicOverTrait.traitKey = "ClassicOver";
    ClassicOverTrait = __decorate([
        mj.trait,
        mj.class("ClassicOverTrait")
    ], ClassicOverTrait);
    return ClassicOverTrait;
}(Trait_1.default));
exports.default = ClassicOverTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNPdmVyL1NjcmlwdHMvQ2xhc3NpY092ZXJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDBGQUFxRjtBQUNyRix3RkFBbUY7QUFDbkYsdURBQXFEO0FBQ3JELDRFQUF1RTtBQUd2RTtJQUE4QyxvQ0FBSztJQUFuRDs7SUE4REEsQ0FBQztJQTVEQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNkNBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsdUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLEVBQ25DLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQ25CLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQ3ZCLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ25DLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDbEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUNoQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQy9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsbUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM3QixDQUFDLEdBQUcsbUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM5QixDQUFDLEdBQUc7WUFDRixRQUFRLEVBQUUsQ0FBQztZQUNYLFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxFQUFFLGtDQUFlLENBQUMsSUFBSTtTQUM5QixDQUFDO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsQ0FBQyxDQUFDLE9BQU8sR0FBRyxrQ0FBZSxDQUFDLElBQUksQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZCxDQUFDLENBQUMsT0FBTyxHQUFHLGtDQUFlLENBQUMsSUFBSSxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ2QsQ0FBQyxDQUFDLE9BQU8sR0FBRyxrQ0FBZSxDQUFDLEtBQUssQ0FBQztxQkFDbkM7eUJBQU07d0JBQ0wsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLGtDQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3JEO2lCQUNGO3FCQUFNO29CQUNMLENBQUMsQ0FBQyxPQUFPLEdBQUcsa0NBQWUsQ0FBQyxJQUFJLENBQUM7aUJBQ2xDO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEtBQUssa0NBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztRQUM5RiwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUU7WUFDdEQsT0FBTyxFQUFFO2dCQUNQLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1lBQ0QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsSUFBSSxFQUFFLENBQUM7U0FDUixDQUFDLENBQUM7SUFDTCxDQUFDO0lBNURNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBRGIsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQThEcEM7SUFBRCx1QkFBQztDQTlERCxBQThEQyxDQTlENkMsZUFBSyxHQThEbEQ7a0JBOURvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IENsYXNzaWNHYW1lRGF0YSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvQ2xhc3NpY0dhbWVEYXRhJztcbmltcG9ydCB7IEVDbGFzc2ljV2luVHlwZSB9IGZyb20gJy4vQ2xhc3NpY092ZXJUeXBlcyc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDbGFzc2ljT3ZlclRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc2ljT3ZlclRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNsYXNzaWNPdmVyXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkNsY0ZhaWxCaHZfc3RhcnQoZSwgdCkge1xuICAgIHZhciBpID0gZS5hcmdzWzBdO1xuICAgIGlmIChpICYmIGkuZGF0YSkge1xuICAgICAgdGhpcy5zaG93T3ZlclZpZXcoaS5kYXRhKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIHNob3dPdmVyVmlldygpIHtcbiAgICB2YXIgZSA9IENsYXNzaWNHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLFxuICAgICAgdCA9IGUuZ2V0U2NvcmUoKSxcbiAgICAgIGkgPSBlLmdldE1heFNjb3JlKCksXG4gICAgICBvID0gZS5nZXRQcmVCZXN0U2NvcmUoKSxcbiAgICAgIHMgPSBfX3JlYWQoZS5nZXRQcmVUb2RheVNjb3JlKCksIDIpLFxuICAgICAgbiA9IHNbMF0sXG4gICAgICBjID0gc1sxXSxcbiAgICAgIGYgPSBfX3JlYWQoZS5nZXRQcmVXZWVrU2NvcmUoKSwgMiksXG4gICAgICBkID0gZlswXSxcbiAgICAgIGggPSBmWzFdLFxuICAgICAgeSA9IF9fcmVhZChlLmdldFRvZGF5U2NvcmUoKSwgMiksXG4gICAgICB2ID0geVswXSxcbiAgICAgIG0gPSB5WzFdLFxuICAgICAgUyA9IF9fcmVhZChlLmdldFdlZWtTY29yZSgpLCAyKSxcbiAgICAgIF8gPSBTWzBdLFxuICAgICAgYiA9IFNbMV0sXG4gICAgICB3ID0gR2FtZVV0aWxzLmlzU2FtZURheShtLCBjKSxcbiAgICAgIGcgPSBHYW1lVXRpbHMuaXNTYW1lV2VlayhiLCBoKSxcbiAgICAgIEMgPSB7XG4gICAgICAgIGN1clNjb3JlOiB0LFxuICAgICAgICBiZXN0U2NvcmU6IGksXG4gICAgICAgIHdpblR5cGU6IEVDbGFzc2ljV2luVHlwZS5Mb3NlXG4gICAgICB9O1xuICAgIGlmICh0ID4gbykge1xuICAgICAgQy53aW5UeXBlID0gRUNsYXNzaWNXaW5UeXBlLkJlc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChnICYmIF8gPiBkKSB7XG4gICAgICAgIEMud2luVHlwZSA9IEVDbGFzc2ljV2luVHlwZS5XZWVrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGcgfHwgdCAhPT0gXykge1xuICAgICAgICAgIGlmICh3ICYmIHYgPiBuKSB7XG4gICAgICAgICAgICBDLndpblR5cGUgPSBFQ2xhc3NpY1dpblR5cGUuVG9kYXk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHcgfHwgdCAhPT0gdiB8fCAoQy53aW5UeXBlID0gRUNsYXNzaWNXaW5UeXBlLlRvZGF5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQy53aW5UeXBlID0gRUNsYXNzaWNXaW5UeXBlLldlZWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIFAgPSBDLndpblR5cGUgPT09IEVDbGFzc2ljV2luVHlwZS5Mb3NlID8gXCJDbGFzc2ljTG9zZUNvbnRyb2xsZXJcIiA6IFwiQ2xhc3NpY1dpbkNvbnRyb2xsZXJcIjtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFAsIHtcbiAgICAgIGJnU3R5bGU6IHtcbiAgICAgICAgYmxhY2tPcGFjaXR5OiAwXG4gICAgICB9LFxuICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZSxcbiAgICAgIGRhdGE6IENcbiAgICB9KTtcbiAgfVxufSJdfQ==