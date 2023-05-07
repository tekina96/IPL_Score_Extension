async function getMatchData() {
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=212213ec-fb92-4630-b6d6-7fa5687a8fcf&offset=0")
        .then(data => data.json())
        .then(data => {
            if(data.status != "success") return;

            const matches = data.data;

            if(!matches) return [];

            const relevantData = matches.filter(match => match.series_id == "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e").map(match => `${match.name},${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');
            return relevantData;
        })
        .catch(e => console.log(e));
}
getMatchData();