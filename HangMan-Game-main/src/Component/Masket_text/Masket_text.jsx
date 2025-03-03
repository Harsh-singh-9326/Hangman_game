import { getMaskedString } from "./Masking_utility";

function Masket_text({ text, Guessed_letter }) {
    const maskedString = getMaskedString(text, Guessed_letter); 

    return (
        <>
            {maskedString.map((letter, index) => (
                <span key={index} className="mx-1">
                    {letter}
                </span>
            ))}
        </>
    );
}

export default Masket_text;
