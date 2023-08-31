<script>
    let tilfeldigTall = 10*Math.random() + 10  
    let tilfeldigHeltall = Math.floor(1000*Math.random())
    let tilfeldigHalvtall = Math.floor(20*Math.random())/2
    let tilfeldigPartall = Math.floor(Math.random() * 50) * 2
</script>

<div class="innhold">
    <p><b>Tilfeldig tall mellom 10 og 20:</b> {tilfeldigTall}</p>
    <p><b>Tilfeldig heltall mellom 0 og 1000:</b> {tilfeldigHeltall}</p>
    <p><b>Tilfeldig halvtall mellom 0 og 10:</b> {tilfeldigHalvtall}</p>
    <p><b>Tilfeldig partall mellom 0 og 100:</b> {tilfeldigPartall}</p>
</div>

<style>
    .innhold {
        display: flex;
        flex-direction: column;
    }
</style>