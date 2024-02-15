const fs = require('fs');

const manipData = (items) => {
    let content = JSON.stringify({
        items: items.map(pr => {
            return { title: pr.title, body: pr.body }
        })
    });

    fs.writeFile('pr2.json', content, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('new file written.');
        }
    })
}

const processDoc = () => {
    const path = 'halprs.json'
    fs.readFile(path, "utf8", (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        const parsed = JSON.parse(data);
        manipData(parsed.items);
    });
};


processDoc();