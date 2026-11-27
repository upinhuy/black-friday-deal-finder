// filters.js — the deal finder's pure filter and sort logic. No DOM here,
// so the rules can be read (and tested) on their own.

import { DEALS } from "./data.js";

// Turn one compact data row into a named deal object.
export function toDeal(row) {
  const [id, title, store, category, price, was, url, source, verdict, note] = row;
  return { id, title, store, category, price, was, url, source, verdict, note };
}

export const ALL_DEALS = DEALS.map(toDeal);

// Discount as a whole percent, from the two prices on the deal.
export function discountPct(deal) {
  if (!deal.was || deal.was <= deal.price) return 0;
  return Math.round((1 - deal.price / deal.was) * 100);
}

// Dollars saved on this deal.
export function savings(deal) {
  return Math.max(0, +(deal.was - deal.price).toFixed(2));
}

// Verdict strength, best first, for sorting.
const VERDICT_RANK = { "new-low": 0, strong: 1, good: 2, routine: 3 };
export function verdictRank(deal) {
  return VERDICT_RANK[deal.verdict] ?? 9;
}

// The distinct values a filter chip row offers, in first-seen order.
export function distinctValues(deals, key) {
  const seen = [];
  for (const deal of deals) {
    if (!seen.includes(deal[key])) seen.push(deal[key]);
  }
  return seen;
}

// Apply search text, category, store and minimum-discount filters.
export function applyFilters(deals, filters) {
  const query = (filters.query || "").trim().toLowerCase();
  return deals.filter((deal) => {
    if (filters.category && deal.category !== filters.category) return false;
    if (filters.store && deal.store !== filters.store) return false;
    if (filters.minDiscount && discountPct(deal) < filters.minDiscount) return false;
    if (query) {
      const haystack = `${deal.title} ${deal.store} ${deal.category}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
}

// Sort a filtered list. "discount" is the default: biggest cut first.
export function sortDeals(deals, sortKey) {
  const list = [...deals];
  switch (sortKey) {
    case "savings":
      return list.sort((a, b) => savings(b) - savings(a) || discountPct(b) - discountPct(a));
    case "price-asc":
      return list.sort((a, b) => a.price - b.price || discountPct(b) - discountPct(a));
    case "price-desc":
      return list.sort((a, b) => b.price - a.price || discountPct(b) - discountPct(a));
    case "verdict":
      return list.sort((a, b) => verdictRank(a) - verdictRank(b) || discountPct(b) - discountPct(a));
    case "discount":
    default:
      return list.sort((a, b) => discountPct(b) - discountPct(a) || savings(b) - savings(a));
  }
}

// Board-wide numbers for the stats strip.
export function boardStats(deals) {
  const total = deals.length;
  const avgDiscount = total
    ? Math.round(deals.reduce((sum, deal) => sum + discountPct(deal), 0) / total)
    : 0;
  const newLows = deals.filter((deal) => deal.verdict === "new-low").length;
  const stores = distinctValues(deals, "store").length;
  return { total, avgDiscount, newLows, stores };
}
