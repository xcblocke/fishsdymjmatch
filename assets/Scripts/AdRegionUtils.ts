import LoginModel from './gamePlay/login/model/LoginModel';
export enum EcpmThresholdsType {
  GP_FIRST_LOAD = 1,
  IOS_FIRST_CACHE = 2,
  GP_FIRST_SHOW = 3,
  IOS_FIRST_SHOW = 4,
}
var a = {
  premium_west: ["US", "CA"],
  premium_oceania: ["AU", "NZ"],
  premium_asia: ["JP", "KR", "SG", "TW"],
  premium_europe: ["DE", "GB", "FR", "IT", "ES", "CH", "SE", "NL", "IE", "AT", "BE", "DK", "FI", "NO", "IS", "LU"],
  premium_mideast: ["AE", "QA", "KW", "SA", "BH", "OM", "IL"],
  growth_europe: ["PL", "HU", "CZ", "GR", "PT", "RO", "BG", "HR", "ZA"],
  growth_eurasia: ["CN", "RU", "KZ", "TR", "UA"],
  growth_latin: ["BR", "MX", "CL", "AR", "CR", "PA", "UY", "CO", "PE"],
  emerging_sea: ["MY", "TH"],
  developing_sea: ["ID", "PH", "VN"],
  developing_southasia: ["IN", "LK", "BD", "PK", "NP", "AF"],
  developing_africa_latin: ["EG", "MA", "DZ", "TN", "YE", "NG", "KE", "GH", "AO", "CU", "DO", "SV", "GT", "HN", "NI", "ET", "TZ", "UG", "RW", "BI", "CD", "MZ", "MW", "ZM", "MG", "SN", "ML", "NE", "BF", "GN", "LR", "SL"],
  other_region: []
};
function l(e) {
  var t,
    o,
    i = e.toUpperCase();
  try {
    for (var r = __values(Object.keys(a)), l = r.next(); !l.done; l = r.next()) {
      var s = l.value;
      if (a[s].includes(i)) return s;
    }
  } catch (e) {
    t = {
      error: e
    };
  } finally {
    try {
      l && !l.done && (o = r.return) && o.call(r);
    } finally {
      if (t) throw t.error;
    }
  }
  return "other_region";
}
export var getRegionByCountryCode = l;
export var getCurrentUserRegion = function () {
  return l(LoginModel.getInstance().country || "");
};
export var calculateSegmentIndex = function (e, t) {
  if (!t || t.length < 9) return 0;
  for (var o = 0; o < t.length; o++) if (e <= t[o]) return o;
  return 9;
};
export var ECPM_THRESHOLDS_GP_FIRST_LOAD = {
  developing_africa_latin: [0.66, 1.22, 1.86, 2.47, 3.27, 4.55, 6.33, 9.3, 16.71],
  developing_sea: [1.94, 3.01, 4.24, 5.74, 7.54, 10.27, 14.18, 21.93, 44.55],
  developing_southasia: [0.41, 0.84, 1.15, 1.63, 2.24, 2.9, 4.19, 5.85, 11.57],
  emerging_sea: [3.62, 5.55, 7.67, 9.98, 12.87, 17.49, 23.92, 35.92, 73.7],
  growth_eurasia: [2.5, 3.76, 5.03, 6.73, 8.95, 12.73, 19.1, 31.45, 74.65],
  growth_europe: [3.23, 4.66, 6.12, 7.49, 9.06, 10.83, 13.29, 18, 30.42],
  growth_latin: [2.89, 4.39, 6.13, 8.11, 10.65, 14.64, 21.33, 33.61, 70.11],
  other_region: [0.79, 1.5, 2.23, 3.11, 4.31, 6.11, 8.73, 13.96, 25.71],
  premium_asia: [13.27, 22.14, 31.47, 44.94, 64.39, 89.06, 135.65, 230.52, 501.25],
  premium_europe: [4.53, 6.57, 8.5, 10.63, 13.08, 16.15, 20.59, 28.48, 47.9],
  premium_mideast: [5.1, 8.85, 12.04, 16.33, 21.58, 29.26, 40.4, 56.29, 100.7],
  premium_oceania: [18.8, 32.18, 42.79, 59.62, 85.45, 113.62, 157.6, 243.23, 433.93],
  premium_west: [22.64, 42.24, 60.94, 88.28, 119.53, 164.74, 231.02, 336.45, 577.11]
};
export var ECPM_THRESHOLDS_IOS_FIRST_CACHE = {
  developing_africa_latin: [2.71, 3.86, 4.75, 5.62, 6.56, 7.78, 9.81, 11.83, 17.22],
  developing_sea: [6.44, 9.68, 12.76, 15.72, 19.01, 22.33, 27.3, 36.44, 54.46],
  developing_southasia: [0.85, 1.38, 1.98, 2.54, 3.19, 3.88, 4.8, 6.37, 10],
  emerging_sea: [7.59, 10.58, 13.22, 16.17, 20.31, 24.56, 30.95, 42.5, 70.86],
  growth_eurasia: [8.5, 11.04, 13.51, 15.67, 18.67, 22.2, 27.44, 37.52, 61.51],
  growth_europe: [8.62, 10.71, 12.78, 15.01, 17.41, 20.78, 25.93, 33.92, 56.48],
  growth_latin: [7.72, 10.01, 12.45, 15.76, 19.79, 24.33, 29.32, 36.53, 53.77],
  other_region: [2.85, 4.05, 5.31, 6.65, 8.29, 10.01, 12, 15.71, 23.82],
  premium_asia: [22.08, 28.38, 34.71, 41.6, 50.06, 61.78, 79.57, 114.32, 243.65],
  premium_europe: [11.96, 16.5, 20.62, 25.63, 31.51, 39.86, 51.62, 71.45, 128.94],
  premium_mideast: [9.29, 12.08, 14.51, 17.81, 21.46, 25.85, 32.33, 45.08, 76.13],
  premium_oceania: [17.91, 25.86, 34.66, 45.86, 60.26, 78.16, 112.99, 180.1, 412.66],
  premium_west: [43.2, 65.42, 86.33, 107.5, 130.34, 160.08, 206.31, 305.91, 589.22]
};
export var ECPM_THRESHOLDS_GP_FIRST_SHOW = {
  developing_africa_latin: [1.08, 1.67, 2.3, 2.96, 3.92, 5.14, 7.4, 11.3, 18.16],
  developing_sea: [2.75, 4.43, 6.23, 8.14, 11.18, 14.29, 17.23, 25.48, 46.77],
  developing_southasia: [0.69, 1.19, 1.76, 2.37, 3.1, 4.07, 5.6, 8.25, 15.6],
  emerging_sea: [4.55, 7.05, 9.29, 12.32, 15.28, 19.53, 27.5, 41.9, 73.74],
  growth_eurasia: [2.89, 4.3, 5.91, 7.35, 9.68, 13.45, 19.68, 32.69, 74.64],
  growth_europe: [3.97, 6.04, 7.97, 9.68, 12.05, 14.75, 19.39, 27.27, 46.41],
  growth_latin: [3.68, 5.43, 7.37, 9.52, 12.01, 15.6, 21.91, 33.63, 65.56],
  other_region: [1.41, 2.25, 3.24, 4.5, 6.28, 8.44, 11.33, 15.94, 28.51],
  premium_asia: [13.3, 20.26, 29.08, 41.78, 54.86, 75.68, 107.07, 191.82, 406.69],
  premium_europe: [6.01, 9.09, 11.97, 15.43, 19.52, 26.61, 36.07, 52.81, 102.96],
  premium_mideast: [6.14, 9.15, 13.38, 17.2, 23.49, 30.45, 40.31, 55.88, 97.4],
  premium_oceania: [23.15, 37.53, 47.43, 60.19, 72.06, 112.18, 154.96, 254.52, 371.96],
  premium_west: [33.72, 52.74, 74.15, 99.84, 126.06, 173.07, 243.63, 365.8, 602.05]
};
export var ECPM_THRESHOLDS_IOS_FIRST_SHOW = {
  developing_africa_latin: [2.75, 4, 5.32, 6.72, 8.91, 10.5, 13.76, 19.19, 31.37],
  developing_sea: [7.32, 11.09, 16.07, 20.25, 25.88, 34.36, 44.03, 62.33, 95.75],
  developing_southasia: [1.43, 2.24, 3.02, 3.58, 4.42, 5.62, 7.66, 10.01, 16.08],
  emerging_sea: [8.36, 12.25, 15.93, 19.65, 25.55, 35.35, 50.36, 66.67, 129.02],
  growth_eurasia: [8.38, 11.84, 14.62, 17.71, 21.11, 25.69, 32.69, 47.23, 89.79],
  growth_europe: [9.2, 11.88, 14.01, 16.13, 19.05, 22.93, 30.15, 41.3, 67.38],
  growth_latin: [7.7, 10.8, 14.68, 18.05, 23.21, 28.46, 36.83, 51.05, 90.61],
  other_region: [3.12, 4.65, 6.14, 8.29, 10.24, 12.78, 17.29, 24.26, 43.48],
  premium_asia: [23.34, 32.06, 39.57, 47.98, 61.83, 79.49, 112.02, 162.85, 341.37],
  premium_europe: [11.26, 16.35, 21.02, 26.33, 33.77, 43.09, 58.18, 89.73, 169.23],
  premium_mideast: [9.92, 12.1, 14.92, 17.27, 20.63, 24.85, 32.05, 49.94, 84.42],
  premium_oceania: [17.29, 25.11, 34.46, 45.89, 65.81, 92.72, 123.48, 232.5, 497.37],
  premium_west: [42.77, 64.15, 84.94, 106.94, 133.69, 165.51, 218.6, 329.19, 646.01]
};
export var getEcpmThresholdsByType = function (e) {
  switch (e) {
    case EcpmThresholdsType.GP_FIRST_LOAD:
      return ECPM_THRESHOLDS_GP_FIRST_LOAD;
    case EcpmThresholdsType.IOS_FIRST_CACHE:
      return ECPM_THRESHOLDS_IOS_FIRST_CACHE;
    case EcpmThresholdsType.GP_FIRST_SHOW:
      return ECPM_THRESHOLDS_GP_FIRST_SHOW;
    case EcpmThresholdsType.IOS_FIRST_SHOW:
      return ECPM_THRESHOLDS_IOS_FIRST_SHOW;
    default:
      return ECPM_THRESHOLDS_GP_FIRST_LOAD;
  }
};