const Alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM";

function Letterbutton({ text, Guessed_letter, onletterclick }) {
    const originalletters = new Set(text.toUpperCase().split(""));
    const Guessed_letterset = new Set(Guessed_letter);

    const buttonstyle = (letter) => {
        if (Guessed_letterset.has(letter)) {
            return originalletters.has(letter) ? "bg-green-500" : "bg-red-500";
        } else {
            return "bg-blue-500";
        }
    };
    function handleletterclick(event){
        const characteroftheletter = event.target.value
        onletterclick?.(characteroftheletter);
    }

    const buttons = Alphabet.split("").map((letter) => (
        <button
            key={`button ${letter}`}
            value={letter}
            onClick={() => onletterclick(letter)}
            disabled={Guessed_letterset.has(letter)}
            className={`h-12 w-12 m-1 text-white rounded-md ${buttonstyle(letter)}`}
        >
            {letter}
        </button>
    ));

    return <div className="flex flex-wrap">{buttons}</div>;
}

export default Letterbutton;
