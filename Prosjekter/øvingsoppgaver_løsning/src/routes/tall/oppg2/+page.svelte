<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte";
    import Konverter from "./komponenter/Konverter.svelte";

    // Masse - kg til lbs
    let masse = {
        quantity: "Masse",
        fromUnit: "kg",
        toUnit: "lbs",
        convert(fromValue, rev) {
            if (!rev) {
                return fromValue * 2.20462262
            } else {
                return fromValue / 2.20462262
            }
        }
    }

    // Fart - kph til mph
    let fart = {
        quantity: "Fart",
        fromUnit: "kph",
        toUnit: "mph",
        convert(fromValue, rev) {
            if (!rev) {
                return fromValue * 0.621371192
            } else {
                return fromValue / 0.621371192
            }
        }
    }

    // Temperatur - Celsius til Fahrenheit
    let temp = {
        quantity: "Temperatur",
        fromUnit: "Celsius",
        toUnit: "Fahrenheit",
        convert(fromValue, rev) {
            if (!rev) {
                return (fromValue * 1.8) + 32
            } else {
                return (fromValue - 32) / 1.8
            }
        }
    }

</script>

<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 2</h1>
        <p>
            Skriv et program som gjør om mellom enheter. 
            Dette kan for eksempel være mellom våre standardenheter og de 
            forvirrende amerikanske enhetene (Celsius til Fahrenheit, kg til lbs, km/h til mph osv.)
        </p>
    </div>

    <!-- Informasjonen om de ulike konverteringen sendes ned som et objekt til Konverter-komponenten.
    Dette gjør at komponenten er helt generell og kan gjenbrukes til andre typer konverteringer så lenge man 
    binder variabelen k til et objekt med den nødvendige informasjonen om konverteringen -->
    <div class="oppgave" slot="oppgave">
        <Konverter bind:k={masse}/>
        <Konverter bind:k={fart}/>
        <Konverter bind:k={temp}/>
    </div>
</OppgaveLayout>

<style>
    .oppgave {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
    }
</style>