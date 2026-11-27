// views.js — turns deals into HTML: the list cards and the detail page.
// All money is shown the same way, and every card carries the deal's store,
// both prices, its discount, its verdict, when it was checked and its source.

import { META, COMPARE } from "./data.js";
import { discountPct, savings } from "./filters.js";

const VERDICT_LABEL = {
  "new-low": "New low",
  strong: "Strong deal",
  good: "Good deal",
  routine: "Routine sale",
};

// "$1,049.99" — drop the cents when they are zero.
export function money(amount) {
  const text = amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return text.endsWith(".00") ? `$${text.slice(0, -3)}` : `$${text}`;
}

// Escape the few characters that would break out of HTML text.
export function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function verdictBadge(deal) {
  return `<span class="verdict verdict-${deal.verdict}">${VERDICT_LABEL[deal.verdict]}</span>`;
}

export function priceRow(deal) {
  return `<div class="price-row">
    <span class="price-now">${money(deal.price)}</span>
    <span class="price-was">${money(deal.was)}</span>
    <span class="price-off">${discountPct(deal)}% off · save ${money(savings(deal))}</span>
  </div>`;
}

// One deal card for the grid.
export function dealCard(deal) {
  return `<article class="deal-card">
    <div class="deal-top">
      <span class="store-badge">${escapeHtml(deal.store)}</span>
      <span class="category">${escapeHtml(deal.category)}</span>
    </div>
    <h3 class="deal-title"><a href="#/deal/${deal.id}">${escapeHtml(deal.title)}</a></h3>
    ${priceRow(deal)}
    ${verdictBadge(deal)}
    <p class="verdict-note">${escapeHtml(deal.note)}</p>
    <p class="deal-meta">Checked <b>${META.checkedLabel}</b> · ${escapeHtml(deal.source)}</p>
    <div class="card-actions">
      <a class="btn btn-store" href="${deal.url}" target="_blank" rel="noopener">View at ${escapeHtml(deal.store)} →</a>
      <a class="btn btn-detail" href="#/deal/${deal.id}">Details</a>
    </div>
  </article>`;
}

export function dealGrid(deals) {
  if (deals.length === 0) {
    return `<div class="empty">No deals match those filters. Try clearing a filter or searching for something else.</div>`;
  }
  return deals.map(dealCard).join("\n");
}

// The stats strip above the filters.
export function statsHtml(stats) {
  return `<div class="stat"><b>${stats.total}</b><span>verified deals</span></div>
  <div class="stat"><b>${stats.avgDiscount}%</b><span>average discount</span></div>
  <div class="stat"><b>${stats.newLows}</b><span>new all-time lows</span></div>
  <div class="stat"><b>${stats.stores}</b><span>stores checked</span></div>`;
}

// The full detail page for one deal, with a cross-store comparison when known.
export function dealDetail(deal) {
  const rows = COMPARE[deal.id] || [];
  const cheapest = rows.length ? Math.min(...rows.map((row) => row[1])) : null;
  const compare = rows.length
    ? `<div class="compare">
      <h2>Same product at other stores</h2>
      <table>
        <thead><tr><th>Store</th><th>Price</th><th>Note</th></tr></thead>
        <tbody>
          ${rows
            .map(
              ([store, price, note]) =>
                `<tr><td>${escapeHtml(store)}</td><td class="${price === cheapest ? "best" : ""}">${money(price)}${price === cheapest ? " ★ best" : ""}</td><td>${escapeHtml(note)}</td></tr>`,
            )
            .join("\n")}
        </tbody>
      </table>
      <p class="deal-meta">Prices read the same day, ${META.checkedLabel}.</p>
    </div>`
    : "";
  return `<a class="back-link" href="#/">← Back to all deals</a>
  <div class="deal-top" style="margin-top:14px">
    <span class="store-badge">${escapeHtml(deal.store)}</span>
    <span class="category">${escapeHtml(deal.category)}</span>
  </div>
  <h1>${escapeHtml(deal.title)}</h1>
  ${priceRow(deal)}
  <p>${verdictBadge(deal)}</p>
  <p><strong>Is it really a deal?</strong> ${escapeHtml(deal.note)}</p>
  <p class="deal-meta">Price checked <b>${META.checkedLabel}</b> at ${escapeHtml(deal.store)}.<br>Source: ${escapeHtml(deal.source)}.<br>Usual price ${money(deal.was)} · you save ${money(savings(deal))} (${discountPct(deal)}% off).</p>
  ${compare}
  <div class="detail-actions">
    <a class="btn btn-store" href="${deal.url}" target="_blank" rel="noopener">Buy at ${escapeHtml(deal.store)} →</a>
    <a class="btn btn-detail" href="#/">Back to all deals</a>
  </div>`;
}
