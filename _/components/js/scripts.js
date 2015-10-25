/*-------

	Programmer = Keith Murphy 
	File = scriptsMap.js
	date Created = 8_10_2015
	lastMod = 8_10_2015
------*/


$(document).ready(function() {
  /// initialize() google maps

    function initialize() {
        $.get('_/php/AJAXJSON.php', function(data) {
            var parsedData = jQuery.parseJSON(data);
            console.log(parsedData);
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: 8,
                center: new google.maps.LatLng(45.523375, -122.676201),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var infowindow = new google.maps.InfoWindow;
            var marker, i;

            for (i = 0; i < parsedData.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(parsedData[i][2], parsedData[i][3]),
                    map: map
                });

                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent(
                            '<div class="markerInfoWindow greySections">'
                                + '<div class="whiteCard">'
                                    + '<h2>' + parsedData[i][0] + '</h2>'
                                    + '<hr>'
                                    + '<div class="floatLeft">'
                                        + '<img src="' + parsedData[i][5] + '">'
                                    + '</div>'
                                    + '<div class="floatLeft">'
                                        + '<span>'
                                            + '<p>' + parsedData[i][4] + '</p>'
                                            + '<p>Website: ' + '<a href="' + parsedData[i][1] + '"target="_blank">' + parsedData[i][0] + '</a>' + '</p>'
                                        + '</span>'
                                    + '</div>'
                                    + '<div class="clearBoth"></div>'
                                + '</div>'
                            + '</div>'
                        );
                        infowindow.open(map, marker);
                    }; // end return function
                })(marker, i));
            }
        }); // end get
        ////////////////////////////////////////////////////////
    //    var map = new google.maps.Map(document.getElementById('map-canvas'),
    //        mapOptions);
    //
    //    /////////////////////////////////////////////////////////// for United Nations Portland Chapter
    //    // THis grabs the LAT and LNG for the marker
    //  	var UNNPortlandChapterLatLng = new google.maps.LatLng(45.554258, -122.622123);
    //
    //  	// THis is the content of the marker
    //  	var UNNPortlandChapterContent = '<h2>United Nations Association Portland Chapter</h2>'
    //  		+ '<div class="floatLeft">'
    //  		+ '<p>We are a nonprofit, nonpartisan organization that supports the work of the'
    //  		+ '<br>United Nations in the Oregon area and we encourage active civic participation'
    //  		+ '<br> in the most important social and economic issues facing the world today.</p>'
    //  		+ '</div>';
    //
    //  	// this is giving the UNNPortlandChapterInfoWindow the UNNPortlandChapterContent
    //  	var UNNPortlandChapterInfoWindow = new google.maps.InfoWindow({
    //  		content: UNNPortlandChapterContent
    //  	})// end UNNPortlandChapterIngotWindow
    //
    //  	// This creates the Marker
    //  	var UNNPortlandChapterMarker = new google.maps.Marker({
    //  		position: UNNPortlandChapterLatLng,
    //  		map: map,
    //  		title: 'UNNPortlandChapterMarker',
    //  		id: 'UNNPortlandChapterMarker'
    //  	}); // end UNNPortlandChapterMarker
    //
    //  	// This add eventListener to UNNPortlandChapterMarker
    //  	google.maps.event.addListener(UNNPortlandChapterMarker, 'click', function() {
    //
		//	 // if(UNNPortlandChapterInfoWindow.open() === true{
    ////   			UNNPortlandChapterInfoWindow.open(map, UNNPortlandChapterMarker);
    ////   		} else {
    ////   			UNNPortlandChapterInfoWindow.close();
    ////   		}
    //
    //      if(UNNPortlandChapterInfoWindow.open() == null) {
    //        UNNPortlandChapterInfoWindow.open(map, UNNPortlandChapterMarker);
    //
    //      } else if(UNNPortlandChapterInfoWindow.open() == true) {
    //        UNNPortlandChapterInfoWindow.close(map, UNNPortlandChapterMarker);
    //        console.log('This');
    //      }
    //    }); // end UNNPortlandChapter- event
    //
    //    google.maps.event.addDomListener(document.getElementById("UNNPortlandChapterButton"), 'click', function() {
    //      map.setCenter(UNNPortlandChapterMarker.getPosition());
    //       UNNPortlandChapterInfoWindow.open(map, UNNPortlandChapterMarker);
    //    }); // end UNNPortlandChapterButton
    //
    //
    //    for(var s=0; s <= 2; s++) {
    //        //output += '<p>' + parsedData[1][s] + '</p>';
    //        for(var i=0; i < 5; i++) {
    //            console.log(parsedData[0][i] + 'This is inside the loop');
    //            output += '<p>' + parsedData[s][i] + '</p>';
    //        } // end for
    //    }
    } // end initialize()
	google.maps.event.addDomListener(window, 'load', initialize);
}); // end ready 