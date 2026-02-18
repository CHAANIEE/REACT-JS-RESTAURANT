export interface MenuItem {
  name:        string
  description: string
  price:       number
  image:       string
  tag?:        string
}

export const menuData: Record<string, MenuItem[]> = {
  Starters: [
    { name: 'Caesar Salad',     description: 'Crisp romaine, parmesan, croutons, and house Caesar dressing.',      price: 280, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500' },
    { name: 'Bruschetta',       description: 'Toasted bread topped with fresh tomatoes, basil, and olive oil.',     price: 220, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500' },
    { name: 'French Onion Soup',description: 'Slow-cooked caramelized onion soup topped with melted gruyère.',      price: 260, image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=500' },
  ],
  Mains: [
    { name: 'Grilled Salmon',   description: 'Atlantic salmon, herb butter, asparagus, and roasted potatoes.',      price: 650, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500', tag: 'Best Seller' },
    { name: 'Beef Tenderloin',  description: 'Prime tenderloin, red wine reduction, truffle mash.',                 price: 950, image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=500', tag: "Chef's Pick" },
    { name: 'Mushroom Risotto', description: 'Arborio rice, wild mushrooms, parmesan, fresh herbs.',               price: 480, image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500', tag: 'Vegetarian' },
    { name: 'Chicken Parmesan', description: 'Breaded chicken breast, marinara, mozzarella, house pasta.',          price: 520, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500' },
  ],
  Desserts: [
    { name: 'Tiramisu',         description: 'Classic Italian dessert with espresso, mascarpone, and cocoa.',       price: 280, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500' },
    { name: 'Crème Brûlée',     description: 'Silky vanilla custard with a perfectly caramelized sugar crust.',    price: 260, image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=500' },
  ],
  Drinks: [
    { name: 'Lemon Basil Cooler', description: 'Fresh lemon, basil, sparkling water, and honey.',                  price: 150, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500' },
    { name: 'Mango Lassi',      description: 'Creamy mango yogurt smoothie with a hint of cardamom.',               price: 160, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500' },
  ],
}

export const featuredDishes: MenuItem[] = [
  { name: 'Grilled Salmon',   description: 'Fresh Atlantic salmon with lemon herb butter, asparagus, and roasted potatoes.', price: 650, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500', tag: 'Best Seller' },
  { name: 'Beef Tenderloin',  description: 'Prime beef tenderloin with red wine reduction, truffle mash, and seasonal greens.', price: 950, image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=500', tag: "Chef's Pick" },
  { name: 'Mushroom Risotto', description: 'Creamy arborio rice with wild mushrooms, parmesan, and fresh herbs.',            price: 480, image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500', tag: 'Vegetarian' },
]