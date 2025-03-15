import React from 'react';

export default function GymBuddyBlog() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Gym Buddy: AI-Powered Fitness Companion</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Summary</h2>
        <p className="text-gray-700 leading-relaxed">
        The GymBuddies app aims to revolutionize the fitness experience by connecting like-minded individuals in Toronto, fostering a community of mutual support and motivation. Developed by Bun Tao Industries, a student-led startup passionate about health and technology, Gym Buddy addresses the common hurdles of accountability and social connection in fitness journeys.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Vision</h2>
        <p className="text-gray-700 leading-relaxed">
        A mobile application that will help users match other users based on their fitness goals, schedules, and location preferences, helping them find workout buddies easily. This would lead to improved fitness results, and a more engaging fitness community
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project/Business Requirements</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Location-Based Matching</li>
          <li>User Profiles and Registration</li>
          <li>Achievement Tracking and Challenges</li>
          <li>Workout tracking</li>
          <li>Privacy and Security</li>
          <li>Database Integration</li>
        </ul>
      </section>

    
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Requirements Analysis and Design</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Technical Requirements</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>React Native for cross-platform mobile development</li>
              <li>database with FireBase</li>
              <li>Google Maps API</li>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">User Requirements</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>User Registration and Profile Setup</li>
              <li>Finding and Matching with Workout Partners</li>
              <li>Real-Time Message</li>
              <li>Tracking and Logging a Workout</li>
              <li>Offline functionality</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 underline decoration-solid"><a href="https://www.figma.com/design/0SwLFbQEnV0L9yXDLcZ0dK/Demo1?m=auto&t=eUADtBodOnrwXeaP-6">Wireframes/Mockups</a></h2>
        
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Status Reports</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-medium mb-2">Sprint 1 Complete</h3>
            <p className="text-gray-700">Project Summary</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-medium mb-2">Sprint 2 Complete</h3>
            <p className="text-gray-700">Project Plan</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-medium mb-2">Sprint 3 Complete</h3>
            <p className="text-gray-700">Social features and analytics dashboard</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-medium mb-2">Sprint 4 Complete</h3>
            <p className="text-gray-700">MockUp Demo</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-medium mb-2">Sprint 5 Complete</h3>
            <p className="text-gray-700">Project Report</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-medium mb-2">Sprint 6 Complete</h3>
            <p className="text-gray-700">Project Report</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">System Implementation</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Technology Stack</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Frontend: React Native with TypeScript</li>
              <li>Backend: Node.js, Express</li>
              <li>Database: Firebase</li>
              <li>DevOps: GitHub Actions, Docker</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Key Features Implemented</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>User authentication and profile management</li>
              <li>Geolocation-Based Partner Matching</li>
              <li>In-App Messaging System</li>
              <li>Workout Tracking and Progress Sharing</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}