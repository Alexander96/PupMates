app.controller('achievmentReviewCtrl', function($scope, notifier, requester){
    
    requester.queryAchievmentApplications()
    .then(function (data) {

    	$scope.achievmentApplications = data;
    }, function (err) {

    	console.log(err);
    	notifier.error('We were unable to query any achievments!');
    });
});