export async function load({fetch}) {
    let response = await fetch('src/routes/flag_quiz/countries.json')
    let land = response.json()
    return {land}
}