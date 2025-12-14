import React from 'react';

const Stats = () => {
  const stats = [
    { value: '40+', label: 'Projects' },
    { value: '5+', label: 'Production Ready' },
    { value: '5+', label: 'Industries' },
    { value: '1', label: 'Publication' },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-heading mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
