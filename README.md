body{
    background-image:url(img/main-background.webp);
    background-color:lightblue;
    background-repeat: no-repeat;
    background-attachment: fixed ;
    background-size:cover;
    
}

/* Menu Bar */
#menuBar{
    background-color:limegreen;
    display:flex;
    justify-content: space-evenly;
    border-radius: 15px;
    width: 100%;
    height: 30px;
    padding:6px;
    top:10px;
    gap:50px;
    position:sticky;
}

#menuBar a{
     
    color:white; 
    width: 100px;
    text-align:center;
    text-decoration:none;
    padding:5px;
    border-radius:30px;;
}

#menuBar a:hover{
    background-color:darkolivegreen;
}

/* Game Logo */
.outsideLogo{
    width:300px;
    height:300px;
    margin-right:auto;
    margin-left:auto;   
    margin-top:50px; 
    
    
}

.outsideLogo img{
    width:300px;
    height:300px;
}

/* Music */
.music {
    position:fixed;
    text-align: center;
    bottom:20px;
    right:10px;
}

#music-button {
    background: none;
    border: none;
    cursor: pointer;
}

/* Descriptions */
.cover{
    margin-top:50px;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.About{
    width:350px;
    height:400px;
}

.About h1{
    background-color:dodgerblue;
    color: white;
    text-align: center;
}
.About p{
    background-color: gainsboro;
    padding:20px;
}

.Gameplay{
    width:350px;
    height:400px;
}

.Gameplay h1{
    background-color:dodgerblue;
    color: white;
    text-align: center;
}
.Gameplay p{
    background-color: gainsboro;
    padding:20px;
}
