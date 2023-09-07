<script>
    let utsagn = "\"fredrik\" == \"fredrik\""
    let logiskUtsagn = eval(utsagn)
</script>

<div class="innhold">
    <h1>Utrykket <span style="color: purple;">{utsagn}</span> evalueres som 
    <span style="color: {logiskUtsagn ? "green" : "red"}">{logiskUtsagn}</span></h1>
</div>


<style>
    .innhold {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }
</style>