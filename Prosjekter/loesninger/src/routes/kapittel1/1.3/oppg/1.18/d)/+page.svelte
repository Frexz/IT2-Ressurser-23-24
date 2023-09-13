<script>
    let a = 7
    let b = 4
    $: c = a - b
    a = c*b - a
    b /= 2
</script>

<p>{a}, {b} og {c}</p>