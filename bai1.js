    document.addEventListener("DOMContentLoaded", function() {
        const list = [
            {
            id: 1,
            content: 'Chim to chim nho',
            },
            {
            id: 2,
            content: 'Anh em sky oi',
            },
            {
            id: 3,
            content: 'Say oh yeah',
            },
            {
            id: 4,
                                                                                     
            content: 'yeah yeah db',
            }
        ]; 
        const divCha = document.querySelector('#hcn1');
        const children = list.map(item => `<div class="mau-hong">${item.content}</div>`).join('');
        divCha.innerHTML = children
    });



