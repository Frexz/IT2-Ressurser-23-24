<script>
    import { variabel, funksjon as visMelding } from "./test1"
    import { annenVariabel, annenFunksjon } from "./undermappe/test2"
</script>

<ul>
    <li>
        <p>Hvis man har en Svelte-fil og en JS-fil i samme mappen kan importere variabler og funksjoner fra JS-filen 
        til Svelte-filen. I JS-filen skriver man nøkkelordet <code><b>export</b></code> foran variabler og funksjoner man
        ønsker å kunne importere til andre filer. Deretter kan man importere variabelen eller funksjonen ved å skrive, i 
        <code>&lt;script&gt;</code>-taggen i Svelte-filen: <code>import &#123; variabelnavn, funksjonsnavn &#125; from "./filnavn.js"</code></p>
    </li>

    <li>
        <p>For å endre navnet til en importert variabel eller funksjon kan man bruke nøkkelordet <code>as</code> når man
        importerer variabelen eller filen: <br>
        <code>import &#123; variabelnavn as nyttVariabelnavn &#125; from "./filnavn.js"</code></p>
    </li>

    <li>
        <p>Når man importerer fra en fil må man oppgi stien til den filen. Starter man stien med <code>./</code> skal
        det bety at stien starter fra og med mappen som <code>+page.svelte</code> befinner seg i. Starter stien med <code>../</code>
        skal det bety at stien starter fra og med mappen over <code>+page.svelte</code> befinner seg i. Skal man lage en sti til undermapper
        kan stien seg noe slik ut: <code>"./undermappe/filIUndermappe.js"</code>.</p>
    </li>
</ul>

<h1>Test av import</h1>
<p><b>Variabel fra samme mappe:</b> {@html variabel}</p>
<p><b>Funksjon fra samme mappe med endret navn:</b> {@html visMelding()}</p>
<p><b>Variabel fra undermappe:</b> {@html annenVariabel}</p>
<p><b>Funksjon fra undermappe:</b> {@html annenFunksjon()}</p>

<style>
    li {
        width: 50vw;
    }

    ul {
        list-style-type: lower-alpha;
    }
</style>