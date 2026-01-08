"use client";

export default function About() {
  const stats = [
    { number: "500+", label: "Clients Transformed" },
    { number: "10+", label: "Years Experience" },
    { number: "15K+", label: "Training Hours" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase text-black mb-4 tracking-tight">
            About Mike
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your dedicated partner in achieving peak physical performance
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">My Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                With over a decade of experience in the fitness industry, I've
                dedicated my life to helping people unlock their full physical
                potential. My journey began as an athlete struggling with
                injuries, which led me to discover the science of proper
                training and recovery.
              </p>
              <p>
                Through years of education, practical experience, and working
                with hundreds of clients, I've developed a unique approach that
                combines strength training, conditioning, and lifestyle coaching
                to deliver sustainable results.
              </p>
              <p>
                Whether you're a complete beginner or an experienced athlete
                looking to break through plateaus, I'm here to guide you every
                step of the way. Together, we'll build not just a better body,
                but a stronger, more confident version of yourself.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div>
            <div className="bg-purple text-white p-8 rounded-xl">
              <h4 className="text-2xl font-bold mb-4">My Philosophy</h4>
              <p className="leading-relaxed">
                "Fitness is not just about lifting weights or running miles.
                It's about building discipline, mental resilience, and creating
                a lifestyle that supports your goals. Every rep, every set,
                every workout is a step toward becoming the best version of
                yourself."
              </p>
              <p className="mt-4 font-semibold">- Mike</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-black text-purple mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
