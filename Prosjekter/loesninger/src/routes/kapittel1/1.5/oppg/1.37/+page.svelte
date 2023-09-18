<script>
    let heltall = []
    let partall = []
    let oddetall = []

    for (let i = 0; i < 31; i++) {
        heltall.push(i)
    }

    for (let i = 0; i < 31; i += 2) {
        partall.push(i) 
    }

    for (let i = 1; i < 31; i += 2) {
        oddetall.push(i)
    }

</script>

<h3>Heltall</h3>
<p>{heltall}</p>

<h3>Partall</h3>
<p>{partall}</p>

<h3>Oddetall</h3>
<p>{oddetall}</p>

<p>For å sortere arrayene i synkende rekkefølge kan man bruke metoden <code>reverse()</code> siden tallene allerede er sortert.</p>
<style>
    
</style>