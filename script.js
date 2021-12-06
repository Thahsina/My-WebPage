const nav = document.querySelector('.nav')



window.addEventListener('scroll', fixNav)




function fixNav() {
    
    if(window.scrollY > nav.offsetHeight + 150){
    nav.classList.add('active')}
    else{
        nav.classList.remove('active')
    }

}


const listItems= document.querySelectorAll('.list')

listItems.forEach(item => {
    console.log(item);
    item.addEventListener('mouseover', () => {
        removeActiveClasses()
        item.classList.add('current')
    })

});

function removeActiveClasses(){
    listItems.forEach(item => item.classList.remove('current'))
}


// listItems.forEach(item => {
//     console.log(item);
//     item.addEventListener('mouseover', () => {

//         item.classList.toggle('current')
//     })

// });


//<--------------------------------- Toasts ----------------------------->
const button = document.getElementById('btn')
const toasts = document.getElementById('toasts')

const messages = [
    'Start Conversation',
    'View GitHub',
    'Checkout LinkedIn',

]

button.addEventListener('click',() => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText =getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}


function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}