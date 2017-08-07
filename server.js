var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var art={
    'article':{
        title:' article | keerthi',
        heading:'article one',
        content:` <p>
       it has official status in the Indian state of Tamil Nadu and the Indian Union Territory of Puducherry.
It is also used as one of the languages of education in Malaysia, along with English, Malay and Mandarin.
Tamil is one of the longest-surviving classical languages in the world.
      Tamil-Brahmi inscriptions from 500 BC have been found on Adichanallur[17] and 2,200-year-old Tamil-Brahmi inscriptions have been found on it.
      Tamil became the first legally recognised Classical language of India. The recognition was announced by the contemporaneous President of India, Abdul Kalam, in a joint sitting of both houses of the Indian Parliament on 6 June 2004.
            
            <img src="s6.jpg" width="500px" height="500px">
            </p>`
    
    },
    
    'a2':
    {
    title:' article | keerthi',
        heading:'article two',
        content:` <p>
                this my article.this my article
            this my article
            this my article
            this my article
            this my article
            this my article
            this my article
            this my article
            
            </p>
            <p>
                this my article
            this my article
            this my article
            this my article
            this my article
            
          </p>`  
    },
};
    function createTemplate(data)
    {
        var title=data.title;
        var heading=data.heading;
        var content=data.content;
        var htmlTemplate=`  
<html>
    <head>
        <title>
        ${title}
        </title>
    </head>
    <body>
        <div>
                    <h3>
            ${heading}
        </h3>
        <a href="/">home</a>
        </div>
        <div>
           ${content}
        </div>
    </body>
</html>`
;
return htmlTemplate;
}
        
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(art[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
