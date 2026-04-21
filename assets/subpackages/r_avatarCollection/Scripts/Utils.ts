export var Info2Key = function (t) {
  return t.bundleName + ";;" + t.path + ";;" + t.fromAtlas;
};
export var Key2Info = function (t) {
  var e = __read(t.split(";;"), 3);
  return {
    bundleName: e[0],
    path: e[1],
    fromAtlas: "true" === e[2]
  };
};
export var getBundleName = function () {
  return "r_avatarCollection";
};