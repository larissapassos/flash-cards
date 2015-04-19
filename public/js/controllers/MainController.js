app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	FlashCardsFactory.getFlashCards().then(function(response) {
		$scope.flashCards = response;
	});
	//console.log($scope.flashCards);
	$scope.categories = [
		'MongoDB',
		'Express',
		'Angular',
		'Node'
	];

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if (answer.correct) {
				ScoreFactory.correct++;
			}
			else {
				ScoreFactory.incorrect++;
			}
		}
	}

	$scope.getCategoryCards = function(category) {
		FlashCardsFactory.getFlashCards(category).then(function(response) {
			$scope.flashCards = response;
		});
		$scope.selectedCategory = category;
	}

	$scope.resetCategory = function() {
		FlashCardsFactory.getFlashCards().then(function(response) {
			$scope.flashCards = response;
		});
		$scope.selectedCategory = null;
	}
});