document.getElementById('add-border').addEventListener('click',function(){
   // console.log('works')
   const backgroundColor = document.getElementById('containar');
   backgroundColor.style.border='5px solid red';
})

// onClick border
function addBackgroundColor(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor='blue';
    }
}

// onClick border id
document.getElementById('add-broder').addEventListener('click',function(){
    // console.log('add-broder');
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor='blue';
    }
})