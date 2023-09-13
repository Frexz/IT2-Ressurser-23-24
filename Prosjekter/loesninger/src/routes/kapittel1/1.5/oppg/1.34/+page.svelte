<script>
    
</script>

<ol>
    <li>
        <p>Man definerer et array ved å definere en variabel og setter variabelen lik <code>[]</code>. F.eks <code>let mittArray = []</code><br/>
        Variabelnavnet brukes hver gang man refererer til selve arrayet.</p>
    </li>

    <li>
        <p>For å hente ut enkeltverdier fra et array bruker man variabelnavnet til arrayet etterfulgt av <code>[i]</code> der <code>i</code><br />
        representerer en indeks. F.eks hvis vi definerer arrayet <code>let biler = ["BMW", "Ford", "Aston Martin, "Hyundai", "Skoda"]</code><br />
        vil <code>biler[0] = "BMW"</code> og <code>biler[3] = "Hyundai"</code></p>
    </li>

    <li>
        <p>Det finnes flere måter å vise innholdet i et array på. Enkleste måten ville være å bare skrive ut arrayet direkte <br />
        ved å referere til variabelnavnet. Dette er ikke særlig elegant. I Svelte kan man bruke en <code>&#123#each&#125</code>-blokk for å itere gjennom <br />
        arrayet. Dette er veldig fleksibelt da vi har mye kontroll på hvordan utskriften av hvert element skal se ut.</p>
    </li>
</ol>

<style>
    ol {
        list-style: lower-alpha;
    }
</style>