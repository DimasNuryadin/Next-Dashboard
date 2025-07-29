export interface UserTypes {
  id: string,
  name: string,
  email: string,
  password?: string,
  verified: boolean,
  role: string
}

export interface CategoryTypes {
  id: number,
  name: string,
  description: string
}

export interface ProductTypes {
  id: string,
  category_id: number,
  description: string,
  price: number,
  stock: number,
  image_url: string
}