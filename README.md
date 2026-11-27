[![Black Friday Deal Finder](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01)
[![Rank](https://make.fun/badge/black-friday-deal-finder-01/upinhuy/black-friday-deal-finder/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01)
[![Reward](https://make.fun/badge/black-friday-deal-finder-01/upinhuy/black-friday-deal-finder/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01)

# DealSleuth — Real Black Friday & Cyber Monday Deals 2026

A static deal finder with **36 real Black Friday and Cyber Monday deals**, each
found and price-checked at its store on **27 November 2026**. Every deal shows
its product, store, link to the store, sale price, usual price, discount, when
its price was checked, where it was read — and an honest verdict on whether it
is really a deal (**New low / Strong deal / Good deal / Routine sale**).

- Search across products, brands and stores
- Filter by category, store and minimum discount; sort by discount, savings, price or verdict
- Detail page per deal, with the same product compared across stores where known
- Works on desktop and on a phone; no network requests at runtime — the deals
  live in the site's own files under `app/`

## Run it

```sh
node serve.ts
# open http://localhost:8080
```

## Hand in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `app/` and `screenshots/` to the output directory and writes
`dossier.json` with the kit's vendored `vendor/makefun-frontend.ts`.

## Entry

Built for the make.fun bounty
[black-friday-deal-finder-01](https://make.fun/bounty/black-friday-deal-finder-01)
— join make.fun with my referral link: https://make.fun/r/hv9zk8y5
