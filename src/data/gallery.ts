// Gallery items, shown in this order on /personal/gallery/.
//
// - image: put the file in public/gallery/ and use src: "/gallery/name.jpg"
// - video: either a file (src: "/gallery/clip.mp4") or a YouTube video (youtube: "<video id>",
//   the part after "v=" in the URL). Plays muted in a loop with play/pause and sound buttons,
//   and turns grey while paused. A YouTube video shows a frame of itself while it starts,
//   so YouTube's own start-up buttons are never seen. Optional poster: "/gallery/frame.jpg"
//   to use a different picture. letterbox: true zooms in to hide the black bands of
//   widescreen films so the picture fills the tile.
// - caption: short text shown in the bottom-right box
// - source: optional link shown under the caption, e.g. { label: "Via X", url: "https://..." }
export interface Source {
	label: string;
	url: string;
}

export type GalleryItem =
	| { type: "image"; src: string; alt: string; caption?: string; source?: Source }
	| { type: "video"; src: string; caption?: string; source?: Source }
	| { type: "video"; youtube: string; title: string; poster?: string; letterbox?: boolean; caption?: string; source?: Source };

export const GALLERY: GalleryItem[] = [
	{
		type: "video",
		youtube: "rjEC1LNF8pw",
		title: "A Most Violent Year (2014) - That is when you jump",
		letterbox: true,
		caption: "When it feels scary to jump, that is exactly when you jump.",
		source: { label: "A Most Violent Year (2014)", url: "https://www.youtube.com/watch?v=rjEC1LNF8pw" },
	},
];
