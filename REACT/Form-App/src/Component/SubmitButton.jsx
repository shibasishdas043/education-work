import {useState} from "react";

function SubmitButton(boolValue) {
    const [submit, setSubmit] = useState("Submit Now");

    function submitted(event) {
        event.preventDefault();
        setSubmit("Submitted");
        
        boolValue.onSend(true);
    }

    return (
        <div>
            <div className="pt-2 flex items-center justify-between gap-4">
                <button
                    type="submit"
                    className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white transition`}
                    onClick={submitted}
                >
                    {submit}
                </button>

                {/* Optional: custom button component */}
                {/* <Done label={submit} onClick={submitted} /> */}
            </div>
        </div>
    )
}

export default SubmitButton;