/**
 * Single source of truth for site-wide settings.
 *
 * Everything an AI session (or a human) might otherwise hardcode in two places
 * lives here exactly once: site metadata, the curriculum branches, analytics
 * IDs, and the feedback form. Import from here — never copy a value out of it.
 */

export interface Branch {
	/** Directory name under src/content/docs/ and URL segment. */
	slug: string;
	/** Display name shown on the homepage curriculum. */
	name: string;
	/** True once the branch has content; false renders it as "Planned". */
	live: boolean;
}

export const site = {
	name: 'PhysicsDaily',
	description:
		'Clear, structured physics notes with diagrams, videos, equations, and interactive simulations.',
	url: 'https://physicsdaily.github.io',
	/** localStorage key for the sidebar collapse toggle. */
	sidebarStorageKey: 'physicsdaily-sidebar-collapsed',
} as const;

/**
 * The six branches, in curriculum order (Halliday, Resnick & Krane).
 * Slugs are canonical: legacy names redirect to these, never the reverse.
 * To launch a branch: create its content directory and flip `live` to true.
 */
export const branches: readonly Branch[] = [
	{ slug: 'mechanics', name: 'Mechanics', live: true },
	{ slug: 'oscillations-waves', name: 'Oscillations & Waves', live: false },
	{ slug: 'thermodynamics', name: 'Thermodynamics', live: false },
	{ slug: 'electromagnetism', name: 'Electromagnetism', live: false },
	{ slug: 'optics', name: 'Optics', live: false },
	{ slug: 'modern-physics', name: 'Modern Physics', live: false },
] as const;

/** Slugs of branches that exist (have or will have content). */
export const branchSlugs = branches.map((b) => b.slug);

/** Legacy URL prefixes that old links may still point at. */
export const legacyBranchSlugs = ['electrodynamics', 'oscillations', 'waves', 'modern'] as const;

export const analytics = {
	/** Google Analytics 4 measurement ID. */
	gaId: 'G-NEB8S7WNYL',
	/** Cloudflare Web Analytics beacon token. */
	cloudflareToken: 'd9af8c2cb2c2421392420889bf7212d4',
} as const;

export const feedback = {
	/** Google Form POST endpoint ending in /formResponse. */
	formActionUrl:
		'https://docs.google.com/forms/d/e/1FAIpQLSfgV2H3V_MM0weD2kZ4VktXVrn0bH0owMTSab-RgqT-_CyK0Q/formResponse',
	/** Google Form entry parameter for the message field. */
	messageEntryId: 'entry.625974859',
	/** Google Form entry parameter for the email field. */
	emailEntryId: 'emailAddress',
	directFormUrl:
		'https://docs.google.com/forms/d/e/1FAIpQLSfgV2H3V_MM0weD2kZ4VktXVrn0bH0owMTSab-RgqT-_CyK0Q/viewform',

	// /feedback page copy
	eyebrow: 'Feedback & Appreciation',
	title: 'Feedback, suggestions, or appreciation',
	lede: 'Found a typo, have a question about a derivation, or simply want to say thanks? Whether it’s constructive feedback, an idea for a simulation, or a kind word of appreciation, we read and cherish every message.',
	placeholderMessage: 'Your feedback, suggestions, corrections, or a note of appreciation...',
	placeholderEmail: 'Your email address',
	buttonText: 'Send message',
	successMessage: 'Thank you! Your message has been sent.',

	// Homepage callout copy
	homeSectionEyebrow: 'Feedback & Appreciation',
	homeSectionTitle: 'Share feedback or a kind note',
	homeSectionLede:
		'Notice an error, have an idea for a simulation, or want to say thanks? We’d love to hear from you.',
	homeButtonText: 'Send feedback or appreciation',
} as const;
