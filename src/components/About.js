import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",

  // });

  let myStyle = {
    color: props.mode ==='dark' ? 'white':'#333333',
    backgroundColor : props.mode === 'dark' ? '#333333':'white',

  }

  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white "

  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode")

  //   }
  // };

  return (
    <div className="container" style={{color: props.mode ==='dark' ? 'white':'#333333'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <h4>About Our Website</h4>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Welcome to our website! We're excited to provide you with a platform that offers a range of tools and features to enhance your online experience.<br />Our goal is to create a space that's both informative and interactive for users like you.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <h4>Our Mission</h4>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our mission is to provide a user-friendly environment where you can explore, learn, and engage. We're committed to delivering content that's both informative and enjoyable, helping you make the most out of your online journey.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <h4>Key Features</h4>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Our website offers a variety of features designed to cater to your needs:
              </p>
              <ul>
                <li><strong>Text Conversion:</strong> Use our text tools to convert text to uppercase or lowercase, and remove extra spaces for improved clarity.</li>
                <li><strong>Word Count:</strong> Our word count tool helps you analyze the length of your text and estimate reading time.</li>
                <li><strong>Dark Mode:</strong> Customize your viewing experience with our dark mode option for reduced eye strain.</li>
                <li><strong>More to Come:</strong> We're constantly working on expanding our offerings to provide you with even more valuable tools and content.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button
          type="button"
          className="btn btn-primary my-3"
          onClick={toggleStyle}
        >
          {btnText}
        </button>
      </div> */}
    </div>
  );
}


// import React from "react";

// export default function AboutUs(props) {
//   return (
//     <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
//       <h1>About Our Website</h1>
//       <p>
//         Welcome to our website! We're excited to provide you with a platform that offers a range of tools and features to enhance your online experience.
//         Our goal is to create a space that's both informative and interactive for users like you.
//       </p>
//       <h2>Our Mission</h2>
//       <p>
//         Our mission is to provide a user-friendly environment where you can explore, learn, and engage. We're committed to delivering content that's both
//         informative and enjoyable, helping you make the most out of your online journey.
//       </p>
//       <h2>Key Features</h2>
//       <p>
//         Our website offers a variety of features designed to cater to your needs:
//       </p>
//       <ul>
//         <li><strong>Text Conversion:</strong> Use our text tools to convert text to uppercase or lowercase, and remove extra spaces for improved clarity.</li>
//         <li><strong>Word Count:</strong> Our word count tool helps you analyze the length of your text and estimate reading time.</li>
//         <li><strong>Dark Mode:</strong> Customize your viewing experience with our dark mode option for reduced eye strain.</li>
//         <li><strong>More to Come:</strong> We're constantly working on expanding our offerings to provide you with even more valuable tools and content.</li>
//       </ul>
//       <h2>Join Our Community</h2>
//       <p>
//         We're thrilled to have you as a part of our community. Feel free to explore the various sections of our website, utilize the tools, and share your
//         experiences with us. Your feedback is essential as we continue to improve and evolve.
//       </p>
//       <p>
//         Thank you for choosing our platform for your online needs. We look forward to providing you with a seamless and enriching experience!
//       </p>
//     </div>
//   );
// }








