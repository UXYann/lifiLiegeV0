
/* 	HOME PAGE 	*/
$('#home').click(function() {
//	console.log('navigating to page select-language.html');
	$('.wrapper').load( "select-language.html #selectLanguage",
		function(){
			selectLanguage();
		});
});
/* 	END OF HOME PAGE 	*/

/* 	SELECT LANGUAGE 	*/
//	We store here the language selected by the user for good
var languageSelected = "fr";

function selectLanguage(){
	$('#selectingFrench').click(function() {
//	console.log('Selecting French for visit and navigating to select-visit.html');
	languageSelected = "fr";
	$('.wrapper').load( "select-visit.html #selectVisit",
		function(){
//			console.log('LOADED');
			$('#freeVisit').html(InternationalizationVisitBtnFreefr);
		    $('#quickVisit').html(InternationalizationVisitBtnFastfr);
		    $('#shiftVisit').html(InternationalizationVisitBtnPerfr);
		    $('#schoolVisit').html(InternationalizationVisitBtnScolfr);

		    $('#backBtn').click(function(){
		    	$('.wrapper').load( "select-language.html #selectLanguage",
					function(){
						selectLanguage();
					});
		    });
			
			populatingInterfaceMessages();

		    selectVisit();
		    window.scrollTo(0,0);
		});
	});
	$('#selectingEnglish').click(function() {
//		console.log('Selecting English for visit and navigating to select-visit.html');
		languageSelected = "en";
		$('.wrapper').load( "select-visit.html #selectVisit",
		function(){
//			console.log('LOADED');
			$('#freeVisit').html(InternationalizationVisitBtnFreeeng);
		    $('#quickVisit').html(InternationalizationVisitBtnFasteng);
		    $('#shiftVisit').html(InternationalizationVisitBtnPereng);
		    $('#schoolVisit').html(InternationalizationVisitBtnScoleng); 

		    $('#backBtn').click(function(){
		    	$('.wrapper').load( "select-language.html #selectLanguage",
					function(){
						selectLanguage();
					});
		    });

		    populatingInterfaceMessages();

		    selectVisit();
		    window.scrollTo(0,0);
		});
	});
	$('#selectingNederlands').click(function() {
//		console.log('Selecting Nederlands for visit and navigating to select-visit.html');
		languageSelected = "ne";
		$('.wrapper').load( "select-visit.html #selectVisit",
		function(){
//			console.log('LOADED');
			$('#freeVisit').html(InternationalizationVisitBtnFreened);
		    $('#quickVisit').html(InternationalizationVisitBtnFastned);
		    $('#shiftVisit').html(InternationalizationVisitBtnPerned);
		    $('#schoolVisit').html(InternationalizationVisitBtnScolned);

		    $('#backBtn').click(function(){
		    	$('.wrapper').load( "select-language.html #selectLanguage",
					function(){
						selectLanguage();
					});
		    });

		    populatingInterfaceMessages();

		    selectVisit();
		    window.scrollTo(0,0);
		});
	});
	$('#selectingDeutsch').click(function() {
//		console.log('Selecting Deutsch for visit and navigating to select-visit.html');
		languageSelected = "de";
		$('.wrapper').load( "select-visit.html #selectVisit",

		function(){
//			console.log('LOADED');
			$('#freeVisit').html(InternationalizationVisitBtnFreedeu);
		    $('#quickVisit').html(InternationalizationVisitBtnFastdeu);
		    $('#shiftVisit').html(InternationalizationVisitBtnPerdeu);
		    $('#schoolVisit').html(InternationalizationVisitBtnScoldeu);

		    $('#backBtn').click(function(){
		    	$('.wrapper').load( "select-language.html #selectLanguage",
					function(){
						selectLanguage();
					});
		    });

		    populatingInterfaceMessages();

		    selectVisit();
		    window.scrollTo(0,0);
		});
	});
}
/* 	END OF SELECT LANGUAGE 	*/

/* 	SELECT VISIT 	*/
var visitSelected = "freeVisit";

function populatingRightLanguageToNotice(){
	if(languageSelected == "fr") {
		$('.noticeH1').html(InternationalizationLifiExpTitlefr);
		$('.noticeH2').html(InternationalizationLifiExpSubTitlefr);
	    $('.subHeaderText').html(InternationalizationLifiTxt1fr);
	    $('.notice1H2').html(InternationalizationLifiExpStep1fr);
	    $('.step1Description').html(InternationalizationLifiTxt2fr); 
	    $('.notice2H2').html(InternationalizationLifiExpStep2fr);
	    $('.step2Description').html(InternationalizationLifiTxt3fr);
	    $('.startNowTheVisit').html(InternationalizationLifiBtnNextfr);
	} else if(languageSelected == "en") {
		$('.noticeH1').html(InternationalizationLifiExpTitleeng);
		$('.noticeH2').html(InternationalizationLifiExpSubTitleeng);
	    $('.subHeaderText').html(InternationalizationLifiTxt1eng);
	    $('.notice1H2').html(InternationalizationLifiExpStep1eng);
	    $('.step1Description').html(InternationalizationLifiTxt2eng); 
	    $('.notice2H2').html(InternationalizationLifiExpStep2eng);
	    $('.step2Description').html(InternationalizationLifiTxt3eng);
	    $('.startNowTheVisit').html(InternationalizationLifiBtnNexteng);
	} else if(languageSelected == "ne") {
		$('.noticeH1').html(InternationalizationLifiExpTitlened);
		$('.noticeH2').html(InternationalizationLifiExpSubTitlened);
	    $('.subHeaderText').html(InternationalizationLifiTxt1ned);
	    $('.notice1H2').html(InternationalizationLifiExpStep1ned);
	    $('.step1Description').html(InternationalizationLifiTxt2ned); 
	    $('.notice2H2').html(InternationalizationLifiExpStep2ned);
	    $('.step2Description').html(InternationalizationLifiTxt3ned);
	    $('.startNowTheVisit').html(InternationalizationLifiBtnNextned);
	} else if(languageSelected == "de") {
		$('.noticeH1').html(InternationalizationLifiExpTitledeu);
		$('.noticeH2').html(InternationalizationLifiExpSubTitledeu);
	    $('.subHeaderText').html(InternationalizationLifiTxt1deu);
	    $('.notice1H2').html(InternationalizationLifiExpStep1deu);
	    $('.step1Description').html(InternationalizationLifiTxt2deu); 
	    $('.notice2H2').html(InternationalizationLifiExpStep2deu);
	    $('.step2Description').html(InternationalizationLifiTxt3deu);
	    $('.startNowTheVisit').html(InternationalizationLifiBtnNextdeu);
	}
}

function selectVisit() {

	$('#selectingFree').click(function() {
//		console.log('Selecting FREE VISIT and navigating to starting-notice.html');
		visitSelected = "freeVisit";
		$('.wrapper').load( "starting-notice.html #noticeBefore",
		function(){
			//console.log('LOADED');
			populatingRightLanguageToNotice();
			noticeConfirm();
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
//	REMOVE ON TABLET
			gettingLampNumber();

			window.scrollTo(0,0);
		});
	});

	$('#selectingQuick').click(function() {

		visitSelected = "quichVisit";
//		console.log('Selecting QUICK VISIT and navigating to starting-notice.html');
		$('.wrapper').load( "starting-notice.html #noticeBefore",
		function(){
//			console.log('LOADED');
			populatingRightLanguageToNotice();
			noticeConfirm();

////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
//	REMOVE ON TABLET
			gettingLampNumber();

			window.scrollTo(0,0);
		});
	});
	$('#selectingShift').click(function() {
		visitSelected = "shiftVisit";
//		console.log('Selecting SHIFT VISIT and navigating to starting-notice.html');
		$('.wrapper').load( "starting-notice.html #noticeBefore",
		function(){
//			console.log('LOADED');
			populatingRightLanguageToNotice();
			noticeConfirm();

////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
//	REMOVE ON TABLET
			gettingLampNumber();

			window.scrollTo(0,0);
		});
	});
	$('#selectingSchool').click(function() {
		visitSelected = "schoolVisit";
//		console.log('Selecting SCHOOL VISIT and navigating to starting-notice.html');
		$('.wrapper').load( "starting-notice.html #noticeBefore",
		function(){
//			console.log('LOADED');
			populatingRightLanguageToNotice();
			noticeConfirm();

////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
//	REMOVE ON TABLET
			gettingLampNumber();

			window.scrollTo(0,0);
		});
	});	
}

/* 	END OF SELECT VISIT 	*/

/*	NOTICE 	*/

function populatingRightLanguageToMap(){

	if(languageSelected == "fr") {
		$('.navMapLabel1').html(InternationalizationMapLegendfr);
	    $('#whereAreYou').html(InternationalizationMapLegend1fr);
	    $('#mapBackToHome').html(InternationalizationMapLvl1Legend2fr);
	    $('#mapGoToCloakRoom').html(InternationalizationMapLvl1Legend3fr); 
	    $('#mapGoToShop').html(InternationalizationMapLvl1Legend4fr);
	    $('#mapGoToCafe').html(InternationalizationMapLvl1Legend5fr);
	    $('#mapGoToToilettes').html(InternationalizationMapLegend6fr);
	    $('#mapGoToStairs').html(InternationalizationMapLegend7fr);
	    $('#mapGoToLifts').html(InternationalizationMapLegend8fr);
	    $('#myPositionText').html(InternationalizationMapLegendBlockfr);
	} else if(languageSelected == "en") {
		$('.navMapLabel1').html(InternationalizationMapLegendeng);
	    $('#whereAreYou').html(InternationalizationMapLegend1eng);
	    $('#mapBackToHome').html(InternationalizationMapLvl1Legend2eng);
	    $('#mapGoToCloakRoom').html(InternationalizationMapLvl1Legend3eng); 
	    $('#mapGoToShop').html(InternationalizationMapLvl1Legend4eng);
	    $('#mapGoToCafe').html(InternationalizationMapLvl1Legend5eng);
	    $('#mapGoToToilettes').html(InternationalizationMapLegend6eng);
	    $('#mapGoToStairs').html(InternationalizationMapLegend7eng);
	    $('#mapGoToLifts').html(InternationalizationMapLegend8eng);
	    $('#myPositionText').html(InternationalizationMapLegendBlockeng);
	} else if(languageSelected == "ne") {
		$('.navMapLabel1').html(InternationalizationMapLegendned);
	    $('#whereAreYou').html(InternationalizationMapLegend1ned);
	    $('#mapBackToHome').html(InternationalizationMapLvl1Legend2ned);
	    $('#mapGoToCloakRoom').html(InternationalizationMapLvl1Legend3ned); 
	    $('#mapGoToShop').html(InternationalizationMapLvl1Legend4ned);
	    $('#mapGoToCafe').html(InternationalizationMapLvl1Legend5ned);
	    $('#mapGoToToilettes').html(InternationalizationMapLegend6ned);
	    $('#mapGoToStairs').html(InternationalizationMapLegend7ned);
	    $('#mapGoToLifts').html(InternationalizationMapLegend8ned);
	    $('#myPositionText').html(InternationalizationMapLegendBlockned);
	} else if(languageSelected == "de") {
		$('.navMapLabel1').html(InternationalizationMapLegenddeu);
//		$('#navMapLevel0').html(InternationalizationLifiExpSubTitledeu);
	    $('#whereAreYou').html(InternationalizationMapLegend1deu);
	    $('#mapBackToHome').html(InternationalizationMapLvl1Legend2deu);
	    $('#mapGoToCloakRoom').html(InternationalizationMapLvl1Legend3deu); 
	    $('#mapGoToShop').html(InternationalizationMapLvl1Legend4deu);
	    $('#mapGoToCafe').html(InternationalizationMapLvl1Legend5deu);
	    $('#mapGoToToilettes').html(InternationalizationMapLegend6deu);
	    $('#mapGoToStairs').html(InternationalizationMapLegend7deu);
	    $('#mapGoToLifts').html(InternationalizationMapLegend8deu);
	    $('#myPositionText').html(InternationalizationMapLegendBlockdeu);
	}	
}

function noticeConfirm(){
	$('.startNowTheVisit').click(function(){
//		console.log('Selecting SCHOOL VISIT and navigating to starting-notice.html');
		$('.wrapper').load( "building-map.html #mapContainer",
		function(){
//			console.log('LOADED');
			populatingRightLanguageToNotice();

			populatingLandMarksToFloor("0","","1350-519");

			$('#map').smoothZoom('destroy').css('background-image', 'url(img/preloader.gif)').smoothZoom({
		    	image_url: 'img/lvl0.png',
		        responsive: false,
		        responsive_maintain_ratio: true,
		        max_WIDTH: '',
		        max_HEIGHT: '',
		        zoom_BUTTONS_SHOW: false,
		        pan_BUTTONS_SHOW: false,
		        zoom_MAX:'150',
		        initial_ZOOM: '40',
		        border_SIZE: 0,
		        initial_POSITION: '600 100'
		    });

			populatingRightLanguageToMap();
		});	
	});
}
/*	END OF NOTICE 	*/

/* 	MAP VIEW  	*/
function populatingLandMarksToFloor(whichFloor,mapNumber,currentVisitorPosition) {
//	console.log('whichFloor');

	var previousLandMarks = $('.mark');

	var previousLandMarksLogged = new Array();
	
	for (var i = 0; i < previousLandMarks.length; i++){
			previousLandMarksLogged[i] = $('.mark')[i].id;
	}

	$('#map').smoothZoom('removeLandmark', previousLandMarksLogged);

	$('#map').smoothZoom('removeLandmark', ['currentVisitorPosition']);

	if (whichFloor == "1") {
		currentLandMarks = currentLifiPointsLevel1;
	} else if (whichFloor == "2") {
		currentLandMarks = currentLifiPointsLevel2;
	} else {
		currentLandMarks = currentLifiPointsLevel0;
	}

	for (var i = 0; i < currentLandMarks.length; i++){
		var currentLandMarkPosArray = currentLandMarks[i].split("-");
		var currentLandMark = '<div class="item mark" data-position="'+currentLandMarkPosArray[0]+','+currentLandMarkPosArray[1]+'" data-show-at-zoom="0" id="'+i+'">';
		currentLandMark += '<div  data-map-number="'+currentLandMarkPosArray[2]+'" class="itemArtWorkItself"></div>';
		currentLandMark += '</div>';
		$('.landmarks').append(currentLandMark);
	}

	if(currentVisitorPosition) {
		var currentLandMarkPosArray = currentVisitorPosition.split("-");
		var currentLandMark = '<div class="item mark" data-position="'+currentLandMarkPosArray[0]+','+currentLandMarkPosArray[1]+'" data-show-at-zoom="0" id="currentVisitorPosition">';
		currentLandMark += '<div><img src="img/manIcon.png" width="40px" alt=""/></div>';
		currentLandMark += '</div>';
		$('.landmarks').append(currentLandMark);		
	}

	$('#map').smoothZoom('refreshAllLandmarks');

	if(mapNumber){

		var newLandMarks = $('.itemArtWorkItself');
		for (var i = 0; i < newLandMarks.length; i++) {

			var currentItem = newLandMarks.eq(i);

			if(currentItem.attr('data-map-number') < mapNumber) {
				currentItem.addClass('visited');
			}
		}
	}

}

/* 	END OF MAP VIEW  	*/

/*	DETAIL ART WORK 	*/

function toggleDetailsArtWorkWording(){

	$('#artWorkDetailWording').toggleClass('hidden');
	if($('#artWorkLinkedArtWorkWording').hasClass('hidden')) {
		//	Nothing
	} else {
		$('#artWorkLinkedArtWorkWording').toggleClass('hidden');
	}

	if ( ($('#artWorkLinkedArtWorkWording').hasClass('hidden')) && ($('#artWorkDetailWording').hasClass('hidden')) ) {
		$('#artWorkStillPicture').removeClass('hidden');
		$('#artWorkHeaderWording').removeClass('hidden');
	} else {
		$('#artWorkStillPicture').addClass('hidden');
		$('#artWorkHeaderWording').addClass('hidden');
	}
}

function toggleLinkedArtWorkWording(){

	$('#artWorkLinkedArtWorkWording').toggleClass('hidden');
	if($('#artWorkDetailWording').hasClass('hidden')) {
		//	Nothing
	} else {
		$('#artWorkDetailWording').toggleClass('hidden');		
	}
	
	if( ($('#artWorkLinkedArtWorkWording').hasClass('hidden')) && ($('#artWorkDetailWording').hasClass('hidden')) ){
		$('#artWorkStillPicture').removeClass('hidden');
		$('#artWorkHeaderWording').removeClass('hidden');
	} else {
		$('#artWorkStillPicture').addClass('hidden');
		$('#artWorkHeaderWording').addClass('hidden');
	}		
}

function disablingZoomableArtWork(comingFromMultiple){
	$('#zommableArtWork').css( "opacity", "1" );
	
	if($('#linkedArtWorkDetailedContent').css('display') == "block"){
		$('#linkedArtWorkDetailedContent').css('opacity', '0');
		$('#linkedArtWorkDetailedContent').css('zIndex', '0');

		$('.actionsButtonsWidget').css("zIndex", "10");
		$('#blackOverlay').css("opacity", "0");

		window.setTimeout(function(){$('#linkedArtWorkDetailedContent').css('display', 'none');$('#blackOverlay').css("display", "none")},250);
//		$('#zommableArtWork').css('margin-top', '0px');
	}

	window.setTimeout(function(){$('#zommableArtWork').css( "display", "none" )}, 100);
	$('#closingZoomableArtWork').css("display", "none");
}

function displayZoomableArtWork(currentImage,requestedWith,requestedHeight){
	$('#zommableArtWork').css( "display", "block" );
	$('#zommableArtWork').css("boxShadow", "none");
	$('#zommableArtWork').css('margin-top', '120px');
	$('#blackOverlay').css("display", "block");
	$('#blackOverlay').css("opacity", "1");

    jQuery('#zoomableArtWorkItself').smoothZoom('destroy').css('background-image', 'url(img/preloader.gif)').smoothZoom({ 
                image_url: currentImage,                    
                width: requestedWith,
                height: requestedHeight,
                responsive: false,
                responsive_maintain_ratio: true,
                max_WIDTH: '',
                max_HEIGHT: '',
                zoom_BUTTONS_SHOW: false,
                pan_BUTTONS_SHOW: false,
                zoom_MAX:'250',
                initial_ZOOM: '0',
                border_SIZE: 0
 	}); 

	$('#zommableArtWork').css( "opacity", "1" );
	$('#closingZoomableArtWork').css("display", "block");

}

function displayLinkedArtWorkWordingContent(requestedTitle,requestedHeader,requestedDesc) {

	$('.actionsButtonsWidget').css("zIndex", "-1");
	$('#blackOverlay').css("display", "block");
	$('#blackOverlay').css("opacity", "1");
	$('#linkedArtWorkDetailedContent').css('display', 'block');
	$('#linkedArtWorkDetailedContent').css('zIndex', '100');
	$('#zommableArtWork').css('margin-top', '120px');
	$('#zommableArtWork').css("boxShadow", "1px 1px 12px #CCCCCC;");
	$('.linkedArtWorkRequestedTitle').html(requestedTitle);
	$('.linkedArtWorkRequestedHeader').html(requestedHeader);
	$('.linkedArtWorkRequestedDesc').html(requestedDesc);

	window.setTimeout(function(){$('#linkedArtWorkDetailedContent').css('opacity', '1')}, 250);
}

/////////////////////////////////////////////////////////
/////////////// 	KEYWORDS 	/////////////////////////
/////////////////////////////////////////////////////////

function currentKeyWords(keyword,keywordDef) {

	this.keyword = keyword;
	this.keywordDef = keywordDef;

}



var currentMessageSet = new Array();

function populatingInterfaceMessages() {

	var fileToRetrieve = "";

	if(languageSelected == 'fr'){

		fileToRetrieve = "jsons/INTERFACE-FR.json";

	} else if(languageSelected == 'en'){

		fileToRetrieve = "jsons/INTERFACE-EN.json";

	} else if(languageSelected == 'ne'){

		fileToRetrieve = "jsons/INTERFACE-DU.json";

	} else if(languageSelected == 'de'){

		fileToRetrieve = "jsons/INTERFACE-DE.json";
	}

	var currentJson = $.getJSON( fileToRetrieve + "?nocache=" + Math.random(), function() {
		//console.log(currentJson);
		currentMessageSet = currentJson['responseJSON']
	});
}

function gettingDefOfKeyword(keyWork){

	if(visitSelected == "freeVisit") {

		if(languageSelected == 'fr'){
			keyWordsToRetrieve = "jsons/KEY-FR.json";
		} else if(languageSelected == 'en'){
			keyWordsToRetrieve = "jsons/KEY-EN.json";
		} else if(languageSelected == 'ne'){
			keyWordsToRetrieve = "jsons/KEY-DU.json";
		} else if(languageSelected == 'de'){
			keyWordsToRetrieve = "jsons/KEY-DE.json";
		}
	} else if(visitSelected == "quichVisit") {

		if(languageSelected == 'fr'){
			keyWordsToRetrieve = "jsons/KEY-FR.json";
		} else if(languageSelected == 'en'){
			keyWordsToRetrieve = "jsons/KEY-EN.json";
		} else if(languageSelected == 'ne'){
			keyWordsToRetrieve = "jsons/KEY-DU.json";
		} else if(languageSelected == 'de'){
			keyWordsToRetrieve = "jsons/KEY-DE.json";
		}	

	} else if(visitSelected == "shiftVisit") {

		if(languageSelected == 'fr'){
			keyWordsToRetrieve = "jsons/KEY-FR.json";
		} else if(languageSelected == 'en'){
			keyWordsToRetrieve = "jsons/KEY-EN.json";
		} else if(languageSelected == 'ne'){
			keyWordsToRetrieve = "jsons/KEY-DU.json";
		} else if(languageSelected == 'de'){
			keyWordsToRetrieve = "jsons/KEY-DE.json";
		}

	} else if(visitSelected == "schoolVisit") {

		if(languageSelected == 'fr'){
			keyWordsToRetrieve = "jsons/KEY-SC-FR.json";
		} else if(languageSelected == 'en'){
			keyWordsToRetrieve = "jsons/KEY-SC-EN.json";
		} else if(languageSelected == 'ne'){
			keyWordsToRetrieve = "jsons/KEY-SC-DU.json";
		} else if(languageSelected == 'de'){
			keyWordsToRetrieve = "jsons/KEY-SC-DE.json";
		}

	}

	var currentJson = $.getJSON( keyWordsToRetrieve + "?nocache=" + Math.random(), function() {
	//  console.log( "success" );
	//  console.log(currentJson['responseJSON']);

	})
	  .done(function() {
	  	var currentDefText = "";
	  	for (var i = 0; i < currentJson['responseJSON'].length; i++){
	  		if(currentJson['responseJSON'][i]['keyword'] == keyWork) {
	  			currentDefText = currentJson['responseJSON'][i]['keytext'];
	  		}
	  	}
		
		$('#blackOverlay').css("display", "block");
		$('#blackOverlay').css("opacity", "1");
		$('#keyText').css("display", "block");
		$('#keyText').css("opacity", "1");
		$('#keyText').html('<span id="closeKeyWord">x</span><span class="keyWordDefinition">' + currentDefText + '<span>');

		$('#closeKeyWord').click(function(){
			$('#blackOverlay').css("opacity", "0");
			$('#keyText').css("opacity", "0");
			window.setTimeout(function(){$('#keyText').css("display", "none");$('#blackOverlay').css("display", "none");},250);
			
		});

	  })
	  .fail(function() {
	//    console.log( "error" );
	  })
	  .always(function() {
	//    console.log( "complete" );
	  });
	 
	// Set another completion function for the request above
	currentJson.complete(function() {
	//  console.log( "second complete" );
	});
}

function parsingKeyWords(currentKeyWordsFileToRetrieve){

	if(visitSelected == "freeVisit") {

		if(languageSelected == 'fr'){
			keyWordsToRetrieve = "jsons/KEY-FR.json";
		} else if(languageSelected == 'en'){
			keyWordsToRetrieve = "jsons/KEY-EN.json";
		} else if(languageSelected == 'ne'){
			keyWordsToRetrieve = "jsons/KEY-DU.json";
		} else if(languageSelected == 'de'){
			keyWordsToRetrieve = "jsons/KEY-DE.json";
		}
	} else if(visitSelected == "quichVisit") {

		if(languageSelected == 'fr'){
			keyWordsToRetrieve = "jsons/KEY-FR.json";
		} else if(languageSelected == 'en'){
			keyWordsToRetrieve = "jsons/KEY-EN.json";
		} else if(languageSelected == 'ne'){
			keyWordsToRetrieve = "jsons/KEY-DU.json";
		} else if(languageSelected == 'de'){
			keyWordsToRetrieve = "jsons/KEY-DE.json";
		}	

	} else if(visitSelected == "shiftVisit") {

		if(languageSelected == 'fr'){
			keyWordsToRetrieve = "jsons/KEY-FR.json";
		} else if(languageSelected == 'en'){
			keyWordsToRetrieve = "jsons/KEY-EN.json";
		} else if(languageSelected == 'ne'){
			keyWordsToRetrieve = "jsons/KEY-DU.json";
		} else if(languageSelected == 'de'){
			keyWordsToRetrieve = "jsons/KEY-DE.json";
		}

	} else if(visitSelected == "schoolVisit") {

		if(languageSelected == 'fr'){
			keyWordsToRetrieve = "jsons/KEY-SC-FR.json";
		} else if(languageSelected == 'en'){
			keyWordsToRetrieve = "jsons/KEY-SC-EN.json";
		} else if(languageSelected == 'ne'){
			keyWordsToRetrieve = "jsons/KEY-SC-DU.json";
		} else if(languageSelected == 'de'){
			keyWordsToRetrieve = "jsons/KEY-SC-DE.json";
		}

	}

	var currentJson = $.getJSON( keyWordsToRetrieve + "?nocache=" + Math.random(), function() {

	})
	  .done(function() {

	  	for (var i = 0; i < currentJson['responseJSON'].length; i++){
			$('em').highlight(currentJson['responseJSON'][i]['keyword']);
			//$('div').highlight('<em>' + currentJson['responseJSON'][i]['keyword'] + '</em>');
			
			$('.highlight').click(function(){
				gettingDefOfKeyword($.trim(this.innerHTML));
								
			});
	  	}

	  })
	  .fail(function() {
	//    console.log( "error" );
	  })
	  .always(function() {
	//    console.log( "complete" );
	  });
	 
	// Set another completion function for the request above
	currentJson.complete(function() {
	//  console.log( "second complete" );
	});
}


/////////////////////////////////////////////////////////
/////////////// 	END OF KEYWORDS 	/////////////////
/////////////////////////////////////////////////////////

function populatingLinkedArtWorks(){
	var linkedArtWorkToAppend = "";

	$('#linkedArtWorksContainer').html("");
	//console.log($('#linkedArtWorksContainer'));
	
	for (var i = 0; i < linkedArtWorkArray.length; i++){
		linkedArtWorkToAppend += "<div id='"+linkedArtWorkArray[i]['idSSOeuvre']+"' class='linkedArtWorkFlow'>";
			linkedArtWorkToAppend += "<span class='linkedArtWorkShortImage'>";
//				linkedArtWorkToAppend += "<img src='img/artwork/"+linkedArtWorkArray[i]['imageSSOeuvre']+"' alt='' width='100px;' />";











				linkedArtWorkToAppend += "<img src='/mnt/extsd/liege/artwork/"+linkedArtWorkArray[i]['imageSSOeuvre']+"' alt='' width='100px;' />";


















			linkedArtWorkToAppend += "</span>";
			linkedArtWorkToAppend += "<span class='linkedArtWorkShortTitle'>";
				linkedArtWorkToAppend += linkedArtWorkArray[i]['textes']['chapeauSSOeuvre'];
			linkedArtWorkToAppend += "<span><br/>";
			linkedArtWorkToAppend += "<span class='linkedArtWorkShortHeader'>";
			linkedArtWorkToAppend +=  linkedArtWorkArray[i]['textes']['legendeImageSSOeuvre'];
			linkedArtWorkToAppend += "</span><br/>";
			linkedArtWorkToAppend += "<span class='linkedArtWorkDescription'>";
			linkedArtWorkToAppend +=  linkedArtWorkArray[i]['textes']['descriptionSSOeuvre'];
			linkedArtWorkToAppend += "</span>";			
			linkedArtWorkToAppend += "</div>";

	}

	$('#linkedArtWorksContainer').append(linkedArtWorkToAppend);	
}

function activatingActionToDetailedArtWork(comingFromMultiple){
	$('#detailedActionButton').click(function(){
		toggleDetailsArtWorkWording();		
	});

	$('#linkedArtWorkActionButton').click(function(){
		toggleLinkedArtWorkWording();		
	});	

	$('#artWorkStillPicture').click(function(){
		displayZoomableArtWork(imageArtWorkSrc,1000,625);
	});

	$('#closingZoomableArtWork').click(function(){
		disablingZoomableArtWork(comingFromMultiple);
		$('#blackOverlay').css("opacity", "0");
		window.setTimeout(function(){$('#blackOverlay').css("display", "none")},250);		
	});	
}


function enablingLinkedArtWorkClick() {
	$('.linkedArtWorkFlow').click(function(){
		var title = this.getElementsByClassName('linkedArtWorkShortTitle')[0].innerHTML;
		var header = this.getElementsByClassName('linkedArtWorkShortHeader')[0].innerHTML;
		var desc = this.getElementsByClassName('linkedArtWorkDescription')[0].innerHTML;
		var image = $(this).find("img")[0].src;
		displayZoomableArtWork(image,400,650);
		displayLinkedArtWorkWordingContent(title,header,desc);
	});
}


var imageArtWorkSrc;					

function detailsArtWork(comingFromMultiple){

	var current3DAvailable = $.getJSON("jsons/threedfile.json", function(){

		var currentLength;
		if(current3DAvailable['responseJSON'].length){
			currentLength = current3DAvailable['responseJSON'].length;
		} else {
			currentLength = 0;
		}

		for (var current3dItems = 0; current3dItems < currentLength; current3dItems++) {

/*				inject_orbitvu( 'artWorkStillPicture','num3D/orbitvu12/orbitvuer12.swf','orbitvu12/expressInstall.swf',{
					ovus_folder: "num3D/"+current3DAvailable['responseJSON'][current3dItems]['threeDItem'],
					content2: "yes",
					width: "400",
					height: "600"
					}
*/


			if(currentJsonItemRetrivedContent.image == current3DAvailable['responseJSON'][current3dItems]['image']) {
				imageArtWorkSrc = "";

				inject_orbitvu( 'artWorkStillPicture','/mnt/extsd/liege/num3D/orbitvu12/orbitvuer12.swf','/mnt/extsd/liege/num3D/orbitvu12/expressInstall.swf',{
					ovus_folder: "num3D/"+current3DAvailable['responseJSON'][current3dItems]['threeDItem'],
					content2: "yes",
					width: "400",
					height: "600"
					}
				);
			//	imageArtWorkSrc = "img/artwork/"+currentJsonItemRetrivedContent.image;
			} else {

//				imageArtWorkSrc = "img/artwork/"+currentJsonItemRetrivedContent.image;















				imageArtWorkSrc = "/mnt/extsd/liege/artwork/"+currentJsonItemRetrivedContent.image;















				$('#currentDetailedArtWorkImage').attr("src", imageArtWorkSrc);

			}
		}
	});

	$('#artWorkHeaderWording').html(unescape(currentJsonItemRetrivedContent.textHeader));
	$('#artWorkDetailsTitle').html(unescape(currentJsonItemRetrivedContent.artWorkTitle));
	$('#artWorkDetailWording').html(unescape(currentJsonItemRetrivedContent.artWorkDescription));

//	$('#debugArtWork').html(unescape(currentJsonItemRetrivedContent.textHeader) + "<br/>" + unescape(currentJsonItemRetrivedContent.artWorkTitle) + "<br/>" + unescape(currentJsonItemRetrivedContent.artWorkDescription));

    parsingKeyWords();

    populatingLinkedArtWorks();

    activatingActionToDetailedArtWork(comingFromMultiple);


	$('#backToPlanFromDetails').click(function(){

		if(comingFromMultiple){

			parsingJson(comingFromMultiple, -1 ,'backToMultiple');
		} else {
	//		console.log('Selecting SCHOOL VISIT and navigating to starting-notice.html');
			$('.wrapper').load( "building-map.html #mapContainer",
			function(){
	//			console.log('LOADED');
				populatingRightLanguageToNotice();
	//			noticeConfirm();

				var currentMapPlanImage = 'img/lvl0.png';

				if(currentJsonItemRetrivedContent.floor == "0"){
					currentMapPlanImage = 'img/lvl0.png';
					$('#navMapLevel0').addClass('selected');
					$('#navMapLevel1').removeClass('selected');
					$('#navMapLevel2').removeClass('selected');
				} else if(currentJsonItemRetrivedContent.floor == "1"){
					currentMapPlanImage = 'img/lvl1.png';
					$('#navMapLevel0').removeClass('selected');
					$('#navMapLevel1').addClass('selected');
					$('#navMapLevel2').removeClass('selected');
				} else if(currentJsonItemRetrivedContent.floor == "2"){
					currentMapPlanImage = 'img/lvl2.png';
					$('#navMapLevel0').removeClass('selected');
					$('#navMapLevel1').removeClass('selected');
					$('#navMapLevel2').addClass('selected');
				}

				
				var coordinatesToCenterZoom = "'"+ currentJsonItemRetrivedContent.coordinates.split("-")[0] + " " + currentJsonItemRetrivedContent.coordinates.split("-")[1] + "'";


				$('#map').smoothZoom('destroy').css('background-image', 'url(img/preloader.gif)').smoothZoom({
			    	image_url: currentMapPlanImage,
			        responsive: false,
			        responsive_maintain_ratio: true,
			        max_WIDTH: '',
			        max_HEIGHT: '',
			        zoom_BUTTONS_SHOW: false,
			        pan_BUTTONS_SHOW: false,
			        zoom_MAX:'150',
			        initial_ZOOM: '150',
			        border_SIZE: 0,
			        initial_POSITION: coordinatesToCenterZoom
			    });

				
				populatingLandMarksToFloor(currentJsonItemRetrivedContent.floor,currentJsonItemRetrivedContent.mapNumber,currentJsonItemRetrivedContent.coordinates);			
				populatingRightLanguageToMap();			

			});	
		}
	});


	enablingLinkedArtWorkClick();
}


/*	END OF DETAIL ART WORK 	*/


/*	App Core 	*/

/*
var lifiIDLastSeen;
var fileToCheckLifiCodeLoggged = 'test/lifi.txt?nocache=';
// On Production
//var fileToCheckLifiCodeLoggged = '/sdcard/lifiID.txt?nocache=';
var gettingLampNumber = function() {

	var currentLifi = $.get(fileToCheckLifiCodeLoggged + Math.random(), function(){
		//console.log(currentLifi.responseText);
        var currentValue = currentLifi.responseText.split(" ")[0];
    //    console.log(currentValue);

        if (lifiIDLastSeen != currentValue){
        	console.log(currentValue);
        	//	Parse JSON and Trigger Function to display new view
        	parsingJson(currentValue);
        	lifiIDLastSeen = currentValue;
	    	window.setTimeout(gettingLampNumber, 1000);                    	
        } else {
        	window.setTimeout(gettingLampNumber, 1000);
        }
	});
}
*/

var lifiIDLastSeen;
function gettingLampNumber(currentLampValue){
	
	if(currentLampValue){
		var currentValue = currentLampValue.split(" ")[0];

		if (lifiIDLastSeen != currentValue){
	    	//	Parse JSON and Trigger Function to display new view
	    	
	    	// DEBUG
//	    	$('#debugLampNumber').html(currentValue);
	    	// END OF DEBUG


	    	parsingJson(currentValue);
	    }
	}
}




function liFiArtWorkCurrent(idLifi,mapNumber,linkedArtWork,coordArtWork,coordinates,idArtWork,image,textHeader,imageLegend,artWorkTitle,artWorkDescription,floor){
	this.idLifi = idLifi;				
	this.mapNumber = mapNumber;
	this.linkedArtWork = linkedArtWork;
	this.coordArtWork = coordArtWork;
	this.coordinates = coordinates;
	this.idArtWork = idArtWork;
	this.image = image;
	this.textHeader = textHeader;
	this.imageLegend = imageLegend;
	this.artWorkTitle = artWorkTitle;
	this.artWorkDescription = artWorkDescription;
	this.floor = floor;
}

function liFiLinkedArtWork(idLinkedArtWork,image,textHeader,imageLegend,artWorkTitle,artWorkDescription){
	this.idLinkedArtWork = idLinkedArtWork;
	this.image = image;
	this.textHeader = textHeader;
	this.imageLegend = imageLegend;
	this.artWorkTitle = artWorkTitle;
	this.artWorkDescription = artWorkDescription;
}

var currentJsonItemRetrived = "";
var currentJsonItemRetrivedContent = "";

var currentLifiPointsLevel0 = new Array();
var currentLifiPointsLevel1 = new Array();
var currentLifiPointsLevel2 = new Array();
var currentFloorRequested;
var firstLaunch = 0;

var linkedArtWorkArray = new Array();

var currentJsonItemRetrivedContentArray = new Array();

var nextLiFiIdShouldBe;


function whichOneIsNext(currentLifiChecked,nextLifiWillBe,currentLiFiIdToRetrieve,comingFromMultiple,backToMultiple){

	if( ($('#mapContainer').length > 0) && (document.getElementById('carryOn').innerHTML != "OK") ) {

		$('#stopHere').css('display', 'block');
		$('#stopHere').css('opacity', '1');
	}
		if(nextLiFiIdShouldBe != currentLifiChecked){

			if(nextLiFiIdShouldBe > currentLifiChecked) {
				
				$('#stopHere').css('opacity', '0');
				$('#stopHere').css('display', 'none');

				for (var i = 0; i < currentMessageSet.length; i++) {
					if(currentMessageSet[i]['idElement'] == 'bt1') {
						var bt1 = currentMessageSet[i]['contenuEmement'];
					}

					if(currentMessageSet[i]['idElement'] == 't2') {
						var t2 = currentMessageSet[i]['contenuEmement'];
					}					
				}
				
				$('#carryOn').html(bt1);

				$('#lampStateOnVisit').html(t2);


			} else if (nextLiFiIdShouldBe < currentLifiChecked){	


				for (var i = 0; i < currentMessageSet.length; i++) {
					if(currentMessageSet[i]['idElement'] == 'bt1') {
						var bt1 = currentMessageSet[i]['contenuEmement'];
					}

					if(currentMessageSet[i]['idElement'] == 'bt2') {
						var bt2 = currentMessageSet[i]['contenuEmement'];
					}					

					if(currentMessageSet[i]['idElement'] == 't3') {
						var t3 = currentMessageSet[i]['contenuEmement'];
					}					
				}

				$('#lampStateOnVisit').html(t3);

				$('#carryOn').html(bt1);

				$('#stopHere').html(bt2);				
			}

			if($('#mapContainer').length > 0) {

				if(backToMultiple){}else{
				    $('#blackOverlay').css('display', 'block');
					$('#blackOverlay').css('opacity', '1');
				}
			}

			$('#carryOn').click(function(){
				if(backToMultiple) { var parambackToMultiple = backToMultiple};
				if(comingFromMultiple){var paramcomingFromMultiple = comingFromMultiple};
				parsingJson(currentLiFiIdToRetrieve,paramcomingFromMultiple,parambackToMultiple,'YES');
			});


			$('#stopHere').click(function(){
				$('#blackOverlay').css('opacity', '0');
				window.setTimeout(function(){$('#blackOverlay').css('display', 'block')},250);
			});

			
			nextLiFiIdShouldBe = nextLifiWillBe;
			return false;
		} 

		nextLiFiIdShouldBe = nextLifiWillBe;
	
}
//parsingJson(comingFromMultiple, -1 ,'backToMultiple','YES');
//							9948            ,          0       ,     ''       ,  YES

function whichFileToRetrieve(){
		var fileToRetrieve = "";
	if(visitSelected == "freeVisit") {

		if(languageSelected == 'fr'){
			fileToRetrieve = "jsons/P_LIBRE-FR.json";
		} else if(languageSelected == 'en'){
			fileToRetrieve = "jsons/P_LIBRE-EN.json";
		} else if(languageSelected == 'ne'){
			fileToRetrieve = "jsons/P_LIBRE-DU.json";
		} else if(languageSelected == 'de'){
			fileToRetrieve = "jsons/P_LIBRE-DE.json";
		}
	} else if(visitSelected == "quichVisit") {

		if(languageSelected == 'fr'){
			fileToRetrieve = "jsons/P_RAPIDE-FR.json";
		} else if(languageSelected == 'en'){
			fileToRetrieve = "jsons/P_RAPIDE-EN.json";
		} else if(languageSelected == 'ne'){
			fileToRetrieve = "jsons/P_RAPIDE-DU.json";
		} else if(languageSelected == 'de'){
			fileToRetrieve = "jsons/P_RAPIDE-DE.json";
		}	

	} else if(visitSelected == "shiftVisit") {

		if(languageSelected == 'fr'){
			fileToRetrieve = "jsons/P_PERIODE-FR.json";
		} else if(languageSelected == 'en'){
			fileToRetrieve = "jsons/P_PERIODE-EN.json";
		} else if(languageSelected == 'ne'){
			fileToRetrieve = "jsons/P_PERIODE-DU.json";
		} else if(languageSelected == 'de'){
			fileToRetrieve = "jsons/P_PERIODE-DE.json";
		}

	} else if(visitSelected == "schoolVisit") {

		if(languageSelected == 'fr'){
			fileToRetrieve = "jsons/P_SCOLAIRE-FR.json";
		} else if(languageSelected == 'en'){
			fileToRetrieve = "jsons/P_SCOLAIRE-EN.json";
		} else if(languageSelected == 'ne'){
			fileToRetrieve = "jsons/P_SCOLAIRE-DU.json";
		} else if(languageSelected == 'de'){
			fileToRetrieve = "jsons/P_SCOLAIRE-DE.json";
		}

	}

	return fileToRetrieve;

}

function gatheringLiFiGeoPoints(currentJson){
//	console.log(currentJson);
	
		if(firstLaunch == 0) {
			var k = 0;
			var l = 0;
			var m = 0;
		    for (var i = 0; i < currentJson['responseJSON'].length; i++) {
	//	    	console.log(currentJson['responseJSON'][i]);
		    	if(currentJson['responseJSON'][i]['etage'] == "0") {
		    		currentLifiPointsLevel0[k] = currentJson['responseJSON'][i]['coordinates'] + "-" + currentJson['responseJSON'][i]['mapNumber'];
		    		k++;
		    	}
		    	if(currentJson['responseJSON'][i]['etage'] == "1") {
		    		currentLifiPointsLevel1[l] = currentJson['responseJSON'][i]['coordinates'] + "-" + currentJson['responseJSON'][i]['mapNumber'];
		    		l++;
		    	}
		    	if(currentJson['responseJSON'][i]['etage'] == "2") {
		    		currentLifiPointsLevel2[m] = currentJson['responseJSON'][i]['coordinates'] + "-" + currentJson['responseJSON'][i]['mapNumber'];
		    		m++;
		    	}	    		    	
		    }
			firstLaunch++;
		}	
}

function parsingJson(currentLiFiIdToRetrieve,comingFromMultiple,backToMultiple,carryOn){


//	console.log('later');

	if ( (comingFromMultiple) || (comingFromMultiple == 0) ) {

	} else {

		comingFromMultiple = -1;

	};


	var fileToRetrieve = whichFileToRetrieve();

	// Assign handlers immediately after making the request,
	// and remember the jqxhr object for this request


//	console.log("fileToRetrieve");
//	console.log(fileToRetrieve);

//	console.log(fileToRetrieve);
	var currentJson = $.getJSON( fileToRetrieve, function() {
	//console.log( "success" );


//	console.log(currentJson['responseJSON']);
//	console.log(currentJson['responseJSON'].length);
		gatheringLiFiGeoPoints(currentJson);

	})
	.done(function() {
		//   console.log( "second success" );
	    //	We're lookping here into the JSON to retrieve the correct LampID

	    var howManyAreThere = 0;

	    for (var i = 0; i < currentJson['responseJSON'].length; i++) {

			lifiIDLastSeen = currentLiFiIdToRetrieve;

	    	if(currentJson['responseJSON'][i]['idLifi'] == currentLiFiIdToRetrieve) {

	    		if(i == 0) {
//	    			console.log(currentMessageSet.length);
//	    			console.log(currentMessageSet);
					for (var i = 0; i < currentMessageSet.length; i++) {

//						console.log(i);
						if(currentMessageSet[i]['idElement'] == 't5') {
							var t5 = currentMessageSet[i]['contenuEmement'];
						}							
					}

					$('#lampStateOnVisit').html(t5);	
					$('#carryOn').html("OK");
					$('#stopHere').css('display', 'none');

					$('#carryOn').click(function(){
						if(backToMultiple) { var parambackToMultiple = backToMultiple};
						if(comingFromMultiple){var paramcomingFromMultiple = comingFromMultiple};
						parsingJson(currentLiFiIdToRetrieve,paramcomingFromMultiple,parambackToMultiple,'YES');
					});					
	    		} else if (i == currentMessageSet.length) {

					for (var i = 0; i < currentMessageSet.length; i++) {
						
						if(currentMessageSet[i]['idElement'] == 'bt1') {
							var bt1 = currentMessageSet[i]['contenuEmement'];
						}

						if(currentMessageSet[i]['idElement'] == 't7') {
							var t7 = currentMessageSet[i]['contenuEmement'];
						}							
					}

					$('#lampStateOnVisit').html(t7);	
					$('#carryOn').html(bt1);
					$('#stopHere').css('display', 'none');

					$('#carryOn').click(function(){
						if(backToMultiple) { var parambackToMultiple = backToMultiple};
						if(comingFromMultiple){var paramcomingFromMultiple = comingFromMultiple};
						parsingJson(currentLiFiIdToRetrieve,paramcomingFromMultiple,parambackToMultiple,'YES');
					});		

				}



	    		if ( (carryOn) || (backToMultiple) )  {

	    			if ( (carryOn == "NO")|| (backToMultiple) ) {
						$('#blackOverlay').css('display', 'none');
						$('#blackOverlay').css('opacity', '0');
	    			}

	    		} else {
	    			if(whichOneIsNext(currentJson['responseJSON'][i]['mapNumber'],currentJson['responseJSON'][(i + 1)]['mapNumber'],currentLiFiIdToRetrieve,comingFromMultiple,backToMultiple) == false){return};
	    		}
	    	
//	    		console.log('later4');

	    		currentJsonItemRetrived = currentJson['responseJSON'][i];
	//	    		console.log(currentJson['responseJSON'][i]);
				
	    		if( (currentJsonItemRetrived['oeuvre'].length > 1) && (comingFromMultiple == -1) ) {
					currentJsonItemRetrivedContent = "";

					currentSearchVal = 0;

//	    		console.log('later5');

					for (var moreThan = 0; moreThan < currentJsonItemRetrived['oeuvre'].length; moreThan++){

						if(currentJsonItemRetrived['oeuvre'][currentSearchVal]) {
			    			if(currentJsonItemRetrived['oeuvre'][currentSearchVal]['sousOeuvre']) {
			    				var sousOeuvres = currentJsonItemRetrived['oeuvre'][currentSearchVal]['sousOeuvre'].length;
			    			} else {
			    				var sousOeuvres = 0;
			    			}    						
						}				

	    				currentJsonItemRetrivedContentArray[moreThan] = new liFiArtWorkCurrent(
										    			currentJsonItemRetrived['idLifi'],
										    			currentJsonItemRetrived['mapNumber'],
										    			sousOeuvres,
										    			currentJsonItemRetrived['oeuvre'][moreThan]['coordOeuvre'],
										    			currentJsonItemRetrived['coordinates'],
										    			currentJsonItemRetrived['oeuvre'][moreThan]['idOeuvre'],
										    			currentJsonItemRetrived['oeuvre'][moreThan]['imageOeuvre'],
										    			currentJsonItemRetrived['oeuvre'][moreThan]['textes']['chapeauOeuvre'],
										    			currentJsonItemRetrived['oeuvre'][moreThan]['textes']['legendeImageOeuvre'],
										    			currentJsonItemRetrived['oeuvre'][moreThan]['textes']['titreOeuvre'],
										    			currentJsonItemRetrived['oeuvre'][moreThan]['textes']['descriptionOeuvre'],
										    			currentJsonItemRetrived['etage']
										    		);
					}

//	    		console.log('later6');

					if ( ($('#map').length != 0) || (backToMultiple == "backToMultiple") ) {

						$('.wrapper').load( "multiple-art-works.html #multipleDetailedArtWork",
						function(){




							for (var i = 0; i < currentMessageSet.length; i++) {
								if(currentMessageSet[i]['idElement'] == 't6') {
									var t6 = currentMessageSet[i]['contenuEmement'];
								}	
							}
							$('#backToPlanFromDetails').html(t6);


							//detailsArtWork();
							window.scrollTo(0,0);
							
							var itemFromMultipleToDisplay = "";
							$('.artWorkDetailContent').html();
							for (var itemToDis = 0; itemToDis < currentJsonItemRetrivedContentArray.length; itemToDis++) {

								var divContainer = document.createElement("div");
									divContainer.setAttribute('onclick',"parsingJson("+currentJsonItemRetrivedContentArray[itemToDis].idLifi+","+itemToDis+",'','YES')");
									divContainer.setAttribute('id', currentJsonItemRetrivedContentArray[itemToDis].idLifi);
									divContainer.setAttribute('class','moreThanOnTableTable');

									var spanOne = document.createElement("span");
										spanOne.setAttribute('class','moreThanOnTableCell');
										var imageOne = document.createElement('img');
											//imageOne.setAttribute('src','img/artwork/'+currentJsonItemRetrivedContentArray[itemToDis].image);











										imageOne.setAttribute('src','/mnt/extsd/liege/artwork/'+currentJsonItemRetrivedContentArray[itemToDis].image);


































									var spanTwo = document.createElement("span");
										spanTwo.setAttribute('class','moreThanOnTableCell moreThanOnetitle');
										spanTwo.innerHTML = currentJsonItemRetrivedContentArray[itemToDis].artWorkTitle;

										spanOne.appendChild(imageOne);
										divContainer.appendChild(spanOne);
										divContainer.appendChild(spanTwo);

										itemFromMultipleToDisplay += divContainer;
										$('.artWorkDetailContent').append(divContainer);

							}

//	    		console.log('later7');

	//							$('.artWorkDetailContent').html(itemFromMultipleToDisplay);


							$('#backToPlanFromDetails').click(function(){
						//		console.log('Selecting SCHOOL VISIT and navigating to starting-notice.html');
								$('.wrapper').load( "building-map.html #mapContainer",
								function(){
						//			console.log('LOADED');
									populatingRightLanguageToNotice();
						//			noticeConfirm();

									var currentMapPlanImage = 'img/lvl0.png';
									if(currentJsonItemRetrivedContent.floor == "0"){
										currentMapPlanImage = 'img/lvl0.png';
									} else if(currentJsonItemRetrivedContent.floor == "1"){
										currentMapPlanImage = 'img/lvl1.png';
									} else if(currentJsonItemRetrivedContent.floor == "2"){
										currentMapPlanImage = 'img/lvl2.png';
									}

									if(currentJsonItemRetrivedContent){
										if(currentJsonItemRetrivedContent.coordinates){
											var coordinatesToCenterZoom = "'"+ currentJsonItemRetrivedContent.coordinates.split("-")[0] + " " + currentJsonItemRetrivedContent.coordinates.split("-")[1] + "'";											
										} else {
										var coordinatesToCenterZoom = "'400 500'";
										}
									} else {
										var coordinatesToCenterZoom = "'400 500'";
									}


									$('#map').smoothZoom('destroy').css('background-image', 'url(img/preloader.gif)').smoothZoom({
								    	image_url: currentMapPlanImage,
								        responsive: false,
								        responsive_maintain_ratio: true,
								        max_WIDTH: '',
								        max_HEIGHT: '',
								        zoom_BUTTONS_SHOW: false,
								        pan_BUTTONS_SHOW: false,
								        zoom_MAX:'150',
								        initial_ZOOM: '150',
								        border_SIZE: 0,
			        					initial_POSITION: coordinatesToCenterZoom								        
								    });
									
									populatingLandMarksToFloor(currentJsonItemRetrivedContent.floor,currentJsonItemRetrivedContent.mapNumber,currentJsonItemRetrivedContent.coordinates);			
									populatingRightLanguageToMap();							

								});	
							});
						});
					}

	    		} else {
	    			
	    			if(comingFromMultiple > -1){currentSearchVal = comingFromMultiple} else {currentSearchVal = 0};

	    			//console.log('howManyAreThere 1');
	    			if(currentJsonItemRetrived['oeuvre'][currentSearchVal]) {
		    			if(currentJsonItemRetrived['oeuvre'][currentSearchVal]['sousOeuvre']) {
		    				var sousOeuvres = currentJsonItemRetrived['oeuvre'][currentSearchVal]['sousOeuvre'].length;
		    			} else {
		    				var sousOeuvres = 0;
		    			}
		    		}
		    		var currentCoord = "";
		    		if((currentJsonItemRetrived['oeuvre'][currentSearchVal]['coordOeuvre']) && (currentJsonItemRetrived['oeuvre'][currentSearchVal]['coordOeuvre'] != "") && (currentJsonItemRetrived['oeuvre'][currentSearchVal]['coordOeuvre'] != undefined)) {
		    			currentCoord = currentJsonItemRetrived['oeuvre'][currentSearchVal]['coordOeuvre'];
		    		}

		    		currentJsonItemRetrivedContent = new liFiArtWorkCurrent(
											    			currentJsonItemRetrived['idLifi'],
											    			currentJsonItemRetrived['mapNumber'],
											    			sousOeuvres,
											    			currentCoord,
											    			currentJsonItemRetrived['coordinates'],
											    			currentJsonItemRetrived['oeuvre'][currentSearchVal]['idOeuvre'],
											    			currentJsonItemRetrived['oeuvre'][currentSearchVal]['imageOeuvre'],
											    			currentJsonItemRetrived['oeuvre'][currentSearchVal]['textes']['chapeauOeuvre'],
											    			currentJsonItemRetrived['oeuvre'][currentSearchVal]['textes']['legendeImageOeuvre'],
											    			currentJsonItemRetrived['oeuvre'][currentSearchVal]['textes']['titreOeuvre'],
											    			currentJsonItemRetrived['oeuvre'][currentSearchVal]['textes']['descriptionOeuvre'],
											    			currentJsonItemRetrived['etage']
											    		);

		    		linkedArtWorkArray = [];

	    			if(currentJsonItemRetrived['oeuvre'][currentSearchVal]) {
		    			if(currentJsonItemRetrived['oeuvre'][currentSearchVal]['sousOeuvre']) {
				    		for (var j = 0;j < currentJsonItemRetrived['oeuvre'][currentSearchVal]['sousOeuvre'].length; j++) {
				    			linkedArtWorkArray[j] = currentJsonItemRetrived['oeuvre'][currentSearchVal]['sousOeuvre'][j];

				  			}
				  		}
				  	}

					if ( ($('#map').length != 0) || (comingFromMultiple > -1) ) {
						$('.wrapper').load( "art-work-details.html #artWorkDetails",
						function(){

							for (var i = 0; i < currentMessageSet.length; i++) {
								if(currentMessageSet[i]['idElement'] == 't6') {
									var t6 = currentMessageSet[i]['contenuEmement'];
								}	

								if(currentMessageSet[i]['idElement'] == 'bt3') {
									var bt3 = currentMessageSet[i]['contenuEmement'];
								}	

								if(currentMessageSet[i]['idElement'] == 'bt4') {
									var bt4 = currentMessageSet[i]['contenuEmement'];
								}																			
							}


							$('#backToPlanFromDetails').html(t6);	

							$('#detailedActionButton').html(bt3);

							$('#linkedArtWorkActionButton').html(bt4);							

							if(comingFromMultiple > -1) {
								detailsArtWork(currentJsonItemRetrived['idLifi']);
							} else {
								detailsArtWork();
							}
							
							window.scrollTo(0,0);
						});
					}		  			
	    		}
	    	}
	    }
	  })
	  .fail(function() {
//	    console.log( "error" );
	  })
	  .always(function() {
//	    console.log( "complete" );
	  });
	 
	 
	// Set another completion function for the request above
	currentJson.complete(function() {
	//  console.log( "second complete" );
	});
}

lifiIDLastSeen = "";

/*	End of App Core 	*/

	