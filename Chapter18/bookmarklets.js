//This bookmarklet changes a pages CSS styles
javascript:(function(){var styles=
'*{background:#FFF !important;color:#000!important}:link,:link
*{color:#00F!important}:visited, visited
*{color:#93C!important}';
var newSS=document.createElement('link');
newSS.rel='stylesheet';
newSS.href='data:text/css,'+escape(styles);
document.getElementsByTagName('head')[0].
appendChild(newSS);})();

//This bookmarklet performs a dictionary lookup
javascript:(function(){var inText=window.
getSelection()+'';if(!inText){inText=prompt('Word:','');}if(inText){window.open
('http://www.answers.com/topic/' +escape(inText)+'#American_Heritage_Dictionary_ds',
(inText)+'#American_Heritage_Dictionary_ds',
'dictWin','width=800,height=500,left=75,top=175,scrollbars=yes');}})();

//This bookmarklet performs a thesaurus lookup
javascript:(function(){var inText=window.
getSelection()+'';if(!inText){inText=
prompt('Word','');}if(inText){window.open
('http://www.answers.com/topic/'+escape
(inText)+'#Roget\'s_Thesaurus_ds','thesWin',
'width=800,height=500,left=75,top=175,scrollbars=yes');}})();

//This bookmarklet views all of the images on a page in a table
javascript:(function(){var iWin,i,t='',di=document.images;for(i=0;i<di.length;i++){if(t.indexOf
(di[i].src)<0){t+='<tr><td><img src='+di[i].src+'></td></td>'+di[i].height+'</td></td>'+di[i].
width+'</td></td>'+di[i].src+'</td></td>';}}if(t==''){alert('No images!');}else{iWin=window.open
('','IW','width=800,height=600,scrollbars=yes');iWin.document.body.innerHTML='<table border=1
cellpadding=10 cellspacing=0><tr><th>Image</th><th>Height</th><th>Width</th><th>URL</th>
</tr>'+t+'</table>';}})();

//Displays latin characters
javascript:(function(){var eWin,n,i,j,w,t='<table border=1 cellpadding=20 cellspacing=0>',
l=document.createElement('p'),v='aAeEiIoOuUyY',s=new Array('acute','circ','elig','Elig',
'grave','ring','slash','tilde','uml');for(i=0;i<v.length;i++){for(j=0;j<s.length;j++)
{w=v.charAt(i)+s[j]+';';l.innerHTML='&'+w;n=l.innerHTML;if(n.length==1){t+='<tr><td>&'+w+'</td>
<td>&'+'amp;'+w+'</td><td>&'+'amp;#'+n.charCodeAt(0)+';</td></tr>';}}}eWin=window.open('','EW',
'scrollbars=yes,width=300,height='+screen.height);eWin.document.body.innerHTML=t+'</table>';})();

//Converting RGB Values to Hex
javascript:(function(){var s,i,n,h='#',x='0123456789ABCDEF',c=prompt('R,G,B:','');if(c)
{s=c.split(',');for(i=0;i<3;i++){n=parseInt(s[i]);h+=x.charAt(n>>4)+x.charAt(n&15);}
prompt('Hexacolor:',h);}})();

//Converting Kilometers to Miles
javascript:(function(){var t,expr=prompt('length in kilometers:','');if(isNaN(parseFloat(expr)))
{t=expr+' is not a number';} else{t='Length in miles is '+Math.round(expr*6124)/10000;}
alert(t);})();

//A bookmarklet calculator
javascript:(function(){var evl,expr=prompt('Formula...(eg: 2*3 + 7/8)','');with(Math)try{evl=
parseFloat(eval(expr));if(isNaN(evl)){throw Error('Not a number!');}prompt('Result of
'+expr+':',evl);}catch(evl){alert(evl);}})();

//URL Shortener
javascript:(function(){window.open('http://tinyurl.com//create.php?url='+location.href,'',
'width=750,height=500,scrollbars=yes');})();

//Page Validator
javascript:(function(){window.open('http://validator.w3.org/check?uri='location.href,'',
'width=800,height=900,resizable=yes,scrollbars=yes');})();

//Mail a Page
javascript:(function(){location.href='mailto:?SUBJECT='+document.title+'&BODY='+escape
(location.href)+' \r'+window.getSelection();})();

//Resize a Page
javascript:(function(){resizeTo(640,480);moveTo(0,0);})();
