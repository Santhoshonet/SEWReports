$(function(){
    $('select[name="project_performance[month(3i)]"').hide();
    if ($('div.error').size() == 0)
        $('.form').hide();
    else
    {
        $('.new-issue div.error').animate({backgroundColor : '#FAD3C5'},4000);
        $('#LnkAddNewIssue').hide();
        $('.new-issue input:text:first').focus();
    }
    //#F5F5ED
    $('#LnkAddNewIssue').click(function() {
        $('.CancelEditIssue').trigger('click');
        $('.new-issue div.error').parents('tr').eq(0).remove();
        $('.new-issue').fadeIn(500);
        $(this).hide();
        $('.Tblissue').find('input:text:first').focus();
    });
    $('#CancelAddIssue').click(function() {
        $('.new-issue').hide();
        $('#LnkAddNewIssue').show();
    });
    $('.Tblissue .actions .edit').click(function() {
        var issueid = $(this).parent().attr('issueid');
        if ($('#'+ issueid).size() == 0)
        {
            var This = $(this);
            $.ajax({
                    url: $(this).attr('href'),
                    timeout: 10000,
                    cache: false,
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    beforeSend: function() {
                        $('.Tblissue .CancelEditIssue').trigger('click');
                        $('.Tblissue .actions .edit').html("EDIT");
                        This.html("....");
                    },
                    success: function(data) {
                        $('.Tblissue .CancelEditIssue').trigger('click');
                        $('.Tblissue .actions .edit').html("EDIT");
                        This.parents('tr').eq(0).after("<tr style='display:none;' id='" + issueid + "' > <td colspan='4' class='data-entry' style='border-bottom: 1px solid #CDCDCD;' >" + data + "</td></tr>");
                        This.parents('tr').hide();
                        $('#'+ issueid).fadeIn(500);
                        $('#'+ issueid).find('input[type="text"]:first').focus();
                        EditIssues();
                    },
                    error: function(request, error) {
                        This.html("EDIT");
                    }
                });
        }
        return false;
    });
    function EditIssues()
    {
        $('.CancelEditIssue').click(function () {
           $(this).parents('table').eq(0).parents('tr').prev().show();
           $(this).parents('table').eq(0).parents('tr').remove().delay(500).fadeOut(500);
        });
        $('.BtnEditIssue').click(function () {
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
            var activeField = '';
            var closedField = '';
            $.ajax({
                    url: "/issues/update/" +   This.attr('issueid') ,
                    timeout: 10000,
                    cache: false,
                    type: "POST",
                    data: This.parents('form').eq(0).serialize(),
                    beforeSend: function() {
                        This.val("editing ....") ;
                        monthField = This.parents('table').eq(0).find('.monthField').val();
                        activeField = This.parents('table').eq(0).find('.activeField').val();
                        closedField = This.parents('table').eq(0).find('.closedField').val();
                    },
                    success: function(data) {
                        if(data == "true")
                        {
                          This.parents('table').eq(0).parents('tr').prev().find("td:first").html(monthField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(1).html(activeField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(2).html(closedField);
                          This.parents('table').eq(0).parents('tr').prev().show();
                          This.parents('table').eq(0).parents('tr').remove();
                        }
                        else
                        {
                          This.parents('table').eq(0).find('div.error').html(data);
                          This.parents('table').eq(0).find('div.error').parents('tr').eq(0).fadeIn(500);
                          This.parents('table').eq(0).find('div.error').animate({backgroundColor : '#FAD3C5'},4000);
                          This.val("Edit issue");
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



    // For Risks

    if ($('.new-risk div.error').size() == 0)
        $('.Tblrisks .form').hide();
    else
    {
        $('.new-risk div.error').animate({backgroundColor : '#FAD3C5'},4000);
        $('#LnkAddNewRisk').hide();
        $('.new-risk input:text:first').focus();
    }
    //#F5F5ED
    $('#LnkAddNewRisk').click(function() {
        $('.new-risk div.error').parents('tr').eq(0).remove();
        $('.new-risk').fadeIn(500);
        $(this).hide();
        $('.new-risk input:text:first').focus();
    });
    $('#CancelAddRisk').click(function() {
        $('.new-risk').hide();
        $('#LnkAddNewRisk').show();
    });
    $('.Tblrisks .actions .edit').click(function() {
        var riskid = $(this).parent().attr('riskid');
        if ($('#'+ riskid).size() == 0)
        {
            var This = $(this);
            $.ajax({
                    url: $(this).attr('href'),
                    timeout: 10000,
                    cache: false,
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    beforeSend: function() {
                        $('.Tblrisks .CancelEditRisk').trigger('click');
                        $('.Tblrisks .actions .edit').html("EDIT");
                        This.html("....");
                    },
                    success: function(data) {
                        $('.Tblrisks .CancelEditRisk').trigger('click');
                        $('.Tblrisks .actions .edit').html("EDIT");
                        This.parents('tr').eq(0).after("<tr style='display:none;' id='" + riskid + "' > <td colspan='4' class='data-entry' style='border-bottom: 1px solid #CDCDCD;' >" + data + "</td></tr>");
                        This.parents('tr').hide();
                        $('#'+ riskid).fadeIn(500);
                        $('#'+ riskid).find('input[type="text"]:first').focus();
                        EditRisks();
                    },
                    error: function(request, error) {
                        This.html("EDIT");
                    }
                });
        }
        return false;
    });
    function EditRisks()
    {
        $('.CancelEditRisk').click(function () {
           $(this).parents('table').eq(0).parents('tr').prev().show();
           $(this).parents('table').eq(0).parents('tr').remove().delay(500).fadeOut(500);
        });
        $('.BtnEditRisk').click(function () {
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
            var activeField = '';
            var closedField = '';
            $.ajax({
                    url: "/risks/update/" +   This.attr('riskid') ,
                    timeout: 10000,
                    cache: false,
                    type: "POST",
                    data: This.parents('form').eq(0).serialize(),
                    beforeSend: function() {
                        This.val("editing ....") ;
                        monthField = This.parents('table').eq(0).find('.monthField').val();
                        activeField = This.parents('table').eq(0).find('.activeField').val();
                        closedField = This.parents('table').eq(0).find('.closedField').val();
                    },
                    success: function(data) {
                        if(data == "true")
                        {
                          This.parents('table').eq(0).parents('tr').prev().find("td:first").html(monthField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(1).html(activeField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(2).html(closedField);

                          This.parents('table').eq(0).parents('tr').prev().show();
                          This.parents('table').eq(0).parents('tr').remove();
                        }
                        else
                        {
                          This.parents('table').eq(0).find('div.error').html(data);
                          This.parents('table').eq(0).find('div.error').parents('tr').eq(0).fadeIn(500);
                          This.parents('table').eq(0).find('div.error').animate({backgroundColor : '#FAD3C5'},4000);
                          This.val("Edit risk");
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




    // For Quality and HSC Index

    if ($('.new-qualityhsc div.error').size() == 0)
        $('.Tblqualityhsc .form').hide();
    else
    {
        $('.new-qualityhsc div.error').animate({backgroundColor : '#FAD3C5'},4000);
        $('#LnkAddQualityHsc').hide();
        $('.new-qualityhsc input:text:first').focus();
    }
    //#F5F5ED
    $('#LnkAddQualityHsc').click(function() {
        $('.new-qualityhsc div.error').parents('tr').eq(0).remove();
        $('.new-qualityhsc').fadeIn(500);
        $(this).hide();
        $('.new-qualityhsc input:text:first').focus();
    });
    $('#CancelAddQualityHsc').click(function() {
        $('.new-qualityhsc').hide();
        $('#LnkAddQualityHsc').show();
    });
    $('.Tblqualityhsc .actions .edit').click(function() {
        var qualityhscid = $(this).parent().attr('qualityhscid');
        if ($('#'+ qualityhscid).size() == 0)
        {
            var This = $(this);
            $.ajax({
                    url: $(this).attr('href'),
                    timeout: 10000,
                    cache: false,
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    beforeSend: function() {
                        $('.Tblqualityhsc .CancelEditQualityHscIndex').trigger('click');
                        $('.Tblqualityhsc .actions .edit').html("EDIT");
                        This.html("....");
                    },
                    success: function(data) {
                        $('.Tblqualityhsc .CancelEditQualityHscIndex').trigger('click');
                        $('.Tblqualityhsc .actions .edit').html("EDIT");
                        This.parents('tr').eq(0).after("<tr style='display:none;' id='" + qualityhscid + "' > <td colspan='4' class='data-entry' style='border-bottom: 1px solid #CDCDCD;' >" + data + "</td></tr>");
                        This.parents('tr').hide();
                        $('#'+ qualityhscid).fadeIn(500);
                        $('#'+ qualityhscid).find('input[type="text"]:first').focus();
                        EditQualityAndHsc();
                    },
                    error: function(request, error) {
                        This.html("EDIT");
                    }
                });
        }
        return false;
    });
    function EditQualityAndHsc()
    {
        $('.CancelEditQualityHscIndex').click(function () {
           $(this).parents('table').eq(0).parents('tr').prev().show();
           $(this).parents('table').eq(0).parents('tr').remove().delay(500).fadeOut(500);
        });
        $('.BtnEditQualityHscIndex').click(function () {
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
            var qualityindexField = '';
            var hscindexField = '';
            $.ajax({
                    url: "/qualityhscindices/update/" +   This.attr('qualityhscid') ,
                    timeout: 10000,
                    cache: false,
                    type: "POST",
                    data: This.parents('form').eq(0).serialize(),
                    beforeSend: function() {
                        This.val("editing ....") ;
                        monthField = This.parents('table').eq(0).find('.monthField').val();
                        qualityindexField = This.parents('table').eq(0).find('.qualityindexField').val();
                        hscindexField = This.parents('table').eq(0).find('.hscindexField').val();
                    },
                    success: function(data) {
                        if(data == "true")
                        {
                          This.parents('table').eq(0).parents('tr').prev().find("td:first").html(monthField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(1).html(qualityindexField);
                          This.parents('table').eq(0).parents('tr').prev().find("td").eq(2).html(hscindexField);

                          This.parents('table').eq(0).parents('tr').prev().show();
                          This.parents('table').eq(0).parents('tr').remove();
                        }
                        else
                        {
                          This.parents('table').eq(0).find('div.error').html(data);
                          This.parents('table').eq(0).find('div.error').parents('tr').eq(0).fadeIn(500);
                          This.parents('table').eq(0).find('div.error').animate({backgroundColor : '#FAD3C5'},4000);
                          This.val("Edit quality and hsc index");
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