import React, { createContext, useContext, useState, useEffect } from 'react';
import { BakeryItem, CartItem, KitchenTicket, PageView, ShiftNote } from '../types';
import { BAKERY_ITEMS, INITIAL_KITCHEN_TICKETS, INITIAL_SHIFT_NOTES } from '../data/mockData';

interface BakeryContextType {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  selectedProductId: string;
  setSelectedProductId: (id: string) => void;
  selectedProduct: BakeryItem;
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  promoCode: string;
  setPromoCode: (code: string) => void;
  promoApplied: boolean;
  applyPromo: (code: string) => boolean;
  removePromo: () => void;
  discountAmount: number;
  packagingFee: number;
  grandTotal: number;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  kitchenTickets: KitchenTicket[];
  updateTicketStage: (ticketId: string, newStage: KitchenTicket['stage']) => void;
  shiftNotes: ShiftNote[];
  toggleShiftNote: (noteId: string) => void;
  addShiftNote: (text: string) => void;
  caseInventory: Record<string, { inStock: boolean; remaining: number }>;
  toggleInventoryStock: (productId: string) => void;
  userPoints: number;
  redeemPoints: (amount: number) => void;
  lastPlacedOrder: {
    orderNumber: string;
    total: number;
    eta: string;
    recipient: string;
    itemsSummary: string;
  } | null;
  setLastPlacedOrder: (order: any) => void;
  showOrderSuccessModal: boolean;
  setShowOrderSuccessModal: (show: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const BakeryContext = createContext<BakeryContextType | undefined>(undefined);

export const BakeryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('cherry-blossom-cake');
  
  // Initial cart matching user's mockups ($111.00 subtotal, 3 items)
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'cart-1',
      productId: 'cherry-blossom-cake',
      name: 'Signature Cherry Blossom Cake',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAdCyNm6VI6uder-9y0TmKEBya-e-GvbvjMPmON7MgrOhp92WcuZY1skIZoVNcuBM52a3Ny3-oj7qbMeeimnka3kZzOjlBK1V4PlaDM-85ujcq6YGJQxCrN0ITQDdB-E7LXlDpsJxgnQ6Sd2Dg6LX_fEZm7CKmUocfwbg_f2sBC2DmIFDrzAaWpdRB1v-5fUZDlVpDwRgG3Kryns2QJcTRYJEpeqf1aPAPJpb_0Wd-RYXwv6r6yQXCN',
      basePrice: 58.0,
      unitPrice: 60.5,
      quantity: 1,
      size: '1.0 kg',
      dietary: 'eggless',
      inscription: '“Happy 25th Rhea! ❤️”',
      dietaryBadge: 'Eggless Special',
      portionSubtitle: '+ Gold Sparkler Candles Included ($2.50)',
      addons: [{ name: 'Gold Sparkler Candles', price: 2.5 }],
    },
    {
      id: 'cart-2',
      productId: 'macaron-box-12',
      name: 'Pink Velvet Macarons',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCfb4MApVARyklVQWbwAyaO6MYCU0_qRA4_zvX1isqJ6NX7QPY73VYY2Tu-olc5zDWsSsZ-7MTNlKOF1Ay2k62ho9iw5dyvLO-nDnlAIi1vjVT53gc0FnXvUyd9-V9mz-7wb9cLoBwUFQPJbs4ObHNj6fnddwU_vZY9IwzLSiob1lwm2gunov0TFwMWS7tLsb-SHBFfeVsiLeTMGEaF5o8RyKt9DC0TluIeW85maQ1LFYiEiReKvABO',
      basePrice: 18.5,
      unitPrice: 18.5,
      quantity: 1,
      portionSubtitle: 'Box of 8 • Almond meringue, ruby ganache & rose cream',
      dietaryBadge: 'Gluten-Free Flour',
    },
    {
      id: 'cart-3',
      productId: 'cherry-cupcake',
      name: 'Mini Cherry Cupcake Set',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAi6lk9MdZKS4xJg2sRu-46_n3Lb6hu2l4V0_ZuPYDte8mdz4ry7l1bFKoCSY1IyBuB--5j43PlAQtQt6xRe6dKP1ciDO6pwMd8EQCxk8Bqqh8h3eeDqfPJVhqhAbCpkuBKbga4dgleZfwBkDB_Q9j8jC_-D1k02T75adO2Hayi0ohsHB4SvG7mBibkDzpqYAeMfvIPpUQIVjOjpjcZjzs58fFACVvv5vIxlem4f0ti2UfxCf3pfvYT',
      basePrice: 16.0,
      unitPrice: 16.0,
      quantity: 2,
      portionSubtitle: 'Two boxes (12 mini delicacies total)',
      dietaryBadge: "Chef's Dawn Bake",
    },
  ]);

  // Wishlist defaults to 4 items as shown in header badge
  const [wishlist, setWishlist] = useState<string[]>([
    'cherry-blossom-cake',
    'cherry-cupcake',
    'triple-choco-fudge',
    'macaron-box-12',
  ]);

  // Promo code state
  const [promoCode, setPromoCode] = useState<string>('SWEETLOVE');
  const [promoApplied, setPromoApplied] = useState<boolean>(true);

  // Kitchen tickets & shift notes
  const [kitchenTickets, setKitchenTickets] = useState<KitchenTicket[]>(INITIAL_KITCHEN_TICKETS);
  const [shiftNotes, setShiftNotes] = useState<ShiftNote[]>(INITIAL_SHIFT_NOTES);

  // Case inventory states
  const [caseInventory, setCaseInventory] = useState<Record<string, { inStock: boolean; remaining: number }>>({
    'cherry-cupcake': { inStock: true, remaining: 14 },
    'raspberry-pistachio-tart': { inStock: true, remaining: 2 },
    'almond-croissant': { inStock: false, remaining: 0 },
    'cinnamon-swirl-danish': { inStock: true, remaining: 11 },
  });

  // User VIP sweet points
  const [userPoints, setUserPoints] = useState<number>(340);

  // Order modal state
  const [showOrderSuccessModal, setShowOrderSuccessModal] = useState<boolean>(false);
  const [lastPlacedOrder, setLastPlacedOrder] = useState<{
    orderNumber: string;
    total: number;
    eta: string;
    recipient: string;
    itemsSummary: string;
  } | null>(null);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  };

  const selectedProduct =
    BAKERY_ITEMS.find((item) => item.id === selectedProductId) || BAKERY_ITEMS[0];

  const addToCart = (itemData: Omit<CartItem, 'id'>) => {
    const newCartItem: CartItem = {
      ...itemData,
      id: 'cart-' + Date.now() + '-' + Math.random().toString(36).substring(2, 5),
    };
    setCart((prev) => [...prev, newCartItem]);
    showToast(`🧁 Added "${itemData.name}" to your basket!`);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    showToast('Removed item from sweet basket');
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const discountAmount = promoApplied ? Number((cartSubtotal * 0.15).toFixed(2)) : 0;
  const packagingFee = cart.length > 0 ? 1.5 : 0;
  const grandTotal = Math.max(0, Number((cartSubtotal - discountAmount + packagingFee).toFixed(2)));

  const applyPromo = (code: string) => {
    if (code.trim().toUpperCase() === 'SWEETLOVE' || code.trim().toUpperCase() === 'SWEETWEEKEND') {
      setPromoCode(code.trim().toUpperCase());
      setPromoApplied(true);
      showToast('🎉 Sweet discount 15% applied!');
      return true;
    }
    showToast('Invalid coupon code. Try SWEETLOVE or SWEETWEEKEND');
    return false;
  };

  const removePromo = () => {
    setPromoApplied(false);
    showToast('Removed coupon code');
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from saved treats');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('❤️ Saved to your loved treats!');
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const updateTicketStage = (ticketId: string, newStage: KitchenTicket['stage']) => {
    setKitchenTickets((prev) =>
      prev.map((t) => (t.id === ticketId ? { ...t, stage: newStage } : t))
    );
    showToast(`Oven docket updated to: ${newStage}`);
  };

  const toggleShiftNote = (noteId: string) => {
    setShiftNotes((prev) =>
      prev.map((n) => (n.id === noteId ? { ...n, completed: !n.completed } : n))
    );
  };

  const addShiftNote = (text: string) => {
    if (!text.trim()) return;
    const newNote: ShiftNote = {
      id: 'note-' + Date.now(),
      text: text.trim(),
      completed: false,
    };
    setShiftNotes((prev) => [newNote, ...prev]);
    showToast('Added note to shift board 📌');
  };

  const toggleInventoryStock = (productId: string) => {
    setCaseInventory((prev) => {
      const current = prev[productId] || { inStock: true, remaining: 10 };
      const nextStock = !current.inStock;
      showToast(nextStock ? 'Item marked in stock' : 'Item marked sold out');
      return {
        ...prev,
        [productId]: {
          inStock: nextStock,
          remaining: nextStock ? 10 : 0,
        },
      };
    });
  };

  const redeemPoints = (amount: number) => {
    if (userPoints >= amount) {
      setUserPoints((p) => p - amount);
      showToast(`🎁 Redeemed ${amount} Sweet Points for free bakery treat!`);
    } else {
      showToast('Not enough points to redeem this perk yet!');
    }
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <BakeryContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedProductId,
        setSelectedProductId,
        selectedProduct,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        promoCode,
        setPromoCode,
        promoApplied,
        applyPromo,
        removePromo,
        discountAmount,
        packagingFee,
        grandTotal,
        wishlist,
        toggleWishlist,
        isWishlisted,
        kitchenTickets,
        updateTicketStage,
        shiftNotes,
        toggleShiftNote,
        addShiftNote,
        caseInventory,
        toggleInventoryStock,
        userPoints,
        redeemPoints,
        lastPlacedOrder,
        setLastPlacedOrder,
        showOrderSuccessModal,
        setShowOrderSuccessModal,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </BakeryContext.Provider>
  );
};

export const useBakery = () => {
  const context = useContext(BakeryContext);
  if (!context) {
    throw new Error('useBakery must be used within a BakeryProvider');
  }
  return context;
};
