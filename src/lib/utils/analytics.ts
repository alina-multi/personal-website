/**
 * Hiring-funnel events for the existing GA4 property (G-8DEV9K8PJK).
 *
 * Mark these as key events in GA4 Admin → Events:
 * - cv_download — opened the PDF CV
 * - resume_view — landed on /resume
 * - resume_scroll — read 50% or 90% of /resume
 * - form_abandon — typed into the contact form, then left without sending
 *
 * No names, emails, or other personal data are sent. Placement is only
 * which button was used (header, hero, social, about).
 */

type Gtag = (...args: unknown[]) => void;

type CvPlacement = 'header' | 'hero' | 'social';

const CV_FILE = 'Front_Dev_Alina_Akseninko_2026.pdf';

function gtag(...args: unknown[]) {
	if (typeof window === 'undefined') return;
	const fn = (window as Window & { gtag?: Gtag }).gtag;
	if (typeof fn !== 'function') return;
	fn(...args);
}

export function trackPageView(path: string) {
	gtag('event', 'page_view', {
		page_path: path,
		page_location: window.location.href,
		page_title: document.title
	});
}

export function trackCvDownload(placement: CvPlacement) {
	gtag('event', 'cv_download', {
		file_name: CV_FILE,
		file_extension: 'pdf',
		link_text: 'Download CV',
		placement,
		content_type: 'cv'
	});
}

export function trackResumeCta(placement: 'about_mobile' | 'about_desktop') {
	gtag('event', 'resume_cta_click', {
		content_type: 'resume',
		placement,
		link_url: '/resume'
	});
}

export function trackFormAbandon(
	placement: 'contact_section' | 'hero_modal',
	filledFields: string[],
	exit: 'modal_close' | 'page_leave'
) {
	gtag('event', 'form_abandon', {
		form_id: 'contact',
		placement,
		filled_fields: filledFields.join(','),
		field_count: filledFields.length,
		exit,
		transport_type: 'beacon'
	});
}

export function trackResumeView() {
	gtag('event', 'resume_view', {
		page_path: '/resume',
		content_type: 'resume'
	});
}

export function trackResumeScroll(percent: 50 | 90) {
	gtag('event', 'resume_scroll', {
		page_path: '/resume',
		percent_scrolled: percent
	});
}

/** Fires 50% and 90% once. Returns a cleanup function. */
export function observeResumeRead(onMilestone: (percent: 50 | 90) => void) {
	const seen = new Set<50 | 90>();

	const onScroll = () => {
		const doc = document.documentElement;
		const height = doc.scrollHeight;
		const ratio = height <= 0 ? 0 : (doc.scrollTop + window.innerHeight) / height;

		if (ratio >= 0.5 && !seen.has(50)) {
			seen.add(50);
			onMilestone(50);
		}
		if (ratio >= 0.9 && !seen.has(90)) {
			seen.add(90);
			onMilestone(90);
			window.removeEventListener('scroll', onScroll);
		}
	};

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	return () => window.removeEventListener('scroll', onScroll);
}
