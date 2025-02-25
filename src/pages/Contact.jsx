import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const accessKey = import.meta.env.VITE_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div id="contactContainer">
        <section className="form_section" id="contact">
          <h2>Contact me</h2>
          <form onSubmit={onSubmit} id="contactForm">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required></input>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required></input>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" id="submit">
              Send
            </button>
          </form>
          <span>{result}</span>
        </section>
        <section className="contact_info">
          <h3>Contact me directly:</h3>
          <p id="mail">Ossy.Drakeneld@chasacademy.com</p>
        </section>
      </div>
    </>
  );
};

export default Contact;
