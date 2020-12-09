export function idToPath(id){
    return id.toLowerCase()
        .replace(',', '')
        .replace('&', 'and')
        .replace(/\s/g, '_');
}