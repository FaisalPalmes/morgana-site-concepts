// Morganà website concepts: placeholder catalogue (POST, 1 Nov 2026).
// Sovereign names and prices are invented placeholders until Angelica names the items.
// Lumière and Fortia images come from the live store; names here are placeholders too.
window.MORGANA = (function () {
  const sov = [
    ["01", "The Regent Suit", "Suits", 480, "Taupe", "Single-breasted blazer and wide-leg trouser in a soft taupe wool blend.", 8],
    ["02", "Aurelia Lace Slip", "Dresses", 245, "Mocha", "Fitted knit slip dress trimmed with champagne lace at the neckline and hem.", 7],
    ["03", "Margaux Pencil Skirt", "Skirts", 165, "Leopard", "High-waisted pencil skirt in a brushed animal-print jacquard.", 7],
    ["04", "Windsor Cropped Jacket", "Jackets", 295, "Houndstooth", "Boxy cropped jacket in black and ivory houndstooth with a single button.", 7],
    ["05", "Clementine Knit Set", "Knitwear", 260, "Espresso", "Fine roll-neck and button-front midi skirt in a dense espresso knit.", 7],
    ["06", "Duchess Wrap Coat", "Coats", 495, "Oatmeal", "Double-face wool wrap coat with a self-tie belt and patch pockets.", 7],
    ["07", "Ivoire Open-Knit Jacket", "Knitwear", 215, "Ivory / Tan", "Open-knit zip jacket edged in tan suede-effect trim.", 6],
    ["08", "Lennox Wide Trouser", "Trousers", 175, "Dove grey", "Fluid wide-leg trouser with a soft pressed crease.", 5],
    ["09", "Hampton Cardigan", "Knitwear", 225, "Cream", "Chunky double-breasted cardigan with horn-effect buttons.", 7],
    ["10", "Saddle Suede Short", "Shorts", 155, "Chocolate", "High-rise suede short with a clean flat front.", 6],
    ["11", "Essential Roll-Neck", "Knitwear", 95, "Black", "Second-skin fine-knit roll-neck. The layer under everything.", 6],
    ["12", "Blanc Cocoon Coat", "Coats", 450, "Ivory", "Collarless cocoon coat with dropped shoulders and deep pockets.", 7],
    ["13", "Mayfair Pleated Trouser", "Trousers", 185, "Charcoal", "Pleat-front trouser in a flecked charcoal tweed.", 7],
    ["14", "Olivia Leather Set", "Sets", 395, "Olive", "Leather camisole and mini skirt finished with tonal lace.", 7],
    ["15", "Sovereign Long Coat", "Coats", 550, "Black", "Floor-sweeping belted coat with wide lapels and a back vent.", 7],
    ["16", "Atelier Poplin Shirt", "Shirts", 145, "White", "Oversized crisp poplin shirt with a stand collar.", 7],
    ["17", "Sloane Pleated Short", "Shorts", 135, "Black", "Corset-waist pleated short with a tailored line.", 6],
    ["18", "Bordeaux Roll-Neck", "Knitwear", 110, "Bordeaux", "Fine roll-neck in a deep wine shade.", 7],
    ["19", "Kensington Blazer", "Jackets", 325, "Black", "Oversized single-breasted blazer with strong shoulders.", 7],
    ["20", "Belgravia Mini", "Skirts", 120, "Black", "Structured A-line mini in wool crepe.", 6]
  ].map(([id, name, cat, price, colour, desc, n]) => ({
    id: "sov-" + id, collection: "sovereign", name, category: cat, price, colour, description: desc,
    images: Array.from({ length: n }, (_, k) => `assets/img/sov/${id}-${k}.jpg`),
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Composition and care to follow",
    isNew: true
  }));

  const lum = ["Isla Lace Skirt", "Capri Shirt Set", "Positano Shirt Dress", "Riviera Linen Set", "Marais Waistcoat Set",
    "Juliette Culotte Set", "Saint-Germain Short Suit", "Nuit Satin Bomber", "Nuit Zip Set", "Trocadéro Dot Dress",
    "Rivoli Jacket", "Rivoli Pencil Skirt", "Vendôme Trouser Suit", "Palais Shirt + Trouser", "Montaigne Belted Jacket",
    "Montaigne Belted Short", "Opéra Collar Dress", "Fleur Linen Set", "Balcon Column Dress", "Jardin Tank Dress",
    "Brume Cap-Sleeve Dress", "Escalier Midi Dress"];
  const lumPrice = [165, 210, 195, 240, 230, 185, 260, 220, 245, 175, 215, 145, 320, 235, 210, 120, 190, 205, 230, 165, 175, 195];
  const lumCat = ["Skirts", "Sets", "Dresses", "Sets", "Sets", "Sets", "Suits", "Jackets", "Sets", "Dresses", "Jackets", "Skirts",
    "Suits", "Sets", "Jackets", "Shorts", "Dresses", "Sets", "Dresses", "Dresses", "Dresses", "Dresses"];
  const lumiere = lum.map((name, i) => {
    const id = String(i).padStart(2, "0");
    return { id: "lum-" + id, collection: "lumiere", name, category: lumCat[i], price: lumPrice[i], colour: "",
      description: "From Lumière, summer 2026.", images: [`assets/img/lumiere/${id}-0.jpg`, `assets/img/lumiere/${id}-1.jpg`],
      sizes: ["XS", "S", "M", "L"], fabric: "", isNew: false };
  });

  const fort = ["Ashford Tweed Jacket", "Noir Wrap Blazer", "Velour Cuff Coat", "Cocoa Rib Knit", "Haze Sheer Knit",
    "Marine Collar Coat", "Snow Faux-Fur Jacket", "Mocha Satin Set", "Noir Wrap Dress", "Flint Cropped Jacket",
    "Noir Lace Blouse", "Haze Knit + Wide Trouser", "Slate Cardigan", "Cocoa Knit + Trouser", "Noir Silk Shirt",
    "Noir Column Dress", "Noir Skirt Suit", "Flint Fur-Collar Coat", "Cocoa Lace-Hem Knit", "Lace + Leather Skirt",
    "Ashford Short Suit", "Umber Trouser Suit", "Marine Trouser Suit", "Claret Cropped Set", "Marine Blazer + Short",
    "Umber Wrap Coat", "Flint Trouser Suit", "Flint Jacket", "Ashford Jacket + Short", "Noir Waistcoat + Short",
    "Umber Tweed Jacket", "Blanc Poplin + Culotte", "Noir Waistcoat", "Noir Satin Shirt", "Blanc Cinched Shirt", "Noir Asymmetric Dress"];
  const fortPrice = [285, 265, 450, 135, 125, 520, 395, 245, 215, 255, 145, 280, 175, 260, 165, 225, 340, 495, 150, 260,
    310, 380, 380, 290, 300, 470, 380, 240, 295, 220, 275, 230, 120, 155, 145, 235];
  const fortCat = ["Jackets", "Jackets", "Coats", "Knitwear", "Knitwear", "Coats", "Jackets", "Sets", "Dresses", "Jackets",
    "Shirts", "Sets", "Knitwear", "Sets", "Shirts", "Dresses", "Suits", "Coats", "Knitwear", "Sets", "Suits", "Suits", "Suits",
    "Sets", "Suits", "Coats", "Suits", "Jackets", "Suits", "Sets", "Jackets", "Sets", "Jackets", "Shirts", "Shirts", "Dresses"];
  const fortia = fort.map((name, i) => {
    const id = String(i + 22);
    return { id: "for-" + id, collection: "fortia", name, category: fortCat[i], price: fortPrice[i], colour: "",
      description: "From Fortia, autumn–winter 2025.", images: [`assets/img/fortia/${id}-0.jpg`, `assets/img/fortia/${id}-1.jpg`],
      sizes: ["XS", "S", "M", "L"], fabric: "", isNew: false };
  });

  return {
    brand: { name: "MORGANÀ", city: "London", email: "info@morgana.london",
      colours: { wine: "#4A0E1C", wineDeep: "#2B0710", gold: "rgb(200,168,112)", ivory: "#F6F1E8" } },
    collections: [
      { id: "sovereign", name: "Sovereign", season: "Autumn–Winter 2026", launch: "19.11.26",
        line: "Quiet authority. Tailoring, knit and leather for the long evenings.",
        hero: "assets/video/hero-landscape.mp4", poster: "assets/video/hero-landscape-poster.jpg" },
      { id: "lumiere", name: "Lumière", season: "Summer 2026", line: "Linen, light and the Paris summer.",
        cover: "assets/img/lumiere/paris-balcony.jpg" },
      { id: "fortia", name: "Fortia", season: "Autumn–Winter 2025", line: "The first chapter. Tailoring cut for strength.",
        cover: "assets/img/fortia/39-0.jpg" }
    ],
    editorial: {
      landscape: ["land-lace-recline", "land-fur-collar", "land-cocoon", "land-suit-sofa", "land-knit-sofa", "land-blazer-bag", "land-wrap-coat", "land-black-coat"]
        .map(n => `assets/img/editorial/${n}.jpg`),
      portrait: ["port-fur", "port-lace", "port-bordeaux", "port-black-coat", "port-suit", "port-zip", "port-olive", "port-knit-walnut",
        "port-cocoon", "port-houndstooth", "port-shirt", "port-cardigan", "port-noir", "port-leopard-sofa"].map(n => `assets/img/editorial/${n}.jpg`),
      reels: ["reel-wine-doors", "reel-black-doors", "reel-atelier"].map(n => ({ src: `assets/video/${n}.mp4`, poster: `assets/video/${n}-poster.jpg` }))
    },
    products: [...sov, ...lumiere, ...fortia]
  };
})();
