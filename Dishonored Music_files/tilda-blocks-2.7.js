function t537_setHeight(recid){var t537__el=$("#rec"+recid),t537__image=t537__el.find(".t537__bgimg:first"),t537__width=t537__image.attr("data-image-width"),t537__height=t537__image.attr("data-image-height"),t537__ratio=t537__height/t537__width,t537__padding=t537__ratio*100;$("#rec"+recid+" .t537__bgimg").css("padding-bottom",t537__padding+"%")}