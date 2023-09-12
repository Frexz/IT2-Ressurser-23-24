<script>
    
</script>

<ol>
    <li>
        <p>Man definerer et array ved å definere en variabel og setter variabelen lik <i>[]</i>. F.eks <i>let mittArray = []</i><br/>
        Variabelnavnet brukes hver gang man refererer til selve arrayet.</p>
    </li>

    <li>
        <p>For å hent ut enkeltverdier fra et array bruker man variabelnavnet til arrayet etterfulgt av <i>[i]</i> der <i>i</i><br />
        representerer en indeks. F.eks hvis vi definerer arrayet <i>let biler = ["BMW", "Ford", "Aston Martin, "Hyundai", "Skoda"]</i><br />
        vil <i>biler[0] = "BMW"</i> og <i>biler[3] = "Hyundai"</i></p>
    </li>

    <li>
        <p>Det finnes flere måter å vise innholdet i et array på. Enkleste måten ville være å bare skrive ut arrayet direkte <br />
        ved å referere til variabelnavnet. Dette er ikke særlig elegant. I Svelte kan man bruke en #each-blokk for å itere gjennom <br />
        arrayet. Dette er veldig fleksibelt da vi har mye kontroll på hvordan utskriften av hvert element skal se ut.</p>
    </li>
</ol>

<style>
    ol {
        list-style: lower-alpha;
    }
</style>