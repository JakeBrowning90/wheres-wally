import { clearContent } from "./clearContent";
import { drawGameScreen } from "./drawGameScreen";
import { drawScoreScreen } from "./drawScoreScreen";

const drawStartScreen = () => {
    const content = document.querySelector('#content');
    const startScreenContent = document.createElement('div');
    startScreenContent.classList.add('startScreenContent');
    startScreenContent.textContent = "Start Screen"

    const startGameButton = document.createElement('button');
    startGameButton.textContent = "Start game";
    startGameButton.addEventListener("click", function () {
        clearContent();
        drawGameScreen();
    });

    const viewScoresButton = document.createElement('button');
    viewScoresButton.textContent = "View scoreboard";
    viewScoresButton.addEventListener("click", function () {
        clearContent();
        drawScoreScreen();
    });

    content.appendChild(startScreenContent);
    startScreenContent.appendChild(startGameButton);
    startScreenContent.appendChild(viewScoresButton);
}

export { drawStartScreen };