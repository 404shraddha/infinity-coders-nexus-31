import { Calendar, Users, BookOpen, Lightbulb, Code2, Wrench } from 'lucide-react';

const WhatWeDo = () => {
  const cards = [
    {
      icon: Calendar,
      title: "Events",
      description: "Regular coding competitions, hackathons, and tech meetups to challenge and inspire our community."
    },
    {
      icon: BookOpen,
      title: "Upskill",
      description: "Structured learning paths and resources to help you master new technologies and programming languages."
    },
    {
      icon: Users,
      title: "Community",
      description: "A vibrant network of like-minded developers supporting each other's growth and success."
    },
    {
      icon: Lightbulb,
      title: "Mentorship",
      description: "Connect with experienced developers who guide you through your coding journey and career path."
    },
    {
      icon: Code2,
      title: "Projects",
      description: "Collaborate on real-world projects that build your portfolio and solve meaningful problems."
    },
    {
      icon: Wrench,
      title: "Workshops",
      description: "Hands-on technical workshops covering the latest tools, frameworks, and industry best practices."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            <span className="glow-text">What We Do</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="card-futuristic animate-float group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg shadow-[var(--shadow-neon)] group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-space-grotesk font-semibold ml-4 text-foreground">
                    {card.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;