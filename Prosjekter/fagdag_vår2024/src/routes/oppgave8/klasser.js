export class Spillbrett {
    constructor(bredde, høyde) {
        this.bredde = bredde
        this.høyde = høyde
        this.poeng1 = 0
        this.poeng2 = 0
        this.erStartet = true
    }
}

export class Ball {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.vx = Math.random() < 0.5 ? 1 : -1
        this.vy = Math.random() < 0.5 ? 1 : -1
        this.side = 25
        this.fart = 3
    }

    move() {
        this.x += this.fart * this.vx
        this.y += this.fart * this.vy
    }
}

export class Padde {
    constructor(x, y) {
        this.bredde = 25
        this.høyde = 120
        this.x = x
        this.y = y
    }

    move(verdi) {
        this.y += verdi
    }
}