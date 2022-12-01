export interface Product {
  name: string;
  cat: string;
  price: number;
  bigDeal: boolean;
  rating: number;
  des: string;
  images: [string];
}

export interface User {
  user_id: string;
  firstname: string | null;
  iat: number;
  exp: number;
}

export interface Cart {
  //{cart: Array(0), subTotal: 0, total: 0}
  cart: any[];
  subTotal: number;
  total: number;
}

export interface RegisterBody {
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  password: string;
}

export interface CheckoutBody {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
}
