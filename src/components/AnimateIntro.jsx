import gsap from "gsap";

const AnimateIntro = () => {
  let typedText = document.querySelector(".animatedTitle");
  const headerAnimation = document.querySelector(".headerText");

  let typed;

  let nthletter = 0;
  let typingSpeed = 50;

  const siteAnimateTimeline = gsap.timeline({ defaults: { duration: 1 } });

  siteAnimateTimeline

    // .from('#header', { y: '-150%', ease: 'bounce' }, .5)

    // Fade in header
    .from(headerAnimation, { opacity: 0, stagger: 0.5 })
    // Typewrite future text
    .from(writeTitle(), { opacity: 0, stagger: 1.5 }, 1)
    // Animate future text into LOGO - scale it down and place it
    .fromTo(
      headerAnimation,
      { x: "0", y: "0", ease: "power2.in", scale: 1 },
      { x: "-34.5vw", y: "-6.2vw", ease: "power2.in", scale: 0.323 }
    )
    //
    .fromTo(
      ".animatedTitle",
      { opacity: 1, rotationX: "0", innerHTML: 0 },
      {
        rotationX: "360",
        innerHTML: "6p4c design",
        flipHeaderText,
        opacity: 0.65,
      }
    )
    // Unhide Links and animate in place
    .from(".links", { opacity: 0, stagger: 1 });

  function flipHeaderText() {
    console.log("flip me");

    typedText.className.add("fill");
    headerAnimation.className.add("newStroke");
  }

  function writeTitle() {
    // Fetch txt from HTML
    typed = typedText.textContent;
    // Clear fetched text
    typedText.textContent = "";
    // Start Loop function
    typewriterLoop(typed);
  }

  function typewriterLoop() {
    if (nthletter < typed.length) {
      console.log("The length of string is = " + typed.length);
      // - Set textContent to substring of 0 to N
      typedText.textContent += typed.charAt(nthletter);
      // Imcrement N (++)
      nthletter++;
      // Wait before calling loop again
      setTimeout(typewriterLoop, typingSpeed);
    }
  }
  return (
    <div className="headerText">
      <div className="logo">
        <h1 className="animatedTitle">DESIGNING THE FUTURE</h1>
      </div>
    </div>
  );
};

export default AnimateIntro;
