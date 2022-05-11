const scrollTo = (ref) => {
    if (ref && ref.current /* + other conditions */) {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }
};

export default scrollTo;
