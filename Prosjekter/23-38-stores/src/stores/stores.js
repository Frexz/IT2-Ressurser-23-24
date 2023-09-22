/* I dette programmet bruker man noe man i Svelte kaller for en 'writable'. En writable
er en variabel med en verdi som kan hentes og oppdateres fra hvor som helst i et program,
også i andre filer. Endringen av verdien til denne writable-variabelen, som man kaller en store,
skjer da for alle filer som bruker den. */

/* I programmet benytter vi oss også av localStorage for å lagre data i browseren. Dette
gjør at man kan hente data fra forrige gang man brukte programmet; det blir ikke borte. */

/* Vi trenger å importere en writable, og en variabel som heter browser. Browser er 'true'
hvis programmet kjører i nettleseren og ikke på serveren. Vi må sjekke dette for å bruke localStorage
da localStorage kun fungerer i browser (nettleser) */
import { browser } from "$app/environment"
import { writable } from "svelte/store"

/* Disse to linjene er ikke nødvendige, men kan gjøre det mer oversiktlig. Vi
definerer en standardverdi som skal inn i vår writable hvis det er tomt fra før. */
const defaultValue = ["eple", "gulrot"]

/* Her avgjøres det om vår writable skal få en standardverdi, eller verdien hentet fra localStorage.
Først må vi sjekke om browser == true. Hvis den er der kan vi hente fra localStorage med getItem-metoden. ?? betyr at
hvis det vi henter fra localStorage har verdien 'null', altså ingenting, så får writable standardverdien. Hvis
browser er false får writabel også standardverdien. */

/* localStorage lagrer all data som strenger så hvis dataen vi skal ta vare på ikke er strenger
fra før, for eksempel arrays, må vi gjøre det om til strenger når vi lagrer i localStorage.
For å gjøre hvilken som helst type data om til strenger bruker man metoden JSON.stringify(minData) og får å
gjøre det tilbake igjen til den opprinnelige datatypen bruker man metoden JSON.parse(minData) */
const initialValue = browser ? JSON.parse(localStorage.getItem("handleliste")) ?? defaultValue : defaultValue

/* Her opprettes en writable, eller store. Den har navnet 'handleliste' og gjøres tilgjengelig
ved importering ved å bruke nøkkelordet 'export'. Writablen får også en startverdi. */
export const handleliste = writable(initialValue)

/* Denne funksjonen sørger for at når writable-variabelen oppdateres så oppdateres den i localStorage også.
Først sjekker vi om vi kjører i nettleser/browser og deretter kan vi oppdatere i localStorage
med metoden setItem med navn på variabel og ny verdi som argumenter. Legg merke til at verdien
gjøres om til en steng med JSON.stringify() før den lagres i localStorage.  */
handleliste.subscribe((value) => {
    if (browser) {
        localStorage.setItem("handleliste", JSON.stringify(value))
    }
})


