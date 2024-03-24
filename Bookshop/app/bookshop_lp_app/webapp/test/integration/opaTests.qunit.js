sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/demo/sapp/bookshoplpapp/test/integration/FirstJourney',
		'sap/demo/sapp/bookshoplpapp/test/integration/pages/BooksList',
		'sap/demo/sapp/bookshoplpapp/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/demo/sapp/bookshoplpapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);