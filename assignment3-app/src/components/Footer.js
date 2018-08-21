import React from 'react';
import '../stylesheets/Footer.css';

const footer = () => {
    return (
        <div className="Footer">
            <table id="Siteinfo">
                <tr>
                    <td>About Us |</td>
                    <td>Contact |</td>
                    <td>Terms of Use |</td>
                    <td>Privacy Policy |</td>
                </tr>
            </table>
            <p id="copyright">© 2018 Peppa Filmtopia. Film data from IMDb. Made by 🐰🦄🐹 with ♥️</p>
        </div>
    )
};

export default footer;