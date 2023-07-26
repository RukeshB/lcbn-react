import { Button, Input, Textarea } from "@material-tailwind/react";

const ContactForm = () => {
  return (
    <form>
        <div>
          <Input label="Full Name" size="lg" />
        </div>
        <div class="mt-8">
          <Input label="Email" size="lg" />
        </div>
        <div class="mt-8">
          <Textarea label="Message" size="lg" />
        </div>
        <div class="mt-8">
          <Button type="submit" className="w-1/2">
            Send Message
          </Button>
        </div>
      </form>
  );
};

export default ContactForm;
