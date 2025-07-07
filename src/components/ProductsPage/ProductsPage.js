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
      id: 108,
      name: "MINI BENCH PRESS SETUP",
      brand: "PR TRACKER",
      price: 899,
      originalPrice: 1199,
      discount: "25%", // Updated from 15% to match allProducts
      stock: "Few Left",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899415/01_os8ftd.jpg", // Updated link
      ratingCount: 7,
      description: "Your complete home gym in miniature",
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899415/01_os8ftd.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899417/02_ttniug.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899418/03_ikhedw.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899420/04_d2hdic.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899418/05_d4vqv5.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899419/06_us2eqv.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899419/07_kxguct.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899421/08_xqy2mx.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899421/09_lwjdw2.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899420/10_repulh.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899421/11_ija3ro.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899422/12_z5bnf3.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899421/13_barbell_txdfji.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899421/13_barbell_txdfji.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899422/15_wlfjfs.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899422/15_wlfjfs.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899424/17_ibl7ah.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899424/17_ibl7ah.jpg",
      ], // Filled from allProducts
      longDescription: `The ultimate starter kit - miniature bench, miniature barbell, miniature plate stand AND 4 miniature plates included. Assembles in seconds, impresses forever. Display your lifting passion without taking up real gym space.`, // Slight change to match allProducts, removed "Realistic details..."
      specs: {
        quantity: "mini disassembled bench + mini barbell + mini plate stand + 4 mini plates",
        material: "Color-infused premium plastic",
        dimensions: "16.6 cm length x 10.1 cm height",
        weight: "140g"
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"], // Added videos from allProducts
    },
    {
      id: 118, // New ID for the old bench setup
      name: "MINI OLD SCHOOL BENCH PRESS SETUP",
      brand: "PR TRACKER",
      price: 899,
      originalPrice: 1199,
      discount: "25%",
      stock: "Few Left",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899928/01_jd8yp7.jpg", // Updated link
      ratingCount: 7,
      description: "Your complete home gym in miniature",
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899928/01_jd8yp7.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899928/01_jd8yp7.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899931/04_r487zi.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899931/05_ait6bn.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899930/06_xfgaga.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899930/06_xfgaga.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899931/08_k9eomo.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899932/10_x8pe8m.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899933/11_loqnwv.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899933/11_loqnwv.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899933/13_i9w5zg.jpg",
      ],
      longDescription: `The ultimate starter kit - miniature bench, miniature barbell, miniature plate stand AND 4 miniature plates included. Assembles in seconds, impresses forever. Display your lifting passion without taking up real gym space.`,
      specs: {
        quantity:
          "mini disassembled bench + mini barbell + mini plate stand + 4 mini plates",
        material: "Color-infused premium plastic",
        dimensions: "16.6 cm length x 10.1 cm height",
        weight: "140g",
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"],
    },
    {
      id: 111,
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902121/01_evqhq9.jpg", // Updated link
      brand: 'PR TRACKER',
      name: 'CUSTOM MINIATURE BARBELL DISPLAY PLAQUE',
      price: 499,
      originalPrice: 899,
      discount: '44%', // Updated from 18% to match allProducts
      ratingCount: 5,
      stock: 'In Stock',
      description: 'Your PR immortalized in 3D',
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902121/01_evqhq9.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902129/02_p7cip1.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902123/03_nzmjh0.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902123/03_nzmjh0.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902117/05_aoswr8.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902119/06_llsjav.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902118/07_ajyoeo.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902120/08_rp67j0.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902122/09_z2qyxz.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902122/10_txd2mm.jpg",
      ], // Filled from allProducts
      longDescription: `Celebrate your achievements in style. Features fixed miniature barbell with your choice of lift name and weight. Stands upright with included holder. The perfect reminder of what you're capable of.`,
      specs: {
        quantity: "Acrylic plaque + 1 mini barbell + 1 mini barbell holder + 1 mini plate holder + 2 custom tags +1 plaque stand", // Updated to match allProducts
        material: "Color-infused premium plastic miniatures & acrylic sheet",
        dimensions: "acrylic plaque : 22.8 cm x 14 cm",
        weight: "120g"
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"], // Added videos from allProducts
    },
    {
      id: 113,
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893420/01_shxcaz.jpg", // Updated link
      brand: 'PR TRACKER',
      name: 'MINI DEADLIFT PLATFORM SET',
      price: 499,
      originalPrice: 899,
      discount: '44%', // Updated from 20% to match allProducts
      ratingCount: 4,
      stock: 'Few Left',
      description: 'Where PRs become permanent',
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893420/01_shxcaz.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893424/02_x7riv6.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893420/03_m3ewbh.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893421/04_fmpjkq.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893422/05_ean8vi.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893426/06_wd7xkw.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893423/07_nlsbvz.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893424/08_zjcq9q.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893425/10_gcg3hg.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893425/11_npxuk3.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893426/12_grehlt.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893427/13_qbjdnd.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893428/14_hmqnxw.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893428/14_hmqnxw.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893433/16_xipo14.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893433/16_xipo14.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893429/18_qpugcn.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893440/19_ozu4rw.jpg",
      ], // Filled from allProducts
      longDescription: `Recreate your heaviest pulls in miniature. Choose your favorite plate colors, customize the weight tag, and display with the included vertical stand. Detachable mini barbell and mini barbell holder lets you change configurations.`,
      specs: {
        quantity: "Platform + barbell + 4 plates + stand + 2 tags",
        material: "Weighted plastic",
        dimensions: "20 cm x 10 cm",
        weight: "150g"
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751893440/19_ozu4rw.jpg"], // Added videos from allProducts
    },
    {
      id: 112,
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902455/01_xt9w3i.jpg", // Updated link
      brand: 'PR TRACKER',
      name: 'CUSTOM 3-IN-1 POWERLIFTING DISPLAY',
      price: 799,
      originalPrice: 1200,
      discount: '33%', // Updated from 17% to match allProducts
      ratingCount: 6,
      stock: 'Limited Stock',
      description: 'The holy trinity of strength',
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902455/01_xt9w3i.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902416/03_wbeu8f.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902416/03_wbeu8f.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902432/05_ke9p3j.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902466/07_xq8co0.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902466/07_xq8co0.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902466/07_xq8co0.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902431/10_d652nm.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902448/11_iudgpv.jpg",
      ], // Filled from allProducts
      longDescription: `Squat, bench, and deadlift together at last. Three beautifully crafted miniature barbells mounted on a single acrylic plaque. Includes bonus mini barbell holder & mini plate holder - because every lifter needs a spare. Command attention wherever you display it.`,
      specs: {
        quantity: "3 mini barbells + acrylic plaque + 3 detatchable mini barbell holders + plate holder + plaque stand", // Updated to match allProducts
        material: "Color-infused premium plastic miniatures & acrylic sheet",
        dimensions: "acrylic plaque : 25.4 cm x 22.8 cm",
        weight: "190g"
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"], // Added videos from allProducts
    },
    {
      id: 110,
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901785/barbell_plates_01_iylp7d.jpg", // Updated link
      brand: 'PR TRACKER',
      name: 'MINI PLATES & MINI BARBELL SET',
      price: 429,
      originalPrice: 689,
      discount: '38%', // Updated from 15% to match allProducts
      ratingCount: 7,
      stock: 'Few Left',
      description: 'The dream team for rack owners',
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901785/barbell_plates_01_iylp7d.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901826/barbell_plates_02_kyupm6.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901824/barbell_plates_03_rzzx35.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901824/barbell_plates_03_rzzx35.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901797/barbell_plates_05_irepvd.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901798/barbell_plates_06_m6bs14.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901817/barbell_plates_07_owmcqr.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901797/barbell_plates_08_upqvqo.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901798/barbell_plates_09_lgdwjy.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901822/barbell_plates_10_kzgrgv.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901824/barbell_plates_11_momf5c.jpg",
      ], // Filled from allProducts
      longDescription: `Complete your setup with our most popular combo. mini barbell features realistic size while mini plates slides on smoothly. Display together or mix with other gear. Includes complimentary mini plate stand.`,
      specs: {
        quantity: "1 mini barbell + 6 mini plates + 1 mini barbell holder + 1 mini plates holder",
        material: "Color-infused premium plastic",
        dimensions: "Barbell: 21.8 cm | Plates: 2.1-4.5 cm",
        weight: "130g"
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"], // Added videos from allProducts
    }
  ],
  coasters: [
    {
      id: 102,
      name: "POWER SLED COASTERS (with rubber pad base)",
      brand: "GYM INSPIRED",
      price: 899,
      originalPrice: 1300,
      discount: "31%", // Updated from 25% to match allProducts
      stock: "Limited Stock",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894336/01_lx4vfw.jpg", // Updated link
      ratingCount: 8,
      description: "Functional art for lifters who appreciate the grind",
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894336/01_lx4vfw.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894338/02_d8ja8h.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894337/03_ncsr72.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894339/04_z2fvwb.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894337/05_khfilo.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894338/06_dhubl1.jpg",
      ], // Filled from allProducts
      longDescription: `Give your space that hardcore gym vibe without sacrificing function. These 3D-printed coasters capture every detail of real sleds - from textured surfaces to weighted proportions. They're conversation starters that protect surfaces while reminding you of the burn.`,
      specs: {
        quantity: "Set of 4 coasters (with rubber pad base) + mini sled stand",
        material: "Premium colored plastic",
        dimensions: "mini sled : 11cm x 7.5cm , coasters diameter : 8.5cm",
        weight: "35g each",
        finish: "Matte texture with rubberized base"
      },
      videos: [], // Added videos from allProducts (empty array for this product)
    },
    {
      id: 114,
      name: "POWER SLED COASTERS (Without Rubber Pad Base)",
      brand: "GYM INSPIRED",
      price: 749,
      originalPrice: 999,
      discount: "25%",
      stock: "In Stock",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894336/01_lx4vfw.jpg", // Updated link
      ratingCount: 8,
      description: "Functional art for lifters who appreciate the grind",
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894336/01_lx4vfw.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894338/02_d8ja8h.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894337/03_ncsr72.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894339/04_z2fvwb.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894337/05_khfilo.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894338/06_dhubl1.jpg",
      ], // Filled from allProducts
      longDescription: `Give your space that hardcore gym vibe without sacrificing function. These 3D-printed coasters capture every detail of real sleds - from textured surfaces to weighted proportions. They're conversation starters that protect surfaces while reminding you of the burn.`,
      specs: {
        quantity: "Set of 4 coasters (without rubber pad base) + mini sled stand",
        material: "Premium colored plastic",
        dimensions: "mini sled : 11cm x 7.5cm , coasters diameter : 8.5cm",
        weight: "35g each",
        finish: "Matte plastic base"
      },
      videos: [], // Added videos from allProducts (empty array for this product)
    },
    {
      id: 103,
      name: "MINI GYM PLATE KEYCHAIN",
      brand: "ACCESSORIES",
      price: 69,
      originalPrice: 99,
      discount: "30%",
      stock: "In Stock",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg", // Updated link from allProducts for id 103
      ratingCount: 12,
      description: "Your lifting spirit in pocket-sized form",
      additionalImages: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"], // Updated link from allProducts for id 103
      longDescription: `Never leave your gym mindset behind. This precision-printed miniature gym plate keychain. Tough enough for daily use, meaningful enough to remind you of your next PR. Attach to keys, bags, or gym tags.`,
      specs: {
        quantity: "1 keychain",
        material: "Durable colored plastic",
        dimensions: "keychain diameter : 4.5cm",
        weight: "18g",
        finish: "Textured mini plastic plates"
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"], // Added video from allProducts
    }
  ],
  accessories: [
    {
      id: 109,
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899814/01_bcmm19.jpg", // Updated link
      brand: 'ACCESSORIES',
      name: 'MINI BARBELL STAND',
      price: 160,
      originalPrice: 250,
      discount: '36%', // Updated from 20% to match allProducts
      ratingCount: 5,
      stock: 'In Stock',
      description: 'Showcase your bar between PRs',
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899814/01_bcmm19.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899814/01_bcmm19.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899814/03_mezyxc.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899815/04_hphmd7.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899816/05_pgrxjc.jpg",
      ], // Filled from allProducts
      longDescription: `Designed with the same attention as the real gear. Grips your barbell securely at perfect display height. Clean lines complement any setup. A must-have for serious collectors.`, // Updated to match allProducts
      specs: {
        quantity: "1 stand",
        material: "Reinforced plastic", // Updated from Color-infused premium plastic to Reinforced plastic
        dimensions: "5.5 cm x 4 cm",
        weight: "25g",
        finish: "Matte gray"
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"], // Added videos from allProducts
    },
    {
      id: 105,
      name: "BOX STAND",
      brand: "ACCESSORIES",
      price: 299,
      originalPrice: 430,
      discount: "30%", // Updated from 25% to match allProducts
      stock: "Few Left",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898418/01_egwjv0.jpg", // Updated link
      ratingCount: 3,
      description: "Elevate your mini gear in style",
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898418/01_egwjv0.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898418/01_egwjv0.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898419/03_pmn8k2.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898420/04_xbrmye.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898421/05_sl0pdf.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898421/06_yqe6mh.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898421/06_yqe6mh.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898420/08_k7d0sd.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898421/09_dwbm2w.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898425/10_ecqcwe.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898425/10_ecqcwe.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898427/12_gjoc6u.jpg",
      ], // Filled from allProducts
      longDescription: `The foundation every mini gym needs. This versatile stand gives your mini barbell with mini plates the presentation they deserve. Sized for stability with to present your mini barbell set like a trophy`,
      specs: {
        quantity: "1 mini barbel box stand + 1 mini plate holder",
        material: "Color-infused premium plasticc",
        dimensions: "5 cm x 5.5 cm x 3 cm",
        weight: "50g",
        finish: "Matte texture"
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"], // Added videos from allProducts
    }
  ],
  extras: [
    {
      id: 106, // Added MINI BARBELL from allProducts
      name: "MINI BARBELL",
      brand: "EXTRAS",
      price: 999,
      originalPrice: 1299,
      discount: "23%",
      stock: "In Stock",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898820/barbell_plates_01_zjejfu.jpg",
      ratingCount: 4,
      description: "The centerpiece of any mini gym setup",
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898820/barbell_plates_01_zjejfu.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898821/barbell_plates_02_n3z4up.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898823/barbell_plates_03_loxzk9.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898825/barbell_plates_04_y9zugz.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898827/barbell_plates_05_qgsgus.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898828/barbell_plates_06_y8falf.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898829/barbell_plates_07_lftqi8.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898832/barbell_plates_08_uzcszo.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898832/barbell_plates_08_uzcszo.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898832/barbell_plates_08_uzcszo.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg",
      ],
      longDescription: `Crafted to exacting standards at 1:12 scale. Features proper sleeve detailing and balanced weight distribution. Pairs perfectly with our racks and stands - ready for your PR display.`,
      specs: {
        quantity: "1 barbell",
        material: "Color infused plastic",
        dimensions: "21.8 cm length (8.6 inches)",
        weight: "40g",
        finish: "Smooth shaft with textured sleeves",
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"],
    },
    {
      id: 107,
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899219/01_pvllnw.jpg", // Updated link from allProducts for id 107
      brand: 'EXTRAS',
      name: 'MINI GYM PLATE SET', // Updated name to match allProducts
      price: 389,
      originalPrice: 599,
      discount: '35%', // Updated from 20% to match allProducts
      ratingCount: 4,
      stock: 'In Stock',
      description: 'Load your bar with realistic detail',
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899219/01_pvllnw.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899220/02_r1bza9.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899220/03_tfexig.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899220/04_rkveuy.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899223/05_uc7viw.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899220/06_gn0lsa.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899223/07_xlscjg.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899223/07_xlscjg.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899223/09_rbkgmj.jpg",
      ], // Filled from allProducts
      longDescription: `Authentic miniature weight plates scaled to perfection. Mix and match colors to recreate your real-life PRs. Fits all our barbells snugly. Includes plate stand for organized display.`, // Updated to match allProducts
      specs: {
        quantity: "6 mini plates + 1 plate stand (Custom prices for custom number of plates)", // Kept original, but allProducts just had material, dimensions, weight
        material: "Color-infused premium plastic",
        dimensions: "2.1 cm to 4.5 cm diameter for", // Updated to match allProducts
        weight: "10g per plate"
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"], // Added videos from allProducts
    }
  ],
  combos: [
    {
      id: 104,
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899415/01_os8ftd.jpg", // Updated link
      brand: 'COMBO DEALS',
      name: 'PR TRACKER COMBO',
      price: 2499,
      originalPrice: 2999,
      discount: '17%', // Updated from 15% to match allProducts
      ratingCount: 10,
      stock: 'Limited Stock',
      description: `More gear, less cash - the smart lifter's bundle`,
      additionalImages: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751899415/01_os8ftd.jpg"], // Updated link
      longDescription: `Why buy single pieces when you can own the complete set? This bundle combines our top-selling mini gear at 15% off. Perfect for gifting or treating yourself. Display together for an instant gym vibe on your desk or shelf.`,
      specs: {
        quantity: "Keychain + coasters + display stand",
        material: "High-quality colored plastic",
        dimensions: "Varies by item",
        weight: "Approx. 150g total"
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"], // Added videos from allProducts
    }
  ],
  displays: [
    // Your provided `products` object had an empty `displays` array.
    // If you intended to move `CUSTOM MINIATURE BARBELL DISPLAY PLAQUE`
    // and `CUSTOM 3-IN-1 POWERLIFTING DISPLAY` here, you would do so.
    // For now, I'm keeping them in `trackers` as per your original structure.
  ]
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