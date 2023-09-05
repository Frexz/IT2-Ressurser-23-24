<script>
    let tall = []

    for (let i = 0; i < 10; i++) {
        tall.push(Math.floor(10*Math.random()))
    }

    let partall = filtrerPartall(tall)
    
    function sjekkPartall(tall) {
        if (tall % 2 == 0) {
            return true
        } else {
            return false
        }
    }

    function filtrerPartall(tall) {
        let partall = []

        for (let i = 0; i < tall.length; i++) {
            if (sjekkPartall(tall[i])) {
                partall.push(tall[i])
            }
        }

        return partall
    }

</script>

<h1>Tilfeldige tall</h1>
<div class="tall">
    {#each tall as t}
        <h2 style="color:purple;">{t}&nbsp;</h2>
    {/each} 
</div>

<h1>Partall</h1>
<div class="partall">
    {#each partall as p}
        <h2 style="color: orange;">{p}&nbsp;</h2>
    {/each}
</div>


<style>
    .partall {
        display: flex;
    }

    .tall {
        display: flex;
    }
</style>