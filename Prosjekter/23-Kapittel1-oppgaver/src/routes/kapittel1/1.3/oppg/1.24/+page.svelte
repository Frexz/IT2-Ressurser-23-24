<script>
    let side1 = Math.ceil(10*Math.random())
    let side2 = Math.ceil(10*Math.random())
</script>

<h1 style="color: purple; font-size: 120px;">&#9632;</h1>
<table>
    <tr>
        <td style="background-color: lightblue;">Sidelengde (m)</td>
        <td>{side1}</td>
        <td>{side2}</td>
    </tr>

    <tr>
        <td style="background-color: lightblue;">Omkretsen til kvadratet (m)</td>
        <td>{4*side1}</td>
        <td>{4*side2}</td>
    </tr>

    <tr>
        <td style="background-color: lightblue;">Arealet til kvadratet (m<sup>2</sup>)</td>
        <td>{side1**2}</td>
        <td>{side2**2}</td>
    </tr>
</table>

<style>
    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid black;
        padding: 10px;
        width: 150px;
    }
</style>