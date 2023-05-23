import { drawCharacterPicker } from "./drawCharacterPicker";
import { getName } from "./gridNames";

const getGameImage = () => {
    const gameField = document.querySelector('#gameField');
    const gameImage = document.createElement('div');
    gameImage.setAttribute("id", "gameImage");

    const targetGrid = document.createElement('div');
    targetGrid.setAttribute("id", "targetGrid");

    gameField.appendChild(gameImage);
    gameImage.appendChild(targetGrid);

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            let targetSquare = document.createElement("div");
            targetSquare.classList.add("targetSquare");
            targetSquare.setAttribute("id", `${[i, j]}`);
            targetSquare.addEventListener('click', () => {
                // console.log(targetSquare.id)
                //getName(targetSquare.id)
                drawCharacterPicker();
            });
            targetGrid.appendChild(targetSquare);
        }
    }
}

export { getGameImage };

