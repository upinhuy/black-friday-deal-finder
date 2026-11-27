// DealSleuth data — 36 Black Friday / Cyber Monday deals.
// Every price below was read by the site's maker on 27 November 2026, at the
// store named on the deal or in a deals roundup that names that store. The
// "checked" time and the source sit on every deal card. Prices are in USD.
// Fields per deal: [id, title, store, category, sale, usual, storeUrl, source, verdict, verdictNote]
// verdict: new-low | strong | good | routine

export const META = {
  checked: "2026-11-27T07:30:00Z",
  checkedLabel: "27 Nov 2026, 14:30 WIB",
  saleWindow: "27–30 Nov 2026",
  dealCount: 36,
};

export const DEALS = [
  ["airpods-pro-3", "Apple AirPods Pro 3", "Amazon", "Audio", 149, 249, "https://www.amazon.com/s?k=Apple+AirPods+Pro+3", "Black Friday Deals Diary 2026 — 27 Nov entry", "new-low", "Best price ever — dropped from $169 overnight."],
  ["airtag-2", "Apple AirTag 2 (single)", "Amazon", "Smart home", 18, 29, "https://www.amazon.com/s?k=Apple+AirTag+2", "Black Friday Deals Diary 2026 — 27 Nov entry", "new-low", "Lowest price of the season for the single tag."],
  ["airtag-2-4pack", "Apple AirTag 2, 4-pack", "Amazon", "Smart home", 80, 99, "https://www.amazon.com/s?k=Apple+AirTag+2+4-pack", "Black Friday Deals Diary 2026 — 27 Nov entry", "strong", "19% off the $99 list for the four-pack."],
  ["apple-watch-s12", "Apple Watch Series 12", "Amazon", "Smart home", 299, 399, "https://www.amazon.com/s?k=Apple+Watch+Series+12", "Black Friday Deals Diary 2026 — 27 Nov entry", "strong", "Starts at $299 — $100 off the new Series 12."],
  ["ipad-mini", "Apple iPad mini", "Amazon", "Laptops & tablets", 599, 699, "https://www.amazon.com/s?k=Apple+iPad+mini", "Black Friday Deals Diary 2026 — 27 Nov entry", "good", "14% off a current iPad — rare for Apple."],
  ["macbook-neo", "Apple MacBook Neo 13-inch, 256GB", "Amazon", "Laptops & tablets", 649, 699, "https://www.amazon.com/s?k=Apple+MacBook+Neo+13-inch", "Pete Matheson — Black Friday tech deals 2026", "routine", "Only $50 off the $699 list — a small cut."],
  ["fire-tv-stick-4k", "Amazon Fire TV Stick 4K (2026)", "Amazon", "TVs", 19.99, 59.99, "https://www.amazon.com/s?k=Fire+TV+Stick+4K", "9to5Toys deal listing, via NewsUnc — 21 Nov", "new-low", "67% off — the lowest tracked price for the 4K stick."],
  ["ninja-flip", "Ninja Flip Toaster Oven & Air Fryer", "Amazon", "Kitchen", 140, 250, "https://www.amazon.com/s?k=Ninja+Flip+Toaster+Oven+Air+Fryer", "Black Friday Deals Diary 2026 — 11 Nov entry", "strong", "44% off the two-in-one oven and fryer."],
  ["shark-turboblade", "Shark TurboBlade Cool + Heat Fan", "Amazon", "Home", 200, 400, "https://www.amazon.com/s?k=Shark+TurboBlade+fan", "Black Friday Deals Diary 2026 — 11 Nov entry", "strong", "50% off — best price of the year in the diary."],
  ["dewalt-drill", "DeWalt 20V MAX Drill Driver Kit", "Amazon", "Tools", 139, 239, "https://www.amazon.com/s?k=DeWalt+20V+MAX+drill+kit", "Black Friday Deals Diary 2026 — 4 Nov entry", "strong", "$100 off the classic drill-and-driver kit."],
  ["segway-f3", "Segway Ninebot F3 E-Scooter", "Amazon", "Travel", 649.99, 849.99, "https://www.amazon.com/s?k=Segway+Ninebot+F3+e-scooter", "Black Friday Deals Diary 2026 — 4 Nov entry", "strong", "$200 off a commuter favourite."],
  ["weber-smoque", "Weber Smoque Pellet Smoker", "Amazon", "Home", 599, 799, "https://www.amazon.com/s?k=Weber+Smoque+pellet+smoker", "Black Friday Deals Diary 2026 — 4 Nov entry", "strong", "$200 off the early-season price."],
  ["tcl-65-s4", "TCL 65-inch S4 4K Fire TV", "Best Buy", "TVs", 229.99, 469.99, "https://www.bestbuy.com/site/searchpage.jsp?st=TCL+65-inch+S4+4K+Fire+TV", "Best Buy Black Friday announcement, 17 Nov (via NewsUnc)", "new-low", "Doorbuster TV — $240 off, the cheapest big screen of the sale."],
  ["hp-omnibook-5", "HP OmniBook 5 14-inch OLED Laptop", "Best Buy", "Laptops & tablets", 449.99, 799.99, "https://www.bestbuy.com/site/searchpage.jsp?st=HP+OmniBook+5+14-inch+OLED+laptop", "Best Buy Black Friday announcement, 17 Nov (via NewsUnc)", "strong", "$350 off an OLED touchscreen laptop."],
  ["sony-xm5", "Sony WH-1000XM5 Noise-Cancelling Headphones", "Best Buy", "Audio", 169.99, 399.99, "https://www.bestbuy.com/site/searchpage.jsp?st=Sony+WH-1000XM5+headphones", "Best Buy Black Friday announcement, 17 Nov (via NewsUnc)", "strong", "58% off the $399.99 list — the flagship ANC headphone at half price."],
  ["galaxy-s26-fe", "Samsung Galaxy S26 FE", "Best Buy", "Phones", 499.99, 699.99, "https://www.bestbuy.com/site/searchpage.jsp?st=Samsung+Galaxy+S26+FE", "Best Buy Black Friday announcement, 17 Nov (via NewsUnc)", "strong", "$200 off the new Fan Edition phone."],
  ["shark-powerdetect", "Shark PowerDetect Cordless Stick Vacuum", "Best Buy", "Home", 199.99, 499.99, "https://www.bestbuy.com/site/searchpage.jsp?st=Shark+PowerDetect+cordless+vacuum", "Best Buy Black Friday announcement, 17 Nov (via NewsUnc)", "strong", "$300 off — 60% off the cordless stick."],
  ["insignia-40-firetv", "Insignia 40-inch Smart Fire TV", "Best Buy", "TVs", 89.99, 149.99, "https://www.bestbuy.com/site/searchpage.jsp?st=Insignia+40-inch+Fire+TV", "Best Buy Black Friday announcement, 17 Nov (via NewsUnc)", "good", "40% off a budget 40-inch TV."],
  ["hisense-98-qd5", "Hisense 98-inch QD5 Hi-QLED 4K TV", "Best Buy", "TVs", 800, 2500, "https://www.bestbuy.com/site/searchpage.jsp?st=Hisense+98-inch+QD5+4K+TV", "Black Friday Deals Diary 2026 — 26 Nov entry", "new-low", "68% off — the deepest TV cut of the whole sale."],
  ["macbook-air-m5-bb", "Apple MacBook Air 13-inch M5, 16GB/512GB", "Best Buy", "Laptops & tablets", 1049, 1299, "https://www.bestbuy.com/site/searchpage.jsp?st=MacBook+Air+13-inch+M5+16GB+512GB", "Best Buy Black Friday announcement, 17 Nov (via NewsUnc)", "strong", "$250 off a current MacBook Air."],
  ["beats-solo-4", "Beats Solo 4 On-Ear Headphones", "Best Buy", "Audio", 129.99, 199.99, "https://www.bestbuy.com/site/searchpage.jsp?st=Beats+Solo+4", "The Tech Hacker — Black Friday 2026 tech deals", "good", "35% off the on-ear Beats."],
  ["sony-ch720n", "Sony WH-CH720N Headphones", "Best Buy", "Audio", 88, 178, "https://www.bestbuy.com/site/searchpage.jsp?st=Sony+WH-CH720N+headphones", "The Tech Hacker — Black Friday 2026 tech deals", "strong", "51% off the light everyday ANC headphone."],
  ["airpods-max-2", "Apple AirPods Max 2 (USB-C)", "Best Buy", "Audio", 479, 549, "https://www.bestbuy.com/site/searchpage.jsp?st=AirPods+Max+2+USB-C", "The Tech Hacker — Black Friday 2026 tech deals", "routine", "Only 13% off a $549 headphone — a small cut."],
  ["samsung-s84h-oled", "Samsung 65-inch S84H OLED TV (2026)", "Best Buy", "TVs", 999.99, 2099.99, "https://www.bestbuy.com/site/searchpage.jsp?st=Samsung+65-inch+S84H+OLED+TV", "The Tech Hacker — Black Friday 2026 tech deals", "routine", "Best Buy's 'was' is a comparable value, not a past selling price — judge it by the $999.99 sale price."],
  ["bestbuy-giftcard", "Best Buy $100 Gift Card", "Best Buy", "Gift cards", 60, 100, "https://www.bestbuy.com/site/searchpage.jsp?st=Best+Buy+gift+card", "Best Buy Black Friday announcement, 17 Nov (via NewsUnc)", "strong", "In stores only on 27 Nov, My Best Buy members, one per person."],
  ["beats-studio-pro", "Beats Studio Pro Wireless Headphones", "Walmart", "Audio", 99, 299, "https://www.walmart.com/search?q=Beats+Studio+Pro+wireless+headphones", "That Shopping Chick — 33 Best Black Friday Deals 2026", "strong", "67% off — the cheapest over-ear ANC under $100."],
  ["apple-watch-se3", "Apple Watch SE 3 GPS, 40mm", "Walmart", "Smart home", 179, 249, "https://www.walmart.com/search?q=Apple+Watch+SE+3+GPS+40mm", "That Shopping Chick — 33 Best Black Friday Deals 2026", "strong", "28% off the new SE watch."],
  ["kitchenaid-deluxe", "KitchenAid Deluxe 4.5-Qt Tilt-Head Stand Mixer", "Walmart", "Kitchen", 279, 379.99, "https://www.walmart.com/search?q=KitchenAid+Deluxe+4.5-quart+stand+mixer", "That Shopping Chick — 33 Best Black Friday Deals 2026", "good", "26% off the $379.99 list."],
  ["shark-detect-liftaway", "Shark Detect Lift-Away Upright Vacuum", "Walmart", "Home", 144, 380, "https://www.walmart.com/search?q=Shark+Detect+Lift-Away+upright+vacuum", "DealNews — Walmart Top 100 Black Friday deals, verified 27 Nov", "strong", "From $144 — 62% off the upright."],
  ["lego-red-panda", "LEGO Creator Red Panda Set", "Walmart", "Toys", 15, 30, "https://www.walmart.com/search?q=LEGO+Creator+Red+Panda+set", "DealNews — Walmart Top 100 Black Friday deals, verified 27 Nov", "strong", "50% off the Creator set."],
  ["switch2-mariokart", "Nintendo Switch 2 + Mario Kart World Bundle", "Nintendo", "Gaming", 449.99, 499.99, "https://www.nintendo.com/us/store/", "DealNews — Nintendo Black Friday & Cyber Monday deals, verified 27 Nov", "good", "$50 off the $499.99 bundle, with 3 months of Switch Online included."],
  ["hogwarts-quidditch", "Hogwarts Legacy + Quidditch Champions Bundle", "Nintendo", "Gaming", 10, 100, "https://www.nintendo.com/us/store/", "DealNews — Nintendo Black Friday & Cyber Monday deals, verified 27 Nov", "new-low", "90% off — the deepest game cut of the sale."],
  ["madden-27", "EA SPORTS Madden NFL 27", "Nintendo", "Gaming", 35, 70, "https://www.nintendo.com/us/store/", "DealNews — Nintendo Black Friday & Cyber Monday deals, verified 27 Nov", "strong", "50% off the new Madden."],
  ["wondershop-pajamas", "Wondershop Family Pajamas (per piece)", "Target", "Fashion", 5, 10, "https://www.target.com/s?searchTerm=Wondershop+pajamas", "That Shopping Chick — 33 Best Black Friday Deals 2026", "good", "$5 a piece for matching holiday pajamas."],
  ["big-one-towels", "The Big One Towels & Pillows", "Kohl's", "Home", 2.39, 2.99, "https://www.kohls.com/search.jsp?search=The+Big+One+towels", "That Shopping Chick — 33 Best Black Friday Deals 2026", "routine", "Needs code TAKE20 — only 20% off the $2.99 ticket price."],
  ["away-bigger-carryon", "Away The Bigger Carry-On", "Away", "Travel", 206, 275, "https://www.awaytravel.com/", "Wirecutter — Best Black Friday Deals, updated 26 Nov", "good", "25% off the Wirecutter carry-on pick."],
];

// Same product, other stores — prices read the same day from the same roundups.
export const COMPARE = {
  "airpods-pro-3": [
    ["Amazon", 149, "Best price ever"],
    ["Walmart", 149, "Same price, Top 100 deals"],
    ["Best Buy", 180, "Second wave, 26 Nov"],
  ],
  "macbook-air-m5-bb": [
    ["Best Buy", 1049, "16GB / 512GB, $250 off"],
    ["Amazon", 989, "13-inch M5, from $989"],
  ],
};
