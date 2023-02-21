function initalizePdfviewer(arguments) {
                 //Initializes the PDF Viewer control in new window
                 var ws = window.open("", '_blank', "width=1000,height=600,location=no,menubar=no,status=no,titilebar=no,resizable=no")
                 ws.document.write('<!DOCTYPE html><html><head><title>PdfViewer</title><link rel="stylesheet" type="text/css" href="../themes/default-theme/ej.web.all.min.css"><script src="../scripts/jquery-2.1.4.min.js"><\/script><script src="../scripts/ej.web.all.min.js"><\/script><\/head><body>');
                 ws.document.write('<div style="width:100%;min-height:570px" id="container"><\/div>')
                 ws.document.write("<script>$(function(){ $('#container').ejPdfViewer({ serviceUrl: '../api/PdfViewer'})})<\/script>");
                 ws.document.write('<\/body><\/html>');
                 ws.document.close();
             }     