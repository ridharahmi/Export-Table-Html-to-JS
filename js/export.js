$(document).ready(function() {
    'use strict';
    $('#export_csv').on( "click", function() {
        doExport('#export', {type: 'csv'});
    });
    $('#export_excel').on( "click", function() {
        doExport('#export', {type: 'excel'});
    });
    $('#export_pdf').on( "click", function() {
        doExport('#export', {type: 'pdf', jspdf: {autotable: {tableWidth: 'wrap'}}});
    });
    $('#export_txt').on( "click", function() {
        doExport('#export', {type: 'txt'});
    });
    $('#export_json').on( "click", function() {
        doExport('#export', {type: 'json'});
    });
    $('#export_xml').on( "click", function() {
        doExport('#export', {type: 'xml'});
    });
    $('#export_sql').on( "click", function() {
        doExport('#export', {type: 'sql'});
    });
    $('#export_doc').on( "click", function() {
        doExport('#export', {type: 'doc'});
    });

    function doExport(selector, params) {
        var options = {
            tableName: 'Export',
            worksheetName: 'Export Table'
        };

        $.extend(true, options, params);

        $(selector).tableExport(options);
    }



});
