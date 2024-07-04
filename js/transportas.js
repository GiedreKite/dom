export function renderTransportasTable(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `
            <tr>
                <td>${i + 1}</td>
                <td><img src="../img/${data[i].img}.jpg" alt="Photo"></td>
                <td>${data[i].title}</td>
                <td>${data[i].litrai}</td>
                <td>${data[i].pavaruDeze}</td>
                <td>${data[i].kaina}</td>
            </tr>`;
    }

    return `
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Nuotrauka</td>
                    <td>Marke</td>
                    <td>Kubatura</td>
                    <td>Pavaru dezes tipas</td>
                    <td>Kaina</td>
                
                </tr>
            </thead>
            <tbody>${HTML}</tbody>
        </table>`;
}