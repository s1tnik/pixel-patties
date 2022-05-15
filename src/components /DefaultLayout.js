import React from "react";

export default function DefaultLayout({title, children, contentStyles}) {
    return (
        <div className="layout-default">
            {title && <h1 className="layout-title">{title}</h1>}
            <div style={contentStyles ? contentStyles : {}} className="layout-content">{children}</div>
        </div>
    );
}
