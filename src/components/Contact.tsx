const Contact = () => {
    return (
    <section id="contact" className="p-5 text-white">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2">Email: your-email@example.com</p>
        <p className="mt-2">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
        <p className="mt-2">
        <a href="https://xing.com/profile/yourprofile" target="_blank" rel="noopener noreferrer">Xing</a>
        </p>
        <p className="mt-2">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
        <p className="mt-2">
        <a href="path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">Digital Resume</a>
        </p>
    </section>
    );
};

export default Contact;
