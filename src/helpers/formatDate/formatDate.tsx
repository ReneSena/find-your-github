export function formatDate(date: string): string {
	const data = new Date(date);
	const formatDate = new Intl.DateTimeFormat('pt-BR').format(data);

	return formatDate;
}