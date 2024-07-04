export function renderSportTable(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${data[i].img}</td>
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
                    <td>Variklio kubatura</td>
                    <td>Pavaru dezes tipas</td>
                    <td>kaina</td>
                </tr>
            </thead>
            <tbody>${HTML}</tbody>
        </table>`;
}