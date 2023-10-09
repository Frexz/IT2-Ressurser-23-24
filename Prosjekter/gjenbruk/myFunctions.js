export function sjekkPartall(tall) {
    if (tall % 2 == 0) {
        return true
    }

    return false
}

export function kastTerning() {
    return Math.floor(6*Math.random() + 1)
}

export function kastValgtTerning(sider) {
    return Math.floor(sider*Math.random() + 1)
}

export function storForbokstav(ord) {
    return ord.charAt(0).toUpperCase() + ord.slice(1)
}