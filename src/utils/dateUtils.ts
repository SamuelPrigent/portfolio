const MONTHS_FR = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

function parseYearMonth(ym: string): { year: number; month: number } {
  const [y, m] = ym.split("-").map(Number);
  return { year: y, month: m };
}

export function formatPeriod(
  startDate: string,
  endDate: string | null
): string {
  const start = parseYearMonth(startDate);
  const startLabel = `${MONTHS_FR[start.month - 1]} ${start.year}`;

  if (!endDate) return `${startLabel} à Aujourd'hui`;

  const end = parseYearMonth(endDate);
  const endLabel = `${MONTHS_FR[end.month - 1]} ${end.year}`;

  const totalMonths =
    (end.year - start.year) * 12 + (end.month - start.month) + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let duration = "";
  if (years > 0) duration += `${years} an${years > 1 ? "s" : ""}`;
  if (years > 0 && months > 0) duration += " et ";
  if (months > 0) duration += `${months} mois`;

  return `${startLabel} à ${endLabel} · ${duration}`;
}
