const quotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
];

document.getElementById('quote').addEventListener('click', function () {
    const p = document.getElementById('quote-p');
    const h2 = document.getElementById('name');

    const random = Math.floor(Math.random() * quotes.length);
    p.innerText = quotes[random].quote;
    h2.innerText = quotes[random].author;
});