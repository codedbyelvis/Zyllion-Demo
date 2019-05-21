const express = require('express'),
    bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/w9-form',function(req,resp){
    //
    // Verify the user is logged in ...
    console.log('foo ....')
    resp.sendFile('D:\\Users\\elvis\\Projects\\zyllion-app\\src\\components\\W9\\index.html')
})
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });

// app.get('/user/logout', (req,res) => {
//     req.logOut();
//     res.redirect(process.env.Redirect);
// })

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
    console.log(`The Secret Sauce is on Port ${PORT}`);
})

