//关闭答案
function closeAns(obj){
    $(obj).parent().slideUp();
    $(obj).parent().siblings('.check').show();
}
//展开答案
function showTips(obj){
    $('.tips').show();
    $('.enter-btn').on('click',function(){
        $(obj).hide();
        $(obj).siblings('.sub-ans').slideDown();
        $('.tips').hide();
    });
    $('.close-btn').on('click',function(){
        $('.tips').hide();
    })

}
