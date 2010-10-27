$(function(){
    $('select[name="project_performance[month(3i)]"').hide();

    if ($('.new-project-detail div.error').size() == 0)
        $('.form').hide();
    else
    {
        $('.new-project-detail div.error').animate({backgroundColor : '#FAD3C5'},4000);
        $('#LnkAddNewProjectDetail').hide();
        $('.new-project-detai input:text:first').focus();
    }
    //#F5F5ED
    $('#LnkAddNewProjectDetail').click(function() {
        $('.new-project-detail div.error').parents('tr').eq(0).remove();
        $('.new-project-detail').fadeIn(500);
        $(this).hide();
        $('.new-project-detail input:text:first').focus();
    });
    $('#CancelAddProjectDetail').click(function() {
        $('.new-project-detail').hide();
        $('#LnkAddNewProjectDetail').show();
    });
    $('.Tblprojectdetail .actions .edit').click(function() {
        var projectid = $(this).parent().attr('projdetid');
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
                        $('.CancelEditProjectDetail').trigger('click');
                        $('.actions .edit').html("EDIT");
                        This.html("....");
                    },
                    success: function(data) {
                        $('.CancelEditProjectDetail').trigger('click');
                        $('.actions .edit').html("EDIT");
                        This.parents('tr').eq(0).after("<tr style='display:none;' id='" + projectid + "' > <td colspan='8' class='data-entry' style='border-bottom: 1px solid #CDCDCD;' >" + data + "</td></tr>");
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
        $('.CancelEditProjectDetail').click(function () {
           $(this).parents('table').eq(0).parents('tr').prev().show();
           $(this).parents('table').eq(0).parents('tr').remove().delay(500).fadeOut(500);
        });
        $('.BtnEditProjectDetail').click(function () {
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
            var monthField = '';
            var pvField = '';
            var lrecField = '';
            var lrepField = '';
            var ciField = '';
            var cpiField = '';
            var spiField = '';
            $.ajax({
                    url: "/project_performances/update/" +   This.attr('projdetid') ,
                    timeout: 10000,
                    cache: false,
                    type: "POST",
                    data: This.parents('form').eq(0).serialize(),
                    beforeSend: function() {
                        This.val("editing ....") ;
                        monthField = This.parents('table').eq(0).find('.monthField').val();
                        pvField = This.parents('table').eq(0).find('.pvField').val();
                        lrecField = This.parents('table').eq(0).find('.lrecField').val();
                        lrepField = This.parents('table').eq(0).find('.lrepField').val();
                        ciField = This.parents('table').eq(0).find('.ciField').val();
                        cpiField = This.parents('table').eq(0).find('.cpiField').val();
                        spiField = This.parents('table').eq(0).find('.spiField').val();
                    },
                    success: function(data) {
                        if(data == "true")
                        {
                          This.parents('table').eq(0).parents('tr').prev().find("td:first").html(monthField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(1).html(pvField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(2).html(lrecField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(3).html(lrepField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(4).html(ciField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(5).html(cpiField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(6).html(spiField);

                          This.parents('table').eq(0).parents('tr').prev().show();
                          This.parents('table').eq(0).parents('tr').remove();
                        }
                        else
                        {
                          This.parents('table').eq(0).find('div.error').html(data);
                          This.parents('table').eq(0).find('div.error').parents('tr').eq(0).fadeIn(500);
                          This.parents('table').eq(0).find('div.error').animate({backgroundColor : '#FAD3C5'},4000);
                          This.val("Edit project detail");
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



    // For Milestone

    if ($('.new-milestone div.error').size() == 0)
        $('.form').hide();
    else
    {
        $('.new-milestone div.error').animate({backgroundColor : '#FAD3C5'},4000);
        $('#LnkAddNewMilestone').hide();
        $('.new-milestone input:text:first').focus();
    }
    //#F5F5ED
    $('#LnkAddNewMilestone').click(function() {
        $('.new-milestone div.error').parents('tr').eq(0).remove();
        $('.new-milestone').fadeIn(500);
        $(this).hide();
        $('.new-milestone input:text:first').focus();
        var top = $('.new-milestone')[0].offsetTop + $('.new-milestone').height();
        $('html,body').animate({
                scrollTop:top}
                ,2500);
    });
    $('#CancelAddMileStone').click(function() {
        $('.new-milestone').hide();
        $('#LnkAddNewMilestone').show();
    });
    $('.Tblmilstone .actions .edit').click(function() {
        var mlsid = $(this).parent().attr('mlsid');
        if ($('#'+ mlsid).size() == 0)
        {
            var This = $(this);
            $.ajax({
                    url: $(this).attr('href'),
                    timeout: 10000,
                    cache: false,
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    beforeSend: function() {
                        $('.CancelEditMilestone').trigger('click');
                        $('.actions .edit').html("EDIT");
                        This.html("....");
                    },
                    success: function(data) {
                        $('.CancelAddProjectDetail').trigger('click');
                        $('.actions .edit').html("EDIT");
                        This.parents('tr').eq(0).after("<tr style='display:none;' id='" + mlsid + "' > <td colspan='8' class='data-entry' style='border-bottom: 1px solid #CDCDCD;' >" + data + "</td></tr>");
                        This.parents('tr').hide();
                        $('#'+ mlsid).fadeIn(500);
                        $('#'+ mlsid).find('input[type="text"]:first').focus();
                        EditMilestones();
                    },
                    error: function(request, error) {
                        This.html("EDIT");
                    }
                });
        }
        return false;
    });
    function EditMilestones()
    {
        $('.CancelEditMilestone').click(function () {
           $(this).parents('table').eq(0).parents('tr').prev().show();
           $(this).parents('table').eq(0).parents('tr').remove().delay(500).fadeOut(500);
        });
        $('.BtnEditMilestone').click(function () {
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
            var monthField = '';
            var buildField = '';
            var unbuildField = '';
            $.ajax({
                    url: "/milestones/update/" +   This.attr('mlsid') ,
                    timeout: 10000,
                    cache: false,
                    type: "POST",
                    data: This.parents('form').eq(0).serialize(),
                    beforeSend: function() {
                        This.val("editing ....") ;
                        monthField = This.parents('table').eq(0).find('.monthField').val();
                        buildField = This.parents('table').eq(0).find('.buildField').val();
                        unbuildField = This.parents('table').eq(0).find('.unbuildField').val();
                    },
                    success: function(data) {
                        if(data == "true")
                        {
                          This.parents('table').eq(0).parents('tr').prev().find("td:first").html(monthField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(1).html(buildField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(2).html(unbuildField);

                          This.parents('table').eq(0).parents('tr').prev().show();
                          This.parents('table').eq(0).parents('tr').remove();
                        }
                        else
                        {
                          This.parents('table').eq(0).find('div.error').html(data);
                          This.parents('table').eq(0).find('div.error').parents('tr').eq(0).fadeIn(500);
                          This.parents('table').eq(0).find('div.error').animate({backgroundColor : '#FAD3C5'},4000);
                          This.val("Edit milestone");
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