import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="container-fluid bg-dark text-center text-white mt-1 py-2">
            <div className="row">
                <div className="col">
                    <p> &copy;{year} :All Right Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
