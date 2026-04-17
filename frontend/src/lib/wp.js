// WP REST API Helper function
const WP_URL = "http://localhost:8080/wp-json/wp/v2";

/**
 * Fetch data from WordPress REST API
 */
export async function fetchAPI(endpoint) {
    try {
        const res = await fetch(`${WP_URL}/${endpoint}`);
        
        if (!res.ok) {
            console.error(`Error HTTP: ${res.status} al obtener WP REST en endpoint: ${endpoint}`);
            return null;
        }

        const json = await res.json();
        return json;
    } catch (e) {
        console.warn(`No se pudo conectar con WordPress. Asegúrate de que el contenedor Docker esté corriendo en ${WP_URL}. Detalle: ${e.message}`);
        return null;
    }
}

export async function getPosts(perPage = 10) {
    return fetchAPI(`posts?per_page=${perPage}&_embed`);
}

export async function getPostBySlug(slug) {
    const posts = await fetchAPI(`posts?slug=${slug}&_embed`);
    return posts?.length ? posts[0] : null;
}
