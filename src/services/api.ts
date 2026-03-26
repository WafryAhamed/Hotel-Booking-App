/**
 * API Service Layer
 * 
 * Centralized service for all API calls. Currently mocks API responses,
 * but structure is production-ready for backend integration.
 */

// Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
  status: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface PropertyRequest {
  basicInfo: {
    name: string;
    bedrooms: number;
    bathrooms: number;
    maxGuests: number;
  };
  location: {
    address: string;
    city: string;
    zipCode: string;
    country: string;
  };
  propertyType: string;
  amenities: string[];
  photos: File[];
  pricing: {
    pricePerNight: number;
    minimumStay: number;
  };
  policies: {
    cancellationPolicy: string;
    checkInTime: string;
    checkOutTime: string;
    houseRules: string;
  };
}

export interface BookingRequest {
  propertyId: string;
  checkInDate: Date;
  checkOutDate: Date;
  guests: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  bedrooms: number;
  bathrooms: number;
}

export interface Booking {
  id: string;
  propertyId: string;
  checkInDate: Date;
  checkOutDate: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Review {
  id: string;
  propertyId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// Auth Service
export const authService = {
  /**
   * Login user with email and password
   */
  login: async (email: string, password: string): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
      // Mock API delay (1.5s)
      setTimeout(() => {
        // Validate input
        if (!email || !password) {
          reject(new Error('Email and password are required'));
          return;
        }

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          reject(new Error('Invalid email format'));
          return;
        }

        // Mock successful login
        const response: LoginResponse = {
          id: 'user_' + Math.random().toString(36).substr(2, 9),
          name: 'John Doe',
          email: email,
          token: 'token_' + Math.random().toString(36).substr(2, 20),
        };

        resolve(response);
      }, 1500);
    });
  },

  /**
   * Register new user
   */
  register: async (name: string, email: string, password: string): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!name || !email || !password) {
          reject(new Error('All fields are required'));
          return;
        }

        if (password.length < 8) {
          reject(new Error('Password must be at least 8 characters'));
          return;
        }

        const response: LoginResponse = {
          id: 'user_' + Math.random().toString(36).substr(2, 9),
          name: name,
          email: email,
          token: 'token_' + Math.random().toString(36).substr(2, 20),
        };

        resolve(response);
      }, 1500);
    });
  },

  /**
   * Reset password
   */
  resetPassword: async (email: string, newPassword: string, confirmPassword: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email || !newPassword || !confirmPassword) {
          reject(new Error('All fields are required'));
          return;
        }

        if (newPassword !== confirmPassword) {
          reject(new Error('Passwords do not match'));
          return;
        }

        if (newPassword.length < 8) {
          reject(new Error('Password must be at least 8 characters'));
          return;
        }

        resolve(true);
      }, 1500);
    });
  },

  /**
   * Logout user
   */
  logout: async (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        resolve();
      }, 500);
    });
  },

  /**
   * Get current user (if logged in)
   */
  getCurrentUser: async (): Promise<LoginResponse | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        
        if (token && user) {
          resolve(JSON.parse(user));
        } else {
          resolve(null);
        }
      }, 500);
    });
  },
};

  // Property Service
export const propertyService = {
  /**
   * Get all properties
   */
  getProperties: async (): Promise<Property[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Return mock data
        resolve([]);
      }, 1000);
    });
  },

  /**
   * Get single property by ID
   */
  getProperty: async (id: string): Promise<Property | null> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!id) {
          reject(new Error('Property ID is required'));
          return;
        }
        resolve(null);
      }, 800);
    });
  },

  /**
   * Create new property
   */
  createProperty: async (data: PropertyRequest): Promise<Property> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Validate required fields
        if (!data.basicInfo.name) {
          reject(new Error('Property name is required'));
          return;
        }

        const property = {
          id: 'prop_' + Math.random().toString(36).substr(2, 9),
          ...data,
          createdAt: new Date(),
          status: 'pending_approval',
        };

        resolve(property);
      }, 2000);
    });
  },

  /**
   * Update property
   */
  updateProperty: async (id: string, data: Partial<PropertyRequest>): Promise<Property> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!id) {
          reject(new Error('Property ID is required'));
          return;
        }
        resolve({ id, ...data });
      }, 1500);
    });
  },

  /**
   * Delete property
   */
  deleteProperty: async (id: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!id) {
          reject(new Error('Property ID is required'));
          return;
        }
        resolve();
      }, 1000);
    });
  },

  /**
   * Search properties
   */
  searchProperties: async (): Promise<Property[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 1200);
    });
  },
};

// Booking Service
export const bookingService = {
  /**
   * Create new booking
   */
  createBooking: async (data: BookingRequest): Promise<Booking> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Validate required fields
        if (!data.propertyId || !data.guestName || !data.guestEmail) {
          reject(new Error('Missing required booking information'));
          return;
        }

        const booking = {
          id: 'booking_' + Math.random().toString(36).substr(2, 9),
          ...data,
          status: 'confirmed',
          createdAt: new Date(),
        };

        resolve(booking);
      }, 2000);
    });
  },

  /**
   * Get user's bookings
   */
  getUserBookings: async (userId: string): Promise<Booking[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!userId) {
          reject(new Error('User ID is required'));
          return;
        }
        resolve([]);
      }, 1000);
    });
  },

  /**
   * Get booking details
   */
  getBooking: async (bookingId: string): Promise<Booking | null> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!bookingId) {
          reject(new Error('Booking ID is required'));
          return;
        }
        resolve(null);
      }, 800);
    });
  },

  /**
   * Cancel booking
   */
  cancelBooking: async (bookingId: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!bookingId) {
          reject(new Error('Booking ID is required'));
          return;
        }
        resolve();
      }, 1000);
    });
  },
};

// Review Service
export const reviewService = {
  /**
   * Submit review for property
   */
  submitReview: async (propertyId: string, rating: number, comment: string): Promise<Review> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!propertyId || !rating || rating < 1 || rating > 5) {
          reject(new Error('Invalid review data'));
          return;
        }

        const review = {
          id: 'review_' + Math.random().toString(36).substr(2, 9),
          propertyId,
          rating,
          comment,
          createdAt: new Date(),
        };

        resolve(review);
      }, 1000);
    });
  },

  /**
   * Get property reviews
   */
  getPropertyReviews: async (propertyId: string): Promise<Review[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!propertyId) {
          reject(new Error('Property ID is required'));
          return;
        }
        resolve([]);
      }, 800);
    });
  },
};

// Admin Service
export const adminService = {
  /**
   * Get pending property approvals
   */
  getPendingApprovals: async (): Promise<Property[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 1000);
    });
  },

  /**
   * Approve property
   */
  approveProperty: async (propertyId: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!propertyId) {
          reject(new Error('Property ID is required'));
          return;
        }
        resolve();
      }, 1000);
    });
  },

  /**
   * Reject property with reason
   */
  rejectProperty: async (propertyId: string, reason: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!propertyId || !reason) {
          reject(new Error('Property ID and reason are required'));
          return;
        }
        resolve();
      }, 1000);
    });
  },
};

// Utility function for HTTP error handling
export const handleApiError = (error: Error | string): string => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unexpected error occurred. Please try again.';
};

export default {
  authService,
  propertyService,
  bookingService,
  reviewService,
  adminService,
  handleApiError,
};
