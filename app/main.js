// main.js — boots DealSleuth: renders the chips, wires the controls, and
// routes between the deal list (#/) and one deal's page (#/deal/<id>).
// Everything runs from the site's own files; nothing is fetched at runtime.

import { ALL_DEALS, applyFilters, sortDeals, distinctValues, boardStats } from "./filters.js";
import { dealGrid, dealDetail, statsHtml } from "./views.js";

const state = { query: "", category: "", store: "", minDiscount: 0, sort: "discount" };

const grid = document.getElementById("deal-grid");
const detail = document.getElementById("detail");
const controls = document.querySelector(".controls");
const countEl = document.getElementById("result-count");
const statsEl = document.getElementById("stats");
const searchEl = document.getElementById("search");
const categoryEl = document.getElementById("category-chips");
const storeEl = document.getElementById("store-chips");
const minDiscountEl = document.getElementById("min-discount");
const sortEl = document.getElementById("sort");
const resetEl = document.getElementById("reset");

// One toggle chip per value; the active one is pressed in.
function renderChips(container, values, current, onPick) {
  container.innerHTML = values
    .map(
      (value) =>
        `<button type="button" class="chip" data-value="${value}" aria-pressed="${value === current}">${value}</button>`,
    )
    .join("");
  container.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => onPick(chip.dataset.value));
  });
}

function renderFilterChips() {
  renderChips(categoryEl, distinctValues(ALL_DEALS, "category"), state.category, (value) => {
    state.category = state.category === value ? "" : value;
    render();
  });
  renderChips(storeEl, distinctValues(ALL_DEALS, "store"), state.store, (value) => {
    state.store = state.store === value ? "" : value;
    render();
  });
}

// Show the filtered, sorted list and its count.
function renderList() {
  const filtered = applyFilters(ALL_DEALS, state);
  const sorted = sortDeals(filtered, state.sort);
  grid.innerHTML = dealGrid(sorted);
  countEl.innerHTML = `<b>${sorted.length}</b> of ${ALL_DEALS.length} deals — sorted by ${sortEl.options[sortEl.selectedIndex].text.toLowerCase()}.`;
}

// Show one deal, or fall back to the list for an unknown id.
function renderDetail(id) {
  const deal = ALL_DEALS.find((candidate) => candidate.id === id);
  if (!deal) {
    detail.hidden = true;
    grid.hidden = false;
    controls.hidden = false;
    countEl.hidden = false;
    renderList();
    return;
  }
  grid.hidden = true;
  controls.hidden = true;
  countEl.hidden = true;
  detail.hidden = false;
  detail.innerHTML = dealDetail(deal);
  window.scrollTo(0, 0);
}

function render() {
  renderFilterChips();
  const hash = window.location.hash || "#/";
  if (hash.startsWith("#/deal/")) {
    renderDetail(hash.slice("#/deal/".length));
  } else {
    detail.hidden = true;
    grid.hidden = false;
    controls.hidden = false;
    countEl.hidden = false;
    renderList();
  }
}

function resetFilters() {
  state.query = "";
  state.category = "";
  state.store = "";
  state.minDiscount = 0;
  state.sort = "discount";
  searchEl.value = "";
  minDiscountEl.value = "0";
  sortEl.value = "discount";
  render();
}

searchEl.addEventListener("input", () => {
  state.query = searchEl.value;
  renderList();
});
minDiscountEl.addEventListener("change", () => {
  state.minDiscount = Number(minDiscountEl.value);
  renderList();
});
sortEl.addEventListener("change", () => {
  state.sort = sortEl.value;
  renderList();
});
resetEl.addEventListener("click", resetFilters);
window.addEventListener("hashchange", render);

statsEl.innerHTML = statsHtml(boardStats(ALL_DEALS));
render();
