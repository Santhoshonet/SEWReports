$(function(){
    if ($('div.error').size() == 0)
        $('.form').hide();
    else
    {
        $('div.error').animate({backgroundColor : '#FAD3C5'},4000);
        $('#LnkAddNewProject').hide();
        $('input:text:first').focus();
    }
    //#F5F5ED
    $('#LnkAddNewProject').click(function() {
        $('.new-project div.error').parents('tr').eq(0).remove();
        $('.new-project').fadeIn(500);
        $(this).hide();
        $('.new-project input:text:first').focus();
        var top = $('.new-project')[0].offsetTop + $('.new-project').height();
        $('html,body').animate({
                scrollTop:top}
                ,2500);
    });
    $('#CancelAddProject').click(function() {
        $('.new-project').hide();
        $('#LnkAddNewProject').show();
    });
    $('.actions .edit').click(function() {
        var projectid = $(this).parent().attr('projid');
        if ($('#'+ projectid).size() == 0)
        {
            var This = $(this);
            $.ajax({
                    url: $(this).attr('href'),
                    timeout: 10000,
                    cache: false,
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    beforeSend: function() {
                        $('.CancelAddProject').trigger('click');
                        $('.actions .edit').html("EDIT");
                        This.html("....");
                    },
                    success: function(data) {
                        $('.CancelAddProject').trigger('click');
                        $('.actions .edit').html("EDIT");
                        This.parents('tr').eq(0).after("<tr style='display:none;' id='" + projectid + "' > <td colspan='3' class='data-entry' style='border-bottom: 1px solid #CDCDCD;' >" + data + "</td></tr>");
                        This.parents('tr').hide();
                        $('#'+ projectid).fadeIn(500);
                        $('#'+ projectid).find('input[type="text"]:first').focus();
                        EditProjects();
                    },
                    error: function(request, error) {
                        This.html("EDIT");
                    }
                });
        }
        return false;
    });
    function EditProjects()
    {
        $('.CancelAddProject').click(function () {
           $(this).parents('table').eq(0).parents('tr').prev().show();
           $(this).parents('table').eq(0).parents('tr').remove().delay(500).fadeOut(500);
        });
        $('.BtnEditProject').click(function () {
            var returnFlag = true;
            var Tbl = $(this).parents('table').eq(0);
            Tbl.find('input[type="text"]').each(function() {
                var val = $.trim($(this).val());
                if(val == "")
                {
                    $(this).focus();
                    returnFlag = false;
                    return false;
                }
            });
            var This = $(this);
            var location = '';
            var projectname = '';
            $.ajax({
                    url: "/projects/update/" +   This.attr('projid') ,
                    timeout: 10000,
                    cache: false,
                    type: "POST",
                    data: This.parents('form').eq(0).serialize(),
                    beforeSend: function() {
                        This.val("editing ....") ;
                        projectname = This.parents('table').eq(0).find('.nameField').val();
                        location = This.parents('table').eq(0).find('.locationField').val();
                    },
                    success: function(data) {
                        if(data == "true")
                        {
                          This.parents('table').eq(0).parents('tr').prev().find("td:first").html(projectname);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(1).html(location);
                          This.parents('table').eq(0).parents('tr').prev().show();
                          This.parents('table').eq(0).parents('tr').remove();
                        }
                        else
                        {
                          This.parents('table').eq(0).find('div.error').html(data);
                          This.parents('table').eq(0).find('div.error').parents('tr').eq(0).fadeIn(500);
                          This.parents('table').eq(0).find('div.error').animate({backgroundColor : '#FAD3C5'},4000);
                          This.val("Edit project");
                        }
                    },
                    error: function(request, error) {
                        This.parents('table').eq(0).find('div.error').html(error);
                        This.parents('table').eq(0).find('div.error').parents('tr').eq(0).fadeIn(500);
                        This.parents('table').eq(0).find('div.error').animate({backgroundColor : '#FAD3C5'},4000);
                    }
                });
            return false;
        });
    }
});