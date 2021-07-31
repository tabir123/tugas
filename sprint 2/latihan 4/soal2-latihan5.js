for (y = 1; y <= 20; y++){
    if (y % 2 != 0 && y % 3 == 0){
        document.write(y + '-' + 'i love coding' + '<br>');
    }else if (y % 2 != 0){
        document.write(y + '-' + 'santai' + '<br>');
    }else if (y % 2 == 0){
        document.write(y + '-' + 'berkualitas' + '<br>')
    }
}