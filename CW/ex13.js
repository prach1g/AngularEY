let album = {
                singer:"lata",
                song:"xxx",
                year:1980,
                copyright: {
                              company :"T series",
                              country:"india"
                           }

            }


//let remix = { ... album}   //CREATED The shallow copy of album

let remix = {... album , copyright:{...album.copyright}}

remix.singer = "shreya G"
remix.copyright.company = "Musica"
console.log("album=",album)
console.log("remix=",remix)