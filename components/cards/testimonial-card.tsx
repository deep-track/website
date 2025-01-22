
import { Testimonial } from '@/types';
import Image from 'next/image';
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="p-4 bg-transparent rounded-lg shadow-lg mx-4 w-full md:p-8">
      <p className="text-white text-center mb-6 text-lg font-light leading-relaxed md:text-2xl lg:mx-auto lg:w-5/6">{testimonial.text}</p>
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