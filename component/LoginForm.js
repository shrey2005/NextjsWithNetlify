export default function ContactForm() {
    return (
        <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="Name">
                <label htmlFor="firstname">
                    Name:
                </label>
                <input type="text" name="firstname" id="firstname" />
            </div>
            <div className="Email">
                <label htmlFor="email">
                    Email:
                </label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="Message">
                    Message:
                </label>
                <textarea name="message" id="Message"></textarea>
            </div>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}
