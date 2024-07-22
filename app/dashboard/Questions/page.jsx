import React from 'react';

export default function Home() {
  return (
    <>
      <section className='bg-[url("/grid.svg")] bg-cover bg-center py-24'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-6xl font-extrabold text-center text-white mb-20 leading-tight'>
            Elevate Your Interview Preparation
          </h2>

          {/* Common Interview Questions Section */}
          <div className='relative bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50 p-12 rounded-2xl shadow-2xl'>
            <h3 className='text-4xl font-semibold text-center text-gray-800 mb-12'>
              Common Interview Questions
            </h3>
            <div className='grid md:grid-cols-3 gap-12 text-lg text-gray-700'>
              <div className='relative p-8 bg-white rounded-xl shadow-xl hover:bg-blue-50 transition-all transform hover:scale-105'>
                <div className='absolute top-0 right-0 -mt-4 -mr-4 bg-blue-600 text-white px-4 py-1 text-sm rounded-bl-lg'>
                  Behavioral
                </div>
                <h4 className='text-2xl font-semibold mb-4 text-blue-800'>Behavioral Questions</h4>
                <ul className='list-disc list-inside space-y-2 pl-4'>
                  <li>Tell me about a time when you faced a challenge at work.</li>
                  <li>Describe a situation where you had to work with a difficult team member.</li>
                  <li>How do you prioritize your tasks when working on multiple projects?</li>
                  <li>Give an example of a goal you set and how you achieved it.</li>
                  <li>Explain a situation where you went above and beyond your job responsibilities.</li>
                  <li>Share a time when you had to adapt to a significant change at work.</li>
                </ul>
              </div>
              <div className='relative p-8 bg-white rounded-xl shadow-xl hover:bg-green-50 transition-all transform hover:scale-105'>
                <div className='absolute top-0 right-0 -mt-4 -mr-4 bg-green-600 text-white px-4 py-1 text-sm rounded-bl-lg'>
                  Technical
                </div>
                <h4 className='text-2xl font-semibold mb-4 text-green-800'>Technical Questions</h4>
                <ul className='list-disc list-inside space-y-2 pl-4'>
                  <li>Explain the concept of closures in JavaScript.</li>
                  <li>How would you optimize a SQL query?</li>
                  <li>What is the difference between REST and GraphQL?</li>
                  <li>Describe the SOLID principles in object-oriented programming.</li>
                  <li>What are the main features of React?</li>
                  <li>How do you manage state in a React application?</li>
                </ul>
              </div>
              <div className='relative p-8 bg-white rounded-xl shadow-xl hover:bg-purple-50 transition-all transform hover:scale-105'>
                <div className='absolute top-0 right-0 -mt-4 -mr-4 bg-purple-600 text-white px-4 py-1 text-sm rounded-bl-lg'>
                  Situational
                </div>
                <h4 className='text-2xl font-semibold mb-4 text-purple-800'>Situational Questions</h4>
                <ul className='list-disc list-inside space-y-2 pl-4'>
                  <li>How would you handle a conflict between two team members?</li>
                  <li>What would you do if you missed a deadline?</li>
                  <li>How would you approach a project with an unclear scope?</li>
                  <li>Describe a time when you had to make a quick decision with limited information.</li>
                  <li>What steps would you take if a project you were leading was falling behind schedule?</li>
                  <li>How would you handle receiving criticism from a supervisor?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Job Types Section */}
          <h2 className='text-6xl font-extrabold text-center text-white mb-20'>
            Discover Job Profiles
          </h2>
          <div className='bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 p-12 rounded-2xl shadow-2xl'>
            <div className='space-y-16'>
              {[
                {
                  title: "Full Stack Developer",
                  color: "blue",
                  overview: "Full Stack Developers are proficient in both front-end and back-end development, capable of working on both the server-side and client-side of applications.",
                  questions: [
                    "Explain the MVC architecture.",
                    "What is your experience with RESTful APIs?",
                    "How do you ensure the security of web applications?",
                    "Describe your experience with database management.",
                    "What is your approach to debugging and testing?"
                  ]
                },
                {
                  title: "Java Developer",
                  color: "green",
                  overview: "Java Developers specialize in developing applications and software using the Java programming language, known for its portability and scalability.",
                  questions: [
                    "Explain the principles of Object-Oriented Programming in Java.",
                    "What are the main features of Java 8?",
                    "How do you handle exceptions in Java?",
                    "Describe the use of Java Collections Framework.",
                    "What is the difference between JDK, JRE, and JVM?"
                  ]
                },
                {
                  title: "Data Scientist",
                  color: "red",
                  overview: "Data Scientists analyze complex data to help organizations make informed decisions. They use statistical methods, machine learning, and data visualization techniques.",
                  questions: [
                    "Explain the difference between supervised and unsupervised learning.",
                    "What is a confusion matrix?",
                    "How do you handle missing data in a dataset?",
                    "Describe a time when you used data visualization to communicate findings.",
                    "What are some common metrics for evaluating machine learning models?"
                  ]
                },
                {
                  title: "DevOps Engineer",
                  color: "orange",
                  overview: "DevOps Engineers work at the intersection of development and operations, focusing on automating and streamlining the software delivery process.",
                  questions: [
                    "What is your experience with CI/CD pipelines?",
                    "How do you ensure system reliability and uptime?",
                    "Describe your experience with containerization technologies like Docker.",
                    "How do you handle infrastructure as code?",
                    "What monitoring and logging tools do you use?"
                  ]
                },
                {
                  title: "UI/UX Designer",
                  color: "purple",
                  overview: "UI/UX Designers focus on the design and usability of applications, ensuring a seamless and engaging user experience.",
                  questions: [
                    "What is your design process?",
                    "How do you conduct user research?",
                    "Describe a project where you improved the user experience.",
                    "What tools do you use for prototyping and wireframing?",
                    "How do you handle feedback on your designs?"
                  ]
                }
              ].map((job, index) => (
                <div key={index} className={`flex flex-col md:flex-row p-8 bg-${job.color}-100 rounded-2xl shadow-xl mb-12 transition-transform transform hover:scale-105 hover:shadow-2xl`}>
                  <div className='md:w-1/3'>
                    <h4 className={`text-3xl font-semibold mb-4 text-${job.color}-800`}>{job.title}</h4>
                    <p className='mb-4'>{job.overview}</p>
                  </div>
                  <div className='md:w-2/3'>
                    <ul className='list-disc list-inside space-y-3 pl-4'>
                      {job.questions.map((question, qIndex) => (
                        <li key={qIndex} className='hover:text-gray-800 transition-colors'>{question}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
