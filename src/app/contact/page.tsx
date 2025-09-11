import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="container py-20">
      <h1 className="text-center font-serif text-4xl font-bold">Contact Us</h1>
      <div className="mt-12 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-2xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground">
            We’d love to hear from you. Whether it’s for a reservation, a
            custom cake order, or just to say hello, feel free to reach out.
          </p>
          <div className="mt-8 space-y-4">
            <p>
              <strong>Address:</strong> 51 Archbishop Makarios III Ave, Nicosia,
              Cyprus
            </p>
            <p>
              <strong>Phone:</strong> +357 99 127455
            </p>
            <p>
              <strong>Email:</strong> hello@ingridbakes.com
            </p>
          </div>
          <div className="mt-8">
            <h3 className="font-serif text-xl font-bold">Opening Hours</h3>
            <table className="mt-4 w-full text-left">
              <tbody>
                <tr>
                  <td className="py-1">Monday - Friday</td>
                  <td className="py-1">9:00 AM - 7:00 PM</td>
                </tr>
                <tr>
                  <td className="py-1">Saturday</td>
                  <td className="py-1">10:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td className="py-1">Sunday</td>
                  <td className="py-1">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="font-serif text-2xl font-bold">Send a Message</h2>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-3 border rounded-md"
            ></textarea>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
      <div className="mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.668353833863!2d33.3619!3d35.1706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de175a5a5a5a5b%3A0x5a5a5a5a5a5a5a5a!2s51%20Archbishop%20Makarios%20III%20Ave%2C%20Nicosia%2C%20Cyprus!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
