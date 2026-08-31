/* MOBILE MENU */

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.toggle("active");

}


/* SERVICE DETAILS */

function showService(service) {

    const details =
        document.getElementById("service-details");


    if (service === "photocopying") {

        details.innerHTML = `
            <h2>Photocopying Services</h2>

            <p>
                DOMKING CYBER provides fast and affordable
                photocopying services for individuals,
                students and businesses.
            </p>

            <h3>Services include:</h3>

            <ul>
                <li>Black and white photocopying</li>
                <li>Colour photocopying</li>
                <li>Single-sided copies</li>
                <li>Double-sided copies</li>
                <li>School notes</li>
                <li>Business documents</li>
            </ul>
        `;

    }


    else if (service === "printing") {

        details.innerHTML = `
            <h2>Printing Services</h2>

            <p>
                We provide quality printing services
                for documents and other materials.
            </p>

            <h3>We offer:</h3>

            <ul>
                <li>Black and white printing</li>
                <li>Colour printing</li>
                <li>Assignment printing</li>
                <li>Project printing</li>
                <li>Document printing</li>
            </ul>
        `;

    }


    else if (service === "scanning") {

        details.innerHTML = `
            <h2>Scanning Services</h2>

            <p>
                We scan physical documents and convert
                them into digital files.
            </p>

            <h3>We offer:</h3>

            <ul>
                <li>Document scanning</li>
                <li>PDF scanning</li>
                <li>Image scanning</li>
                <li>Email document scanning</li>
            </ul>
        `;

    }


    else if (service === "typing") {

        details.innerHTML = `
            <h2>Typing Services</h2>

            <p>
                Our typing service helps customers prepare
                professional documents.
            </p>

            <h3>We type:</h3>

            <ul>
                <li>Assignments</li>
                <li>CVs</li>
                <li>Letters</li>
                <li>Reports</li>
                <li>Projects</li>
            </ul>
        `;

    }


    else if (service === "kra") {

        details.innerHTML = `
            <h2>KRA Services</h2>

            <p>
                We assist customers with various KRA
                online services.
            </p>

            <ul>
                <li>KRA PIN services</li>
                <li>KRA returns assistance</li>
                <li>KRA account assistance</li>
            </ul>
        `;

    }


    else if (service === "online") {

        details.innerHTML = `
            <h2>Online Applications</h2>

            <p>
                We help customers complete different
                online applications and registrations.
            </p>

            <ul>
                <li>Online applications</li>
                <li>Online registration</li>
                <li>Online form filling</li>
                <li>Document uploading</li>
            </ul>
        `;

    }


    else if (service === "cv") {

        details.innerHTML = `
            <h2>CV Writing</h2>

            <p>
                We help customers create professional
                and well-organized CVs.
            </p>

            <ul>
                <li>CV creation</li>
                <li>CV editing</li>
                <li>CV formatting</li>
                <li>Professional document design</li>
            </ul>
        `;

    }


    else if (service === "lamination") {

        details.innerHTML = `
            <h2>Lamination Services</h2>

            <p>
                Lamination helps protect important
                documents from damage.
            </p>

            <ul>
                <li>Certificate lamination</li>
                <li>ID document lamination</li>
                <li>Notice lamination</li>
                <li>Important document protection</li>
            </ul>
        `;

    }


    else if (service === "internet") {

        details.innerHTML = `
            <h2>Internet Services</h2>

            <p>
                We provide internet access for customers
                who need to complete online activities.
            </p>

            <ul>
                <li>Internet browsing</li>
                <li>Online applications</li>
                <li>Email access</li>
                <li>Online research</li>
            </ul>
        `;

    }

}