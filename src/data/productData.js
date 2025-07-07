// Coasters
import sled1 from '../assets/images/power_sled_coasters.png';
import sled2 from '../assets/images/power_sled_coasters_1.png';

// Trackers
import rack1 from '../assets/images/mini_power_rack.png';
import rack2 from '../assets/images/mini_power_rack_1.png';

// Accessories
import dumbbell1 from '../assets/images/dumbbell_keychain.png';
import dumbbell2 from '../assets/images/dumbbell_keychain_1.png';

// Combos
import combo1 from '../assets/images/pr_tracker_combo.png';
import combo2 from '../assets/images/pr_tracker_combo_1.png';

export default {
  products: [
    {
      id: 101,
      image: sled1,
      brand: 'GYM INSPIRED',
      name: 'POWER SLED COASTERS',
      price: 1499,
      originalPrice: 2000,
      discount: '25%',
      ratingCount: 8,
      stock: 'Limited Stock',
      category: 'coasters',
      description: 'Own your strength with premium mini power sled coasters.',
      additionalImages: [sled2, sled1]
    },
    {
      id: 102,
      image: rack1,
      brand: 'PR TRACKER',
      name: 'MINI POWER RACK',
      price: 1200,
      originalPrice: 1599,
      discount: '25%',
      ratingCount: 6,
      stock: 'Only 5 Left',
      category: 'trackers',
      description: 'Elevate with a compact mini power rack for PR tracking.',
      additionalImages: [rack2, rack1]
    },
    {
      id: 103,
      image: dumbbell1,
      brand: 'ACCESSORIES',
      name: 'MINI DUMBBELL KEYCHAIN',
      price: 499,
      originalPrice: 699,
      discount: '30%',
      ratingCount: 12,
      stock: 'In Stock',
      category: 'accessories',
      description: 'Show strength with a premium mini dumbbell keychain.',
      additionalImages: [dumbbell2, dumbbell1]
    },
    {
      id: 104,
      image: combo1,
      brand: 'COMBO DEALS',
      name: 'PR TRACKER COMBO',
      price: 2499,
      originalPrice: 2999,
      discount: '15%',
      ratingCount: 10,
      stock: 'Limited Stock',
      category: 'combos',
      description: 'Ultimate PR tracker combo for unforgettable lifts.',
      additionalImages: [combo2, combo1]
    }
  ]
};
