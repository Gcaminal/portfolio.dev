// Wishlist. Edit freely; filters and counts are built from this list.
//
// - category: one of the keys in CATEGORIES (add new ones there)
// - price: approximate price in euros; leave it out for "Sin precio"
// - image: put the file in public/wishlist/ and use "/wishlist/name.jpg" (optional)
// - background: tile colour behind the image (optional). Use the photo's own background
//   colour (e.g. "#ffffff") so a product shot on white blends into the tile.
// - owned: true when you already have it (shows as "Ya lo tengo")

export const CATEGORIES = {
	accessories: { es: "Accesorios", en: "Accessories" },
	shirts: { es: "Camisas", en: "Shirts" },
	tshirts: { es: "Camisetas y polos", en: "T-shirts & polos" },
	jackets: { es: "Chaquetas", en: "Jackets" },
	gadgets: { es: "Gadgets", en: "Gadgets" },
	home: { es: "Hogar", en: "Home" },
	sweaters: { es: "Jerséis y sudaderas", en: "Sweaters & hoodies" },
	trousers: { es: "Pantalones", en: "Trousers" },
	watches: { es: "Relojes", en: "Watches" },
	books: { es: "Libros", en: "Books" },
	shoes: { es: "Zapatos", en: "Shoes" },
	games: { es: "Juegos", en: "Games"}
} as const;

export type Category = keyof typeof CATEGORIES;

export interface WishlistItem {
	name: string;
	brand: string;
	category: Category;
	url: string;
	price?: number;
	image?: string;
	/** Tile colour behind the image, e.g. "#ffffff" for product photos on a white background */
	background?: string;
	owned?: boolean;
}

// Price bands used by the price filter: [min, max) in euros
export const PRICE_BANDS = [
	{ id: "0-20", min: 0, max: 20 },
	{ id: "20-50", min: 20, max: 50 },
	{ id: "50-100", min: 50, max: 100 },
	{ id: "100-200", min: 100, max: 200 },
	{ id: "200-500", min: 200, max: 500 },
	{ id: "500-1000", min: 500, max: 1000 },
	{ id: "1000-5000", min: 1000, max: 5000 },
	{ id: "5000+", min: 5000, max: Infinity },
] as const;

export const priceBandOf = (price?: number) =>
	price === undefined ? undefined : PRICE_BANDS.find((b) => price >= b.min && price < b.max);

// Example items: replace them with your own.
export const WISHLIST: WishlistItem[] = [
	{
		name: "Cyberpunk 2020 – Libro de Reglas Principal (2.ª Edición, 2020) – R. Talsorian Games",
		brand: "R. Talsorian Games",
		category: "games",
		url: "https://www.amazon.es/gp/product/B008NDDAZI/ref=ox_sc_act_title_1?smid=A1ROBKG8KDMXEJ&psc=1",
		price: 30,
		image: "/wishlist/cyberpunk-2020.png",
	},
	{
		name: "You Can Just Do Things",
		brand: "Cate Hall",
		category: "books",
		url: "https://www.amazon.es/gp/product/0008811776/ref=ewc_pr_img_2?smid=A2EL6K6KDM9FO1&psc=1",
		price: 20,
		image: "/wishlist/you-can-just-do-things.jpg",
	},
	{
		name: "Protocols",
		brand: "Dr Andrew Huberman",
		category: "books",
		url: "https://www.amazon.es/Protocols-essential-transform-award-winning-neuroscientist/dp/1529921287/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2Q9ASV3A9QOCV&dib=eyJ2IjoiMSJ9.jIPTayePWXFhxNWBwUDYKAwhh6fMof-EFESV3Cp96UeGg7ne2YuULdHmhXVFO-hJ0zHCq45EXsMQHPW47AOY9hErVFnfwUUeBs1SQ6gK1Pcvd8MuvzKbuHq_lrYJ_nYisW_M81WuSbGDN7nlyoDxrlWzu2zgWlKvZvSPk9SMecgIEzvUEOMy9Dt3P5LoEQ0XyjPW2kGRg6gSxJgLvgjj-gHKEWNBZwSDrsbBUpjneM0.nMpmZOQ2X0d2Yi0wc086tBs5EXwmYCEuTTSqdss4LpM&dib_tag=se&keywords=protocol&qid=1795647888&s=books&sprefix=protocols%2Cstripbooks%2C152&sr=1-1",
		price: 22,
		image: "/wishlist/protocols.jpg",
		// owned: true,
	},
	{
		name: "SKÅDIS",
		brand: "IKEA",
		category: "home",
		url: "https://www.ikea.com/es/ca/p/skadis-combinacio-plantilles-s89406365/",
		price: 40,
		image: "/wishlist/ikea-skadis.png",
	},
	{
		name: "SVENSÅS",
		brand: "IKEA",
		category: "home",
		url: "https://www.ikea.com/es/es/p/svensas-tablero-notas-negro-20440362/",
		price: 15,
		image: "/wishlist/ikea-svensas.jpg",
		background: "#ffffff",
	},
	{
		name: "Core 300S",
		brand: "Levoit",
		category: "home",
		url: "https://levoit.es/products/levoit-core-300s-purificador-de-aire-inteligente?variant=51094329262414&country=ES&currency=EUR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gad_campaignid=24467894610&gbraid=0AAAABEVeM-aEWLrtbpmS0nK7Seg0YRV7w&gclid=CjwKCAiAzp_YBhAJEiwASf8kHS8UQLcWU950uTMAQrPqDqbKJ97RylbK6c8TwQblQw8bDdCK4Zge3hoCAusQAvD_BwE",
		price: 99,
	},
];
