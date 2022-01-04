function addUser() {
    player1_name = document.getElementById("player_1_text").value;
    player2_name = document.getElementById("player_2_text").value;

    localStorage.setItem("Player 1 name" , player1_name);
    localStorage.setItem("Player 2 name" , player2_name);

    window.location.replace("Game_main.html")
}