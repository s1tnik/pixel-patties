import React from "react";

export default function DefaultLayout({title, children}) {
    return (
        <div className="layout-default">
            <div className="layout-title">{title}</div>
            <div className="layout-content">{children}</div>
        </div>
    )
}
