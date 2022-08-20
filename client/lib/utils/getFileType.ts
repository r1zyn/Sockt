export default function getFileType(filename: string): string {
	const match: RegExpMatchArray | null = filename.match(/(\.[a-z]{3,})$/g);
	if (!match) throw new Error("Invalid file name provided");
	return match[0].slice(1, match[0].length - 1);
}
