const items = document.querySelectorAll('.item');

console.log('Number of categories:', items.length);

items.forEach(function (element, index) {
    const item = items[index];
    const itemName = item.firstElementChild;

    console.log('Category:', itemName.textContent);

    const itemListElements = item.children;
   console.log('Elements:', itemListElements[1].children.length);
})