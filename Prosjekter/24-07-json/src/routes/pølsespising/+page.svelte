<script>
    import pølsespising from '$lib/pølse.json'

    function sjekkUnik(navn, arr) {
        for (const n of arr) {
            if (navn == n) {
                return false
            }
        }

        return true
    }

    let navneListe = []

    for (const deltaker of pølsespising) {
        let navn = deltaker.firstName + deltaker.lastName
        if (sjekkUnik(navn, navneListe)) {
            navneListe.push(navn)
        }
    }

    console.log(navneListe.length)
</script>



<style>
    
</style>