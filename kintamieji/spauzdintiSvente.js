function spausdintiSvente(index, holiday){
    console.log(holiday);
    const name = holiday.name;
    const year = holiday.date.year;
    const month = holiday.date.month;
    const day = holiday.date.day;
    const monthNames = [
        'sausio', 'Vasario', 'Kovo', 'Balandzio',
        'Geguzes', 'Birzelio', 'Liepos', 'Rugpjucio',
        'Rugsejo', 'Spalio', 'Lapkricio', 'Gruodzio',
    ];
    const monthName = monthNames[month - 1];

    return `${index + 1}) ${name} - ${year}m ${monthName} ${day}d.`;
}

export default spausdintiSvente;