// const list = [
//     {
//       id: 1,
//       content: 'Chim to chim nho',
//     },
//     {
//       id: 2,
//       content: 'Anh em sky oi',
//     },
//     {
//       id: 3,
//       content: 'Say oh yeah',
//     },
//     {
//       id: 4,
//       content: 'yeah yeah db',
//     }
// ]; 
// const mappedContent = list.map(item => item.content);

// const hcnconElements = document.querySelectorAll('.hcncon');

// mappedContent.forEach((content, index) => {
//     if (index < hcnconElements.length) {
//         hcnconElements[index].textContent = content;
//     }
// });
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
        const mappedContent = list.map(item => item.content);
        const myDiv = document.getElementById("hcncon");

        myDiv.innerHTML = mappedContent.map(item => `<p>${item}</p>`).join('');
    });



