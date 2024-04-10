<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte";

    let inputValue = ""

</script>

<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 3</h1>
        <p>
            Lag en enkel (eller komplisert) kalkulator. Kalkulatoren bør i alle fall kunne utføre de 
            fire grunnleggende regneoperasjonene, men dere kan velge hvor mange dere vil legge til. 
            I oppgavene i kapittel 2 i boken står det litt om det.
        </p>
    </div>

    <div class="oppgave" slot="oppgave">
        <div class="calculator">
            <div class="input">
                {inputValue}
            </div>
            <div class="keypad">
                <button style="grid-column: span 3; background-color: #FAD5D0">C</button>
                <button style="background-color: #CBD9FF;">/</button>
                <button>9</button>
                <button>8</button>
                <button>7</button>
                <button style="background-color: #CBD9FF;">*</button>
                <button>6</button>
                <button>5</button>
                <button>4</button>
                <button style="background-color: #CBD9FF;">-</button>
                <button>3</button>
                <button>2</button>
                <button>1</button>
                <button style="background-color: #CBD9FF;">+</button>
                <button style="grid-column: span 3;">0</button>
                <button style="background-color: #6B91F7;">=</button>
            </div>
        </div>
    </div>
</OppgaveLayout>

<style>
    button {
        background-color: white;
        border: 1px solid #f0f0f0;
        padding: 22px 20px;
        margin: 0;
        font-size: 16px;
    }

    button:active {
        background-color: #ddd !important;
    }

    .calculator {
        height: 500px;
        width: 300px;
    }

    .input {
        border: 1px solid #f0f0f0; 
        height: 20px;
        width: 277px;
        padding: 10px;
        text-align: right;
    }

    .keypad {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-template-areas:  
        "C C C /"
        "9 8 7 *"
        "6 5 4 -"
        "3 2 1 +"
        "0 0 0 =";
    }
</style>