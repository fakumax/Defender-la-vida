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

/**
 * Trae los slides del carrusel del hero.
 * Desde WordPress: creá una categoría llamada "portada" (o "hero") y asigná
 * posts a esa categoría con imagen destacada. Cada post = un slide.
 */
export async function getHeroSlides() {
    // Resolver el ID de la categoría por slug
    const categories = await fetchAPI(`categories?slug=portada`);
    if (!categories?.length) return [];
    const catId = categories[0].id;
    const posts = await fetchAPI(`posts?categories=${catId}&per_page=10&_embed&orderby=menu_order&order=asc`);
    if (!posts?.length) return [];
    return posts
        .map((p) => {
            const img = p._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            if (!img) return null;
            return {
                image: img,
                title: p.title?.rendered?.replace(/<[^>]*>/g, '') ?? '',
                excerpt: p.excerpt?.rendered?.replace(/<[^>]*>/g, '').trim() ?? '',
            };
        })
        .filter(Boolean);
}
