$(document).ready(function () {
    $('.mobile-menu-trigger').click(function(){
        $(".mobile-menu-content").slideDown();
    });
    
    $(this).click(function () {
        $(".mobile-menu-content").hide();
    });

    /* Clicks within the dropdown won't make
     it past the dropdown itself */
    $(".mobile-menu-content, .mobile-menu-trigger").click(function (e) {
        e.stopPropagation();
    });
});
