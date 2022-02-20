document.getElementById('add-border').addEventListener('click',function(){
   // console.log('works')
   const backgroundColor = document.getElementById('containar');
   backgroundColor.style.border='5px solid red';
})

// onClick background
function addBackgroundColor(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor='blue';
    }
}

// onClick background id
document.getElementById('add-backgr').addEventListener('click',function(){
    // console.log('add-broder');
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor='blue';
    }
})
// add friend
document.getElementById("add-friend").addEventListener('click',function(){
    const container = document.getElementById('containar');
    const friendDiv = document.createElement('p');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML= `<h2>Lorem, ipsum.</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolore.</p>
    `;
    container.appendChild(friendDiv);
})