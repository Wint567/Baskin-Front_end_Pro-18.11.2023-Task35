async function getData(fileName) {
    try {
        const response = await fetch(fileName);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.children;
    } catch(error) {
        console.log(error)
    }

}

async function getResponse() {
    try {
        const firstResponse = await getData('./data1.json');
        const secondResponse = await getData('data2.json');

        const mergeArray = [...firstResponse, ...secondResponse]
        console.log(mergeArray)
    } catch(error) {
        console.log(error)
    }
}

getResponse()