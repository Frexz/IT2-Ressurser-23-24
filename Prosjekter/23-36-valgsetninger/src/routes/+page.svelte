<script>

    let tall = [0, 2, 4, 6, 8, 10]
    let utsagn = '!(tall.includes(3))'
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