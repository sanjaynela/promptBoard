const testimonials = [
  {
    quote: "It feels like a real developer tool, not a generic AI demo. That alone makes the workflow credible.",
    author: "Maya Chen",
    role: "Frontend Engineer",
  },
  {
    quote: "The browser loop is the interesting part. Search, filters, and mobile spacing are where the design has to prove itself.",
    author: "Reed Alvarez",
    role: "Design Systems Lead",
  },
  {
    quote: "I like that the generated images are treated as direction, not as a substitute for taste or testing.",
    author: "Arjun Patel",
    role: "Developer Experience PM",
  },
];

export function TestimonialStrip() {
  return (
    <section className="px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.author} className="pb-panel rounded-[1.75rem] p-6">
            <blockquote className="text-base leading-7 text-slate-200">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-5 text-sm text-slate-400">
              <span className="font-semibold text-white">{testimonial.author}</span>
              <span className="block">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
