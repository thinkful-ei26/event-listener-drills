function replaceImages() {
    $('.thumbnail').click(function(event) {
        let imgSrc = $(this).find('img').attr('src')
        let imgAlt = $(this).find('img').attr('alt')

        $('.hero').find('img').append('img').attr('src', imgSrc);
    });
};
console.log(replaceImages())



