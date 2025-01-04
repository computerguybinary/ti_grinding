function copy_text(){
    let text_to_copy = document.getElementById("code");
    text_to_copy.select()
    text_to_copy.setSelectionRange(0,99999);
    navigator.clipboard.writeText(text_to_copy.value);
}