export async function fetch_json(address, params={}) {
  var url = new URL(address);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return fetch(url)
    .then(response => {
      if (!response.ok) {
       throw new Error('Network response was not OK');
      }
      return response.json();
    })
}
