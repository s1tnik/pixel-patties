import React from "react";



const DefaultLayout = React.forwardRef((props, ref) => {

    const {title, children, contentStyles} = props;

    return (
        <div ref={ref} className="layout-default">
            {title && <h1 className="layout-title">{title}</h1>}
            <div style={contentStyles ? contentStyles : {}} className="layout-content">{children}</div>
        </div>
    );
});


export default DefaultLayout;
