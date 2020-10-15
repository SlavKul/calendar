import moment, { Moment } from "moment";
export const locale_cz = moment.updateLocale("cz", {
  months: [
    "Leden",
    "Únor",
    "Březen",
    "Duben",
    "Květen",
    "Červen",
    "Červenec",
    "Srpen",
    "Září",
    "Říjen",
    "Listopad",
    "Prosinec",
  ],
  monthsShort: [
    "Led",
    "Úno",
    "Bře",
    "Dub",
    "Kvě",
    "Čer",
    "Čer",
    "Srp",
    "Zář",
    "Říj",
    "Lis",
    "Pro",
  ],
  weekdaysShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
  weekdays: [
    "Pondělí",
    "Úterý",
    "Středa",
    "Čtvrtek",
    "Pátek",
    "Sobota",
    "Neděle",
  ],
});

export const sortMonthTitleDate = (a: string, b: string): any => {
  const momentA = moment(a, "YYYY-M");
  const momentB = moment(b, "YYYY-M");

  return momentA.diff(momentB);
};

export const sortEventDate = (
  a: string | undefined,
  b: string | undefined
): any => {
  const momentA = moment(a);
  const momentB = moment(b);

  return momentA.diff(momentB);
};
