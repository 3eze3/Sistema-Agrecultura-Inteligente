export async function fetchDataHumidity(start, end) {
    try {
        const response = await fetch(`http://localhost:4000/lecturasFechas?datestart=${start}&dateend=${end}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(`\n[!] Error al obtener los datos: ${error} \n`);
    }
}
