class Figur {
    constructor() {
      this.farge = farge
    }
  
    areal() {
      return 0
    }
}
  
class Rektangel extends Figur {
    constructor(farge, bredde, høyde) {
      this.bredde = bredde
      this.høyde = høyde
    }
  
    areal() {
        return bredde * høyde
    }
}
  
class Sirkel {
    constructor(farge, radius) {
      super(farge)
    }
  
    areal() {
        return Math.PI * this.radius**2
    }
}
  