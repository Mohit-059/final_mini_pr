import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "./ProductDetail.css";

// Import images
import sled from "../../assets/images/power_sled_coasters.png";
import sled2 from "../../assets/images/power_sled_coasters_2.png";
import sled3 from "../../assets/images/power_sled_coasters_3.png";

import rack from "../../assets/images/mini_power_rack.jpg";
import rack1 from "../../assets/images/mini_power_rack_1.jpg";

import dumbbell from "../../assets/images/dumbbell_keychain.jpg";
import dumbbell1 from "../../assets/images/dumbbell_keychain_1.jpg";

import combo from "../../assets/images/pr_tracker_combo.jpg";
import combo1 from "../../assets/images/pr_tracker_combo_1.jpg";

import barbell from "../../assets/images/extras_barbell.png";
import plates from "../../assets/images/extras_plates.png";
import plates1 from "../../assets/images/extras_plates_1.png";
import plates2 from "../../assets/images/extras_plates_2.png";
import plates3 from "../../assets/images/extras_plates_3.png";
import plates4 from "../../assets/images/extras_plates_4.png";

import boxStand from "../../assets/images/accessories_box_stand.png";
import boxStand1 from "../../assets/images/accessories_box_stand_1.png";
import boxStand2 from "../../assets/images/accessories_box_stand_2.png";

import bench from "../../assets/images/benchpress.png";
import bench1 from "../../assets/images/benchpress_1.png";
import bench2 from "../../assets/images/benchpress_2.png";

import barbellStand from "../../assets/images/accessories_barbell_stand.png";
import barbellStand1 from "../../assets/images/accessories_barbell_stand_1.png";

import bp from "../../assets/images/barbell_and_plates.png";
import bp1 from "../../assets/images/barbell_and_plates_1.png";
import bp2 from "../../assets/images/barbell_and_plates_2.png";
import bp3 from "../../assets/images/barbell_and_plates_3.png";

// All product data
// const allProducts = [
//   // {
//   //   id: 101,
//   //   name: 'MINI POWER RACK',
//   //   brand: 'PR TRACKER',
//   //   price: 1200,
//   //   originalPrice: 1599,
//   //   discount: '25%',
//   //   stock: 'Only 5 Left',
//   //   image: rack,
//   //   ratingCount: 6,
//   //   description: 'A compact setup to push your strength limits.',
//   //   additionalImages: [rack1]
//   // },
//   {
//     id: 102,
//     name: "POWER SLED COASTERS",
//     brand: "GYM INSPIRED",
//     price: 1499,
//     originalPrice: 2000,
//     discount: "25%",
//     stock: "Limited Stock",
//     image: sled,
//     ratingCount: 8,
//     description: "Inspired coasters designed to make an impression.",
//     additionalImages: [sled2, sled3],
//     longDescription: `This set of POWER SLED COASTERS is a perfect fusion of utility and gym-inspired design. Made from durable, high-quality plastic and crafted through precise 3D printing, each coaster mimics the design of a real sled used in strength training. These coasters aren’t just functional — they're miniature conversation starters, ideal for any gym enthusiast or fitness-themed space.

// Each set includes 4 coasters shaped like mini sleds, with subtle surface texture for grip and small rubber pads below to prevent sliding or scratching surfaces. The finish is matte for a rugged, realistic look. Lightweight yet sturdy, they can hold cups, mugs, or even shaker bottles with ease.

// Whether you're decking out your desk, gifting it to a fellow lifter, or adding flair to your gym corner, these coasters deliver style and substance. Packed safely in eco-conscious wrap and ready for use straight out of the box.`,
//     specs: {
//       quantity: "Set of 4 coasters",
//       material: "3D printed high-quality plastic",
//       dimensions: "8.5 cm x 5.5 cm x 1 cm (L x W x H)",
//       weight: "Approx. 35g each",
//       finish: "Matte, rugged texture",
//       packaging: "Eco-wrapped with bubble sheet & zip pouch",
//       use: "Suitable for cups, mugs, or shaker bottles; display piece for gym lovers",
//     },
//   },
//   {
//     id: 103,
//     name: "MINI DUMBBELL KEYCHAIN",
//     brand: "ACCESSORIES",
//     price: 499,
//     originalPrice: 699,
//     discount: "30%",
//     stock: "In Stock",
//     image: dumbbell,
//     ratingCount: 12,
//     description: "Carry your lifting mindset with this stylish keychain.",
//     additionalImages: [dumbbell1],
//     longDescription: `Show off your love for lifting wherever you go with this MINI DUMBBELL KEYCHAIN. Designed for fitness enthusiasts, it's made from sturdy plastic using high-resolution 3D printing to replicate the detailed form of an actual dumbbell — right down to the knurl-like grip lines.

// Compact and lightweight, it's ideal for keys, backpacks, gym bags, or even car mirrors. Despite its mini size, the keychain has a solid, satisfying feel in hand. It won't bend or snap easily, and its fine texture resists scratches and scuffs from daily use.

// Whether you're rewarding yourself after a PR or gifting your gym buddy something meaningful, this keychain is a subtle yet powerful reminder of your lifting mindset. Delivered attached to a secure keyring, inside a clear zip pouch for presentation.`,
//     specs: {
//       quantity: "Combo of 3 items (keychain + coaster + display)",
//       material: "All items made from 3D printed plastic",
//       dimensions: "Varies by item (average 6–9 cm in length)",
//       weight: "Approx. 100g total",
//       finish: "Mixed matte and smooth finish",
//       packaging: "Branded combo box",
//       use: "Gift set, collectibles, fitness-themed decor",
//     },
//   },
//   {
//     id: 104,
//     name: "PR TRACKER COMBO",
//     brand: "COMBO DEALS",
//     price: 2499,
//     originalPrice: 2999,
//     discount: "15%",
//     stock: "Limited Stock",
//     image: combo,
//     ratingCount: 10,
//     description: "Bundle of gear to fuel your PR journey.",
//     additionalImages: [combo1],
//     longDescription: `The PR TRACKER COMBO is a hand-picked set of gym-themed mini accessories built for lifters who take pride in their passion — even off the floor. Made entirely of high-durability plastic and crafted with detail-rich 3D printing, each item in this combo is both stylish and symbolic.

// The combo typically includes a sled coaster, a mini dumbbell keychain, and one exclusive display piece (contents may vary by batch). All components are scaled-down with realistic proportions and gym-authentic design, making them perfect for desk setups, car dashboards, or collectible shelves.

// Perfect for gifting or collecting, this combo gives you a complete micro-gym vibe in one package. Every piece is lightweight, well-detailed, and finished with care. The set comes securely packed in a branded box, ready to impress on unboxing.`,
//     specs: {
//       quantity: "1 keychain with metal ring",
//       material: "3D printed plastic with metal loop",
//       dimensions: "6 cm x 2 cm",
//       weight: "Approx. 18g",
//       finish: "Textured grip, clean edge",
//       packaging: "Clear zip pouch",
//       use: "Keys, backpacks, gym bags, gifting",
//     },
//   },
//   {
//     id: 105,
//     name: "BOX STAND",
//     brand: "ACCESSORIES",
//     price: 899,
//     originalPrice: 1199,
//     discount: "25%",
//     stock: "Few Left",
//     image: boxStand,
//     ratingCount: 3,
//     description: "Display your gear with style.",
//     additionalImages: [boxStand1, boxStand2],
//     longDescription: `The BOX STAND is a compact, display-oriented accessory designed to complement your mini gym collection. Made from durable 3D-printed plastic, it's shaped to resemble an authentic plyometric box — detailed with realistic grooves and scale-correct dimensions. Whether you're showcasing your mini barbell, dumbbell, or any gym-themed decor, this stand serves as a sturdy, stylish platform.

// The surface is flat and stable, with a slightly textured finish that prevents slipping. Its minimal footprint makes it ideal for desks, display shelves, or as a base for photo/video shoots of your miniature gear. Lightweight yet firm, it's both aesthetic and functional — a must-have for collectors and creators alike.`,
//     specs: {
//       quantity: "1 box stand",
//       material: "3D printed plastic",
//       dimensions: "7 cm x 7 cm x 5 cm (L x W x H)",
//       weight: "Approx. 50g",
//       finish: "Textured matte with fine layer lines",
//       packaging: "Wrapped in protective foam sheet",
//       use: "Display platform for mini gym accessories, photo base",
//     },
//   },
//   {
//     id: 106,
//     name: "MINI BARBELL",
//     brand: "EXTRAS",
//     price: 999,
//     originalPrice: 1299,
//     discount: "25%",
//     stock: "In Stock",
//     image: barbell,
//     ratingCount: 4,
//     description: "High-quality mini barbell for display.",
//     additionalImages: [],
//     longDescription: `This MINI BARBELL is a scale-model representation of a real Olympic barbell, made entirely from high-grade plastic and 3D printed for precision. It features a smooth shaft with replicated sleeves on both sides, mimicking the silhouette and structure of the real deal. 

// Its compact size makes it perfect for display inside your mini rack or just as a desk prop that sparks conversation. The construction is firm — it doesn’t flex or warp — and the finish is clean with subtle detailing. Whether you’re a powerlifter, a gym geek, or just love themed collectibles, this is an elegant, minimalist piece to showcase your strength culture.`,
//     specs: {
//       quantity: "1 mini barbell",
//       material: "3D printed plastic",
//       dimensions: "8.6 inches length, 5mm rod diameter, 6mm sleeve diameter",
//       weight: "Approx. 40g",
//       finish: "Smooth shaft, matte ends",
//       packaging: "Foam-wrapped inside box",
//       use: "Display with racks, collectible item",
//     },
//   },
//   {
//     id: 107,
//     name: "MINI PLATE SET",
//     brand: "EXTRAS",
//     price: 699,
//     originalPrice: 899,
//     discount: "20%",
//     stock: "In Stock",
//     image: plates,
//     ratingCount: 4,
//     description: "Detailed replica weight plates for mini rack.",
//     additionalImages: [plates1, plates2, plates3, plates4],
//     longDescription: `The MINI PLATE SET is a complete collection of miniature gym plates, crafted in true-to-life proportions and printed using durable plastic. This set is perfect for those who already own a mini barbell or rack — the plates fit seamlessly onto standard mini bars from our product line.

// Each plate is printed with detail lines, simulated labeling (varies by design), and a center hole for bar placement. The set includes multiple sizes and thicknesses to simulate realistic plate stacking. Ideal for collectors and hobbyists looking to build out a full miniature lifting station.

// These plates are also great for desk decoration, stop-motion content, or gym-themed photo shoots. Compact, solid, and visually impressive.`,
//     specs: {
//       quantity: "Set of 6 plates (various sizes)",
//       material: "3D printed plastic",
//       dimensions: "Sizes range from 2 cm to 5 cm diameter",
//       weight: "Approx. 10g per plate",
//       finish: "Textured surface with smooth inner ring",
//       packaging: "Bubble-wrapped and pouch-packed",
//       use: "Accessory for mini barbell/rack, display set",
//     },
//   },
//   {
//     id: 108,
//     name: "MINI BENCH PRESS SETUP",
//     brand: "PR TRACKER",
//     price: 1599,
//     originalPrice: 1899,
//     discount: "15%",
//     stock: "Few Left",
//     image: bench,
//     ratingCount: 7,
//     description: "Realistic mini bench press model.",
//     additionalImages: [bench1, bench2],
//     longDescription: `The MINI BENCH PRESS SETUP isn't just a bench — it’s a full starter kit for your dream miniature gym layout. Along with the detailed 3D printed bench and rack frame, this package includes a **complimentary mini barbell**, **a barbell stand (holder)**, and **a compact plate holder** to complete the scene.

// You also receive **up to 4 miniature weight plates for free**, but limited to **2 pieces per weight size** — for example, 2x 25kg, 2x 20kg, etc. These plates are scaled to perfection and slide easily onto the barbell, giving a realistic stacked look. This makes the set fully functional for display, mock setups, or photography.

// Want a fully loaded rack look? You can opt for **extra plates separately**. The included plate holder keeps your plates neat and upright, just like in real gyms. All parts are 3D printed with clean, durable plastic, detailed finishes, and a realistic matte black appearance.

// Ideal for collectors, gym lovers, or anyone looking to upgrade their workspace with lifting inspiration. Everything comes disassembled but easy to assemble, neatly foam-wrapped and packed.`,
//     specs: {
//       quantity:
//         "1 bench press unit + 1 mini barbell + 1 barbell stand + 1 plate holder + 4 assorted weight plates",
//       material: "3D printed high-quality plastic",
//       dimensions: "Bench setup: 14 cm x 8 cm x 7 cm (L x W x H)",
//       weight: "Approx. 140g total (full kit)",
//       finish: "Matte texture with smooth bar and realistic grooves",
//       packaging: "Disassembled, packed in foam-lined pouch",
//       use: "Complete mini gym setup; compatible with all PR Tracker accessories",
//       extras: "Option to purchase additional plates separately",
//     },
//   },
//   {
//     id: 109,
//     name: "BARBELL STAND",
//     brand: "ACCESSORIES",
//     price: 799,
//     originalPrice: 999,
//     discount: "20%",
//     stock: "In Stock",
//     image: barbellStand,
//     ratingCount: 5,
//     description: "Elegant display stand for your barbell.",
//     additionalImages: [barbellStand1],
//     longDescription: `The BARBELL STAND is a compact, vertical holder designed to support and display your mini barbell in style. Built from strong plastic and 3D printed with reinforced layer lines, it offers both elegance and function in a minimalist format.

// The stand securely grips the barbell ends and allows for upright storage or display without rolling or tipping. Its low-profile design fits on any flat surface — ideal for desks, display shelves, or inside a mini rack. Whether used alone or with other gym props, this stand enhances your layout and keeps your setup clean and organized.

// A thoughtful addition to any mini gym collection, and an especially handy piece if you want your barbell to take center stage.`,
//     specs: {
//       quantity: "1 barbell stand",
//       material: "3D printed plastic",
//       dimensions: "5.5 cm x 3 cm x 4 cm (L x W x H)",
//       weight: "Approx. 25g",
//       finish: "Smooth base with textured support arms",
//       packaging: "Wrapped in soft foam and pouch-packed",
//       use: "Vertical display for mini barbell, desk or shelf decor",
//     },
//   },
//   {
//     id: 110,
//     name: "MINI PLATES & BARBELL SET",
//     brand: "PR TRACKER",
//     price: 1599,
//     originalPrice: 1899,
//     discount: "15%",
//     stock: "Few Left",
//     image: bp,
//     ratingCount: 7,
//     description: "Complete your rack with bar and plates.",
//     additionalImages: [bp1, bp2, bp3],
//     longDescription: `This MINI PLATES & BARBELL SET is the ultimate combo for your miniature lifting setup. It includes a precision 3D printed mini barbell along with a full set of detailed weight plates that slide on perfectly — giving you the flexibility to simulate real-life gym loading scenarios.

// The barbell has reinforced shaft ends for better plate grip, and each plate has inner ring cutouts for seamless attachment. Everything is designed to match realistic proportions, including plate thickness and size variations. The result? A tiny, fully functional visual that mirrors a legit gym bar setup — perfect for racks, benches, or shelf setups.

// Ideal for gym lovers, collectors, or even as a motivational desktop piece. The set is easy to assemble, extremely durable, and finished with a premium matte texture.`,
//     specs: {
//       quantity: "1 barbell + 6 plates",
//       material: "3D printed plastic",
//       dimensions: "Barbell: 15 cm length | Plates: 2–5 cm diameter",
//       weight: "Approx. 130g total",
//       finish: "Matte black with smooth inner fits",
//       packaging: "Custom-fit foam inside protective box",
//       use: "Complete display set, compatible with rack and bench press",
//     },
//   },
//   {
//     id: 111,
//     name: "CUSTOM BARBELL DISPLAY PLAQUE",
//     brand: "PR DISPLAY",
//     price: 1399,
//     originalPrice: 1699,
//     discount: "18%",
//     stock: "In Stock",
//     image: bp2, // replace with actual import
//     ratingCount: 5,
//     description:
//       "Fixed barbell mounted on a customizable plaque with free label and tag.",
//     additionalImages: [],
//     longDescription: `The CUSTOM BARBELL DISPLAY PLAQUE is a sleek motivational piece for gym lovers and powerlifters. It features a fixed barbell mounted on a matte-finish display plaque, complete with colorful plates and **a customizable lift tag** — choose from BENCH, DEADLIFT, SQUAT, CLEAN & JERK, or even your name.

// Included with this setup is a **free personalized weight tag** (e.g., "100kg", "405lbs", etc.) and a **rear display stand** to let it stand upright on any flat surface. Whether it's for your desk, gym shelf, or gifting, this display delivers personality and pride.

// The build quality reflects your grind — solid, compact, and clean. Great for collectors or anyone obsessed with strength culture.`,
//     specs: {
//       quantity:
//         "1 fixed barbell + display plaque + stand + custom name tag + custom weight tag",
//       material: "3D printed plastic bar and plates, matte plastic plaque",
//       dimensions: "Plaque: 18 cm x 10 cm | Barbell: 15 cm",
//       weight: "Approx. 120g",
//       finish: "Matte black plaque, multicolor plates, smooth engraved tags",
//       packaging: "Foam-wrapped and boxed securely",
//       use: "Personalized gym-themed decor, gift item, desktop display",
//       extras:
//         "Custom text and tags included; additional tags available separately",
//     },
//   },
//   {
//     id: 112,
//     name: "3-IN-1 POWERLIFTING DISPLAY PLAQUE",
//     brand: "PR DISPLAY",
//     price: 1899,
//     originalPrice: 2299,
//     discount: "17%",
//     stock: "Limited Stock",
//     image: bp3, // replace with second image you shared
//     ratingCount: 6,
//     description:
//       "Triple barbell display for squat, bench, and deadlift with free barbell holder.",
//     additionalImages: [],
//     longDescription: `The 3-IN-1 POWERLIFTING DISPLAY PLAQUE is your all-in-one tribute to the big three — SQUAT, BENCH, and DEADLIFT. Featuring three fixed miniature barbells on a vertical matte plaque, each loaded with colorful weight plates and labeled with bold, gym-style tags.

// Each lift has its own realistic mini bar setup, securely mounted using compact holders. The display includes a **free detachable stand** and a **bonus barbell holder** for showcasing an extra bar (or storing a spare). Whether for motivation, collection, or gift purposes, this setup screams dedication and discipline.

// Clean, minimal, and instantly recognizable — it's a true lifter’s badge of honor.`,
//     specs: {
//       quantity:
//         "3 mounted barbells (squat, bench, deadlift) + labeled plaque + display stand + free barbell holder",
//       material: "3D printed plastic (barbells + plates), matte vertical plaque",
//       dimensions: "Plaque: 18 cm x 18 cm",
//       weight: "Approx. 190g",
//       finish: "Matte black base, glossy color plates, bold text tags",
//       packaging: "Box packed with foam wrap",
//       use: "Strength sport collectible, desk/gym shelf decor",
//       extras: "Barbell holder included; customizable tags available on request",
//     },
//   },
//   {
//     id: 113,
//     name: "DEADLIFT PLATFORM SET",
//     brand: "PR TRACKER",
//     price: 1599,
//     originalPrice: 1999,
//     discount: "20%",
//     stock: "Few Left",
//     image: bp1, // use a suitable deadlift setup placeholder
//     ratingCount: 4,
//     description:
//       "Deadlift setup with detachable barbell, any 4 plates, custom tags & free plate stand.",
//     additionalImages: [],
//     longDescription: `The DEADLIFT PLATFORM SET is a full scene — a realistic deadlift platform with a detachable barbell, **any 4 plates of your choice**, and a **free vertical plate stand**. You also get a customizable lift tag (e.g., "DEADLIFT") and a personalized weight tag.

// Whether it’s a 100kg PR or a 500lbs beast pull, this setup brings your lifts to life in miniature form. The barbell features light knurling and accurate dimensions, and plates are swappable, letting you simulate your own record attempts.

// This is ideal for deadlift lovers who want a visual representation of their grind. Clean finish, functional display, and serious presence.`,
//     specs: {
//       quantity:
//         "1 deadlift platform + 1 detachable barbell + 4 plates (user selected) + 1 plate stand + 2 custom tags",
//       material: "3D printed plastic",
//       dimensions:
//         "Platform: 20 cm x 10 cm | Barbell: 15 cm | Plates: 2–5 cm diameter",
//       weight: "Approx. 150g",
//       finish: "Matte platform, detailed plates, crisp text tags",
//       packaging: "Foam-lined box for secure fit",
//       use: "Interactive display, personalized decor, giftable gym scene",
//       extras:
//         "Extra plates available separately; customizable lift and weight tags included",
//     },
//   },
// ];

// const allProducts = [
//   {
//     id: 102,
//     name: "POWER SLED COASTERS (with rubber pad base)",
//     brand: "GYM INSPIRED",
//     price: 1499,
//     originalPrice: 2000,
//     discount: "25%",
//     stock: "Limited Stock",
//     image: sled,
//     ratingCount: 8,
//     description: "Functional art for lifters who appreciate the grind",
//     additionalImages: [sled2, sled3],
//     longDescription: `Give your space that hardcore gym vibe without sacrificing function. These 3D-printed coasters capture every detail of real sleds - from textured surfaces to weighted proportions. They're conversation starters that protect surfaces while reminding you of the burn.`,
//     specs: {
//       quantity: "Set of 4 coasters (with rubber pad base) + mini sled stand",
//       material: "Premium colored plastic",
//       dimensions: "mini sled : 11cm x 7.5cm , coasters diameter : 8.5cm",
//       weight: "35g each",
//       finish: "Matte texture with rubberized base"
//     }
//   },{
//     id: 114,
//     name: "POWER SLED COASTERS (Without Rubber Pad Base)",
//     brand: "GYM INSPIRED",
//     price: 1499,
//     originalPrice: 2000,
//     discount: "25%",
//     stock: "In Stock",
//     image: sled,
//     ratingCount: 8,
//     description: "Functional art for lifters who appreciate the grind",
//     additionalImages: [sled2, sled3],
//     longDescription: `Give your space that hardcore gym vibe without sacrificing function. These 3D-printed coasters capture every detail of real sleds - from textured surfaces to weighted proportions. They're conversation starters that protect surfaces while reminding you of the burn.`,
//     specs: {
//       quantity: "Set of 4 coasters (without rubber pad base) + mini sled stand",
//       material: "Premium colored plastic",
//       dimensions: "mini sled : 11cm x 7.5cm , coasters diameter : 8.5cm",
//       weight: "35g each",
//       finish: "Matte plastic base"
//     }
//   },
//   {
//     id: 103,
//     name: "MINI GYM PLATE KEYCHAIN",
//     brand: "ACCESSORIES",
//     price: 69,
//     originalPrice: 99,
//     discount: "30%",
//     stock: "In Stock",
//     image: dumbbell,
//     ratingCount: 12,
//     description: "Your lifting spirit in pocket-sized form",
//     additionalImages: [dumbbell1],
//     longDescription: `Never leave your gym mindset behind. This precision-printed miniature gym plate keychain. Tough enough for daily use, meaningful enough to remind you of your next PR. Attach to keys, bags, or gym tags.`,
//     specs: {
//       quantity: "1 keychain",
//       material: "Durable colored plastic",
//       dimensions: "keychain diameter : 4.5cm",
//       weight: "18g",
//       finish: "Textured mini plastic plates"
//     }
//   },
//   {
//     id: 104,
//     name: "PR TRACKER COMBO",
//     brand: "COMBO DEALS",
//     price: 2499,
//     originalPrice: 2999,
//     discount: "15%",
//     stock: "Limited Stock",
//     image: combo,
//     ratingCount: 10,
//     description: "More gear, less cash - the smart lifter's bundle",
//     additionalImages: [combo1],
//     longDescription: `Why buy single pieces when you can own the complete set? This bundle combines our top-selling mini gear at 15% off. Perfect for gifting or treating yourself. Display together for an instant gym vibe on your desk or shelf.`,
//     specs: {
//       quantity: "Keychain + coasters + display stand",
//       material: "High-quality colored plastic",
//       dimensions: "Varies by item",
//       weight: "Approx. 150g total",
//       packaging: "Premium branded box"
//     }
//   },
//   {
//     id: 105,
//     name: "BOX STAND",
//     brand: "ACCESSORIES",
//     price: 899,
//     originalPrice: 1199,
//     discount: "25%",
//     stock: "Few Left",
//     image: boxStand,
//     ratingCount: 3,
//     description: "Elevate your mini gear in style",
//     additionalImages: [boxStand1, boxStand2],
//     longDescription: `The foundation every mini gym needs. This versatile stand gives your mini barbell with mini plates the presentation they deserve. Sized for stability with to present your mini barbell set like a trophy`,
//     specs: {
//       quantity: "1 stand",
//       material: "Reinforced plastic",
//       dimensions: "5 cm x 5.5 cm x 3 cm",
//       weight: "50g",
//       finish: "Matte texture"
//     }
//   },
//   {
//     id: 106,
//     name: "MINI BARBELL",
//     brand: "EXTRAS",
//     price: 999,
//     originalPrice: 1299,
//     discount: "25%",
//     stock: "In Stock",
//     image: barbell,
//     ratingCount: 4,
//     description: "The centerpiece of any mini gym setup",
//     additionalImages: [],
//     longDescription: `Crafted to exacting standards at 1:12 scale. Features proper sleeve detailing and balanced weight distribution. Pairs perfectly with our racks and stands - ready for your PR display.`,
//     specs: {
//       quantity: "1 barbell",
//       material: "Color infused plastic",
//       dimensions: "21.8 cm length (8.6 inches)",
//       weight: "40g",
//       finish: "Smooth shaft with textured sleeves"
//     }
//   },
//   {
//     id: 107,
//     name: "MINI GYM PLATE SET",
//     brand: "EXTRAS",
//     price: 699,
//     originalPrice: 899,
//     discount: "20%",
//     stock: "In Stock",
//     image: plates,
//     ratingCount: 4,
//     description: "Load your bar with realistic detail",
//     additionalImages: [plates1, plates2, plates3, plates4],
//     longDescription: `Authentic miniature weight plates scaled to perfection. Mix and match colors to recreate your real-life PRs. Fits all our barbells snugly. Includes plate stand for organized display.`,
//     specs: {
//       material: "Color-infused premium plastic",
//       dimensions: "2.1 cm to 4.5 cm diameter for",
//       weight: "10g per plate",
//     }
//   },
//   {
//     id: 108,
//     name: "MINI BENCH PRESS SETUP",
//     brand: "PR TRACKER",
//     price: 1599,
//     originalPrice: 1899,
//     discount: "15%",
//     stock: "Few Left",
//     image: bench,
//     ratingCount: 7,
//     description: "Your complete home gym in miniature",
//     additionalImages: [bench1, bench2],
//     longDescription: `The ultimate starter kit - miniature bench, miniature barbell, miniature plate stand AND 4 miniature plates included. Assembles in seconds, impresses forever. Display your lifting passion without taking up real gym space.`,
//     specs: {
//       quantity: "mini disassembled bench + mini barbell + mini plate stand + 4 mini plates",
//       material: "Color-infused premium plastic",
//       dimensions: "16.6 cm length x 10.1 cm height",
//       weight: "140g"
//     }
//   },
//   {
//     id: 109,
//     name: "MINIATURE BARBELL STAND",
//     brand: "ACCESSORIES",
//     price: 799,
//     originalPrice: 999,
//     discount: "20%",
//     stock: "In Stock",
//     image: barbellStand,
//     ratingCount: 5,
//     description: "Showcase your bar between PRs",
//     additionalImages: [barbellStand1],
//     longDescription: `Designed with the same attention as the real gear. Grips your barbell securely at perfect display height. Clean lines complement any setup. A must-have for serious collectors.`,
//     specs: {
//       quantity: "1 stand",
//       material: "Reinforced plastic",
//       dimensions: "5.5 cm x 4 cm",
//       weight: "25g",
//       finish: "Matte black",
//       packaging: "Recyclable sleeve"
//     }
//   },
//   {
//     id: 110,
//     name: "MINI PLATES & BARBELL SET",
//     brand: "PR TRACKER",
//     price: 1599,
//     originalPrice: 1899,
//     discount: "15%",
//     stock: "Few Left",
//     image: bp,
//     ratingCount: 7,
//     description: "The dream team for rack owners",
//     additionalImages: [bp1, bp2, bp3],
//     longDescription: `Complete your setup with our most popular combo. Barbell features enhanced grip texture while plates slide on smoothly. Display together or mix with other gear. Includes complimentary plate stand.`,
//     specs: {
//       quantity: "1 barbell + 6 plates + stand",
//       material: "Colorfast plastic",
//       dimensions: "Barbell: 21.8 cm | Plates: 2.1-4.5 cm",
//       weight: "130g",
//       packaging: "Premium gift box"
//     }
//   },
//   {
//     id: 111,
//     name: "CUSTOM BARBELL DISPLAY PLAQUE",
//     brand: "PR DISPLAY",
//     price: 1399,
//     originalPrice: 1699,
//     discount: "18%",
//     stock: "In Stock",
//     image: bp2,
//     ratingCount: 5,
//     description: "Your PR immortalized in 3D",
//     additionalImages: [],
//     longDescription: `Celebrate your achievements in style. Features fixed barbell with your choice of lift name and weight. Stands upright with included holder. The perfect reminder of what you're capable of.`,
//     specs: {
//       quantity: "Plaque + barbell + stand + 2 custom tags",
//       material: "Layered plastic",
//       dimensions: "18 cm x 10 cm",
//       weight: "120g",
//       packaging: "Reinforced display box"
//     }
//   },
//   {
//     id: 112,
//     name: "3-IN-1 POWERLIFTING DISPLAY",
//     brand: "PR DISPLAY",
//     price: 1899,
//     originalPrice: 2299,
//     discount: "17%",
//     stock: "Limited Stock",
//     image: bp3,
//     ratingCount: 6,
//     description: "The holy trinity of strength",
//     additionalImages: [],
//     longDescription: `Squat, bench, and deadlift together at last. Three beautifully crafted barbells mounted on a single plaque. Includes bonus barbell holder - because every lifter needs a spare. Command attention wherever you display it.`,
//     specs: {
//       quantity: "3 barbells + plaque + stand + holder",
//       material: "Multi-texture plastic",
//       dimensions: "18 cm x 18 cm",
//       weight: "190g",
//       packaging: "Presentation-grade box"
//     }
//   },
//   {
//     id: 113,
//     name: "DEADLIFT PLATFORM SET",
//     brand: "PR TRACKER",
//     price: 1599,
//     originalPrice: 1999,
//     discount: "20%",
//     stock: "Few Left",
//     image: bp1,
//     ratingCount: 4,
//     description: "Where PRs become permanent",
//     additionalImages: [],
//     longDescription: `Recreate your heaviest pulls in miniature. Choose your favorite plate colors, customize the weight tag, and display with the included vertical stand. Detachable barbell lets you change configurations.`,
//     specs: {
//       quantity: "Platform + barbell + 4 plates + stand + 2 tags",
//       material: "Weighted plastic",
//       dimensions: "20 cm x 10 cm",
//       weight: "150g",
//       packaging: "Studio-quality case"
//     }
//   }
// ];




const allProducts = [
  {
    id: 102,
    name: "POWER SLED COASTERS (with rubber pad base)",
    brand: "GYM INSPIRED",
    price: 899,
    originalPrice: 1300,
    discount: "31%",
    stock: "Limited Stock",
    image: sled,
    ratingCount: 8,
    description: "Functional art for lifters who appreciate the grind",
    additionalImages: [sled2, sled3],
    longDescription: `Give your space that hardcore gym vibe without sacrificing function. These 3D-printed coasters capture every detail of real sleds - from textured surfaces to weighted proportions. They're conversation starters that protect surfaces while reminding you of the burn.`,
    specs: {
      quantity: "Set of 4 coasters (with rubber pad base) + mini sled stand",
      material: "Premium colored plastic",
      dimensions: "mini sled : 11cm x 7.5cm , coasters diameter : 8.5cm",
      weight: "35g each",
      finish: "Matte texture with rubberized base"
    }
  },{
    id: 114,
    name: "POWER SLED COASTERS (Without Rubber Pad Base)",
    brand: "GYM INSPIRED",
    price: 749,
    originalPrice: 999,
    discount: "25%",
    stock: "In Stock",
    image: sled,
    ratingCount: 8,
    description: "Functional art for lifters who appreciate the grind",
    additionalImages: [sled2, sled3],
    longDescription: `Give your space that hardcore gym vibe without sacrificing function. These 3D-printed coasters capture every detail of real sleds - from textured surfaces to weighted proportions. They're conversation starters that protect surfaces while reminding you of the burn.`,
    specs: {
      quantity: "Set of 4 coasters (without rubber pad base) + mini sled stand",
      material: "Premium colored plastic",
      dimensions: "mini sled : 11cm x 7.5cm , coasters diameter : 8.5cm",
      weight: "35g each",
      finish: "Matte plastic base"
    }
  },
  {
    id: 103,
    name: "MINI GYM PLATE KEYCHAIN",
    brand: "ACCESSORIES",
    price: 69,
    originalPrice: 99,
    discount: "30%",
    stock: "In Stock",
    image: dumbbell,
    ratingCount: 12,
    description: "Your lifting spirit in pocket-sized form",
    additionalImages: [dumbbell1],
    longDescription: `Never leave your gym mindset behind. This precision-printed miniature gym plate keychain. Tough enough for daily use, meaningful enough to remind you of your next PR. Attach to keys, bags, or gym tags.`,
    specs: {
      quantity: "1 keychain",
      material: "Durable colored plastic",
      dimensions: "keychain diameter : 4.5cm",
      weight: "18g",
      finish: "Textured mini plastic plates"
    }
  },
  {
    id: 104,
    name: "PR TRACKER COMBO",
    brand: "COMBO DEALS",
    price: 2499,
    originalPrice: 2999,
    discount: "17%",
    stock: "Limited Stock",
    image: combo,
    ratingCount: 10,
    description: "More gear, less cash - the smart lifter's bundle",
    additionalImages: [combo1],
    longDescription: `Why buy single pieces when you can own the complete set? This bundle combines our top-selling mini gear at 15% off. Perfect for gifting or treating yourself. Display together for an instant gym vibe on your desk or shelf.`,
    specs: {
      quantity: "Keychain + coasters + display stand",
      material: "High-quality colored plastic",
      dimensions: "Varies by item",
      weight: "Approx. 150g total",
      packaging: "Premium branded box"
    }
  },
  {
    id: 105,
    name: "BOX STAND",
    brand: "ACCESSORIES",
    price: 299,
    originalPrice: 430,
    discount: "30%",
    stock: "Few Left",
    image: boxStand,
    ratingCount: 3,
    description: "Elevate your mini gear in style",
    additionalImages: [boxStand1, boxStand2],
    longDescription: `The foundation every mini gym needs. This versatile stand gives your mini barbell with mini plates the presentation they deserve. Sized for stability with to present your mini barbell set like a trophy`,
    specs: {
      quantity: "1 mini barbel box stand + 1 mini plate holder",
      material: "Color-infused premium plasticc",
      dimensions: "5 cm x 5.5 cm x 3 cm",
      weight: "50g",
      finish: "Matte texture"
    }
  },
  {
    id: 106,
    name: "MINI BARBELL",
    brand: "EXTRAS",
    price: 999,
    originalPrice: 1299,
    discount: "23%",
    stock: "In Stock",
    image: barbell,
    ratingCount: 4,
    description: "The centerpiece of any mini gym setup",
    additionalImages: [],
    longDescription: `Crafted to exacting standards at 1:12 scale. Features proper sleeve detailing and balanced weight distribution. Pairs perfectly with our racks and stands - ready for your PR display.`,
    specs: {
      quantity: "1 barbell",
      material: "Color infused plastic",
      dimensions: "21.8 cm length (8.6 inches)",
      weight: "40g",
      finish: "Smooth shaft with textured sleeves"
    }
  },
  {
    id: 107,
    name: "MINI GYM PLATE SET",
    brand: "EXTRAS",
    price: 389,
    originalPrice: 599,
    discount: "35%",
    stock: "In Stock",
    image: plates,
    ratingCount: 4,
    description: "Load your bar with realistic detail",
    additionalImages: [plates1, plates2, plates3, plates4],
    longDescription: `Authentic miniature weight plates scaled to perfection. Mix and match colors to recreate your real-life PRs. Fits all our barbells snugly. Includes plate stand for organized display.`,
    specs: {
      material: "Color-infused premium plastic",
      dimensions: "2.1 cm to 4.5 cm diameter for",
      weight: "10g per plate",
    }
  },
  {
    id: 108,
    name: "MINI BENCH PRESS SETUP",
    brand: "PR TRACKER",
    price: 899,
    originalPrice: 1199,
    discount: "25%",
    stock: "Few Left",
    image: bench,
    ratingCount: 7,
    description: "Your complete home gym in miniature",
    additionalImages: [bench1, bench2],
    longDescription: `The ultimate starter kit - miniature bench, miniature barbell, miniature plate stand AND 4 miniature plates included. Assembles in seconds, impresses forever. Display your lifting passion without taking up real gym space.`,
    specs: {
      quantity: "mini disassembled bench + mini barbell + mini plate stand + 4 mini plates",
      material: "Color-infused premium plastic",
      dimensions: "16.6 cm length x 10.1 cm height",
      weight: "140g"
    }
  },
  {
    id: 109,
    name: "MINIATURE BARBELL STAND",
    brand: "ACCESSORIES",
    price: 160,
    originalPrice: 250,
    discount: "36%",
    stock: "In Stock",
    image: barbellStand,
    ratingCount: 5,
    description: "Showcase your bar between PRs",
    additionalImages: [barbellStand1],
    longDescription: `Designed with the same attention as the real gear. Grips your barbell securely at perfect display height. Clean lines complement any setup. A must-have for serious collectors.`,
    specs: {
      quantity: "1 stand",
      material: "Reinforced plastic",
      dimensions: "5.5 cm x 4 cm",
      weight: "25g",
      finish: "Matte gray"
    }
  },
  {
    id: 110,
    name: "MINI PLATES & MINI BARBELL SET",
    brand: "PR TRACKER",
    price: 429,
    originalPrice: 689,
    discount: "38%",
    stock: "Few Left",
    image: bp1,
    ratingCount: 7,
    description: "The dream team for rack owners",
    additionalImages: [bp1, bp2, bp3],
    longDescription: `Complete your setup with our most popular combo. mini barbell features realistic size while mini plates slides on smoothly. Display together or mix with other gear. Includes complimentary mini plate stand.`,
    specs: {
      quantity: "1 mini barbell + 6 mini plates + 1 mini barbell holder + 1 mini plates holder",
      material: "Color-infused premium plastic",
      dimensions: "Barbell: 21.8 cm | Plates: 2.1-4.5 cm",
      weight: "130g"
    }
  },
  {
    id: 111,
    name: "CUSTOM MINIATURE BARBELL DISPLAY PLAQUE",
    brand: "PR TRACKER",
    price: 499,
    originalPrice: 899,
    discount: "44%",
    stock: "In Stock",
    image: bp2,
    ratingCount: 5,
    description: "Your PR immortalized in 3D",
    additionalImages: [],
    longDescription: `Celebrate your achievements in style. Features fixed miniature barbell with your choice of lift name and weight. Stands upright with included holder. The perfect reminder of what you're capable of.`,
    specs: {
      quantity: "Acrylic plaque + 1 mini barbell + 1 mini barbell holder + 1 mini plate holder + 2 custom tags +1 plaque stand",
      material: "Color-infused premium plastic miniatures & acrylic sheet",
      dimensions: "acrylic plaque : 22.8 cm x 14 cm",
      weight: "120g"
    }
  },
  {
    id: 112,
    name: "CUSTOM 3-IN-1 POWERLIFTING DISPLAY",
    brand: "PR TRACKER",
    price: 799,
    originalPrice: 1200,
    discount: "33%",
    stock: "Limited Stock",
    image: bp3,
    ratingCount: 6,
    description: "The holy trinity of strength",
    additionalImages: [],
    longDescription: `Squat, bench, and deadlift together at last. Three beautifully crafted miniature barbells mounted on a single acrylic plaque. Includes bonus mini barbell holder & mini plate holder - because every lifter needs a spare. Command attention wherever you display it.`,
    specs: {
      quantity: "3 mini barbells + acrylic plaque + 3 detatchable mini barbell holders + plate holder + plaque stand",
      material: "Color-infused premium plastic miniatures & acrylic sheet",
      dimensions: "acrylic plaque : 25.4 cm x 22.8 cm",
      weight: "190g"
    }
  },
  {
    id: 113,
    name: "MINI DEADLIFT PLATFORM SET",
    brand: "PR TRACKER",
    price: 499,
    originalPrice: 899,
    discount: "44%",
    stock: "Few Left",
    permline:"Fully Customizable with complementary stickers/labels",
    image: bp1,
    ratingCount: 4,
    description: "Where PRs become permanent",
    additionalImages: [],
    longDescription: `Recreate your heaviest pulls in miniature. Choose your favorite plate colors, customize the weight tag, and display with the included vertical stand. Detachable mini barbell and mini barbell holder lets you change configurations.`,
    specs: {
      quantity: "Platform + barbell + 4 plates + stand + 2 tags",
      material: "Weighted plastic",
      dimensions: "20 cm x 10 cm",
      weight: "150g"
    }
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const found = allProducts.find((item) => item.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product)
    return <div className="product-not-found">Product not found</div>;

  const images = [product.image, ...(product.additionalImages || [])];

  return (
    <section className="product-detail">
      <button className="back-button" onClick={() => navigate("/products")}>
        ← Back to Products
      </button>

      <div className="product-container">
        <div className="image-section">
          <div
            className="main-image-container"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={images[selectedImageIndex]}
              alt={product.name}
              className="main-image"
            />
          </div>

          {images.length > 1 && (
            <div className="thumbnail-container">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`thumbnail ${
                    selectedImageIndex === i ? "active" : ""
                  }`}
                  onClick={() => setSelectedImageIndex(i)}
                  alt={product.name}
                />
              ))}
            </div>
          )}
        </div>

        <div className="info-section">
          <h1>{product.name}</h1>
          <p className="product-brand">{product.brand}</p>
          <p className="product-stock">{product.stock}</p>
          <p className="product-desc">{product.description}</p>
          <p className="product-desc producsa">{product.permline}</p>

          <div className="price-info">
            <span className="current-price">₹{product.price}</span>
            {product.originalPrice && (
              <>
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="discount">
                  {Math.round(
                    (1 - product.price / product.originalPrice) * 100
                  )}
                  % OFF
                </span>
              </>
            )}
          </div>

          
            <div style={{
  // background: 'linear-gradient(to right, rgba(219, 216, 207), transparent)',
  background: 'rgb(219, 216, 207)',
  borderLeft: '5px solid rgb(219, 216, 207)',
  padding: '14px 18px',
  margin: '20px 0',
  borderRadius: '8px',
  fontWeight: 500,
  fontSize: '14px',
  color: 'black',
  boxShadow: '0 0 10px rgba(185, 181, 165, 0.2)'
}}>
  🚨 <strong>Limited-Time Deal:</strong> Save big while it lasts — early birds always win.
</div>


          <button 
            style={{background:'rgb(136, 135, 131)'}}
            className="whatsapp-button"
            onClick={() =>
              window.open(
                `https://wa.me/+919354840793?text=${encodeURIComponent(
                  `Hi, I'm interested to buy ${product.name} (₹${product.price})!`
                )}`,
                "_blank"
              )
            }
          >
            <FaWhatsapp className="whatsapp-icon" /> DM to Order (+91
            9354840793)
          </button>

          {product.longDescription && (
            <div className="product-long-desc">
              <h3>Details</h3>
              <p>{product.longDescription}</p>
            </div>
          )}
          {product.specs && (
            <div className="product-specs">
              <h3>Specifications</h3>
              <table className="specs-table">
                <tbody>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td>
                        <strong>
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </strong>
                      </td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Modal preview */}
      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <img
              src={images[selectedImageIndex]}
              alt="Preview"
              className="modal-main-image"
            />
            <div className="modal-thumbnails">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="preview"
                  className={`modal-thumbnail ${
                    selectedImageIndex === i ? "active" : ""
                  }`}
                  onClick={() => setSelectedImageIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
