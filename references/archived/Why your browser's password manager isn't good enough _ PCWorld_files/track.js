// JavaScript Document

/*for Lookbook email*/
var lbemail = '';
/*for ECM Parameter Campaign Id */
var campaignId = '';
/*for ECM Parameter Program Id */
var programId = '';
/*for new parameter ssg_utm1 */
var utm1 = '';
/*for new parameter ssg_utm2 */
var utm2 = '';
/*for new parameter ssg_utm3 */
var utm3 = '';
/*for ECM Parameter x value*/
var x = '';
/*for ECM Parameter vc */
var vc = '';
var ip_add = '';
var referrer = '';
var visitingPage = '';
/* for cookie value */
var cookieValue = '';
var utm_source='';
var utm_term='';
var huid='';


function getVisitor(accountId)
{
		"use strict";
		var script = document.getElementById('tlink');
		var fullurl = script.src;
		var endIndex = fullurl.indexOf("/wt");
//	var endIndex = fullurl.indexOf("/lptc");	
		fullurl = fullurl.substring(0, endIndex);
		var turl = fullurl;
		//var turl = "//"+window.location.hostname+":"+window.location.port;
		var url = window.location.href; 
		url=url.substring(url.indexOf('?')+1, url.length);
		visitingPage=window.location.href;
		var path = window.location.href; 
	
		//for host name//
	  	var x = location.hostname;
		referrer = document.referrer;
		//For IP Address//
		var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})

		//parameters values
		function GetQueryStringParams(sParam)
		{
			var sPageURL = window.location.search.substring(1);
			var sURLVariables = sPageURL.split('&');
			for (var i = 0; i < sURLVariables.length; i++)
			{
				var sParameterName = sURLVariables[i].substring(0, sURLVariables[i].indexOf("="));
				if (sParameterName == sParam)
				{
					return sURLVariables[i].substring(sURLVariables[i].indexOf("=")+1, sURLVariables[i].length);
				}
			}
		}
	
					
	//debugger;
    lbemail = GetQueryStringParams('lb_email')!=null?GetQueryStringParams('lb_email'):'';
 	campaignId = GetQueryStringParams('campaign_id')!=null?GetQueryStringParams('campaign_id'):'';
 	programId = GetQueryStringParams('program_id')!=null?GetQueryStringParams('program_id'):'';
 	utm1 = GetQueryStringParams('ssg_utm1')!=null?GetQueryStringParams('ssg_utm1'):'';
	utm2 = GetQueryStringParams('ssg_utm2')!=null?GetQueryStringParams('ssg_utm2'):'';
	utm3 = GetQueryStringParams('ssg_utm3')!=null?GetQueryStringParams('ssg_utm3'):'';
	x = GetQueryStringParams('x')!=null?GetQueryStringParams('x'):'';
	vc = GetQueryStringParams('_v_c')!=null?GetQueryStringParams('_v_c'):'';
	utm_source = GetQueryStringParams('utm_source')!=null?GetQueryStringParams('utm_source'):'';
	utm_term = GetQueryStringParams('utm_term')!=null?GetQueryStringParams('utm_term'):'';
	huid = GetQueryStringParams('huid')!=null?GetQueryStringParams('huid'):'';
	if(utm_source!=''){
		utm1=utm_source;
	}
	if(utm_term!=''){
		utm2=utm_term;
	}
	if(huid!=''){
		utm3=huid;
	}
	
	cookieValue = '0000';
	/*--------------------------------------- Method Name --------------------------*/
	//debugger;
	makeAjaxCall(ip_add, turl, accountId, cookieValue);
	}

function makeAjaxCall(ip_add, turl, accountId, cookieValue) {
	var url = turl+'/wt/tc'; // change url
//var url = turl+'/lptc/tc'; // change url
	//alert('12');
	var data = {'cookie_val':cookieValue, 'account_id':accountId,'lb_email':lbemail, 'campaign_id':campaignId, 'program_id':programId, 'ssg_utm1':utm1, 'ssg_utm2':utm2,	'ssg_utm3':utm3, 'x':referrer, 	'ip':ip_add, '_v_c':vc, 'visitingPage':visitingPage};
	jQuery.ajax({
		url:url,
		data: jQuery.param(data),	 
		type:'GET', 
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		success: function(result)
		{
			
		},
		error: function(xhr, textStatus, errorThrow)
		{

		}
	}) 	
}