import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import './Skills.css';

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const skillsData = [
  { name: 'Java', grade: 'Jedi', percentage: 95, color: '#FF6F61' },
  { name: 'Spring Boot', grade: 'Ninja', percentage: 90, color: '#6B5B95' },
  { name: 'React', grade: 'Geek', percentage: 85, color: '#88B04B' },
  { name: 'JavaScript', grade: 'Ninja', percentage: 80, color: '#F7CAC9' },
  { name: 'CSS', grade: 'Geek', percentage: 70, color: '#034F84' },
];

const gradeScale = ['Jedi', 'Ninja', 'Geek', 'Newbie'];

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const barData = {
    labels: skillsData.map((skill) => skill.name),
    datasets: [{
      label: 'Skill Grades',
      data: skillsData.map((skill) => skill.percentage),
      backgroundColor: skillsData.map((skill) => skill.color),
    }],
  };

  const barOptions = {
    indexAxis: 'x',
    scales: {
      y: {
        ticks: {
          callback: (value) => gradeScale[3 - Math.floor(value / 25)],
        },
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: { display: false },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const pieData = {
    labels: skillsData.map((skill) => skill.name),
    datasets: [{
      data: skillsData.map((skill) => skill.percentage),
      backgroundColor: skillsData.map((skill) => skill.color),
      hoverOffset: 5,
    }],
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="chart-container">
        {isMobile ? <Pie data={pieData} /> : <Bar data={barData} options={barOptions} />}
      </div>
    </section>
  );
};

export default Skills;
