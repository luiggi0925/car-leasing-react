
const Utils = {
    range(start, end, inclusive = false) {
        return Array.from(new Array(end - start + inclusive), (x,i) => i + start)
    },

    availableYears() { return this.range(1990, (new Date()).getFullYear(), true) }
}

export default Utils
