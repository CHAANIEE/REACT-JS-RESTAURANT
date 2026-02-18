export interface TeamMember {
  name:  string
  role:  string
  image: string
  bio:   string
}

export interface Testimonial {
  name:     string
  location: string
  rating:   number
  comment:  string
  avatar:   string
}

export interface Offer {
  icon:        string
  title:       string
  subtitle:    string
  description: string
  badge:       string
  color:       string
}

export const teamData: TeamMember[] = [
  { name: 'Marco Reyes',  role: 'Head Chef',    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300', bio: 'Trained under Michelin-starred chefs in Rome with over 20 years of culinary excellence.' },
  { name: 'Sofia Lim',    role: 'Sous Chef',    image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=300', bio: 'Specializes in modern Italian cuisine with a passion for fresh, locally sourced ingredients.' },
  { name: 'Carlos Santos',role: 'Pastry Chef',  image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=300', bio: 'Award-winning pastry artist who creates desserts as beautiful as they are delicious.' },
]

export const testimonialsData: Testimonial[] = [
  { name: 'Maria Santos', location: 'Makati, Manila',  rating: 5, comment: 'Absolutely the best dining experience in Manila! The Beef Tenderloin was cooked to perfection and the ambiance was romantic and elegant. Will definitely be back for our anniversary.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
  { name: 'James Cruz',   location: 'BGC, Taguig',     rating: 5, comment: "La Bella never disappoints. We've been coming here for 3 years and the quality and service are always consistent. The Grilled Salmon is our family's favorite!", avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  { name: 'Anna Reyes',   location: 'Quezon City',     rating: 5, comment: 'Celebrated my birthday here and the staff made it so special. The food, the wine, the desserts — everything was just perfect. Highly recommend the Tiramisu!', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
]

export const offersData: Offer[] = [
  { icon: '🍷', title: 'Happy Hour',    subtitle: 'Mon – Fri, 4PM – 7PM',  description: '50% off all wines and cocktails. Perfect for after-work relaxation with friends.',    badge: 'Daily',   color: '#8e44ad' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family Sunday',  subtitle: 'Every Sunday',          description: 'Kids eat free with every adult main course ordered. Great for the whole family.',      badge: 'Weekend', color: '#27ae60' },
  { icon: '💑', title: 'Date Night',    subtitle: 'Fri & Sat, 7PM onwards', description: 'Free dessert for two on Fridays and Saturdays. Make your evening truly unforgettable.', badge: 'Limited', color: '#c0392b' },
]

export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', alt: 'Restaurant Interior',  category: 'Ambiance' },
  { src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600', alt: 'Grilled Salmon',       category: 'Food'     },
  { src: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600', alt: 'Beef Tenderloin',         category: 'Food'     },
  { src: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600', alt: 'Mushroom Risotto',     category: 'Food'     },
  { src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600', alt: 'Fine Dining Setup',    category: 'Ambiance' },
  { src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600', alt: 'Tiramisu',             category: 'Desserts' },
  { src: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600', alt: 'Creme Brulee',         category: 'Desserts' },
  { src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600', alt: 'Chef at Work',         category: 'Team'     },
  { src: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600', alt: 'Caesar Salad',           category: 'Food'     },
  { src: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600', alt: 'Bruschetta',           category: 'Food'     },
  { src: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600', alt: 'Cocktails',              category: 'Drinks'   },
  { src: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600', alt: 'Mango Lassi',            category: 'Drinks'   },
]