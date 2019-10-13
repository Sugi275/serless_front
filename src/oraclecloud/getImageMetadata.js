export default function getImageMetadata() {
    const p = new Promise((resolve, reject) => {
        fetch('https://iauthmdxallhg54jyzimcu5rly.apigateway.us-phoenix-1.oci.customer-oci.com/v1getImageMetadata/getImageMetadata')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(new Error('エラーです！'));
                }
            })
            .then(jsonData => {
                console.log(jsonData);
                resolve(jsonData);
            })
            .catch(e => {
                console.log(e.message); // エラーです！
            });
    });

    return p;
}