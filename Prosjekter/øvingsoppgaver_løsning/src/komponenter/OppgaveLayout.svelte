<div class="content">
    <div class="tekst">
        <slot name="tekst"></slot>
    </div>
    
    <div class="oppgave">
        <slot name="oppgave"></slot>
    </div>
</div>

<style>
    .content {
        display: flex;
        flex-direction: row;
    }

    .tekst {
        width: 25%;
        margin: 20px;
    }

    .oppgave {
        width: 75vw;
        height: 80vh;
        margin-left: 100px;
        display: flex;
        justify-content: center;
    }
</style>