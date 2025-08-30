import SubmitButton from "./SubmitButton.jsx";
import FormData from "./FormData.jsx";
import Done from "./Done.jsx";
import {useState} from "react";

function Form() {
    const [bool, setBool] = useState(false);

    function fetchSubmit(boolValue) {
        setBool(boolValue);
    }

    return (
        <div className="w-full max-w-2xl">
            <div className="bg-white/10 backdrop-blur-md border b        order-white/10 rounded-2xl shadow-xl overflow-hidden">
                <div className="px-6 py-5 sm:px-8 sm:py-6         border-b border-white/10">
                    <h1 className="text-xl sm:tex        t-2xl font-semibold text-white tracking-tight">
                        Personal Details
                    </h1>
                    <p className="mt-1 text-sm text-cyan-100/80">
                        Please fill out all the fields below to continue.
                    </p>
                </div>

                <form
                    className="px-6 py-6 sm:px-8 sm:py-8 space-y-6"
                >
                    {bool ? <Done/> : <FormData/>}
                    <SubmitButton onSend={fetchSubmit}/>
                </form>
            </div>
            <p className="mt-4 text-center text-xs text-cyan-100/70">
                By continuing, consent is given to data processing according to the privacy policy.
            </p>
        </div>
    )
}

export default Form