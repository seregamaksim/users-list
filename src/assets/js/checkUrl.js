export function checkUrl () {
  const urlSearch = location.search.substring(1)
  if (urlSearch) {
    const searchObject = JSON.parse('{"' + decodeURI(urlSearch).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    return searchObject
  }
}
