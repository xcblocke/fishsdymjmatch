
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankRobot2/Scripts/IRankChasing2Data.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '156d8Q6bcBN3ZOoHyB9ODcI', 'IRankChasing2Data');
// subpackages/l_rankRobot2/Scripts/IRankChasing2Data.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultChasing2Config = void 0;
var getDefaultChasing2Config = function () {
    return {
        baseConfig: {
            botsNum: 50,
            gradCoef: 0.018
        },
        activeConfig: {
            expGamesDefault: 11,
            activeDaysCount: 2,
            expGamesActiveBase: 1.8,
            expGamesActiveOffset: 6.5
        },
        jumpConfig: {
            jumpCoef: 0.4,
            jumpOffsetX: 1,
            jumpOffsetY: 0.2
        },
        pointsConfig: {
            initPoints: {
                0: 4,
                2: 3,
                4: 3
            },
            addPointsTop: {
                2: 3,
                3: 2,
                4: 5,
                6: 3,
                8: 1
            },
            stagPoints: {
                0: 1,
                2: 1
            }
        },
        chasingConfig: {
            botChasingCount: 5,
            botChasingInterval: 4,
            chasingBotsMaxPoint: 6
        },
        timeConfig: {
            stagTimeInterval: 3600,
            stagTimeControl: 0.6,
            periodTime: 86400
        }
    };
};
exports.getDefaultChasing2Config = getDefaultChasing2Config;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtSb2JvdDIvU2NyaXB0cy9JUmFua0NoYXNpbmcyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQUksd0JBQXdCLEdBQUc7SUFDcEMsT0FBTztRQUNMLFVBQVUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsUUFBUSxFQUFFLEtBQUs7U0FDaEI7UUFDRCxZQUFZLEVBQUU7WUFDWixlQUFlLEVBQUUsRUFBRTtZQUNuQixlQUFlLEVBQUUsQ0FBQztZQUNsQixrQkFBa0IsRUFBRSxHQUFHO1lBQ3ZCLG9CQUFvQixFQUFFLEdBQUc7U0FDMUI7UUFDRCxVQUFVLEVBQUU7WUFDVixRQUFRLEVBQUUsR0FBRztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsV0FBVyxFQUFFLEdBQUc7U0FDakI7UUFDRCxZQUFZLEVBQUU7WUFDWixVQUFVLEVBQUU7Z0JBQ1YsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUNELFlBQVksRUFBRTtnQkFDWixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2FBQ0w7U0FDRjtRQUNELGFBQWEsRUFBRTtZQUNiLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGtCQUFrQixFQUFFLENBQUM7WUFDckIsbUJBQW1CLEVBQUUsQ0FBQztTQUN2QjtRQUNELFVBQVUsRUFBRTtZQUNWLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsZUFBZSxFQUFFLEdBQUc7WUFDcEIsVUFBVSxFQUFFLEtBQUs7U0FDbEI7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBOUNTLFFBQUEsd0JBQXdCLDRCQThDakMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIGdldERlZmF1bHRDaGFzaW5nMkNvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBiYXNlQ29uZmlnOiB7XG4gICAgICBib3RzTnVtOiA1MCxcbiAgICAgIGdyYWRDb2VmOiAwLjAxOFxuICAgIH0sXG4gICAgYWN0aXZlQ29uZmlnOiB7XG4gICAgICBleHBHYW1lc0RlZmF1bHQ6IDExLFxuICAgICAgYWN0aXZlRGF5c0NvdW50OiAyLFxuICAgICAgZXhwR2FtZXNBY3RpdmVCYXNlOiAxLjgsXG4gICAgICBleHBHYW1lc0FjdGl2ZU9mZnNldDogNi41XG4gICAgfSxcbiAgICBqdW1wQ29uZmlnOiB7XG4gICAgICBqdW1wQ29lZjogMC40LFxuICAgICAganVtcE9mZnNldFg6IDEsXG4gICAgICBqdW1wT2Zmc2V0WTogMC4yXG4gICAgfSxcbiAgICBwb2ludHNDb25maWc6IHtcbiAgICAgIGluaXRQb2ludHM6IHtcbiAgICAgICAgMDogNCxcbiAgICAgICAgMjogMyxcbiAgICAgICAgNDogM1xuICAgICAgfSxcbiAgICAgIGFkZFBvaW50c1RvcDoge1xuICAgICAgICAyOiAzLFxuICAgICAgICAzOiAyLFxuICAgICAgICA0OiA1LFxuICAgICAgICA2OiAzLFxuICAgICAgICA4OiAxXG4gICAgICB9LFxuICAgICAgc3RhZ1BvaW50czoge1xuICAgICAgICAwOiAxLFxuICAgICAgICAyOiAxXG4gICAgICB9XG4gICAgfSxcbiAgICBjaGFzaW5nQ29uZmlnOiB7XG4gICAgICBib3RDaGFzaW5nQ291bnQ6IDUsXG4gICAgICBib3RDaGFzaW5nSW50ZXJ2YWw6IDQsXG4gICAgICBjaGFzaW5nQm90c01heFBvaW50OiA2XG4gICAgfSxcbiAgICB0aW1lQ29uZmlnOiB7XG4gICAgICBzdGFnVGltZUludGVydmFsOiAzNjAwLFxuICAgICAgc3RhZ1RpbWVDb250cm9sOiAwLjYsXG4gICAgICBwZXJpb2RUaW1lOiA4NjQwMFxuICAgIH1cbiAgfTtcbn07Il19