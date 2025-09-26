// // export default ContactForm;
// import React from "react";
// // import "./ContactForm.css"; // Import CSS file

// const ContactForm = () => {
//   return (
//     <div className="contact-container">
//       {/* Left Side - Image */}
//       <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f3f3" }}>
//             <div className="left-side">
//                 <img src={`${process.env.PUBLIC_URL}/me.png`} alt="Contact" className="contact-image" />
//             </div>

//             {/* Right Side - Form */}
//             <div className="right-side">
//                 <h2>Get in Touch</h2>
//                 <form action="https://formsubmit.co/hereputemailhash" method="POST">
//                 <input type="email" name="email" placeholder="Your Email" required />
//                 <textarea name="message" placeholder="Your Message" required></textarea>
//                 <button type="submit">Send Message</button>
//                 </form>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default ContactForm;


import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-container" style={{ backgroundColor: "#f3f3f3" }}>
      {/* Container for both boxes */}
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Stack vertically
          width: "100vw",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        {/* Image Box */}
        <div
          style={{
            width: "90%",
            maxWidth: "600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/me.png`}
            alt="Contact"
            style={{ width: "100%", height: "auto", borderRadius: "12px" }}
          />
        </div>

        {/* Email/Form Box */}
        <div
          style={{
            boxSizing: "border-box",
            width: "90%",
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem", // space below image box
            padding: "2rem", // more padding than image box
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Get in Touch</h2>
          <form
            action="https://formsubmit.co/hereputemailhash"
            method="POST"
            style={{ display: "flex", flexDirection: "column", width: "100%", gap: "1rem" }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc", height: "150px", resize: "none" }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: "0.75rem",
                borderRadius: "6px",
                backgroundColor: "#8B1E3F",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
