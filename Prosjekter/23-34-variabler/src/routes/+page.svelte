<script>
    // Opprett variablene 'koppA' og 'koppB', og gi dem henholdsvis verdiene 'kaffe' og 'te'
    let koppA = "kaffe"
    let koppB = "te"
    let koppC = koppA
    
    function bytt() {
        // Skriv en funksjon som bytter innholdet i koppA og koppB
        koppA = koppB
        koppB = koppC
    }
</script>

<main>
    <div class="kaffe">
        <img src="src/lib/{koppA}.jpg" alt="Kaffe">
    </div>
    
    <button on:click={bytt}>Bytt</button>
    
    <div class="te">
        <img src="src/lib/{koppB}.jpg" alt="Te">
    </div>
</main>

<style>
    img {
        height: 200px;
        width: 200px;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .kaffe, .te {
        height: 200px;
        margin: 0px 40px;
        width: 200px;
    }
</style>