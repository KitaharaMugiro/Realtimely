"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArray = exports.filteringOutByDeletetime = void 0;
var filteringOutByDeletetime = function (array) {
    //TODO: deleteTimeをrequiredにする方法はないのか？
    return array.filter(function (d) { return new Date(d.deleteTime) > new Date(); });
};
exports.filteringOutByDeletetime = filteringOutByDeletetime;
// export const deleteDuplicateKey = <T>(array: T[]) => {
//     return array.filter((element, index, self) =>
//         self.findIndex(e =>
//             e.key === element.key
//         ) === index
//     );
// }
var updateArray = function (array, newElement) {
    var deletedArray = array.filter(function (d) { return d.key !== newElement.key; });
    var newArray = deletedArray.concat(newElement);
    newArray.sort(function (a, b) {
        var keyA = a.key, keyB = b.key;
        // Compare the 2 dates
        if (keyA < keyB)
            return -1;
        if (keyA > keyB)
            return 1;
        return 0;
    });
    return newArray;
};
exports.updateArray = updateArray;
//# sourceMappingURL=clientCommonUtils.js.map