function FormData() {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-cyan-50"
                >
                    Full Name
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition px-3 py-2"
                    required 
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-cyan-50"
                >
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition px-3 py-2"
                    required
                />
            </div>

            <div className="sm:col-span-2 space-y-2">
                <label
                    htmlFor="address"
                    className="block text-sm font-medium text-cyan-50"
                >
                    Address
                </label>
                <input
                    id="address"
                    type="text"
                    placeholder="123 Main St, Apt 4B"
                    className="w-full rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition px-3 py-2"
                    required
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-cyan-50"
                >
                    Mobile Number
                </label>
                <input
                    id="mobile"
                    type="tel"
                    inputMode="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition px-3 py-2"
                    required
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-cyan-50"
                >
                    PIN Code
                </label>
                <input
                    id="pincode"
                    type="text"
                    inputMode="numeric"
                    pattern="^[0-9]{6}$"
                    placeholder="560001"
                    className="w-full rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition px-3 py-2"
                    required
                />
                <p className="text-xs text-cyan-100/80">
                    Enter a 6-digit PIN code.
                </p>
            </div>
        </div>
    )
}

export default FormData;