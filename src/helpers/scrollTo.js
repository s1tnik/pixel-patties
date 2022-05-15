const scrollTo = (ref) => {
  if (ref && ref.current /* + other conditions */) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default scrollTo;
