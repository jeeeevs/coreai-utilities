export interface CardDataProps {
    imageUrl?: string;
    title: string;
    description: string;
    subHeading?: string;
    keypoints?: string[];
}

export const mockCardData: CardDataProps[] = [
    {
        title: 'Natural Landscape',
        description: 'A beautiful mountain landscape with snow-capped peaks and green valleys. A beautiful mountain landscape with snow-capped peaks and green valleys. A beautiful mountain landscape with snow-capped peaks and green valleys. A beautiful mountain landscape with snow-capped peaks and green valleys.',
        subHeading: 'Sub Heading',
        keypoints: [
            "Lorem ipsum dolor sit amet consectetur, 10%",
            "Lorem ipsum dolor sit amet consectetur, 10%",
        ]
    },
    {
        imageUrl: 'https://picsum.photos/id/237/400/300',
        title: 'Natural Landscape',
        description: 'A beautiful mountain landscape with snow-capped peaks and green valleys. A beautiful mountain landscape with snow-capped peaks and green valleys. A beautiful mountain landscape with snow-capped peaks and green valleys. A beautiful mountain landscape with snow-capped peaks and green valleys.'
    },
    {
        imageUrl: 'https://picsum.photos/id/238/400/300',
        title: 'Urban Architecture',
        description: 'Modern city skyline featuring contemporary architectural designs.'
    },
    {
        imageUrl: 'https://picsum.photos/id/239/400/300',
        title: 'Abstract Art',
        description: 'Colorful abstract patterns creating a vibrant visual experience.'
    }
]; 