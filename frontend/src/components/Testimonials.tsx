'use client'

import { useSlickSlider } from '@/hooks/useSlickSlider'

export default function Testimonials() {
  useSlickSlider('.testimonial-slider', {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  })

  const testimonials = [
    {
      quote: "the table runner looks so luxurious and quality is great too. Actually I purchased it to use on my centre table and perfect for my table and look wow . this go best for dinning table too",
      author: "Anuradha April 15, 2024"
    },
    {
      quote: "looks lovely on my black glass top dinning table.",
      author: "debashree May 31, 2024"
    },
    {
      quote: "It is nice one . it s very beautiful and elegant runner. i  m  happy with the purchase  and print is really wow",
      author: "Mohan January 1, 2025"
    },
    {
      quote: "Lovely cushion covers, they gave a nice elegant look",
      author: "Paramjit Rawat February 12, 2025"
    },
    {
      quote: "The quality of the bottel  is good and the main this is design was awesome.",
      author: "Aditya March 21, 2025"
    }
  ]

  return (
    <div className="testimonial-section">
      <div className="testimonial-plot">
        <div className="testimonial-title">They Say</div>
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <div className="quote">{testimonial.quote}</div>
              <div className="author">{testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mailto-plot">
        <img className="mail" src="/images/i-email02.png" alt="email" />
        <div className="mailto-para">
          Sign up with your e-mail id to receive updates & deals directly in your mailbox
        </div>
        <form className="mailto-form">
          <input type="email" className="mail" placeholder="Enter your email" />
          <button type="submit" className="join">JOIN</button>
        </form>
      </div>
    </div>
  )
}
