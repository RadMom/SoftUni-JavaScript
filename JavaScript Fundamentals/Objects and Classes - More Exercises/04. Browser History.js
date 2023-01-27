function browserHistory(obj, arr) {

    let browserInfo = obj;

    for (let command of arr) {

        let [currCommand, siteNme] = command.split(` `);
        switch (currCommand) {
            case `Open`:
                browserInfo[`Open Tabs`].push(siteNme);
                browserInfo[`Browser Logs`].push(command);
                break;
            case `Close`:
                if (browserInfo[`Open Tabs`].includes(siteNme)) {
                    browserInfo[`Open Tabs`].splice(browserInfo[`Open Tabs`].indexOf(siteNme), 1);
                    browserInfo[`Recently Closed`].push(siteNme);
                    browserInfo[`Browser Logs`].push(command);
                }
                break;
            case `Clear`:
                browserInfo[`Open Tabs`] = [];
                browserInfo[`Recently Closed`] = [];
                browserInfo[`Browser Logs`] = [];
                break;
        }
    }
    
    console.log(browserInfo[`Browser Name`]);
    console.log(`Open Tabs: ${browserInfo[`Open Tabs`].join(`, `)}`);
    console.log(`Recently Closed: ${browserInfo[`Recently Closed`].join(`, `)}`);
    console.log(`Browser Logs: ${browserInfo[`Browser Logs`].join(`, `)}`);
}
browserHistory(
    {
        "Browser Name": "Google Chrome",
        "Open Tabs": [
            "Facebook",
            "YouTube",
            "Google Translate"],
        "Recently Closed": [
            "Yahoo",
            "Gmail"],
        "Browser Logs": [
            "Open YouTube",
            "Open Yahoo",
            "Open Google Translate",
            "Close Yahoo",
            "Open Gmail",
            "Close Gmail",
            "Open Facebook"]
    },

    ["Close Facebook",
        "Open StackOverFlow",
        "Open Google"]);