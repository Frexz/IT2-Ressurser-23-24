export async function load({fetch}) {
    let response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json")
    let valutaNavn = await response.json()

    response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json")
    let valutaKurs = await response.json()

    return {valutaNavn, valutaKurs}
}