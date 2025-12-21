const MONTHS_FR = [
  "janv.",
  "févr.",
  "mars",
  "avr.",
  "mai",
  "juin",
  "juil.",
  "août",
  "sept.",
  "oct.",
  "nov.",
  "déc.",
];

/**
 * Formate une date au format YYYY-MM en format français abrégé
 * @param dateString - Date au format YYYY-MM
 * @returns Date formatée (ex: "oct. 2024")
 */
export function formatDate(dateString: string): string {
  const [year, month] = dateString.split("-");
  const monthIndex = parseInt(month, 10) - 1;
  return `${MONTHS_FR[monthIndex]} ${year}`;
}

/**
 * Calcule la durée entre deux dates en format "X an(s) Y mois"
 * @param startDate - Date de début au format YYYY-MM
 * @param endDate - Date de fin au format YYYY-MM ou null pour aujourd'hui
 * @returns Durée formatée (ex: "1 an 2 mois", "6 mois", "2 ans")
 */
export function calculateDuration(
  startDate: string,
  endDate: string | null,
): string {
  const [startYear, startMonth] = startDate.split("-").map(Number);

  let endYear: number, endMonth: number;
  if (endDate === null) {
    const now = new Date();
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1; // getMonth() returns 0-11
  } else {
    [endYear, endMonth] = endDate.split("-").map(Number);
  }

  let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;

  // Si on est dans le même mois, on compte quand même 1 mois
  if (totalMonths <= 0) {
    totalMonths = 1;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} mois`;
  } else if (months === 0) {
    return years === 1 ? "1 an" : `${years} ans`;
  } else {
    const yearText = years === 1 ? "1 an" : `${years} ans`;
    return `${yearText} ${months} mois`;
  }
}

/**
 * Formate une période complète avec la durée
 * @param startDate - Date de début au format YYYY-MM
 * @param endDate - Date de fin au format YYYY-MM ou null pour aujourd'hui
 * @returns Période formatée (ex: "oct. 2024 - nov. 2025 · 1 an 2 mois")
 */
export function formatPeriod(
  startDate: string,
  endDate: string | null,
): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "Aujourd'hui";
  const duration = calculateDuration(startDate, endDate);

  return `${start} - ${end} · ${duration}`;
}
