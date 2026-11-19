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
	},
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)["es"];

export function useTranslations(lang: Lang) {
	return (key: UIKey) => ui[lang][key];
}
