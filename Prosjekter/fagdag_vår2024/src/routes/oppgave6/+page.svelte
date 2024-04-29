<script>
    let arr = [2, 1, 4, 5, 3]
    let erIArray = binærSøkWhile(arr, 3)

    /* Med Rekursjon */
    function binærSøkRekursiv(arr, n) {
        arr.sort()
        let midtersteIndeks = Math.floor(arr.length / 2)
        let midterste = arr[midtersteIndeks]

        if (n == midterste) {
            return true
        } else if (n > midterste) {
            arr = arr.slice(midtersteIndeks + 1)
        } else {
            arr = arr.slice(0, midtersteIndeks)
        }

        if (arr.length < 1) {
            return false
        }

        return binærSøk(arr, n)
    }

    /* Med while-løkke */
    function binærSøkWhile(arr, n) {
        arr.sort()
        let midtersteIndeks = Math.floor(arr.length / 2)
        let midterste = arr[midtersteIndeks]

        while (arr.length > 0) {
            if (n == midterste) {
                return true
            } else if (n > midterste) {
                arr = arr.slice(midtersteIndeks + 1)
            } else {
                arr = arr.slice(0, midtersteIndeks)
            }

            midtersteIndeks = Math.floor(arr.length / 2)
            midterste = arr[midtersteIndeks]
        }

        return false
    }
</script>

<h1>Oppgave 6</h1>

<div class="innhold">
    <p>{arr}</p>
    <p>{erIArray}</p>
</div>

<style>
    p {
        font-size: 50px;
    }

    .innhold {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>