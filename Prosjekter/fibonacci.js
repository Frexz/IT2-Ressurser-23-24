function fibonacci(a, b, i, n) {
    if (i == n) {
        return a + b
    }

    c = a + b
    a = b
    b = c
    i++
    return fibonacci(a, b, i, n)
}

console.log(fibonacci(0, 1, 1, 6))