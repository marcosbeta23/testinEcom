/**
 * Storage temporal en memoria
 * Yenifer reemplazará esto con la base de datos real
 */

class MemoryStorage {
  constructor() {
    this.users = new Map(); // userId -> userData
  }

  // Perfil de usuario
  getUserProfile(userId) {
    return this.users.get(userId) || {
      addresses: [],
      cards: [],
      orders: [],
      wishlist: []
    };
  }

  setUserProfile(userId, data) {
    this.users.set(userId, data);
  }

  // Direcciones
  getAddresses(userId) {
    const profile = this.getUserProfile(userId);
    return profile.addresses || [];
  }

  addAddress(userId, address) {
    const profile = this.getUserProfile(userId);
    profile.addresses = profile.addresses || [];
    profile.addresses.push(address);
    this.setUserProfile(userId, profile);
    return address;
  }

  updateAddress(userId, addressId, updates) {
    const profile = this.getUserProfile(userId);
    const index = profile.addresses.findIndex(a => a.id === addressId);
    if (index !== -1) {
      profile.addresses[index] = { ...profile.addresses[index], ...updates };
      this.setUserProfile(userId, profile);
      return profile.addresses[index];
    }
    return null;
  }

  deleteAddress(userId, addressId) {
    const profile = this.getUserProfile(userId);
    profile.addresses = profile.addresses.filter(a => a.id !== addressId);
    this.setUserProfile(userId, profile);
    return true;
  }

  // Tarjetas
  getCards(userId) {
    const profile = this.getUserProfile(userId);
    return profile.cards || [];
  }

  addCard(userId, card) {
    const profile = this.getUserProfile(userId);
    profile.cards = profile.cards || [];
    profile.cards.push(card);
    this.setUserProfile(userId, profile);
    return card;
  }

  updateCard(userId, cardId, updates) {
    const profile = this.getUserProfile(userId);
    const index = profile.cards.findIndex(c => c.id === cardId);
    if (index !== -1) {
      profile.cards[index] = { ...profile.cards[index], ...updates };
      this.setUserProfile(userId, profile);
      return profile.cards[index];
    }
    return null;
  }

  deleteCard(userId, cardId) {
    const profile = this.getUserProfile(userId);
    profile.cards = profile.cards.filter(c => c.id !== cardId);
    this.setUserProfile(userId, profile);
    return true;
  }

  // Favoritos
  getWishlist(userId) {
    const profile = this.getUserProfile(userId);
    return profile.wishlist || [];
  }

  addToWishlist(userId, item) {
    const profile = this.getUserProfile(userId);
    profile.wishlist = profile.wishlist || [];
    profile.wishlist.push(item);
    this.setUserProfile(userId, profile);
    return item;
  }

  removeFromWishlist(userId, productId) {
    const profile = this.getUserProfile(userId);
    profile.wishlist = profile.wishlist.filter(w => w.productId !== productId);
    this.setUserProfile(userId, profile);
    return true;
  }

  // Órdenes
  getOrders(userId) {
    const profile = this.getUserProfile(userId);
    return profile.orders || [];
  }

  addOrder(userId, order) {
    const profile = this.getUserProfile(userId);
    profile.orders = profile.orders || [];
    profile.orders.push(order);
    this.setUserProfile(userId, profile);
    return order;
  }
}

// Singleton
const storage = new MemoryStorage();

module.exports = storage;