// ?search=Pedro

['search', 'Pedro']
['page', '2']
export function extractQueryParams(query) {
    return query.substr(1).split('&').reduce((queryParams, param) => {
        const [] = param.split('=')
    }
)
}