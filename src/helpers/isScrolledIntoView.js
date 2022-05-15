function isScrolledIntoView(ref) {
    const rect = ref.current.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    const isVisible = elemTop < window.innerHeight && elemBottom >= 300;
    return isVisible;
}

export default isScrolledIntoView;
