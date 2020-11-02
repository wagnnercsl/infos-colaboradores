function getFilterQuery (filter){

    const options = {
        searchName: ' where mome_usuario = '+filter,
        order: ' order by nome_usuario '+ filter,
        tall: ' where altura > 1.80',
        medium: ' where altura between 1.60 and 1.79',
        small: ' where altura < 1.59',
        above: '  where peso > 90',
        ideal: ' where peso between 70 and 89',
        below: ' where peso < 69',
        athlete: ' where atleta = 1',
        lactose: ' where lactose = 1',
        default: '' 
    };

    return options[filter] || options['default'];
}

module.exports = {getFilterQuery};