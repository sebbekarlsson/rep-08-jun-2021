const artist = "Led Zeppelin";
const songTitle = "Stairway to heaven";


fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
    .then(function(response){
        response.json().then(function(data){
          
            const lines = data.lyrics.replaceAll("\r", "").split("\n");
            
            lines.forEach(function(line){
                const element = document.createElement("p");

                if (line.length >= 3) {
                    element.innerText = line;
                    document.body.appendChild(element);
                }
            });

        });
    });