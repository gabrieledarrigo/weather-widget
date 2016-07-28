function toJson(res) {
    return res.json();
}

function checkResponseCode(data) {
    if (Number(data.cod) < 200 || Number(data.cod) > 300) {
        throw new Error(data.message)
    }

    return data;
}