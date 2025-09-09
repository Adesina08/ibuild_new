export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  image?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    company: 'ABC Construction',
    text: 'iBUILD has transformed our project management process. The forecasting tools are incredibly accurate.',
    rating: 5
  },
  {
    id: '2', 
    name: 'Sarah Johnson',
    company: 'Metro Builders',
    text: 'The multi-family project features have streamlined our entire development process.',
    rating: 5
  },
  {
    id: '3',
    name: 'Mike Davis',
    company: 'Residential Solutions',
    text: 'Outstanding customer support and user-friendly interface. Highly recommended!',
    rating: 5
  }
];