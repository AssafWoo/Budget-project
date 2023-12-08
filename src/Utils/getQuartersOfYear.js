export function getQuartersOfYear() {
  const currentYear = new Date().getFullYear().toString().slice(-2);
  return [
    `Q1: Jan 1, ${currentYear} - Mar 31, ${currentYear}`,
    `Q2: Apr 1, ${currentYear} - Jun 30, ${currentYear}`,
    `Q3: Jul 1, ${currentYear} - Sep 30, ${currentYear}`,
    `Q4: Oct 1, ${currentYear} - Dec 31, ${currentYear}`,
  ];
}
