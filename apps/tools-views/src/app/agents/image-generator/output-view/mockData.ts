export interface ImageData {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

export const mockImages: ImageData[] = [
  {
    id: '1',
    imageUrl: 'https://picsum.photos/id/237/400/300',
    title: 'Natural Landscape',
    description: 'A beautiful mountain landscape with snow-capped peaks and green valleys. A beautiful mountain landscape with snow-capped peaks and green valleys. A beautiful mountain landscape with snow-capped peaks and green valleys. A beautiful mountain landscape with snow-capped peaks and green valleys.'
  },
  {
    id: '2',
    imageUrl: 'https://picsum.photos/id/238/400/300',
    title: 'Urban Architecture',
    description: 'Modern city skyline featuring contemporary architectural designs.'
  },
  {
    id: '3',
    imageUrl: 'https://picsum.photos/id/239/400/300',
    title: 'Abstract Art',
    description: 'Colorful abstract patterns creating a vibrant visual experience.'
  }
]; 