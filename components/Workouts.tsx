"use client";

export default function Workouts() {
  const workoutPrograms = [
    {
      title: "Strength Training",
      description:
        "Build muscle mass and increase your overall strength with our comprehensive strength training programs.",
      duration: "8 Weeks",
      level: "Intermediate",
    },
    {
      title: "HIIT Cardio",
      description:
        "High-intensity interval training designed to burn fat and improve cardiovascular endurance.",
      duration: "6 Weeks",
      level: "Advanced",
    },
    {
      title: "Beginner Program",
      description:
        "Perfect for those new to fitness. Learn proper form and build a solid foundation.",
      duration: "4 Weeks",
      level: "Beginner",
    },
  ];

  return (
    <section id="workouts" className="py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase text-black mb-4 tracking-tight">
            Our Workouts
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our expertly designed workout programs tailored to your
            fitness level and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workoutPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">
                <span className="inline-block bg-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {program.level}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.description}
              </p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500">
                  Duration: {program.duration}
                </span>
              </div>
              <button className="w-full bg-purple text-white font-bold py-3 px-6 rounded hover:bg-purple-dark transition-all duration-300 uppercase tracking-wide">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which program is right for you?
          </p>
          <button className="bg-black text-white font-bold py-4 px-10 rounded hover:bg-gray-800 transition-all duration-300 uppercase tracking-wide">
            Take Our Quiz
          </button>
        </div>
      </div>
    </section>
  );
}
