export function newUrl (key, value, deleteKey = false) {
  const url = new URL(window.location.href)
  if (!deleteKey) {
    url.searchParams.set(key, value)
  } else {
    url.searchParams.delete(key)
  }
  window.history.pushState(null, null, url.href)
}
