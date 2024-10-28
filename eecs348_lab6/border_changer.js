
function button_press() {
    // Get RGB values for the border
    const borderR = document.getElementById('border_R').value;
    const borderG = document.getElementById('border_G').value;
    const borderB = document.getElementById('border_B').value;

    // Get border width
    const borderWidth = document.getElementById('border_width').value;

    // Get RGB values for the background
    const bgR = document.getElementById('bg_R').value;
    const bgG = document.getElementById('bg_G').value;
    const bgB = document.getElementById('bg_B').value;

    // Update paragraph styles
    const paragraph = document.getElementById('paragraph');
    paragraph.style.borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`;
    paragraph.style.borderWidth = `${borderWidth}px`;
    paragraph.style.backgroundColor = `rgb(${bgR}, ${bgG}, ${bgB})`;
}

