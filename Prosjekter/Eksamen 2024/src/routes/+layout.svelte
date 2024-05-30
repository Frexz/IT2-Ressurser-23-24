<ul>
    <li><a href="/">Hjem</a></li>
    <li><a href="/oppgave6">Oppgave 6</a></li>
    <li><a href="/oppgave9">Oppgave 9</a></li>
    <li><a href="/oppgave10">Oppgave 10</a></li>
</ul>

<slot></slot>

<style>
    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    }

    li {
    float: left;
    }

    li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    }

    /* Change the link color to #111 (black) on hover */
    li a:hover {
    background-color: #111;
    }
</style>