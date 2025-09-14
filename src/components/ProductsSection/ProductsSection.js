import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CategoryGrid/CategoryGrid.css';

// Importing local assets (assuming these paths are correct in your project)
import one from '../../assets/card_images/barbell.png';
import sled from '../../assets/card_images/sled3.png';
import bench from '../../assets/card_images/bench.png';
import accessories from '../../assets/card_images/accessories2.png';
import benchh from '../../assets/card_images/finall.png';
import plates from '../../assets/card_images/plates.png';

const CategoryGrid = () => {
  const navigate = useNavigate();

  // Define the allProducts array as per the latest provided data for price reference
  const allProducts = [
    { 
      id: 102,
      name: "POWER SLED COASTERS (with rubber pad base)",
      brand: "GYM INSPIRED",
      price: 945,
      originalPrice: 1300,
      discount: "27%",
      stock: "Limited Stock",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894336/01_lx4vfw.jpg",
      ratingCount: 8,
      description: "Functional art for lifters who appreciate the grind",
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894336/01_lx4vfw.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894338/02_d8ja8h.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894337/03_ncsr72.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894339/04_z2fvwb.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894337/05_khfilo.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894338/06_dhubl1.jpg",
      ],
      longDescription: `Give your space that hardcore gym vibe without sacrificing function. These 3D-printed coasters capture every detail of real sleds - from textured surfaces to weighted proportions. They're conversation starters that protect surfaces while reminding you of the burn.`,
      specs: {
        quantity: "Set of 4 coasters (with rubber pad base) + mini sled stand",
        material: "Premium colored plastic",
        dimensions: "mini sled : 11cm x 7.5cm , coasters diameter : 8.5cm",
        weight: "35g each",
        finish: "Matte texture with rubberized base",
      },
      videos: [],
    },
    {
      id: 114,
      name: "POWER SLED COASTERS (Without Rubber Pad Base)",
      brand: "GYM INSPIRED",
      price: 799,
      originalPrice: 999,
      discount: "20%",
      stock: "In Stock",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894336/01_lx4vfw.jpg",
      ratingCount: 8,
      description: "Functional art for lifters who appreciate the grind",
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894336/01_lx4vfw.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894338/02_d8ja8h.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894337/03_ncsr72.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894339/04_z2fvwb.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894337/05_khfilo.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894338/06_dhubl1.jpg",
      ],
      longDescription: `Give your space that hardcore gym vibe without sacrificing function. These 3D-printed coasters capture every detail of real sleds - from textured surfaces to weighted proportions. They're conversation starters that protect surfaces while reminding you of the burn.`,
      specs: {
        quantity: "Set of 4 coasters (without rubber pad base) + mini sled stand",
        material: "Premium colored plastic",
        dimensions: "mini sled : 11cm x 7.5cm , coasters diameter : 8.5cm",
        weight: "35g each",
        finish: "Matte plastic base",
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
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alibaba.com%2Fproduct-detail%2FWsnbwye-adjustable-dumbbell-pair-keychain-2D_1601153344343.html&psig=AOvVaw3SPObs5_kLLXO2X1zJ1X-3&ust=1752316134514000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDN3rrMtI4DFQAAAAAdAAAAABAL",
      ratingCount: 12,
      description: "Your lifting spirit in pocket-sized form",
      additionalImages: ["https://images-na.ssl-images-amazon.com/images/I/71sDglDpLJL._AC_UL600_SR600,600_.jpg"],
      longDescription: `Never leave your gym mindset behind. This precision-printed miniature gym plate keychain. Tough enough for daily use, meaningful enough to remind you of your next PR. Attach to keys, bags, or gym tags.`,
      specs: {
        quantity: "1 keychain",
        material: "Durable colored plastic",
        dimensions: "keychain diameter : 4.5cm",
        weight: "18g",
        finish: "Textured mini plastic plates",
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751898836/barbell_plates_11_p4sb1p.jpg"],
    },
    {
      id: 104,
      name: "PR TRACKER COMBO",
      brand: "COMBO DEALS",
      price: 2499,
      originalPrice: 2999,
      discount: "17%",
      stock: "Limited Stock",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899415/01_os8ftd.jpg",
      ratingCount: 10,
      description: "More gear, less cash - the smart lifter's bundle",
      additionalImages: ["https://res.cloudinary.com/dkybkcox5/image/upload/v1751899415/01_os8ftd.jpg"],
      longDescription: `Why buy single pieces when you can own the complete set? This bundle combines our top-selling mini gear at 15% off. Perfect for gifting or treating yourself. Display together for an instant gym vibe on your desk or shelf.`,
      specs: {
        quantity: "Mini Bench Press + mini deadlift platform + single barbell display plaque + box barbell stand + barbell holder ",
        material: "High-quality colored plastic",
        dimensions: "Varies by item",
        weight: "Approx. 150g total",
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 105,
      name: "BOX STAND",
      brand: "ACCESSORIES",
      price: 350,
      originalPrice: 430,
      discount: "19%",
      stock: "Few Left",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898418/01_egwjv0.jpg",
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
      ],
      longDescription: `The foundation every mini gym needs. This versatile stand gives your mini barbell with mini plates the presentation they deserve. Sized for stability with to present your mini barbell set like a trophy`,
      specs: {
        quantity: "1 mini barbel box stand + 1 mini plate holder",
        material: "Color-infused premium plasticc",
        dimensions: "5 cm x 5.5 cm x 3 cm",
        weight: "50g",
        finish: "Matte texture",
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 106,
      name: "MINI BARBELL",
      brand: "EXTRAS",
      price: 199,
      originalPrice: 1299,
      discount: "85%",
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
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898832/08_uzcszo.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751898832/08_uzcszo.jpg",
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
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 107,
      name: "MINI GYM PLATE SET",
      brand: "EXTRAS",
      price: 450,
      originalPrice: 599,
      discount: "25%",
      stock: "In Stock",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899219/01_pvllnw.jpg",
      ratingCount: 4,
      description: "Load your bar with realistic detail",
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
      ],
      longDescription: `Authentic miniature weight plates scaled to perfection. Mix and match colors to recreate your real-life PRs. Fits all our barbells snugly. Includes plate stand for organized display.`,
      specs: {
        material: "Color-infused premium plastic",
        dimensions: "2.1 cm to 4.5 cm diameter for",
        weight: "10g per plate",
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 108,
      name: "MINI BENCH PRESS SETUP",
      brand: "PR TRACKER",
      price: 999,
      originalPrice: 1299,
      discount: "23%",
      stock: "Few Left",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899415/01_os8ftd.jpg",
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
      ],
      longDescription: `The ultimate starter kit - miniature bench, miniature barbell, miniature plate stand AND 4 miniature plates included. Assembles in seconds, impresses forever. Display your lifting passion without taking up real gym space.`,
      specs: {
        quantity:
          "mini disassembled bench + mini barbell + mini plate stand + 4 mini plates",
        material: "Color-infused premium plastic",
        dimensions: "16.6 cm length x 10.1 cm height",
        weight: "140g",
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898745/vid_01_pdxiex.mp4", "https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 109,
      name: "MINIATURE BARBELL STAND",
      brand: "ACCESSORIES",
      price: 299,
      originalPrice: 450,
      discount: "34%",
      stock: "In Stock",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899814/01_bcmm19.jpg",
      ratingCount: 5,
      description: "Showcase your bar between PRs",
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899814/01_bcmm19.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899814/01_bcmm19.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899814/03_mezyxc.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899815/04_hphmd7.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899816/05_pgrxjc.jpg",
      ],
      longDescription: `Designed with the same attention as the real gear. Grips your barbell securely at perfect display height. Clean lines complement any setup. A must-have for serious collectors.`,
      specs: {
        quantity: "1 stand",
        material: "Reinforced plastic",
        dimensions: "5.5 cm x 4 cm",
        weight: "25g",
        finish: "Matte gray",
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 118,
      name: "MINI OLD SCHOOL BENCH PRESS SETUP",
      brand: "PR TRACKER",
      price: 845,
      originalPrice: 1199,
      discount: "29%",
      stock: "Few Left",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899928/01_jd8yp7.jpg",
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
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 110,
      name: "MINI PLATES & MINI BARBELL SET",
      brand: "PR TRACKER",
      price: 415,
      originalPrice: 689,
      discount: "49.62%",
      stock: "Few Left",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751901785/barbell_plates_01_iylp7d.jpg",
      ratingCount: 7,
      description: "The dream team for rack owners",
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
      ],
      longDescription: `Complete your setup with our most popular combo. mini barbell features realistic size while mini plates slides on smoothly. Display together or mix with other gear. Includes complimentary mini plate stand.`,
      specs: {
        quantity:
          "1 mini barbell + 6 mini plates + 1 mini barbell holder + 1 mini plates holder",
        material: "Color-infused premium plastic",
        dimensions: "Barbell: 21.8 cm | Plates: 2.1-4.5 cm",
        weight: "130g",
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 111,
      name: "CUSTOM MINIATURE BARBELL DISPLAY PLAQUE",
      brand: "PR TRACKER",
      price: 549,
      originalPrice: 899,
      discount: "39%",
      stock: "In Stock",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902121/01_evqhq9.jpg",
      ratingCount: 5,
      description: "Your PR immortalized in 3D",
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
      ],
      longDescription: `Celebrate your achievements in style. Features fixed miniature barbell with your choice of lift name and weight. Stands upright with included holder. The perfect reminder of what you're capable of.`,
      specs: {
        quantity:
          "Acrylic plaque + 1 mini barbell + 1 mini barbell holder + 1 mini plate holder + 2 custom tags +1 plaque stand",
        material: "Color-infused premium plastic miniatures & acrylic sheet",
        dimensions: "acrylic plaque : 22.8 cm x 14 cm",
        weight: "120g",
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 112,
      name: "CUSTOM 3-IN-1 POWERLIFTING DISPLAY",
      brand: "PR TRACKER",
      price: 950,
      originalPrice: 1200,
      discount: "21%",
      stock: "Limited Stock",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902466/07_xq8co0.jpg",
      ratingCount: 6,
      description: "The holy trinity of strength",
      additionalImages: [
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902431/10_d652nm.jpg",
        "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902455/01_xt9w3i.jpg",

      ],
      longDescription: `Squat, bench, and deadlift together at last. Three beautifully crafted miniature barbells mounted on a single acrylic plaque. Includes bonus mini barbell holder & mini plate holder - because every lifter needs a spare. Command attention wherever you display it.`,
      specs: {
        quantity:
          "3 mini barbells + acrylic plaque + 3 detatchable mini barbell holders + plate holder + plaque stand",
        material: "Color-infused premium plastic miniatures & acrylic sheet",
        dimensions: "acrylic plaque : 25.4 cm x 22.8 cm",
        weight: "190g",
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"],
    },
    {
      id: 113,
      name: "MINI DEADLIFT PLATFORM SET",
      brand: "PR TRACKER",
      price: 649,
      originalPrice: 899,
      discount: "28%",
      stock: "Few Left",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893420/01_shxcaz.jpg",
      ratingCount: 4,
      description: "Where PRs become permanent",
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
      ],
      longDescription: `Recreate your heaviest pulls in miniature. Choose your favorite plate colors, customize the weight tag, and display with the included vertical stand. Detachable mini barbell and mini barbell holder lets you change configurations.`,
      specs: {
        quantity: "Platform + barbell + 4 plates + stand + 2 tags",
        material: "Weighted plastic",
        dimensions: "20 cm x 10 cm",
        weight: "150g",
      },
      videos: ["https://res.cloudinary.com/dkybkcox5/video/upload/v1751893470/vid_01_oal6o2.mp4","https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4"]
    },
  ];

  const brands = [
    {
      name: "Deadlift Platform",
      badge: "Popular",
      price: `₹${allProducts.find(p => p.id === 113)?.originalPrice || '599'}`,
      currentprice: `₹${allProducts.find(p => p.id === 113)?.price || '899'}`,
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802249/d_009_huavos.jpg"
    },
    {
      name: "Barbell Display Plaque",
      badge: "New",
      price: `₹${allProducts.find(p => p.id === 111)?.originalPrice || '599'}`,
      currentprice: `₹${allProducts.find(p => p.id === 111)?.price || '699'}`,
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801993/p_011_f2ihnj.jpg"
    },
    {
      name: "Mini Bench Press Setup",
      badge: "Best Seller",
      price: `₹${allProducts.find(p => p.id === 108)?.originalPrice || '599'}`,
      currentprice: `₹${allProducts.find(p => p.id === 108)?.price || '899'}`,
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800731/nb_010_en59mq.jpg"
    },
    {
      name: "Mini Squat Rack",
      badge: "Accessory",
      price: `₹${allProducts.find(p => p.id === 138)?.originalPrice || '699'}`,
      currentprice: `₹${allProducts.find(p => p.id === 138)?.price || '899'}`,
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801605/s_001_uazncf.jpg"
    },
    {
      name: "Power Sled Coasters",
      badge: "Popular",
      price: `₹${allProducts.find(p => p.id === 102)?.originalPrice || '1300'}`,
      currentprice: `₹${allProducts.find(p => p.id === 102)?.price || '945'}`,
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894336/01_lx4vfw.jpg"
    },
    {
      name: "All Products",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlBR2ORcQ2jtN8UflyNc8TibIxMm9MZz6ShJn8Pp8o8uNHwcyLO66ooW0EIYEBElivNI&usqp=CAU"
    }
  ];

  const handleNavigate = () => {
    navigate('/products');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <section className="brand-offers">
      <h2 className="section-title-top">TRENDY PICKS</h2>
      <p className="section-titlee" style={{ fontSize: '20px' }}>
        Curated must-haves from this week’s top picks.
      </p>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="brand-card"
            onClick={handleNavigate} // Use the new handleNavigate function
            style={{ cursor: 'pointer' }}
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="brand-image"
            />
            <h3>{brand.name}</h3>

            {brand.badge && (
              <span style={{
                display: 'inline-block',
                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                color: '#d4af37',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 600,
                margin: '6px 0',
              }}>
                {brand.badge}
              </span>
            )}

            {brand.price && (
              <p className="discount" style={{ fontWeight: '600', color: '#fff' }}> <span className='cross_original' style={{ textDecoration: 'line-through', color: '#888' }}>{brand.price}</span> {brand.currentprice}</p>
            )}

            {!brand.price && (
              <p className="discount" style={{ fontSize: '0.9rem', color: '#aaa' }}>
                Explore the full collection →
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;