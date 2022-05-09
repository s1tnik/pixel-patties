const scrollTo = (ref) => {
  if (ref && ref.current /* + other conditions */) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

export default scrollTo;
