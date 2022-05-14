const scrollTo = (ref) => {
  if (ref && ref.current /* + other conditions */) {
    ref.current.scrollIntoView({
      block: "end",
      inline: "end",
    });
  }
};

export default scrollTo;
