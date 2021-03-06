import { gsap } from "gsap";

const AnimateAbout = () => {
  let typedText = document.querySelector(".animatedAbout");
  console.log(typedText);
  let aboutAnimation = document.querySelector(".aboutText");
  // let logoName = document.querySelector(".LOGONAME");

  let typed;
  let nthletter = 0;
  let typingSpeed = 75;

  const siteAnimateTimeline = gsap.timeline({ defaults: { duration: 1 } });

  siteAnimateTimeline
    // .from('#header', { y: '-150%', ease: 'bounce' }, .5)
    // Fade in header
    // .from(headerAnimation, { opacity: 0, stagger: 0.5 })
    // Typewrite future text
    .from(writeTitle(), { opacity: 0, stagger: 1.5 }, 1)
    // Animate future text into LOGO - scale it down and place it
    .fromTo(
      aboutAnimation,
      { x: "3vw", y: "2vh", ease: "power2.in", scale: 0.6 },
      { x: "3vw", y: "13vh", ease: "power2.in", scale: 0.9 }
    );
  //
  // .fromTo(
  //   ".animatedTitle",
  //   { opacity: 1, rotationX: "0", innerHTML: 0 },
  //   {
  //     rotationX: "720",
  //     innerHTML: "BLOCKDESIGN",
  //     // flipHeaderText,
  //     // opacity: 0.65,
  //   }
  // );
  // Unhide Links and animate in place
  // .from(".links", { opacity: 0, stagger: 1 });

  // function flipHeaderText() {
  //   console.log("flip me");

  //   typedText.classList.add("fill");
  //   // headerAnimation.classList.add("newStroke");
  //   // headerAnimation += " newStroke";
  //   // animatedTitle.addEventListener("animationend", () => {
  //   //   headerText.classList.add("hide");
  //   // });
  // }
  // setTimeout(showLogo(), 5000);

  // function showLogo() {
  //   typedText.classList.add("hide");
  //   logoName.classList.remove("hide");
  // }

  function writeTitle() {
    // Fetch txt from HTML
    typed = typedText.textContent;
    // Clear fetched text
    typedText.textContent = "";
    // Start Loop function
    setTimeout(function () {
      typewriterLoop(typed);
    }, 1200);
    // typewriterLoop(typed);
  }

  function typewriterLoop() {
    if (nthletter < typed.length) {
      // console.log("The length of string is = " + typed.length);
      // - Set textContent to substring of 0 to N
      typedText.textContent += typed.charAt(nthletter);
      // Imcrement N (++)
      nthletter++;
      // Wait before calling loop again
      setTimeout(typewriterLoop, typingSpeed);
    }
  }
};

export default AnimateAbout;
