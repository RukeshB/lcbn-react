import ContactUser from "./ContactUser";
import Message from "./Message";

const Contact = () => {
    return (
        <div className="pt-32 md:px-24 px-1 flex flex-col gap-8 mb-8">
            <h1 className="text-xl font-semibold md:text-4xl md:font-bold">Contact Us</h1>
            <Message/>
           <ContactUser/>
        </div>
    )
}

export default Contact;