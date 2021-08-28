export function formatDate(date: string): string {
	const formatDate = new Date(date).toLocaleString("pt-br", {
		day: "numeric",
		month: "2-digit",
		year: "2-digit"
	});

	return formatDate;
}