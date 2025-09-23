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

const products = {
  trackers: [
    {
      id: 111,
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801986/p_001_ayrfbp.jpg",
      brand: 'PR TRACKER',
      name: 'CUSTOM MINIATURE BARBELL DISPLAY PLAQUE',
      price: 599,
      originalPrice: 1200,
      discount: "50.08%", // Updated
      ratingCount: 5,
      stock: 'In Stock',
      description: 'Your PR immortalized in 3D',
      additionalImages: [
        "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801986/p_001_ayrfbp.jpg",
        "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801966/p_002_hrxubb.jpg",
        // ... other images
      ],
      longDescription: `Celebrate your achievements in style. Features a detachable miniature barbell and a fixed holder to showcase your lift name and weight. Stands upright with included plaque stand. The perfect reminder of what you're capable of.`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 108,
      name: "MINI BENCH PRESS SETUP",
      brand: "PR TRACKER",
      price: 649,
      originalPrice: 1300,
      discount: "50.08%", // Updated
      stock: "Few Left",
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800728/nb_008_kd1ggb.jpg",
      ratingCount: 7,
      description: "Your complete home gym in miniature",
      additionalImages: [
        "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809213/bp_13_mzzmq8.jpg",
        // ... other images
      ],
      longDescription: `The ultimate starter kit - miniature bench, miniature barbell, miniature plate stand AND 4 miniature plates included. Assembles in seconds, impresses forever. Display your lifting passion without taking up real gym space.`,
      specs: { /* ...specs... */ },
      videos: [ /* ...videos... */ ],
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
      additionalImages: [ /* ...images... */ ],
      longDescription: `The ultimate starter kit - miniature bench, miniature barbell, miniature plate stand AND 4 miniature plates included. Assembles in seconds, impresses forever. Display your lifting passion without taking up real gym space.`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 113,
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802237/d_001_f402l1.jpg",
      brand: 'PR TRACKER',
      name: 'MINI DEADLIFT PLATFORM SET',
      price: 599,
      originalPrice: 1200,
      discount: '50.08%', // Updated
      ratingCount: 4,
      stock: 'Few Left',
      description: 'Where PRs become permanent',
      additionalImages: [ /* ...images... */ ],
      longDescription: `Recreate your heaviest pulls in miniature. Choose your favorite plate colors, customize the weight tag, and display with the included vertical stand. Detachable mini barbell and mini barbell holder lets you change configurations.`,
      specs: { /* ...specs... */ },
      videos: [ /* ...videos... */ ],
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
      description: "Your complete home gym in miniature",
      additionalImages: [ /* ...images... */ ],
      longDescription: `The ultimate starter kit - miniature bench, miniature barbell, miniature plate stand AND 4 miniature plates included. Assembles in seconds, impresses forever. Display your lifting passion without taking up real gym space.`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 110,
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801774/b_001_lfcc5b.jpg",
      brand: 'PR TRACKER',
      name: 'MINI BARBELL & PLATE SET',
      price: 145,
      originalPrice: 299,
      discount: '51.51%', // Updated
      ratingCount: 7,
      stock: 'Few Left',
      description: 'The dream team for rack owners',
      additionalImages: [ /* ...images... */ ],
      longDescription: `Complete your setup with our most popular combo. mini barbell features realistic size while mini plates slides on smoothly. Display together or mix with other gear. Includes complementary mini plate stand and mini steel collar clips.`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 112,
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902466/07_xq8co0.jpg",
      brand: 'PR TRACKER',
      name: 'CUSTOM 3-IN-1 POWERLIFTING DISPLAY',
      price: 999,
      originalPrice: 1200,
      discount: '16.75%', // Correct
      ratingCount: 6,
      stock: 'Limited Stock',
      description: 'The holy trinity of strength',
      additionalImages: [ /* ...images... */ ],
      longDescription: `Squat, bench, and deadlift together at last. Three beautifully crafted miniature barbells mounted on a single acrylic plaque. Includes bonus mini barbell holder & mini plate holder - because every lifter needs a spare. Command attention wherever you display it.`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
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
      additionalImages: [ /* ...images... */ ],
      longDescription: `The miniature power rack captures the essence of pushing limits and staying in control. More than a display piece, it’s a personal token of resilience and ambition. Whether on your desk or in your collection, it speaks to who you are—a lifter, a hustler, someone who never skips the hard work.`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
      offer: "🕑<strong>Complementary :</strong> Functional pair of mini steel collar clips (Worth Rs.49) -- (Gift expiring soon!)",
      configurable: true,
      baseComponents: [ /* ...baseComponents... */ ],
      hasPlates: true,
      defaultPlateType: "mini bumper plates",
      freePlates: { quantity: 2 },
      additionalAddOns: [ /* ...additionalAddOns... */ ],
      complementaryItems: [ /* ...complementaryItems... */ ],
    },
  ],
  coasters: [
    {
      id: 114,
      name: "POWER SLED COASTERS",
      brand: "GYM INSPIRED",
      price: 665,
      originalPrice: 1300,
      discount: "48.85%", // Updated
      stock: "In Stock",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894336/01_lx4vfw.jpg",
      ratingCount: 8,
      description: "Functional art for lifters who appreciate the grind",
      additionalImages: [ /* ...images... */ ],
      longDescription: `Give your space that hardcore gym vibe without sacrificing function. These 3D-printed coasters capture every detail of real sleds - from textured surfaces to weighted proportions. They're conversation starters that protect surfaces while reminding you of the burn.`,
      specs: { /* ...specs... */ },
      videos: [],
    },
    {
      id: 130,
      name: "CUSTOM MINI GYM PLATE KEYCHAIN",
      brand: "ACCESSORIES",
      price: 89,
      originalPrice: 180,
      discount: "50%", // Updated
      stock: "In Stock",
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757943817/BACK_2_nafogf.png",
      ratingCount: 82,
      description: "Your personalized lifting spirit in pocket-sized form",
      additionalImages: [ /* ...images... */ ],
      longDescription: `Never leave your gym mindset behind. This precision-printed miniature gym plate keychain. Tough enough for daily use, meaningful enough to remind you of your next PR. Attach to keys, bags, or gym tags.`,
      specs: { /* ...specs... */ },
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
      additionalImages: [ /* ...images... */ ],
      longDescription: `Never leave your gym mindset behind. This precision-printed miniature gym plate keychain. Tough enough for daily use, meaningful enough to remind you of your next PR. Attach to keys, bags, or gym tags.`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"],
    },
  ],
  accessories: [
    {
      id: 109,
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801003/h_01_qxymnk.jpg",
      brand: 'ACCESSORIES',
      name: 'MINIATURE BARBELL HOLDER',
      price: 170,
      originalPrice: 450,
      discount: '62.22%', // Correct
      ratingCount: 5,
      stock: 'In Stock',
      description: 'Showcase your bar between PRs',
      additionalImages: [ /* ...images... */ ],
      longDescription: `Designed with the same attention as the real gear. Grips your barbell securely at perfect display height. Clean lines complement any setup. A must-have for serious collectors.`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
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
      additionalImages: [ /* ...images... */ ],
      longDescription: `The foundation every mini gym needs. This versatile stand gives your mini barbell with mini plates the presentation they deserve. Sized for stability with to present your mini barbell set like a trophy`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
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
      additionalImages: [ /* ...images... */ ],
      longDescription: `Elevate your miniature gym setup with the ultimate detail: our Functional Mini Steel Collar Clips. Don't just display your progress; *secure* it. These precision-engineered clips aren't just for show – they literally hold your mini plates firmly in place, mirroring the dedication you put into every real-life lift.`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
  ],
  extras: [
    {
      id: 106,
      name: "MINI BARBELL",
      brand: "EXTRAS",
      price: 149,
      originalPrice: 299,
      discount: "50.17%", // Correct
      stock: "In Stock",
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757808969/Gemini_Generated_Image_6v91le6v91le6v91_wgv3wk.png",
      ratingCount: 4,
      description: "The centerpiece of any mini gym setup",
      additionalImages: [ /* ...images... */ ],
      longDescription: `Crafted to exacting standards at 1:12 scale. Features proper sleeve detailing and balanced weight distribution. Pairs perfectly with our racks and stands - ready for your PR display.`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 107,
      name: "MINI GYM BUMPER PLATE SET",
      brand: "EXTRAS",
      price: 199,
      originalPrice: 210,
      discount: '5.24%', // Updated
      ratingCount: 4,
      stock: 'In Stock',
      description: 'Load your bar with realistic detail',
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757809181/bp_002_ojx5w8.jpg",
      additionalImages: [ /* ...images... */ ],
      longDescription: `Authentic miniature weight plates scaled to perfection. Mix and match colors to recreate your real-life PRs. Fits all our barbells snugly. Includes plate stand for organized display.`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 127,
      name: "MINI GYM CALIBERATED PLATE SET",
      brand: "EXTRAS",
      price: 65,
      originalPrice: 79,
      discount: "17.72%", // Updated
      stock: "In Stock",
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800641/IMG_20250913_205105_dskfqj.jpg",
      ratingCount: 4,
      description: "Load your bar with realistic detail",
      additionalImages: [ /* ...images... */ ],
      longDescription: `Authentic miniature weight plates scaled to perfection. Mix and match colors to recreate your real-life PRs. Fits all our barbells snugly. Includes plate stand for organized display.`,
      specs: { /* ...specs... */ },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
  ],
  displays: []
};

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