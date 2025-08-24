const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-12">
          <span className="glow-text">About Us</span>
        </h2>
        
        <div className="card-futuristic mb-12">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Infinity Coders is a student-driven tech community that empowers learners to grow, 
            build, and innovate through coding, collaboration, and real-world projects. We believe 
            in the infinite potential of every developer and provide the platform to unlock it.
          </p>
        </div>

        <button className="btn-hero">
          Join Us
        </button>
      </div>
    </section>
  );
};

export default About;