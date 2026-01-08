"use client";

export default function Coaching() {
  const benefits = [
    "Personalized workout plans tailored to your goals",
    "Weekly progress check-ins and adjustments",
    "Nutrition guidance and meal planning",
    "24/7 messaging support and motivation",
    "Video form analysis and corrections",
    "Access to exclusive coaching resources",
  ];

  const packages = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      features: [
        "Custom workout plan",
        "Monthly check-ins",
        "Email support",
        "Basic nutrition guide",
      ],
    },
    {
      name: "Pro",
      price: "$199",
      period: "/month",
      features: [
        "Custom workout & nutrition plan",
        "Bi-weekly check-ins",
        "Priority messaging support",
        "Video form analysis",
        "Weekly progress tracking",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$349",
      period: "/month",
      features: [
        "Fully customized program",
        "Weekly video calls",
        "24/7 messaging support",
        "Complete meal planning",
        "Supplement recommendations",
        "Real-time adjustments",
      ],
    },
  ];

  return (
    <section id="coaching" className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase text-black mb-4 tracking-tight">
            1-on-1 Coaching
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized attention and accelerate your fitness journey with
            dedicated coaching from Mike. Transform your body and mind with
            expert guidance every step of the way.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 rounded-xl p-8 sm:p-12 mb-16">
          <h3 className="text-3xl font-bold text-black mb-8 text-center">
            What You Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 transition-all duration-300 ${
                pkg.popular
                  ? "bg-purple text-white shadow-2xl scale-105 border-4 border-purple"
                  : "bg-white text-black shadow-lg hover:shadow-xl"
              }`}
            >
              {pkg.popular && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-white text-purple text-xs font-bold px-4 py-1 rounded-full uppercase">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-black">{pkg.price}</span>
                <span className="text-lg opacity-80">{pkg.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        pkg.popular ? "text-white" : "text-purple"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full font-bold py-3 px-6 rounded transition-all duration-300 uppercase tracking-wide ${
                  pkg.popular
                    ? "bg-white text-purple hover:bg-gray-100"
                    : "bg-purple text-white hover:bg-purple-dark"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            All packages include a 7-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
