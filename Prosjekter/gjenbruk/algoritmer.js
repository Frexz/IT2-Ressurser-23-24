// Sieve of Eristothenes
function finnPrimtall(n) {
    let primes = []
    let composites = []

    for (let i = 2; i < n; i++) {
        if (!(composites.includes(i))) {
            primes.push(i)

            let teller = 2
            let composite = i * teller

            while (composite < n) {
                composites.push(composite)
                teller++
                composite = i * teller
            }
        }
    }

    console.log(primes)
}

finnPrimtall(1000000)