export default function onAppend(e: HTMLElement, f: Function): void {
	const observer: MutationObserver = new MutationObserver(
		(mutations: MutationRecord[]): void => {
			mutations.forEach((m: MutationRecord): void => {
				if (m.addedNodes.length) f(m.addedNodes);
			});
		}
	);

	observer.observe(e, { childList: true });
}
