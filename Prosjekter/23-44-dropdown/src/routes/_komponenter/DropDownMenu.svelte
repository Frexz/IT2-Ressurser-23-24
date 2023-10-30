<script>
    export let valgte = []
</script>

<select bind:value={valgte} multiple>
    <option value="">---</option>
    <option value="KANO">KANO</option>
    <option value="ORIENTERING">ORIENTERING</option>
    <option value="KLATRING">KLATRING</option>
    <option value="FISKE">FISKE</option>
    <option value="SVØMMING">SVØMMING</option>
</select>

<style>
    select {
        height: 105px;
    }
</style>