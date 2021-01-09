const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

function checkboxes() {
    const triggerBottom = window.innerHeight * 0.8;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (triggerBottom > boxTop) {
            box.classList.add('show');
        } else {
            box.classList.remove('show')
        }
    });
}

checkboxes();