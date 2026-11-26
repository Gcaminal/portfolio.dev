export const languages = {
	es: "Español",
	en: "English",
} as const;

export type Lang = keyof typeof languages;

export const langs = Object.keys(languages) as Lang[];

export const ui = {
	es: {
		"meta.description":
			"Consultor tecnológico en Deloitte y estudiante de Máster en Data Science.",
		"meta.locale": "es_ES",
		"nav.home": "Inicio",
		"nav.experience": "Experiencia",
		"nav.projects": "Proyectos",
		"nav.about": "Sobre mí",
		"nav.contact": "Contacto",
		"hero.title": "Hola, soy Gerard",
		"hero.subtitle":
			"Graduado en Empresa y Tecnología, actualmente cursando un Máster en Data Science. Profesional versátil que se adapta bien a entornos cambiantes y a la incertidumbre, curioso por aprender más allá de mi área de especialidad y por cuestionar cómo funcionan las cosas y cómo podrían funcionar mejor.",
		"section.experience": "Experiencia laboral",
		"section.projects": "Proyectos",
		"section.about": "Sobre mí",
		"section.contact": "Contacto",
		"contact.text":
			"¿Tienes un proyecto en mente, una oportunidad que encaje con mi perfil, o simplemente quieres charlar? Escríbeme y te respondo lo antes posible.",
		"experience.learnMore": "Saber más sobre",
		"projects.code": "Código",
		"footer.rights": "Todos los derechos reservados.",
		"header.photoAlt": "Foto de Gerard Caminal",
		"header.language": "Idioma",
		"section.beyond": "Más allá del trabajo",
		"personal.metaTitle": "Gerard Caminal - Más allá del trabajo",
		"personal.metaDescription": "El rincón personal de Gerard Caminal: wishlist y galería.",
		"personal.intro": "En este espacio quiero compartir una faceta de mi mismo que no encontrarás en mi CV. Es el sitio para compartir pensamientos, momentos que me inspiran, experiencias... básicamente cualquier cosa que me parezca interesante compartir.",
		"personal.wishlist": "Wishlist",
		"personal.wishlistText": "Ideas por si no sabes qué regalarme.",
		"personal.gallery": "Galería",
		"personal.galleryText": "Citas, imágenes y clips que me inspiran.",
		"breadcrumb.home": "Inicio",
		"wishlist.metaTitle": "Gerard Caminal - Wishlist",
		"wishlist.title": "Lista de deseos",
		"wishlist.intro":
			"Ideas por si no sabes qué regalarme...",
		"wishlist.filters": "Filtros",
		"wishlist.category": "Categoría",
		"wishlist.price": "Precio",
		"wishlist.status": "Estado",
		"wishlist.all": "Todo",
		"wishlist.noPrice": "Sin precio",
		"wishlist.under": "Menos de",
		"wishlist.want": "Lo quiero",
		"wishlist.owned": "Ya lo tengo",
		"wishlist.thing": "cosa",
		"wishlist.things": "cosas",
		"wishlist.grid": "Cuadrícula",
		"wishlist.list": "Lista",
		"wishlist.view": "Vista",
		"wishlist.empty": "Nada coincide con estos filtros.",
		"gallery.metaTitle": "Gerard Caminal - Galería",
		"gallery.title": "Momentos que me inspiran",
		"gallery.intro":
			"Las ideas nunca nacen solas: se mezclan, se toman prestadas y se combinan. Aquí guardo las que han dado forma a las mías: citas, imágenes y clips. Desde filosofía hasta momentos de internet.",
		"gallery.mute": "Silenciar",
		"gallery.unmute": "Activar sonido",
		"gallery.pause": "Pausar",
		"gallery.play": "Reproducir",
	},
	en: {
		"meta.description":
			"Technology consultant at Deloitte and Master's student in Data Science.",
		"meta.locale": "en_US",
		"nav.home": "Home",
		"nav.experience": "Experience",
		"nav.projects": "Projects",
		"nav.about": "About me",
		"nav.contact": "Contact",
		"hero.title": "Hi, I'm Gerard",
		"hero.subtitle":
			"Business and Technology graduate, currently pursuing a Master's in Data Science. A versatile professional who adapts well to changing environments and uncertainty, curious to learn beyond my area of expertise and to question how things work and how they could work better.",
		"section.experience": "Work experience",
		"section.projects": "Projects",
		"section.about": "About me",
		"section.contact": "Contact",
		"contact.text":
			"Have a project in mind, an opportunity that fits my profile, or just want to chat? Drop me a line and I'll get back to you as soon as possible.",
		"experience.learnMore": "Learn more about",
		"projects.code": "Code",
		"footer.rights": "All rights reserved.",
		"header.photoAlt": "Photo of Gerard Caminal",
		"header.language": "Language",
		"section.beyond": "Beyond work",
		"personal.metaTitle": "Gerard Caminal - Beyond work",
		"personal.metaDescription": "Gerard Caminal's personal corner: wishlist and gallery.",
		"personal.intro": "In this space, I want to share a side of myself that you won’t find on my CV. It’s a place to share thoughts, moments that inspire me, experiences… basically anything I think is worth sharing.",
		"personal.wishlist": "Wishlist",
		"personal.wishlistText": "Ideas in case you don't know what to get me.",
		"personal.gallery": "Gallery",
		"personal.galleryText": "Quotes, images and clips that inspire me.",
		"breadcrumb.home": "Home",
		"wishlist.metaTitle": "Gerard Caminal - Wishlist",
		"wishlist.title": "Wishlist",
		"wishlist.intro":
			"Ideas in case you don't know what to get me. Each item links to the shop where you can buy it, and the ones marked are things I already have.",
		"wishlist.filters": "Filters",
		"wishlist.category": "Category",
		"wishlist.price": "Price",
		"wishlist.status": "Status",
		"wishlist.all": "All",
		"wishlist.noPrice": "No price",
		"wishlist.under": "Under",
		"wishlist.want": "I want it",
		"wishlist.owned": "Already have it",
		"wishlist.thing": "item",
		"wishlist.things": "items",
		"wishlist.grid": "Grid",
		"wishlist.list": "List",
		"wishlist.view": "View",
		"wishlist.empty": "Nothing matches these filters.",
		"gallery.metaTitle": "Gerard Caminal - Gallery",
		"gallery.title": "Moments that inspire me",
		"gallery.intro":
			"Ideas never come alone: they get mixed, borrowed and combined. This is where I keep the ones that have shaped mine: quotes, images and clips. From timeless philosophy to internet moments. All of them moved something in me.",
		"gallery.mute": "Mute",
		"gallery.unmute": "Unmute",
		"gallery.pause": "Pause",
		"gallery.play": "Play",
	},
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)["es"];

export function useTranslations(lang: Lang) {
	return (key: UIKey) => ui[lang][key];
}

/**
 * Link to a page of the site, e.g. localePath(lang, "/personal/").
 * In production both languages share the same URLs: English is built at the root and
 * Netlify serves the Spanish build (under /es/) to Spanish visitors, see public/_redirects.
 * In local dev there is no Netlify, so Spanish pages link to their /es/ copies instead.
 */
export function localePath(lang: Lang, path = "/") {
	return import.meta.env.DEV && lang === "es" ? `/es${path}` : path;
}
