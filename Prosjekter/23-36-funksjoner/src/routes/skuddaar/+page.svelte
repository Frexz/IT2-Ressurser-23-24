<script>
    let aar = 2020

    function sjekkSkuddaar(aarstall) {
        if (aarstall % 4 == 0) {
            if (aarstall % 100 == 0) {
                if (aarstall % 400 == 0) {
                    return true
                } else {
                    return false
                }
            } else {
                return true
            }
        } else {
            return false
        }
    }

</script>

<h1>Er {aar} et skuddår? {sjekkSkuddaar(aar)}</h1>

<style>
    
</style>