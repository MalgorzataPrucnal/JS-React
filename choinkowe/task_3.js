/**
 * Dane tj. w zadaniu 1.
 *
 * napisz funkcje, ktora zwroci obiekt, w ktorym kluczem bedzie wartosc pola
 * "intelligence" a wartoscia bedzie lista z nazwami ras
 * kotow ktore maja intelligence o takiej wartosci
 *
 * const intelligenceList = {
 *  5: ["Abyssinian", "American Bobtail", ...],
 *  3: ["Aegean", ...],
 *  // ...
 * }
 */

const intelligenceList = breeds.reduce(function (acc,item) {
  acc[item.intelligence] = acc[item.intelligence] || [];
  acc[item.intelligence].push(item.name);
  return acc;
}, {});

console.log(intelligenceList);

