export function renderBustaiTable(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `
            <tr>
                <td>${i + 1}</td>
                <td><img src="../img/${data[i].img}.jpg" alt="Photo"></td>
                <td>${data[i].adresas}</td>
                <td>${data[i].kvadratai}</td>
                <td>${data[i].irengimas}</td>
                <td>${data[i].kaina}</td>
            </tr>`;
    }

    return `
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Nuotrauka</td>
                    <td>Adresas</td>
                    <td>Kvadratura</td>
                    <td>Irengimas</td>
                    <td>Kaina</td>
                
                </tr>
            </thead>
            <tbody>${HTML}</tbody>
        </table>`;
}