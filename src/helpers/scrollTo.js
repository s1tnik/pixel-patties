const scrollTo = (ref, smooth = false) => {
  if (ref && ref.current /* + other conditions */) {
    ref.current.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "start",
    });
  }
};

export default scrollTo;
