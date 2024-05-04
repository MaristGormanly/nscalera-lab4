//TODO
const all_feeds = document.getElementById("all_feeds")
const base_url = "http://localhost:1337"

const my_feeds = () => {
    window.location.href = base_url + "/login"
}

// -------- ON STARTUP (START) --------
const init = () => {

    // Start a fetch call to backend service
    // to get all the users and display them
    console.log("In Index.js");

        // Get all feeds
        fetch(base_url + "/api/backendfeed")
            .then(response => response.json())

            // For each user listed...
            .then(feeds => {
                feeds.forEach(feed => {
                    // ... create a table row
                    const table_row = document.createElement('tr')
                    console.log("Feed description: " + feed.description);

                    table_row.innerHTML = '<td>' + feed.description + '</td><td>' + feed.comment + '</td>'

                    all_feeds.appendChild(table_row)

                }); // Close this with a semi colon
            })

            // Exception handling for call to the Feeds API
            .catch(error => console.error('Error in fetching user Feeds: ', error));
    }
// -------- ON STARTUP (END) --------

init()