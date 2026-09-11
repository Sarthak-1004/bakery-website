export type PageView =
  | 'home'
  | 'menu'
  | 'product-detail'
  | 'cart'
  | 'account'
  | 'kitchen-live'
  | 'custom-cakes'
  | 'about-us'
  | 'contact';

export type BakeryCategory = 'cakes' | 'cupcakes' | 'pastries' | 'breads' | 'cookies' | 'beverages';

export type CakeDietary = 'classic' | 'eggless';

export interface BakeryItem {
  id: string;
  name: string;
  category: BakeryCategory;
  categoryLabel: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  detailedDescription?: string;
  imageUrl: string;
  gallery?: string[];
  dietaryTags: Array<'eggless' | 'vegan' | 'nut-free' | 'gluten-free'>;
  badge?: string;
  badgeType?: 'primary' | 'secondary' | 'tertiary';
  servings?: string;
  portionLabel?: string;
  preparationTime?: string;
  calories?: string;
  tastingNotes?: string;
  ingredients?: string[];
  sizes?: {
    weight: string;
    serves: string;
    price: number;
  }[];
  availableSizes?: {
    size: string;
    serves: string;
    price: number;
  }[];
  inStock: boolean;
  remainingCount?: number;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  imageUrl: string;
  basePrice: number;
  unitPrice: number;
  quantity: number;
  size?: string;
  dietary?: CakeDietary;
  inscription?: string;
  addons?: {
    name: string;
    price: number;
  }[];
  dietaryBadge?: string;
  portionSubtitle?: string;
}

export interface KitchenTicket {
  id: string;
  orderNumber: string;
  customerName?: string;
  dietaryBadge?: string;
  dietaryType?: 'eggless' | 'gluten-free' | 'standard' | 'vegan';
  confections?: string;
  confectionSubtitle?: string;
  pipingInscription?: string;
  deliveryTime?: string;
  deliveryType?: string;
  stage: 'in-oven' | 'decorating' | 'packed' | 'dispatched';
  price: number;
  item?: string;
  weight?: string;
  dietary?: string;
  inscription?: string;
  specialNotes?: string;
  targetTime?: string;
  assignedBaker?: string;
  priority?: 'normal' | 'urgent';
}

export interface OrderHistoryItem {
  id: string;
  orderNumber: string;
  date: string;
  title: string;
  description: string;
  price: number;
  paymentMethod: string;
  status: 'Delivered' | 'In Progress' | 'Cancelled';
  imageUrl: string;
}

export interface ShiftNote {
  id: string;
  text: string;
  completed: boolean;
  urgent?: boolean;
}
