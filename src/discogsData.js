let Discogs = require('disconnect').Client;

export default function data(search){
    let client = new Discogs('MyReactApp1', {
        consumerKey: 'tRIluYgtjLgKIHiOnMfB', 
	    consumerSecret: 'dRKteodAJJtSTEGQUoVIoHaDFHufgMvR'
    });
    let db = client.database();
    let id = 703691;
    let results = {};
    db.search(search, {params: 'artist'}, (err, data) => {
        id = data.results[0].id;
    });
    db.getArtist(id, (err, data) => {
        results = data;
    });

    return results;
}
    

// let client = new Discogs('MyReactApp', {
//     consumerKey: 'tRIluYgtjLgKIHiOnMfB', 
// 	consumerSecret: 'dRKteodAJJtSTEGQUoVIoHaDFHufgMvR'
// });
// var db = client.database();


// let artist = 'breakbot';
// let artistId = 703690;


// function getArtist(id){
//     db.getArtist(id, (err, data) =>{
//         console.log(data);
//         writeJSON(data);
//     });
// };

// function writeJSON(jsonData){
//     fs.writeFile('./testData/bbArtistPage.json', JSON.stringify(jsonData), (err) =>{
//         console.log(err);
//     });
// };

// function artistSearch(artistToSearch){
    
//     db.search(artistToSearch, {params: 'artist'}, (err, data) => {

//         // fs.writeFile('bbSearch.json', JSON.stringify(data),'utf-8', function(err){
//         //     console.log(err);
//         //     return ;
//         // });
//         console.log('file created')
//     });
// };


// getArtist(703690);
