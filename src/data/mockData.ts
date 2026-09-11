import { BakeryItem, KitchenTicket, OrderHistoryItem, ShiftNote } from '../types';

export const BAKERY_LOGO =
  'https://lh3.googleusercontent.com/aida/AEtjO1XChP7ttzX17-tp6u2GBJSXx5m3mPXB8H9SBhRE1-M-kQSsJ3v98oimdOfyYk8RN780aVY0tULcbhJkfatwrNGaYu43bkNS3PX_ERR8ugMuXYtt-vAki6RyRzdG8U-SbacvVopyFMgAdWb2p5wc1NTxG66ZClrxJMtdHGh3lObaB_zxgag4Rh42X1kYlxjSEi8ukqOxJNqLJWGHYdbrxb9m7A1OckS1CY0BUV7neppUdI8dUTiWLvo9Gxku3uvbJYYed3zW4M8yIw';

export const CHEF_SARTHAK_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB_tR_-UMYuZb_M86FfZO0mv1xCqH5jYQwV1OLIDQOTvH2PymwiDwhF-EaFlzpx95Z0vjeKz6uq-SDGHbyyJaG5iYH6B6Vq-FbJPHvXMU2X0NF2p-9oV1A7dF8Bveh4DjWpvaZTq-5R9AQ16d9jrcW_A3WmspGrcQXYVXMwRB55rXzdPeHDgiI82lgTiu0GPQ4FSeJfIfuj8ohrHI6xwP-7TvtevJGruZGUJFkYZrhNEklTMlm4jLWpKc7Lftj-OM4MKg';

export const RHEA_SHARMA_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBmhq1Y48OTBlJa-jdzSHCbN10n0LfXfqMm8nW8u0eONnGuGhfWPTBzldx67qrx6_8LGVkV0YvznSeJD4RuSzL-QpSkusXhU48sfM8tGupwlHo5Uznr_00fi6ipkLcfr2I5IvI6YwzhGcHIr11Oge55d9uXR40Dxv581a_K7kym9NJItp_ltqgfx3Cy0f1rV3_5U5IidNAJhafnvQHrU_SuVf56r7L3HLPyJ2FnzONw41O594vW2Jug';

export const COURIER_MANOJ_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBL55gT8T_P29GJCviHVn-3A4i_6-JLT-sGabsmgNFNUsGjruPhTd8uikIMherPUMP1eyOv6mONL4yogBGKLy4e73Juwp2BFz1uvu3khsD4Sb8pVqju2ijj9yvFYgc5JIi198twEKUYTHUB39Zv4W_kM07WQQZ4JV4Z_KJKC9H-rxIflaXytjnsMOXnz5Q65rJKYPEgbDJRXIkt5IQwr_Jri8gU2a15xu7PSCm4pdPefjdaI8LdlhLm';

export const BAKERY_SEAL_STAMP =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCcFPtwQoUtW-wlkN4rNH24mDpH5xiMXopgurYQpU5NJjwO6VV4RKbQwZsQDrv7nAU0XYafn1MRarww1kVSi0Rqz7NyElcS-57_aVnoTH1i1FXgICErBUiaC-I4CBeLJTLBNci8ydwRhFirsy3CeYH-c3FZYuwjs2C5c9ROunNqYGUV3WbLrOQ1kfmn1cL1txp6LVhUHsee4fJzk-SGOtrqQibEk6PYtWp6SDIGg6yR9cmuxQVu115JH37CSQ0kiEHe_g';

export const BAKERY_ITEMS: BakeryItem[] = [
  {
    id: 'cherry-blossom-cake',
    name: 'Signature Cherry Blossom Celebration Cake',
    category: 'cakes',
    categoryLabel: 'Celebration Cakes',
    price: 38.0,
    rating: 4.9,
    reviewCount: 248,
    description:
      'Layered light vanilla chiffon infused with wild cherry coulis, blush pink buttercream, and ruby glazed cherries.',
    detailedDescription:
      'Layered light vanilla sponge infused with fresh wild cherry compote, frosted with silky blush buttercream, and crowned with hand-dipped maraschino cherries & sugar crystals. Prepared daily using organic stone ground flour and 82% pasture-churned butter.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoZYRom7s33bFnnCDsD_uzejual7fiU7femtVjeFZmdsO5OlKfLSrVIFvTKx6Dp7WEh5edjIQanuWozxUKHMTk-AAglAoYLFq9IuNjqhUwomY_gjO7qNasnaroeSge10QnMVcsftvqXjzTErrROQP70ZwuMPOUwX800ab6dw309cVGThR0qdk2is04upxsywvZ2EAzxeOghNYF-tcSPX9SjYBJEoI_SBq_hyfbYZzb6jI_PfusZq3C',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtCpx7nOIIn3pDIoSRKh_xrw9fFDVarFiCxADVddyBcnuiWjeritRdr8KnDuSkfxm7PkGElVDaiO6jG5nPMaYFVxPED2IgzFVNywL6SsUOLR9rUW_l_zPahbDsWQGvxT3N3L4y6MyCgBYs3iUcMoT-Q1WNYOnKnGheF9YWu-LEhSNVOQ2gVfRVQheq8c5LLkRCRA1IOsbRmRIaYFFflkIkWPtu3uoaOuhFzMxoEbC4shrIgrNFSrIb',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2G59swTbwQ-Wn_FmrZDTw5tneJtePjoYOBE5sCPi_1AC9KhupQqPaFyl--8BGaXJdk0uB9pNt-BCHXH1tMPiQMko35fDsY1-M14hNsaypM2D6KvHTDQBbpUKuUJcl_V_rI7N64hYjVcefBmA1t5p1x-gnGfyx5Qr98PVyIJMmgEO1KmGHdJCOYzRRQLwRCFREXGioRZY7UQXh72okZBe0Vs-ozwbMHnZLISc743VOLFjBaR9mRtZ9',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaYc1xxEiGoeXn9lbvBKRP0TVmwWHqpYt0_LtlrRLmQ6q-sqXW3InD5wsuz8vgKcuNn8qbyezJ8BdN1ntobWFOZuacCY2ZmDFNXEE2Fh3Fjl3GGt903_fotSJEaEs7UqlGoWRL_uQXUt_rMxptxLkuNTe6f7Q0x99B4xuTyvZ5-lSZJ9lM-YRloOlbQCjUOQEZi2u95M8hYBV0sKCGEHEeSm4XzTjA5gLxsfkqNHKIujwetjFKyYNc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYc59kv6yKsH1aMDjWGaJYh-PBzlVoe9XGRX0MOFWqxMB6gI4BtAVFzJvzXY8DXl6Ye_SdBbIP_WGjgqOCqi0QSFWX_BV_s8m5sZHHL3PQx2KU_M1wazJoGgxKFcoRjSqMG5zDYXIS_FJXEs_jVAc1tbVDF2UGKKArLBLrqlIuh0DVudkBAfWeZGeCkBm56C5ZJdRSeKdH_YJrOkouvo-ocSvPJfahTYJG1-w6MdfNrsVk4c8kkqH_',
    ],
    dietaryTags: ['eggless', 'nut-free'],
    badge: 'Bestseller',
    badgeType: 'secondary',
    portionLabel: 'Serves 4–6',
    servings: '0.5 kg to 2.0 kg',
    availableSizes: [
      { size: '0.5 kg', serves: 'Serves 4–6', price: 38.0 },
      { size: '1.0 kg', serves: 'Serves 8–12', price: 58.0 },
      { size: '2.0 kg', serves: 'Serves 18–24', price: 95.0 },
    ],
    inStock: true,
    remainingCount: 14,
  },
  {
    id: 'cherry-cupcake',
    name: 'Signature Cherry Blossom Cupcake',
    category: 'cakes',
    categoryLabel: 'Cupcakes & Bakes',
    price: 4.5,
    rating: 4.9,
    reviewCount: 310,
    description:
      'Delicate sakura blossom infused sponge crowned with velvety vanilla buttercream and fresh cherry coulis.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCaVTLtE30SdHwX6Yo84CszSIE5ZEEBzXpzjygs3AeXieKN30Sh6dxCDfkNmWtp8fFTJHRwb-3yXZO0c2907jsSZsC8YRgxKIDJ-o5T6D6NEq1ihsJtj1Tg-dHzYZNhXv1FNBjlaVKuYTUuy5m8gm6SWuToYnh7fZ-xQvvnd805wdJkAI43Pp75wzwZuKfsgUOrz6pkn6b5NuMnECW3B26fVTb4ob4gPrydfj0cb_Ico23VQwD3mBEo',
    dietaryTags: ['eggless', 'nut-free'],
    badge: 'Chef Pick',
    badgeType: 'primary',
    portionLabel: 'Single treat',
    inStock: true,
    remainingCount: 14,
  },
  {
    id: 'triple-choco-fudge',
    name: 'Triple Chocolate Fudge Slice',
    category: 'cakes',
    categoryLabel: 'Cakes & Slices',
    price: 6.5,
    rating: 5.0,
    reviewCount: 280,
    description:
      'Layers of rich 70% dark Valrhona sponge, silky chocolate fudge glaze, and crunchy cocoa nib tuile.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA257H9HJ1ztYZzuL-uEBf0tXDM0RNANymsbfb52lnB1EZaosqrm0EE3a6DVJbIws4ZUH-brDXe9Cwyjfo3kcwKeo2AZ9iLDwstMNpzCt4Hw099ESWWt_sZRLAneTgnshnGxdya9Cm7dLt4PMqJWyGjQO8hUXo4_TfcOsY1apYDup4AoASgpkoMCpeIRYh_sI2YuRDdiSMsZaU19F0TkYcEd8T4uQcQCIY4Pd6SVBMxstkArPR0zXvW',
    dietaryTags: ['nut-free'],
    badge: 'Bestseller',
    badgeType: 'secondary',
    portionLabel: 'Generous slice',
    inStock: true,
    remainingCount: 9,
  },
  {
    id: 'raspberry-pistachio-tart',
    name: 'Fresh Raspberry Pistachio Tart',
    category: 'pastries',
    categoryLabel: 'Tarts & Patisserie',
    price: 7.2,
    rating: 4.8,
    reviewCount: 96,
    description:
      'Crisp French sablé dough shell, slow-roasted pistachio mousseline, loaded with fresh organic raspberries.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBnH-iGIAaZZXzPxwCo2SVN3VD5v9i0K-wnDQRA_tKAGYyMqFJi4xmjoqvc22rCaV7jEFO3Jt__bjcUEKyxSmtzCyuCVr4ARDYEhwuEZBIGwb_PtQ21iG89nNQHx1k_uuXVtKRTZecQ-x5YygkohBvmYn0pFVBQWLHUqXRhOK2gj7RVaP-zpUU1naCe2wuttSkQGyGPkrRuQXdPCSGUY9uSbd0Bo9GmxcXavRIBrn3xDQWUMTow1Hvp',
    dietaryTags: ['eggless'],
    badge: 'Sicilian Pistachio',
    badgeType: 'tertiary',
    portionLabel: 'Individual tart',
    inStock: true,
    remainingCount: 2,
  },
  {
    id: 'country-sourdough',
    name: 'Artisan Country Sourdough Loaf',
    category: 'breads',
    categoryLabel: 'Artisan Bakery',
    price: 8.0,
    rating: 4.9,
    reviewCount: 189,
    description:
      'Wild yeast starter, open airy crumb, crunchy blistered crust, and mild tangy butter aroma.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCc1djTQVOsyG_c0FavjxTkpmZA85D9-iOYeB14uphMiP9MViRyawCSdYtQma3B7qr5APB2n5cF0crfPUmaZU-gqbynud5AQzchOlwBKvOtxmSJ3p5WsoL46qUCIp64K4wuZtwzST9EL30HXEYrVS-HTuZ56w7lbxJ4-S36GeXy-CJ3a8JGz3IEHjElYICEUk4RnoKaRZh6oriyL254yI8qv-Tcnnz7kSrBlxSK8noigi6x5q-PfSR_',
    dietaryTags: ['vegan', 'nut-free'],
    badge: '100% Vegan',
    badgeType: 'primary',
    portionLabel: 'Full 800g loaf',
    inStock: true,
    remainingCount: 8,
  },
  {
    id: 'vanilla-bean-chiffon',
    name: 'Madagascar Vanilla Bean Chiffon',
    category: 'cakes',
    categoryLabel: 'Celebration Cakes',
    price: 34.0,
    rating: 4.9,
    reviewCount: 73,
    description:
      'Featherlight sponge cloud infused with real scraped Bourbon vanilla, whipped mascarpone, and custom piping plaque.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBiUQLG1WQla73dNgcvl9XT3gxfh-2pmKCzK_p4GMHUDpEhCsso776hKaZY-DHMPpm_0jycSeY5OQeHXdfVixIBKvEApcN4XhDG6qii9-LsUq3LdifKEE1OQyWMarp0My1rWuQtc5bOnbewzzDlcWK3egc-_SUaqMdu_RKvDW_TxqjMVPAyGqg5LVpfcNINrgE-i1aUOBhKEZmMZ89F6GCUCCFHemFG4D0oOFZEuTd9MAsi1FzSTUnR',
    dietaryTags: ['nut-free'],
    badge: 'Customisable',
    badgeType: 'primary',
    portionLabel: '6" round cake (6-8p)',
    inStock: true,
    remainingCount: 5,
  },
  {
    id: 'french-croissant',
    name: 'French Butter Croissant',
    category: 'pastries',
    categoryLabel: 'Viennoiserie',
    price: 3.8,
    rating: 4.8,
    reviewCount: 320,
    description:
      'Hand-laminated 27 layers with Normandy churned butter. Shatteringly crisp exterior with honeycomb center.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBTBODemqaFsW35R6eX0c2FJvjzjiWPFUPBB-OkTda0p3pstcVFV_rpCR5eRKnyvVoD2o16xGXYjGIdwKjkQv5phAyvV9Tu5oe6BEdwB9AMRMWraP__2z7L41rRHvWY_u8U0x6qSgNOhg9_gRG58RzxCWjoAxSiWZUQ04uqtJk-HY5Y79SJR13MpqdfKWIHRjGiFJLKtiRgfd0YnitpFTXduviRx7sdW425LaTPcVfoJ79sScjmvrUa',
    dietaryTags: ['eggless', 'nut-free'],
    badge: 'Fresh Warm',
    badgeType: 'secondary',
    portionLabel: 'Fresh daily',
    inStock: true,
    remainingCount: 22,
  },
  {
    id: 'macaron-box-12',
    name: 'Rainbow Assorted Macaron Box (12 pcs)',
    category: 'cookies',
    categoryLabel: 'Macaron Patisserie',
    price: 24.0,
    rating: 5.0,
    reviewCount: 214,
    description:
      'Almond meringue cookies with velvety ganache centers: Raspberry rose, matcha cream, and salted caramel.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD2iiNvm6rjGVHFo4sQsAOLiMV1ukejIx34f0scBRdEVFmphf1c3i2OsNj8az4dZSkky0EBZJ1i9mBP7bl9tRX7Sq_X2dARt9vnetx2I7-e_LTGh8tuj3HDI65Gqdcj4hKb4FsXu3jTLxSjjH9Nm_QMh6SJTobF5ft6-pXQlX5Ztq1LouS8e2eMYdUHmEsljcPRQWblf9W5lZNy2GM9BtOSxtkmYm5zUYNBRKnWQP2h1vxTDL5Wj2L_',
    dietaryTags: ['gluten-free'],
    badge: 'Gift Box',
    badgeType: 'primary',
    portionLabel: '12 pcs gift tin',
    inStock: true,
    remainingCount: 16,
  },
  {
    id: 'iced-caramel-latte',
    name: 'Iced Salted Caramel Latte',
    category: 'beverages',
    categoryLabel: 'Cold Drinks',
    price: 5.2,
    rating: 4.7,
    reviewCount: 165,
    description:
      'Double shot single-origin Arabica, housemade slow-simmered caramel, whole milk, Maldon flaky sea salt.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZLv7Vzj7JGgiMnltKITR5LOW_Oeto3mOlQThWbhzi_ZXFK_UGbuGZjdQzJBGuY0gqLFIvbpwrxllRmdkq8nq3f1FBt0MRF8UyHv9nvghK4QQPoL2eYFUoSL2OwTUrWBJ5o4OsmEkD6-mEbLpgUkWn5L2eYda-uVb83HmXCsk4hirZSJhZmEgQiD5K53T0ZI0HIwdETvrpuHHQK7ZzT_6-HlvMs288zPIyg5Uy30KSFwt_pNWbgT3h',
    dietaryTags: ['eggless', 'nut-free', 'gluten-free'],
    badge: 'Barista Brew',
    badgeType: 'tertiary',
    portionLabel: '16 oz cup',
    inStock: true,
    remainingCount: 30,
  },
  {
    id: 'cinnamon-swirl-danish',
    name: 'Warm Cinnamon Swirl Danish',
    category: 'pastries',
    categoryLabel: 'Morning Viennoiserie',
    price: 4.85,
    rating: 4.8,
    reviewCount: 240,
    description:
      'Flaky 72-layer laminated dough infused with fragrant brown sugar cinnamon paste and vanilla glaze.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASwt7YZa7rwLIDofKaR1mt-goiRK5JFRXcccEJQolWNxpbrTzsxmNgToqVdfSzC8FmNLm_jAS2blk3Agrv166GVhWQEASoaCHGKBkdMhJEi-KCUXivzYnqk21CADkV2NktKKQrKel3K_zDe2W1aBHw_2blmDLCcaZY_2bKpL4u4qpa4ZXLDqBV22MF7RI7jhzrSt337Y6pJJWpi115k8UwigzWbKB3ycyqi6xP2IVzST6au5Bm-rKw',
    dietaryTags: ['eggless', 'nut-free'],
    badge: 'Morning Oven',
    badgeType: 'tertiary',
    portionLabel: 'Oven-hot portion',
    inStock: true,
    remainingCount: 11,
  },
  {
    id: 'berry-pavlova-crown',
    name: 'Artisanal Berry Pavlova Crown',
    category: 'pastries',
    categoryLabel: 'Specialty Patisserie',
    price: 7.5,
    rating: 4.9,
    reviewCount: 98,
    description:
      'Crisp cloud-like meringue shell with a marshmallow soft center, folded passionfruit curd, and wild forest berries.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAP02PI_1w1NXr3H_2xuzeipFdpvB38YjdEFNMyYcBY1V9iVhmYcchnzkkYbEwECZJTDdMWIqy3Qu6ZgSfJGYCFmJKTFHbxxhmsv4RqofpUCfsRgbYs9nrEyeWcUsTGEEcRB2Tsa58MyyXPiXsC6mo2K8llMoe8V6jZ4HGxn3fJ1mhWZWFZd6vK6Xs5hm680U2QaESVAB_q7BeNHSAUJCKQ2BwO-IOlP0HYttnVztW_SWDzNDoQBuZ_',
    dietaryTags: ['gluten-free'],
    badge: 'Chef Signature',
    badgeType: 'secondary',
    portionLabel: 'Individual nest',
    inStock: true,
    remainingCount: 6,
  },
  {
    id: 'almond-croissant',
    name: 'Almond Cream Croissant',
    category: 'pastries',
    categoryLabel: 'Viennoiserie',
    price: 3.9,
    rating: 4.7,
    reviewCount: 112,
    description:
      'Flaky French croissant filled with rich frangipane paste, topped with toasted flaked almonds and powdered sugar.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCvPBj-tZBKcgBTTtIeo7ccW8LJT-lGYpiajAlaYoII4dM7zxwkl0zNNdbg-qYADL9fGUx0HF-8Ut0yuSYbqrDlv6GWSpppMOZ5Cl1nWCUhfEcnwTUebchp6bTTbS6nu0eb3_-DvFPg-iVY32V886DOlt4d-s6mJZpqbcQ8i5iF1BrDomfFFk2_yQHlTLaAOKhxqnNerYKry8CgP4_hgOWWI4FZgfPp-H4NBwSQaqZyzTPT2T2HEMD',
    dietaryTags: ['eggless'],
    badge: 'Chef Favorite',
    badgeType: 'primary',
    portionLabel: 'Single piece',
    inStock: false,
    remainingCount: 0,
  },
];

export const INITIAL_KITCHEN_TICKETS: KitchenTicket[] = [
  {
    id: 'ticket-1',
    orderNumber: '#SB-8402',
    customerName: 'Ananya Verma',
    dietaryBadge: '100% Eggless',
    dietaryType: 'eggless',
    confections: '2-Tier Belgian Velvet',
    confectionSubtitle: 'With edible rose dust',
    pipingInscription: '“Happy Sweet 21st Riya!”',
    deliveryTime: '11:15 AM',
    deliveryType: 'Express Doorstep',
    stage: 'in-oven',
    price: 78.5,
  },
  {
    id: 'ticket-2',
    orderNumber: '#SB-8406',
    customerName: 'Kabir Mehta',
    dietaryBadge: 'Gluten-Free',
    dietaryType: 'gluten-free',
    confections: 'Strawberry Rosette Box (x12)',
    confectionSubtitle: 'Fresh glazed farm berries',
    pipingInscription: '—',
    deliveryTime: '12:00 PM',
    deliveryType: 'Store Pickup',
    stage: 'decorating',
    price: 36.0,
  },
  {
    id: 'ticket-3',
    orderNumber: '#SB-8410',
    customerName: 'Meera & Arjun',
    dietaryBadge: 'Standard',
    dietaryType: 'standard',
    confections: 'Signature Hazelnut Truffle',
    confectionSubtitle: 'Gold leaf shimmer finish',
    pipingInscription: '“Forever Together ♥”',
    deliveryTime: '01:30 PM',
    deliveryType: 'Van Route #2',
    stage: 'packed',
    price: 64.0,
  },
  {
    id: 'ticket-4',
    orderNumber: '#SB-8415',
    customerName: 'Sanjay Deshmukh',
    dietaryBadge: '100% Eggless',
    dietaryType: 'eggless',
    confections: 'Vanilla Bean Chiffon 1.5kg',
    confectionSubtitle: 'Fresh cream & strawberries',
    pipingInscription: '“Congratulations Boss!”',
    deliveryTime: '03:15 PM',
    deliveryType: 'Express Doorstep',
    stage: 'in-oven',
    price: 52.0,
  },
];

export const INITIAL_SHIFT_NOTES: ShiftNote[] = [
  {
    id: 'note-1',
    text: 'Prepare double cream glaze for the 4-tier wedding order (#SB-8390) by 02:00 PM.',
    completed: false,
  },
  {
    id: 'note-2',
    text: 'Sift Madagascar vanilla bean flour for morning macaron shells.',
    completed: true,
  },
  {
    id: 'note-3',
    text: 'Belgian Callebaut Dark 70% low — order 25kg bag today!',
    completed: false,
    urgent: true,
  },
];

export const INITIAL_ORDER_HISTORY: OrderHistoryItem[] = [
  {
    id: 'hist-1',
    orderNumber: '#SB-78102',
    date: 'Sep 2, 2024 at 5:14 PM',
    title: 'Artisan Cupcake Tasting Box (6 Pcs)',
    description: 'Red Velvet Cream Cheese, Belgian Dark Fudge, Salted Butterscotch Vanilla',
    price: 38.0,
    paymentMethod: 'Paid via Apple Pay',
    status: 'Delivered',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCXHgzSypFtvDJhNaUnS403OppHeeEnOZrKZgIfFiHeE7eM8oWAc9JwMIWABDw_k6zylEueiZ2JWSTfT4Lo11fKkDd5YIEgcxp6CQ5-1K2tDQWhGA-Ggx6PBAiJs8WRH6CNV7sQl5He3ZYW4X7JnUJ1NVs4VBCVc5omDE-l7DnEfX_O8XrwMeebGxYjqbUCqmGnFNAWy5TDLawNo9aFINBKB_1JwfvwPs_4HAJY9g45LEV66NwjIhFr',
  },
  {
    id: 'hist-2',
    orderNumber: '#SB-72418',
    date: 'Aug 18, 2024 at 10:30 AM',
    title: 'Morning Flaky Croissants (Box of 4)',
    description: '2x Almond Flake Frangipane + 2x Classic French Butter',
    price: 22.5,
    paymentMethod: 'Paid via Credit Card',
    status: 'Delivered',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlwMo3S2567x4Xp-z0fetsy6odPJ1J5X8j682sqNr2pUIQmtDqSqIW9HkR6RUqPOE92m8c0Ay5cSAoEKyjBU0uBxo0nvFg1ThSTQJN85c7QkqPmzrVBJqSA-7Y2y9S1THDmZnwAItmQ5IghndqRwH7R1Dzyk63loUXSR0yiGHExv2cTiSsZyP8wPMM7uTAlxb7_3_Qx6uLaiHPNi_bom4EBV-T1MUX5m5GCrqYbusHIlpD0dx5dAWd',
  },
];
