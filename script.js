const btn = document.querySelector('button');
const unread = document.querySelectorAll('.unread');
const notifications = document.querySelector('#num');
const block = document.querySelectorAll('.block')

notifications.innerText = unread.length


block.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.remove('unread')
        const readMessages = document.querySelectorAll('.unread')
        notifications.innerText = readMessages.length
    })
});

btn.addEventListener('click', () => {
    unread.forEach(e => {
        e.classList.remove('unread')
        const readMessages = document.querySelectorAll('.unread')
        notifications.innerText = readMessages.length
    })
})