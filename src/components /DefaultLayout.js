import React from "react";

export default function DefaultLayout({ title, children }) {
  return (
    <div className="layout-default">
      {title && <h1 className="layout-title">{title}</h1>}
      <div className="layout-content">{children}</div>
    </div>
  );
}
