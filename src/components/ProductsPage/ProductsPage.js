import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsPage.css';

// // === TRACKERS ===
// import rack from '../../assets/images/mini_power_rack.jpg';
// import rack1 from '../../assets/images/mini_power_rack_1.jpg';
// import bench from '../../assets/images/benchpress.png';
// import bench1 from '../../assets/images/benchpress_1.png';
// import bench2 from '../../assets/images/benchpress_2.png';
// import bp1 from '../../assets/images/barbell_and_plates_1.png';
// import bp2 from '../../assets/images/barbell_and_plates_2.png';
// import bp3 from '../../assets/images/barbell_and_plates_3.png';

// // === COASTERS ===
// import sled from '../../assets/images/power_sled_coasters.png';
// import sled1 from '../../assets/images/power_sled_coasters_1.jpg';
// import sled2 from '../../assets/images/power_sled_coasters_2.png';
// import sled3 from '../../assets/images/power_sled_coasters_3.png';

// // === ACCESSORIES ===
// import dumbbell from '../../assets/images/dumbbell_keychain.jpg';
// import dumbbell1 from '../../assets/images/dumbbell_keychain_1.jpg';
// import barbellStand from '../../assets/images/accessories_barbell_stand.png';
// import barbellStand1 from '../../assets/images/accessories_barbell_stand_1.png';
// import boxStand from '../../assets/images/accessories_box_stand.png';
// import boxStand1 from '../../assets/images/accessories_box_stand_1.png';
// import boxStand2 from '../../assets/images/accessories_box_stand_2.png';

// // === COMBOS ===
// import combo from '../../assets/images/pr_tracker_combo.jpg';
// import combo1 from '../../assets/images/pr_tracker_combo_1.jpg';

// // === EXTRAS ===
// import plates from '../../assets/images/extras_plates.png';
// import plates1 from '../../assets/images/extras_plates_1.png';
// import plates2 from '../../assets/images/extras_plates_2.png';
// import plates3 from '../../assets/images/extras_plates_3.png';
// import plates4 from '../../assets/images/extras_plates_4.png';
// import barbell from '../../assets/images/extras_barbell.png';

















// import bench01 from "../../assets/product_images/bench/01.jpg";
// import bench02 from "../../assets/product_images/bench/02.jpg";
// import bench03 from "../../assets/product_images/bench/03.jpg";
// import bench04 from "../../assets/product_images/bench/04.jpg";
// import bench05 from "../../assets/product_images/bench/05.jpg";
// import bench06 from "../../assets/product_images/bench/06.jpg";
// import bench07 from "../../assets/product_images/bench/07.jpg";
// import bench08 from "../../assets/product_images/bench/08.jpg";
// import bench09 from "../../assets/product_images/bench/09.jpg";
// import bench10 from "../../assets/product_images/bench/10.jpg";
// import bench11 from "../../assets/product_images/bench/11.jpg";
// import bench12 from "../../assets/product_images/bench/12.jpg";
// import bench13 from "../../assets/product_images/bench/13_barbell.jpg";
// import bench14 from "../../assets/product_images/bench/14.jpg";
// import bench15 from "../../assets/product_images/bench/15.jpg";
// import bench16 from "../../assets/product_images/bench/16_plates.jpg";
// import bench17 from "../../assets/product_images/bench/17.jpg";
// import bench18 from "../../assets/product_images/bench/18.jpg";

// import benchvideo from "../../assets/product_images/bench/vid_01.mp4";
// import benchvideo2 from "../../assets/product_images/bench/vid_02.mp4";

// import coaster01 from "../../assets/product_images/coasters/01.jpg";
// import coaster02 from "../../assets/product_images/coasters/02.jpg";
// import coaster03 from "../../assets/product_images/coasters/03.jpg";
// import coaster04 from "../../assets/product_images/coasters/04.jpg";
// import coaster05 from "../../assets/product_images/coasters/05.jpg";
// import coaster06 from "../../assets/product_images/coasters/06.jpg";

// import deadlift01 from "../../assets/product_images/deadlift/01.jpg";
// import deadlift02 from "../../assets/product_images/deadlift/02.jpg";
// import deadlift03 from "../../assets/product_images/deadlift/03.jpg";
// import deadlift04 from "../../assets/product_images/deadlift/04.jpg";
// import deadlift05 from "../../assets/product_images/deadlift/05.jpg";
// import deadlift06 from "../../assets/product_images/deadlift/06.jpg";
// import deadlift07 from "../../assets/product_images/deadlift/07.jpg";
// import deadlift08 from "../../assets/product_images/deadlift/08.jpg";
// import deadlift10 from "../../assets/product_images/deadlift/10.jpg";
// import deadlift11 from "../../assets/product_images/deadlift/11.jpg";
// import deadlift12 from "../../assets/product_images/deadlift/12.jpg";
// import deadlift13 from "../../assets/product_images/deadlift/13.jpg";
// import deadlift14 from "../../assets/product_images/deadlift/14.jpg";
// import deadlift15 from "../../assets/product_images/deadlift/15.jpg";
// import deadlift16 from "../../assets/product_images/deadlift/16.jpg";
// import deadlift17 from "../../assets/product_images/deadlift/17.jpg";
// import deadlift18 from "../../assets/product_images/deadlift/18.jpg";
// import deadlift19 from "../../assets/product_images/deadlift/19.jpg";

// import singlePlaque01 from "../../assets/product_images/single plaque/01.jpg";
// import singlePlaque02 from "../../assets/product_images/single plaque/02.jpg";
// import singlePlaque03 from "../../assets/product_images/single plaque/03.jpg";
// import singlePlaque04 from "../../assets/product_images/single plaque/04.jpg";
// import singlePlaque05 from "../../assets/product_images/single plaque/05.jpg";
// import singlePlaque06 from "../../assets/product_images/single plaque/06.jpg";
// import singlePlaque07 from "../../assets/product_images/single plaque/07.jpg";
// import singlePlaque08 from "../../assets/product_images/single plaque/08.jpg";
// import singlePlaque09 from "../../assets/product_images/single plaque/09.jpg";
// import singlePlaque10 from "../../assets/product_images/single plaque/10.jpg";

// import barbellholder01 from "../../assets/product_images/barbell holder/01.jpg";
// import barbellholder02 from "../../assets/product_images/barbell holder/02.jpg";
// import barbellholder03 from "../../assets/product_images/barbell holder/03.jpg";
// import barbellholder04 from "../../assets/product_images/barbell holder/04.jpg";
// import barbellholder05 from "../../assets/product_images/barbell holder/05.jpg";

// import plates01 from '../../assets/product_images/plates/01.jpg';
// import plates02 from '../../assets/product_images/plates/02.jpg';
// import plates03 from '../../assets/product_images/plates/03.jpg';
// import plates04 from '../../assets/product_images/plates/04.jpg';
// import plates05 from '../../assets/product_images/plates/05.jpg';
// import plates06 from '../../assets/product_images/plates/06.jpg';
// import plates07 from '../../assets/product_images/plates/07.jpg';
// import plates08 from '../../assets/product_images/plates/08.jpg';
// import plates09 from '../../assets/product_images/plates/09.jpg';

// import boxStand01 from '../../assets/product_images/box_stand/01.jpg';
// import boxStand02 from '../../assets/product_images/box_stand/02.jpg';
// import boxStand03 from '../../assets/product_images/box_stand/03.jpg';
// import boxStand04 from '../../assets/product_images/box_stand/04.jpg';
// import boxStand05 from '../../assets/product_images/box_stand/05.jpg';
// import boxStand06 from '../../assets/product_images/box_stand/06.jpg';
// import boxStand07 from '../../assets/product_images/box_stand/07.jpg';
// import boxStand08 from '../../assets/product_images/box_stand/08.jpg';
// import boxStand09 from '../../assets/product_images/box_stand/09.jpg';
// import boxStand10 from '../../assets/product_images/box_stand/10.jpg';
// import boxStand11 from '../../assets/product_images/box_stand/11.jpg';
// import boxStand12 from '../../assets/product_images/box_stand/12.jpg';



// import doubleTripleStandPlaque01 from '../../assets/product_images/double  triple stand plaque/01.jpg';
// import doubleTripleStandPlaque03 from '../../assets/product_images/double  triple stand plaque/03.jpg';
// import doubleTripleStandPlaque04 from '../../assets/product_images/double  triple stand plaque/04.jpg';
// import doubleTripleStandPlaque05 from '../../assets/product_images/double  triple stand plaque/05.jpg';
// // import doubleTripleStandPlaque06 from '../../assets/product_images/double  triple stand plaque/06.jpg'; // Omitted as per screenshot
// import doubleTripleStandPlaque07 from '../../assets/product_images/double  triple stand plaque/07.jpg';
// import doubleTripleStandPlaque08 from '../../assets/product_images/double  triple stand plaque/08.jpg';
// import doubleTripleStandPlaque09 from '../../assets/product_images/double  triple stand plaque/09.jpg';
// import doubleTripleStandPlaque10 from '../../assets/product_images/double  triple stand plaque/10.jpg';
// import doubleTripleStandPlaque11 from '../../assets/product_images/double  triple stand plaque/11.jpg';


// import oldbench01 from '../../assets/product_images/bench old/01.jpg';
// import oldbench02 from '../../assets/product_images/bench old/02.jpg';
// import oldbench04 from '../../assets/product_images/bench old/04.jpg';
// import oldbench05 from '../../assets/product_images/bench old/05.jpg';
// import oldbench06 from '../../assets/product_images/bench old/06.jpg';
// import oldbench07 from '../../assets/product_images/bench old/07.jpg';
// import oldbench08 from '../../assets/product_images/bench old/08.jpg';
// import oldbench10 from '../../assets/product_images/bench old/10.jpg';
// import oldbench11 from '../../assets/product_images/bench old/11.jpg';
// import oldbench12 from '../../assets/product_images/bench old/12.jpg';
// import oldbench13 from '../../assets/product_images/bench old/13.jpg';

// import barbell_plates_01 from '../../assets/product_images/barbell, plates and clips/barbell_plates_01.jpg';
// import barbell_plates_02 from '../../assets/product_images/barbell, plates and clips/barbell_plates_02.jpg';
// import barbell_plates_03 from '../../assets/product_images/barbell, plates and clips/barbell_plates_03.jpg';
// import barbell_plates_04 from '../../assets/product_images/barbell, plates and clips/barbell_plates_04.jpg';
// import barbell_plates_05 from '../../assets/product_images/barbell, plates and clips/barbell_plates_05.jpg';
// import barbell_plates_06 from '../../assets/product_images/barbell, plates and clips/barbell_plates_06.jpg';
// import barbell_plates_07 from '../../assets/product_images/barbell, plates and clips/barbell_plates_07.jpg';
// import barbell_plates_08 from '../../assets/product_images/barbell, plates and clips/barbell_plates_08.jpg';
// import barbell_plates_09 from '../../assets/product_images/barbell, plates and clips/barbell_plates_09.jpg';
// import barbell_plates_10 from '../../assets/product_images/barbell, plates and clips/barbell_plates_10.jpg';
// import barbell_plates_11 from '../../assets/product_images/barbell, plates and clips/barbell_plates_11.jpg';


// import deadliftvideo from '../../assets/product_images/deadlift/vid_01.mp4'





const categoryDisplayNames = {
  trackers: 'PR TRACKERS',
  coasters: 'GYM-INSPIRED UTILITIES',
  accessories: 'ACCESSORIES',
  combos: 'LIMITED TIME COMBO DEALS',
  extras: 'EXTRAS'
};

const categorySubtitles = {
  trackers: 'Mini setups to track your Personal Records',
  coasters: 'Useful everyday items redesigned',
  accessories: 'Mini Accessories for your mini PR trackers',
  combos: 'Curated bundles to save big while lifting bigger',
  extras: 'Add-ons that complete your miniature setup'
};

// src/data/productData.js

// Define common plate pricing structure
export const PLATE_PRICES = {
  "mini bumper plates": {
    "25kg": 50,
    "20kg": 45,
    "15kg": 40,
    "10kg": 35,
    "5kg": 8,
    "2.5kg": 4.5,
  },
  "mini caliberated plates": {
    "25kg": 35,
    "20kg": 30,
    // "15kg (same as mini bumper plate)": 25,
    // "10kg (same as mini bumper plate)": 20,
    // "5kg (same as mini bumper plate)": 8,
    // "2.5kg (same as mini bumper plate)": 4.5,
  },
};

export const allProducts = [
  {
    id: 119,
    name: "FUNCTIONAL MINI STEEL COLLAR CLIPS",
    brand: "ACCESSORIES",
    price: 25,
    originalPrice: 50,
    discount: "50%", // Correct
    stock: "In Stock",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757798089/IMG_20250913_202847_bayruw.jpg",
    ratingCount: 0,
    description: "Secure your mini plates, amplify your focus – every detail matters.",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757797949/Add_a_subheading_rgirh2.png",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757798085/IMG_20250913_202854_jyvnnk.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757798089/IMG_20250913_202847_bayruw.jpg",
    ],
    longDescription: `Elevate your miniature gym setup with the ultimate detail: our Functional Mini Steel Collar Clips. Don't just display your progress; *secure* it. These precision-engineered clips aren't just for show – they literally hold your mini plates firmly in place, mirroring the dedication you put into every real-life lift.

This small but mighty accessory creates a sense of completeness and permanence for your PR display, visually reinforcing your commitment. It's the subtle yet powerful touch that signals true attention to detail, transforming a collection of mini weights into a perfectly locked-down testament to your discipline.

Experience the satisfying click of a secure fit and notice how this tiny element brings your entire setup to life, reminding you that even the smallest actions contribute to significant results.`,
    specs: {
      quantity: "1 pair of mini steel collar clips",
      material: "Stainless steel",
      dimensions: "approx. 1 inch height",
      finish: "Matte metallic",
    },
    videos: ["https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"],
    configurable: false,
    hasPlates: false,
  },
  {
    id: 114,
    name: "POWER SLED COASTERS (Without Rubber Pad Base)",
    brand: "GYM INSPIRED",
    price: 665,
    originalPrice: 1300,
    discount: "48.85%", // Updated
    stock: "In Stock",
    image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894336/01_lx4vfw.jpg",
    ratingCount: 8,
    description: "Functional art for lifters who appreciate the grind",
    additionalImages: [
      "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894338/02_d8ja8h.jpg",
      "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894337/03_ncsr72.jpg",
      "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894339/04_z2fvwb.jpg",
      "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894337/05_khfilo.jpg",
      "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894338/06_dhubl1.jpg",
    ],
    longDescription: `Give your space that hardcore gym vibe without sacrificing function. These 3D-printed coasters capture every detail of real sleds - from textured surfaces to weighted proportions. They're conversation starters that protect surfaces while reminding you of the burn.`,
    specs: {
      quantity: "Set of 4 coasters (without rubber pad base) + mini sled stand",
      material: "Durable PLA Plastic",
      dimensions: "mini sled : 11cm x 7.5cm , coasters diameter : 8.5cm",
      finish: "Matte plastic base",
    },
    videos: [],
    configurable: false,
    hasPlates: false,
  },
  {
    id: 103,
    name: "MINI GYM PLATE KEYCHAIN",
    brand: "ACCESSORIES",
    price: 59,
    originalPrice: 118,
    discount: "50%", // Correct
    stock: "In Stock",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757808515/IMG_20250913_200344_hoqkik.jpg",
    ratingCount: 12,
    description: "Your lifting spirit in pocket-sized form",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757808515/IMG_20250913_200344_hoqkik.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757808524/IMG_20250913_200421_a6gfob.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757808524/IMG_20250913_200407_tolphn.jpg",
    ],
    longDescription: `Never leave your gym mindset behind. This precision-printed miniature gym plate keychain. Tough enough for daily use, meaningful enough to remind you of your next PR. Attach to keys, bags, or gym tags.`,
    specs: {
      quantity: "1 keychain",
      material: "Durable PLA Plastic",
      dimensions: "keychain diameter : 4.5cm",
      weight: "approx. 10-13g"
    },
    videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"],
    configurable: false,
    hasPlates: false,
  },
  {
    id: 130,
    name: "CUSTOM MINI GYM PLATE KEYCHAIN",
    brand: "ACCESSORIES",
    price: 139,
    originalPrice: 210,
    discount: "33.81%", // Updated
    stock: "In Stock",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757943817/BACK_2_nafogf.png",
    ratingCount: 82,
    description: "Your personalized lifting spirit in pocket-sized form",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757943816/BACK_3_wckaay.png"
    ],
    longDescription: `Never leave your gym mindset behind. This precision-printed miniature gym plate keychain. Tough enough for daily use, meaningful enough to remind you of your next PR. Attach to keys, bags, or gym tags.`,
    specs: {
      quantity: "1 keychain",
      material: "Durable PLA Plastic",
      dimensions: "keychain diameter : 4.5cm",
      weight: "approx. 10-13g",
    },
    videos: [],
    configurable: false,
    hasPlates: false,
  },
  {
    id: 104,
    name: "PR TRACKER COMBO",
    brand: "COMBO DEALS",
    price: 2499,
    originalPrice: 2999,
    discount: "16.67%", // Correct
    stock: "Limited Stock",
    image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899415/01_os8ftd.jpg",
    ratingCount: 10,
    description: "More gear, less cash - the smart lifter's bundle",
    additionalImages: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751899415/01_os8ftd.jpg"],
    longDescription: `Why buy single pieces when you can own the complete set? This bundle combines our top-selling mini gear at 15% off. Perfect for gifting or treating yourself. Display together for an instant gym vibe on your desk or shelf.`,
    specs: {
      quantity: "Mini Bench Press + mini deadlift platform + single barbell display plaque + box barbell stand + barbell holder ",
      material: "Durable PLA Plastic",
      dimensions: "Varies by item",
      weight: "Approx. 150g total",
    },
    videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: true,
    baseComponents: [
      { name: "Mini Bench Press Setup", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Deadlift Platform Set", priceImpact: 0, checked: true, disabled: true },
      { name: "Custom Miniature Barbell Display Plaque", priceImpact: 0, checked: true, disabled: true },
      { name: "Box Stand", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Barbell Stand", priceImpact: 0, checked: true, disabled: true },
    ],
    hasPlates: true,
    defaultPlateType: "mini bumper plates",
    additionalAddOns: [
      { name: "Extra Plate Holder", priceImpact: 35, isQuantitative: true }
    ],
    complementaryItems: [
      { name: "Mini Steel Collar Clips (Pair)", priceImpact: 0, checked: true, disabled: true, type: "complementary" }
    ],
  },
  {
    id: 105,
    name: "MINIATURE BARBELL BOX STAND",
    brand: "ACCESSORIES",
    price: 260,
    originalPrice: 520,
    discount: "50%", // Correct
    stock: "Few Left",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757798219/bs_01_embo6l.png",
    ratingCount: 3,
    description: "Elevate your mini gear in style",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757797948/2.1_1_gvifsk.png",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757798223/bs_02_ub7nyh.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801003/h_01_qxymnk.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801001/h_03_r43k1w.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757798225/bs_05_zw427x.jpg",
    ],
    longDescription: `The foundation every mini gym needs. This versatile stand gives your mini barbell with mini plates the presentation they deserve. Sized for stability with to present your mini barbell set like a trophy`,
    specs: {
      quantity: "1 mini barbel box stand",
      material: "Durable PLA Plastic",
      dimensions: "5 cm x 5.5 cm x 3 cm",
      weight: "50g",
      finish: "Matte texture",
    },
    videos: ["https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: false,
    hasPlates: false,
  },
  {
    id: 106,
    name: "MINI BARBELL",
    brand: "EXTRAS",
    price: 149,
    originalPrice: 299,
    discount: "50.17%", // Correct
    stock: "In Stock",
    image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898820/barbell_plates_01_zjejfu.jpg",
    ratingCount: 4,
    description: "The centerpiece of any mini gym setup",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757808969/Gemini_Generated_Image_6v91le6v91le6v91_wgv3wk.png",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801774/b_001_lfcc5b.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801771/b_002_nqbk1u.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801770/b_003_hxtzpm.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801770/b_004_t32n8q.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801766/b_005_yyw5ku.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801764/b_006_xow5gx.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801767/b_007_mpatg0.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801771/b_008_kjcrfv.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757797953/4.2_zeyate.png",
    ],
    longDescription: `Crafted to exacting standards at 1:12 scale. Features proper sleeve detailing and balanced weight distribution. Pairs perfectly with our racks and stands - ready for your PR display.`,
    specs: {
      quantity: "1 mini barbell",
      material: "Durable PLA Plastic",
      dimensions: "approx. 21.9 cm length (8.6 inches)",
      weight: "approx. 10-15g"
    },
    videos: ["https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: false,
    hasPlates: false,
  },
  {
    id: 107,
    name: "MINI GYM BUMPER PLATE SET (1x6)",
    brand: "EXTRAS",
    price: 199,
    originalPrice: 210,
    discount: "5.24%", // Updated
    stock: "In Stock",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809186/bp_003_avzqr9.jpg",
    ratingCount: 4,
    description: "Load your bar with realistic detail",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809184/bp_01_wslbkn.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809181/bp_002_ojx5w8.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809180/bp_004_sdxkah.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809180/bp_005_ejasoi.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809187/bp_006_mcv19h.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809187/bp_007_c21hwq.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809191/bp_008_c01u01.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809204/bp_009_ab7wax.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809209/bp_010_bitkzk.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809217/bp_011_koymtq.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809205/bp_012_p90zix.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809213/bp_13_mzzmq8.jpg",
    ],
    longDescription: `Authentic miniature weight plates scaled to perfection. Mix and match colors to recreate your real-life PRs. Fits all our barbells snugly. Includes plate stand for organized display.`,
    specs: {
      quantity: "Set of 6 (1 of each size/weight) mini bumper plates + mini plate stand",
      material: "Durable PLA Plastic",
      dimensions: "2.1 cm to 4.5 cm diameter for",
      weight: "approx. 30-50g for whole set of 6",
    },
    videos: ["https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: false,
    hasPlates: false,
  },
  {
    id: 127,
    name: "MINI GYM CALIBERATED PLATE SET (1x2)",
    brand: "EXTRAS",
    price: 65,
    originalPrice: 79,
    discount: "17.72%", // Updated
    stock: "In Stock",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800276/BACK_awoklw.png",
    ratingCount: 4,
    description: "Load your bar with realistic detail",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800236/MINI_BUMPER_PLATES_mxhhv3.png",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800229/MINI_BUMPER_PLATES_1_ovkcm7.png",
    ],
    longDescription: `Authentic miniature weight plates scaled to perfection. Mix and match colors to recreate your real-life PRs. Fits all our barbells snugly. Includes plate stand for organized display.`,
    specs: {
      quantity: "Set of 6 (1 of each size/weight) mini caliberated plates + mini plate stand",
      material: "Durable PLA Plastic",
      dimensions: "2.1 cm to 4.5 cm diameter for",
      weight: "10g per plate",
    },
    videos: ["https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: false,
    hasPlates: false,
  },
  {
    id: 108,
    name: "MINI BENCH PRESS SETUP",
    brand: "PR TRACKER",
    price: 649,
    originalPrice: 1300,
    discount: "50.08%", // Updated
    stock: "In Stock",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757810248/nb_001_obvvy3.jpg",
    ratingCount: 7,
    description: "Your complete home gym in miniature",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757797955/5_1_lnrkkb.png",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800683/nb_003_kgog4r.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800691/nb_004_zpjmrw.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800692/nb_005_rfjlxd.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800691/nb_006_mkoque.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800721/nb_007_pv1cqd.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800728/nb_008_kd1ggb.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800738/nb_009_ift6of.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800731/nb_010_en59mq.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800732/nb_011_vyot3e.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800744/nb_012_bozxjm.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800752/nb_013_tvgq1k.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800767/nb_014_kdamjf.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800769/nb_015_hqeayd.jpg",
    ],
    longDescription: `The ultimate starter kit -  Assembles in seconds, impresses forever. Display your lifting passion without taking up real gym space.`,
    specs: {
      quantity: "mini disassembled bench + mini barbell + mini plate stand ",
      material: "Durable PLA Plastic",
      dimensions: "approx. 6inch length x 5inch width x 4inch height"
    },
    videos: [
      "https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"
    ],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: true,
    baseComponents: [
      { name: "Mini Bench", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Barbell", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Plate Stand", priceImpact: 0, checked: true, disabled: true },
    ],
    hasPlates: true,
    defaultPlateType: "mini bumper plates",
    freePlates: {
      quantity: 2,
    },
    additionalAddOns: [
      { name: "Box Stand", priceImpact: 250, checked: false },
      { name: "Mini Barbell Stand", priceImpact: 299, checked: false },
      { name: "Extra Plate Holder", priceImpact: 35, isQuantitative: true }
    ],
    complementaryItems: [
      { name: "Mini Steel Collar Clips (Pair)", priceImpact: 0, checked: true, disabled: true, type: "complementary" }
    ],
  },
  {
    id: 109,
    name: "MINIATURE BARBELL HOLDER",
    brand: "ACCESSORIES",
    price: 170,
    originalPrice: 450,
    discount: "62.22%", // Correct
    stock: "In Stock",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801003/h_01_qxymnk.jpg",
    ratingCount: 5,
    description: "Showcase your bar between PRs",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800988/h_02_bhknps.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801001/h_03_r43k1w.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800998/h_04_fad7qe.jpg",
    ],
    longDescription: `Designed with the same attention as the real gear. Grips your mini barbell securely and perfectly. Clean lines complement any setup. A must-have for serious collectors.`,
    specs: {
      quantity: "1 barbell holder",
      material: "Durable PLA Plastic",
      dimensions: "5.5 cm x 4 cm",
      finish: "Matte gray",
    },
    videos: ["https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: false,
    hasPlates: false,
  },
  {
    id: 118,
    name: "MINI OLD SCHOOL BENCH PRESS SETUP",
    brand: "PR TRACKER",
    price: 649,
    originalPrice: 1298,
    discount: "50%", // Correct
    stock: "Few Left",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801281/ob_001_mckych.jpg",
    ratingCount: 7,
    description: "Your complete home gym in miniature",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801292/ob_002_r8aobt.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801297/ob_003_nwtx1x.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801296/ob_004_fick4e.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801278/ob_005_vtcjoj.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801292/ob_006_s9bpdn.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801301/ob_007_w94fgt.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801309/ob_008_vmqp66.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801310/ob_009_xcjf9m.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757797954/3.5_1_vfdy8a.png",
    ],
    longDescription: `The ultimate starter kit - miniature bench, miniature barbell, miniature plate stand AND 4 miniature plates included. Assembles in seconds, impresses forever. Display your lifting passion without taking up real gym space.`,
    specs: {
      quantity: "mini disassembled bench + mini barbell + mini plate stand + 4 mini plates",
      material: "Durable PLA Plastic",
      dimensions: "16.6 cm length x 10.1 cm height",
    },
    videos: ["https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: true,
    baseComponents: [
      { name: "Mini Old School Bench", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Barbell", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Plate Stand", priceImpact: 0, checked: true, disabled: true },
    ],
    hasPlates: true,
    defaultPlateType: "mini bumper plates",
    freePlates: {
      quantity: 2,
    },
    additionalAddOns: [
      { name: "Box Stand", priceImpact: 250, checked: false },
      { name: "Mini Barbell Stand", priceImpact: 299, checked: false },
      { name: "Extra Plate Holder", priceImpact: 35, isQuantitative: true }
    ],
    complementaryItems: [
      { name: "Mini Steel Collar Clips (Pair)", priceImpact: 0, checked: true, disabled: true, type: "complementary" }
    ],
  },
  {
    id: 138,
    name: "MINI SQUAT RACK",
    brand: "PR TRACKER",
    price: 699,
    originalPrice: 1400,
    discount: "50.07%", // Updated
    stock: "Few Left",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801605/s_001_uazncf.jpg",
    ratingCount: 7,
    description: "Own a piece of gym culture—small enough for your desk, powerful enough to inspire.",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801607/s_002_bxfeif.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801611/s_003_ekqr39.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801608/s_004_alfwq7.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801611/s_005_qqxdzn.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801606/s_006_jyjryh.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757797953/4.2_zeyate.png",
    ],
    longDescription: `This miniature squat rack isn’t just décor—it’s a daily reminder of discipline and strength. Perfect for collectors and fitness lovers, it sparks motivation every time you see it. Keep it on your desk or shelf and let it silently remind you: consistency builds champions.`,
    specs: {
      quantity: "mini disassembled squat rack + mini barbell + plate holder",
      material: "Durable PLA Plastic",
      dimensions: "approx. 4.2inch length x 4.2inch width x 7inch height"
    },
    videos: ["https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: true,
    baseComponents: [
      { name: "Mini Squat Rack", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Barbell", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Plate Stand", priceImpact: 0, checked: true, disabled: true },
    ],
    hasPlates: true,
    defaultPlateType: "mini bumper plates",
    freePlates: {
      quantity: 2,
    },
    additionalAddOns: [
      { name: "Box Stand", priceImpact: 250, checked: false },
      { name: "Mini Barbell Stand", priceImpact: 299, checked: false },
      { name: "Extra Plate Holder", priceImpact: 35, isQuantitative: true }
    ],
    complementaryItems: [
      { name: "Mini Steel Collar Clips (Pair)", priceImpact: 0, checked: true, disabled: true, type: "complementary" }
    ],
  },
  {
    id: 139,
    name: "MINI POWER RACK",
    brand: "PR TRACKER",
    price: 499,
    originalPrice: 799,
    discount: "37.55%", // Correct
    stock: "Coming Soon",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757944550/WhatsApp_Image_2025-09-15_at_7.22.27_PM_sncoxd.jpg",
    ratingCount: 9,
    description: "The ultimate symbol of power—shrunk to collectible size.",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757944608/IMG_20250913_211825_e7el8o.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757944605/IMG_20250913_211821_pb1x69.jpg",
    ],
    longDescription: `The miniature power rack captures the essence of pushing limits and staying in control. More than a display piece, it’s a personal token of resilience and ambition. Whether on your desk or in your collection, it speaks to who you are—a lifter, a hustler, someone who never skips the hard work.`,
    specs: {
      quantity: "mini disassembled powerrack + mini barbell + mini plate stand",
      material: "Durable PLA Plastic",
      dimensions: "Undefined"
    },
    videos: ["https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: true,
    baseComponents: [
      { name: "Mini Squat Rack", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Barbell", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Plate Stand", priceImpact: 0, checked: true, disabled: true },
    ],
    hasPlates: true,
    defaultPlateType: "mini bumper plates",
    freePlates: {
      quantity: 2,
    },
    additionalAddOns: [
      { name: "Box Stand", priceImpact: 250, checked: false },
      { name: "Mini Barbell Stand", priceImpact: 299, checked: false },
      { name: "Extra Plate Holder", priceImpact: 35, isQuantitative: true }
    ],
    complementaryItems: [
      { name: "Mini Steel Collar Clips (Pair)", priceImpact: 0, checked: true, disabled: true, type: "complementary" }
    ],
  },
  {
    id: 110,
    name: "MINI PLATES & MINI BARBELL SET",
    brand: "PR TRACKER",
    price: 145,
    originalPrice: 299,
    discount: "51.51%", // Updated
    stock: "Few Left",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801774/b_001_lfcc5b.jpg",
    ratingCount: 7,
    description: "The dream team for rack owners",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801771/b_002_nqbk1u.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801770/b_003_hxtzpm.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801770/b_004_t32n8q.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801766/b_005_yyw5ku.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801764/b_006_xow5gx.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801767/b_007_mpatg0.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801771/b_008_kjcrfv.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757797951/8.6_drlvz6.png",
    ],
    longDescription: `Complete your setup with our most popular combo. mini barbell features realistic size while mini plates slides on smoothly. Display together or mix with other gear. Includes complimentary mini plate stand.`,
    specs: {
      quantity: "1 mini barbell + 1 mini plates holder",
      material: "Durable PLA Plastic",
      dimensions: "Barbell: 21.9 cm | Plates: 2.1-4.5 cm"
    },
    videos: ["https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: true,
    baseComponents: [
      { name: "Mini Barbell", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Plate Stand", priceImpact: 0, checked: true, disabled: true },
    ],
    hasPlates: true,
    defaultPlateType: "mini bumper plates",
    additionalAddOns: [
      { name: "Box Stand", priceImpact: 250, checked: false },
      { name: "Mini Barbell Stand", priceImpact: 299, checked: false },
      { name: "Extra Plate Holder", priceImpact: 35, isQuantitative: true }
    ],
    complementaryItems: [
      { name: "Mini Steel Collar Clips (Pair)", priceImpact: 0, checked: true, disabled: true, type: "complementary" }
    ],
  },
  {
    id: 111,
    name: "CUSTOM MINIATURE BARBELL DISPLAY PLAQUE",
    brand: "PR TRACKER",
    price: 599,
    originalPrice: 1200,
    discount: "50.08%", // Updated
    stock: "In Stock",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801986/p_001_ayrfbp.jpg",
    ratingCount: 5,
    description: "Your PR immortalized in 3D",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801966/p_002_hrxubb.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801972/p_003_v2cnvn.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801973/p_004_wrbowb.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801973/p_005_onjqc2.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801967/p_006_dn9hgk.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801985/p_007_q8f6bv.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801976/p_008_jkxhvy.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801990/p_009_jwe2g5.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801988/p_010_visj0b.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801993/p_011_f2ihnj.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801985/p_012_vi24p7.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757797951/9_1_pgaejy.png",
    ],
    longDescription: `Celebrate your achievements in style. Features fixed miniature barbell with your choice of lift name and weight. Stands upright with included holder. The perfect reminder of what you're capable of.`,
    specs: {
      quantity: "Acrylic plaque + 1 mini barbell + 1 mini barbell holder + 1 mini plate holder + 2 custom tags +1 plaque stand",
      material: "acrylic sheet & durable PLA Plastic",
      dimensions: "acrylic plaque : 9inch x 5.5inch",
    },
    videos: ["https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: true,
    baseComponents: [
      { name: "Acrylic Plaque", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Barbell holder (locked on plaque)", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Barbell ", priceImpact: 0, checked: true, disabled: true },
    ],
    hasPlates: true,
    defaultPlateType: "mini bumper plates",
    additionalAddOns: [
      { name: "Box Stand", priceImpact: 250, checked: false },
      { name: "Mini Barbell Holder", priceImpact: 160, checked: false },
      { name: "Extra Plate Holder", priceImpact: 35, isQuantitative: true }
    ],
    complementaryItems: [
      { name: "Mini Plate Stand", priceImpact: 0, checked: true, disabled: true, type: "complementary" },
      { name: "Mini Steel Collar Clips (Pair)", priceImpact: 0, checked: true, disabled: true, type: "complementary" },
      { name: "Custom Label Stickers (4)", priceImpact: 0, checked: true, disabled: true, type: "complementary" },
    ],
  },
  {
    id: 112,
    name: "CUSTOM 3-IN-1 POWERLIFTING DISPLAY",
    brand: "PR TRACKER",
    price: 999,
    originalPrice: 1200,
    discount: "16.75%", // Correct
    stock: "Limited Stock",
    image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902466/07_xq8co0.jpg",
    ratingCount: 6,
    description: "The holy trinity of strength",
    additionalImages: [
      "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902431/10_d652nm.jpg"
    ],
    longDescription: `Squat, bench, and deadlift together at last. Three beautifully crafted miniature barbells mounted on a single acrylic plaque. Includes bonus mini barbell holder & mini plate holder - because every lifter needs a spare. Command attention wherever you display it.`,
    specs: {
      quantity: "3 mini barbells + acrylic plaque + plate holder + plaque stand",
      material: "acrylic sheet & durable PLA Plastic",
      dimensions: "acrylic plaque : 25.4 cm x 22.8 cm"
    },
    videos: ["https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4"],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: true,
    baseComponents: [
      { name: "Acrylic Plaque", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Barbell holders (3 - locked on plaque)", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Barbells", priceImpact: 0, checked: true, disabled: true },
    ],
    hasPlates: true,
    defaultPlateType: "mini bumper plates",
    additionalAddOns: [
      { name: "Box Stand", priceImpact: 250, checked: false },
      { name: "Mini Barbell Holder (additional)", priceImpact: 160, checked: false },
      { name: "Extra Plate Holder", priceImpact: 35, isQuantitative: true }
    ],
    complementaryItems: [
      { name: "Mini Plate Holder", priceImpact: 0, checked: true, disabled: true, type: "complementary" },
      { name: "Mini Steel Collar Clips (Pair)", priceImpact: 0, checked: true, disabled: true, type: "complementary" },
      { name: "Custom Label Stickers (4)", priceImpact: 0, checked: true, disabled: true, type: "complementary" },
    ],
  },
  {
    id: 113,
    name: "MINI DEADLIFT PLATFORM SET",
    brand: "PR TRACKER",
    price: 599,
    originalPrice: 1200,
    discount: "50.08%", // Updated
    stock: "In Stock",
    image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802237/d_001_f402l1.jpg",
    ratingCount: 4,
    description: "Where PRs become permanent",
    additionalImages: [
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802232/d_002_dvvty8.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802236/d_003_hwf3l0.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802230/d_004_ojxu0n.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802237/d_005_kdiuy5.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802240/d_006_zypnvu.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802238/d_007_mspv7p.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802255/d_008_uz4ye6.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802249/d_009_huavos.jpg",
      "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802258/d_010_kqoh2r.jpg",
      "https://res.cloudinary.com/dkybkcox5/video/upload/v1751893470/vid_01_oal6o2.mp4",
      "https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4",
    ],
    longDescription: `Recreate your heaviest pulls in miniature. Choose your favorite plate colors, customize the weight tag, and display with pride & Detachable mini barbell lets you change configurations.`,
    specs: {
      quantity: "acrylic mini deadlift platform + barbell + stand + 2 tags",
      material: "acrylic & durable PLA Plastic",
      dimensions: "9inch x 4inch"
    },
    videos: [
      "https://res.cloudinary.com/dr55mgsnm/video/upload/v1758458631/all_rcbkqz.mp4",
    ],
    offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
    configurable: true,
    baseComponents: [
      { name: "Acrylic Deadlift Platform", priceImpact: 0, checked: true, disabled: true },
      { name: "Mini Barbell", priceImpact: 0, checked: true, disabled: true },
      { name: "Plate Stand", priceImpact: 0, checked: true, disabled: true },
    ],
    hasPlates: true,
    defaultPlateType: "mini bumper plates",
    additionalAddOns: [
      { name: "Extra Plate Holder", priceImpact: 35, isQuantitative: true }
    ],
    complementaryItems: [
      { name: "Mini Steel Collar Clips (Pair)", priceImpact: 0, checked: true, disabled: true, type: "complementary" },
      { name: "Custom Label Stickers (2)", priceImpact: 0, checked: true, disabled: true, type: "complementary" },
    ],
  },
];

const ProductsPage = () => {
  return (
    <section className="products-page">
      <h1 className="main-product-heading">SHOP YOUR MINI SETUP NOW</h1>
      {Object.entries(products).map(([category, items]) => (
        <div className="category-section" key={category}>
          <h2 className="category-heading">{categoryDisplayNames[category]}</h2>
          <p className="category-subtitle">{categorySubtitles[category]}</p>
          <div className="product-row">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsPage;