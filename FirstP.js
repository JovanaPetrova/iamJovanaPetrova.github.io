function playSong(selectElement) {
    var selectedValue = selectElement.value;
    if (selectedValue !== '') {
        window.open(selectedValue, '_blank');
    }
}
