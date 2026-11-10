const IMAGE_BASE = 'https://images.unsplash.com/photo-'

export function imageUrl(id, width) {
  return `${IMAGE_BASE}${id}?auto=format&fit=crop&w=${width}&q=80`
}

export function imageSrcSet(id, widths = [640, 960, 1280, 1600]) {
  return widths.map((width) => `${imageUrl(id, width)} ${width}w`).join(', ')
}

export const properties = [
  {
    id: 'glass-residence',
    index: '01',
    name: 'The Glass Residence',
    location: 'Alibaug, Maharashtra',
    type: 'Private villa',
    beds: '5 bedrooms',
    area: '7,200 sq ft',
    setting: 'Sea-facing · 1.2 acres',
    price: '₹18.50 Cr',
    image: '1613490493576-7fde63acd811',
    alt: 'A white modernist villa with a long swimming pool and glass walls at midday.',
    description:
      'A sequence of pale, glass-fronted volumes arranged around a courtyard and a long reflecting pool. The house is deliberately quiet — stone, dark metal and direct views through to the sea.',
    reference: 'AE—01',
  },
  {
    id: 'palm-house',
    index: '02',
    name: 'Palm House',
    location: 'North Goa, Goa',
    type: 'Courtyard villa',
    beds: '4 bedrooms',
    area: '4,800 sq ft',
    setting: 'Palm garden · 0.8 acres',
    price: '₹12.75 Cr',
    image: '1582268611958-ebfd161ef9cf',
    alt: 'A low mid-century villa with a swimming pool framed by palms and mature planting.',
    description:
      'A low-slung house set beneath a canopy of coconut palms. Deep verandahs, open living rooms and a pool that runs the length of a private, walled garden.',
    reference: 'AE—02',
  },
  {
    id: 'skyline-villa',
    index: '03',
    name: 'The Skyline Villa',
    location: 'Mumbai, Maharashtra',
    type: 'Penthouse residence',
    beds: '4 bedrooms',
    area: '5,600 sq ft',
    setting: 'Private terrace · city views',
    price: '₹26.00 Cr',
    image: '1515263487990-61b07816b324',
    alt: 'A contemporary residential building in black and pale stone, seen from below against a clear sky.',
    description:
      'A penthouse residence with uninterrupted views across the city, a private terrace and interiors composed around light, art and the changing skyline.',
    reference: 'AE—03',
  },
]
