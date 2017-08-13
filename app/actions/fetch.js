export async function fetchData(method, url, body = null, options = {}) {
  const baseUrl = window.$nl.apiUrl;
  const isFormData = body instanceof FormData;

  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    method,
    headers: isFormData
      ? {
        // 'X-Auth-Token': token,
      }
      : {
        ...options.headers,
        // 'X-Auth-Token': token,
        // 'Content-Type': 'application/json',
        ...(isFormData ? body.getHeaders() : {}),
      },
    body: body && !(isFormData) ? JSON.stringify(body) : body,
  });

  if (response.statusCode >= 500) {
    throw new Error(`Server error ${url}`);
  }

  return response;
}

export async function get(url) {
  const data = await fetchData('GET', url);
  return await data.json();
}
