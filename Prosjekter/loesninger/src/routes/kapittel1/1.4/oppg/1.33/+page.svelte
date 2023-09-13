<script>
    let a = 0

    /* toString-metoden brukt på datatyper av typen number konverterer tallet til en streng i n-tallssystemet.
    Standardalternativet er 10-tallsystemet slik at 2.toString() blir bare "2". Men man kan spesifiser et tall 
    mellom 2 til 36 som argument til metoden slik at man får tallet representert som en streng i et hvilket som 
    helst tallsystem. I dette tilfellet et 2-tallssystem da argumentet til metoden er 2. */
    $: b = a.toString(2)
    $: c = a.toString(16)

    /* Fikser et problem der programmet kræsjer dersom man visker ut tallet i input-boksen */
    $: {
        if (a == null) {
            console.log(a)
            a = 0
        }
    }
</script>

<h1>Tallsystem-koverterer</h1>
<label>
    Tall i titallsystemet:
    <input type="number" bind:value={a} />
</label>
<p>Tallet {a} tilsvarer {b} i totallssystemet.</p>
<p>Matematisk skriver vi det slik: <br />
    ({a})<sub>10</sub> = ({b})<sub>2</sub></p>

<p>Tallet {a} tilsvarer {c} i heksadesimalsystemet.</p>
<p>Matematisk skriver vi det slik: <br />
    ({a})<sub>10</sub> = ({c})<sub>16</sub></p>

<!-- b) 2 = to sifre, 4 = tre sifre, 13 = fire sifre, 16 = fem sifre, 32 = seks sifre, 128 = åtte sifre, 
175 = åtte sifre, 256 = ni sifre -->

<!-- c) b er av typen string da vi eksplisitt konverterer tallet a til en streng. -->

<!-- f) 2 = 2, 4 = 4, 13 = d, 16 = 10, 32 = 20, 128 = 80, 175 = af, 256 = 100 -->

<style>
    
</style>