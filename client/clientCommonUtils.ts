
export const filteringOutByDeletetime = <T>(array: T[]) => {
    //TODO: deleteTimeをrequiredにする方法はないのか？
    return array.filter(d => new Date((d as any).deleteTime) > new Date())
}

// export const deleteDuplicateKey = <T>(array: T[]) => {
//     return array.filter((element, index, self) =>
//         self.findIndex(e =>
//             e.key === element.key
//         ) === index
//     );
// }

export const updateArray = <T>(array: T[], newElement: T) => {
    const deletedArray = array.filter(d => (d as any).key !== (newElement as any).key)
    const newArray = deletedArray.concat(newElement);
    newArray.sort(function (a, b) {
        var keyA = (a as any).key,
            keyB = (b as any).key;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });
    return newArray
}