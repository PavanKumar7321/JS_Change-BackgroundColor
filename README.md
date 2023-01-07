# Javascripit
Changing the  Background Colors 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Storage</title>
    <link rel="stylesheet" href="localStorage.css">
</head>
<body>
    
    <!-- <label>FirstName</label><input type="text" id="firstNam">
    <button id="btn">Submit</button>
    <h3>First Name Is </h3><span id="setna"></span> -->
    <main>
        <div class="contain">
            
            <h2>Tap Tap BackGround Change Color : <span class="color">index </span></h2>
            <button class="tnb" id="btn">Tap Tap</button>
        
        
        
        
       </div>

    </main>


    <script src="localStorage.js"></script>
</body>
</html>

JAVASCRIPIT:-
var colors = ['white','yellow','orange','red','golden','pink','brown','blue','black','cyan','dark gray','violet','green','silver','chocolate','navy blue','Lime','khaki','cherry'];
 var len = colors.length-1;

    var buttonCont = document.getElementById('btn');
    var spanCont = document.querySelector('.color');

    buttonCont.addEventListener('click', (event) => {
        var index = generateRandomNumber();
        document.body.style.backgroundColor = colors[index];
        console.log(colors[index]);
        spanCont.textContent = colors[index];
       })
       function generateRandomNumber(){
        return Math.round(Math.random() * len);
       }
       
CSS:-

