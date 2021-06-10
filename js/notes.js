
function Draw(note) {
    const vf = new Vex.Flow.Factory({
        renderer: {elementId: 'notes', width: 90, height: 200}
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
          score.voice(score.notes(note, {stem: 'up'}))
      ]
    }).addClef('treble');

    vf.draw();
}

function AddScore() {
    window.SCORE += 10
    $("#score").html(window.SCORE)
}

$(document).ready(function(){

    window.NOTE = 'C4/w'
    window.SCORE = 0

    Draw(window.NOTE);

    const notes = ['C4/w', 'D4/w', 'E4/w', 'F4/w', 'G4/w', 'A4/w', 'B4/w', 'C5/w', 'D5/w', 'E5/w', 'F5/w', 'G5/w', 'A5/w'];

    $("#n-answer").on("click", function(event){
        console.log(event.target.innerHTML)
        if (event.target.innerHTML != window.NOTE[0]) {
            console.log("failed");
            return
        }

        console.log("ok!");

        AddScore()

        $("#notes>svg").remove();
        var idx = Math.ceil(Math.random()*(notes.length-1));
        window.NOTE = notes[idx]
        Draw(window.NOTE)
    });
});
