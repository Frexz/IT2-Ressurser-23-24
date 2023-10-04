<script>
   import Kontaktinformasjon from "../../../../../../../gjenbruk/komponentbibliotek/Kontaktinformasjon.svelte";

   let info = {
    "navn": "Fiskekompaniet AS",
    "adresse": "Akvarieveien 7 5670 Fiskevær",
    "telefon": "40 40 40 40",
    "epost": "fiskekompaniet@fisk.no",
    "farger": ["#4682A9", "#E5C3A6"]
   }
</script>

<Kontaktinformasjon info={info}></Kontaktinformasjon>

<style>
    
</style>