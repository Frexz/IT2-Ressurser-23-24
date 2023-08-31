<script>
    let ordtak = "Den som intet våger, intet vinner."
</script>

<!-- Alle bokstaver i strengen blir store -->
<p>{ordtak.toUpperCase()}</p>
<!-- Skriver ut symbolet på indeks 15 i strengen: bokstaven "å" i "våger" -->
<p>{ordtak.charAt(15)}</p>
<!-- Skriver ut nest siste symbol i strengen: bokstaven "r" i "vinner" -->
<p>{ordtak.charAt(ordtak.length - 2)}</p>
<!-- Erstatter første tilfelle av strengen "våger" med strengen "taper" slik at ordtaket nå
leses "Den som intet taper, intet vinner." -->
<p>{ordtak.replace("våger", "taper")}</p>
<!-- Erstatter første tilfelle av strengen "intet" med strengen "ingenting" slik at ordtaket nå
leses "Den som ingenting taper, intet vinner." Legg merke til at replace-metoden kun erstatter første
tilfelle av "intet". replaceAll-metoden vil erstatte alle tilfeller -->
<p>{ordtak.replace("intet", "ingenting")}</p>
<!-- Finner første bokstaven i strengen og konkatenerer/skjøter den med "u" og de 7 siste symbolene i ordtaket
som er "vinner.". Resultatet blir dermed "Duvinner.". Merk at metoden substr er deprecated hvilket betyr at man
ikke lengre bør bruke den. I stedet bruker man metoden slice og oppnår samme resultat med slice(-7) -->
<p>{ordtak.charAt(0) + "u" + ordtak.substr(-7)}</p>
<style>
    
</style>