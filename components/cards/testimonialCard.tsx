import { Testimonial } from '@/types';
import Image from 'next/image';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="p-8 bg-transparent rounded-lg shadow-lg max-w-lg mx-4 w-full">
      <p className="text-white mb-6 text-lg leading-relaxed">{testimonial.text}</p>
      <div className="flex flex-col items-center">
        <Image
          src={testimonial.imageUrl || '/person.jpg'}
          alt="testimonials"
          width={80}
          height={80}
          className="rounded-full m-auto mb-4"
        />
        <div className="text-center">
          <h4 className="text-white font-bold">{testimonial.name}</h4>
          <p className="text-white">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;