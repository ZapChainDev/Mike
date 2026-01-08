"use client";

export default function Hero() {
  const handleStartTraining = () => {
    alert("Welcome to Train with Mike! Registration page coming soon.");
  };

  return (
    <section
      className="relative h-screen w-full flex items-center bg-cover bg-center sm:bg-fixed"
      style={{
        backgroundImage: "url('/Mike Picture.png')",
        transform: "scaleX(-1)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      {/* Content */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full"
        style={{ transform: "scaleX(-1)" }}
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] font-black italic text-white leading-none mb-4 sm:mb-6 tracking-tighter uppercase max-w-[800px] opacity-0 animate-fadeInLeft"
          style={{ animationDelay: "0.2s" }}
        >
          TRAIN WITH MIKE
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-normal mb-6 sm:mb-8 lg:mb-10 max-w-[600px] leading-relaxed opacity-0 animate-fadeInLeft"
          style={{ animationDelay: "0.5s" }}
        >
          Reach your peak performance with personalized strength and
          conditioning.
        </p>
        <button
          onClick={handleStartTraining}
          className="bg-purple text-white text-sm sm:text-base lg:text-lg font-bold py-3 px-8 sm:py-4 sm:px-10 lg:py-5 lg:px-12 rounded border-none cursor-pointer uppercase tracking-wider transition-all duration-300 hover:bg-purple-dark hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(163,118,255,0.4)] active:translate-y-0 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.8s" }}
        >
          START TRAINING
        </button>
      </div>
    </section>
  );
}
