<script>

</script>

<div class="bilder">
    <figure>
        <img class="jwst" src="/jwst/jwst.png" alt="jwst">
        <figcaption>James Webb Space Telescope</figcaption>
    </figure>

    <figure>
        <img class="ring" src="/jwst/ringnebula.png" alt="ring_nebula">
        <figcaption>The Ring Nebula</figcaption>
    </figure>

    <figure>
        <img class="pillar" src="/jwst/pillarsofcreation.png" alt="pillars_of_creation">
        <figcaption>The Pillars of Creation</figcaption>
    </figure>
    
</div>

<style>
    figcaption {
        text-align: center;
    }

    .bilder {
        display: flex;
    }

    .jwst, .ring, .pillar {
        max-height: 30vh;
        max-width: 1000px;
        height: auto;
        width: auto;
    }

    .jwst {
        border-radius: 50%;
    }

    .ring {
        opacity: 0.5;
    }

    .ring:hover {
        opacity: 1.0;
    }

    .pillar:hover {
        filter: saturate(180%)
    }
</style>