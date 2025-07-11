import React from 'react';
import './App.css';

// Import placeholder images (you'll replace these with your actual images)
const heroWomanSmiling = "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
const heroManSmiling = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
const heroDiversePeople = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
const stephenPhoto = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
const hayleyPhoto = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
            The Dating Suite
          </h1>
          
          {/* Scroll Down Indicator - positioned right after title */}
          <div className="mb-8 text-center">
            <div className="inline-flex flex-col items-center space-y-2 animate-bounce">
              <span className="text-sm text-gray-500" style={{fontFamily: 'Inter, sans-serif'}}>
                Scroll down for more ↓
              </span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
            A dating community built on support, honesty, real conversation — and of course, fun.
          </p>
          
          <a 
            href="https://tally.so/r/nPNMV5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            style={{backgroundColor: '#7ED6A7', fontFamily: 'Inter, sans-serif'}}
          >
            👋 Join Our Waiting List — It's Free
          </a>
          <p className="text-sm text-gray-500 mt-4" style={{fontFamily: 'Inter, sans-serif'}}>
            Free to join • No hidden fees
          </p>
          
          {/* BETA Notice */}
          <p className="text-sm text-gray-400 text-center italic" style={{fontFamily: 'Inter, sans-serif'}}>
            Now in BETA — help shape the future of dating.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">✓</span>
            </div>
            <p className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Privacy-first</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">✓</span>
            </div>
            <p className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Supportive features</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">✓</span>
            </div>
            <p className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Meaningful interactions</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">✓</span>
            </div>
            <p className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>AI guidance</p>
          </div>
        </div>

        {/* Hero Images */}
        <div className="mt-16 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src={heroWomanSmiling}
              alt="Happy woman smiling"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img
              src={heroManSmiling}
              alt="Happy man smiling"
              className="w-full h-48 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="pt-8">
            <img
              src={heroDiversePeople}
              alt="Diverse group of happy people"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* AI Coaches Section - MOVED TO TOP FOR MAXIMUM ENGAGEMENT */}
      <div className="mt-20">
        <div className="text-center space-y-8">
          <div className="inline-block bg-gradient-to-r from-[#7ED6A7]/20 to-[#D8B4E2]/20 px-8 py-4 rounded-full">
            <span className="text-sm font-medium text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
              Coming Soon
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" style={{fontFamily: 'Inter, sans-serif'}}>
            🧠 Meet Your In-House AI Coaches
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
            Three distinct personalities, each designed to support you through different aspects of dating and relationships. Think of them as your personal guides, each with unique strengths to help you navigate your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">💔</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
              Heartmend
            </h3>
            <p className="text-gray-600 text-center" style={{fontFamily: 'Inter, sans-serif'}}>
              Your compassionate guide through breakups and healing. Heartmend helps you process emotions, rebuild confidence, and prepare for new connections when you're ready.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
              The Wingmate
            </h3>
            <p className="text-gray-600 text-center" style={{fontFamily: 'Inter, sans-serif'}}>
              Your confidence booster and casual dating expert. The Wingmate helps you navigate early conversations, first dates, and building attraction with authenticity and charm.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🌱</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
              The Mentor
            </h3>
            <p className="text-gray-600 text-center" style={{fontFamily: 'Inter, sans-serif'}}>
              Your relationship strategist for deeper connections. The Mentor guides you through building meaningful partnerships, communication skills, and long-term relationship success.
            </p>
          </div>
        </div>
      </div>

      {/* MicroDate Section */}
      <div className="mt-32">
        <div className="text-center space-y-8">
          <div className="inline-block bg-gradient-to-r from-[#7ED6A7]/20 to-[#D8B4E2]/20 px-8 py-4 rounded-full">
            <span className="text-sm font-medium text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
              Coming Soon
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" style={{fontFamily: 'Inter, sans-serif'}}>
            📹 MicroDate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
            Our signature 2-minute AI-guided video dates are on the way. Get ready — think modern speed dating, 2025 style. No pressure, just spark.
          </p>
        </div>
      </div>

      {/* Micro Lounge Section */}
      <div className="mt-32">
        <div className="text-center space-y-8">
          <div className="inline-block bg-gradient-to-r from-[#7ED6A7]/20 to-[#D8B4E2]/20 px-8 py-4 rounded-full">
            <span className="text-sm font-medium text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
              Coming Soon
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" style={{fontFamily: 'Inter, sans-serif'}}>
            💬 Micro Lounge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
            Not just for dating — it's where the fun lives! Share stories, drop advice, or dive into real talk with other singles. Like a group chat… but better.
          </p>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="mt-32 bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
            Join thousands who believe dating deserves better
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#D158A5] mb-2">2,000+</div>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>People on our waiting list</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#D158A5] mb-2">95%</div>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Want more authentic connections</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#D158A5] mb-2">85%</div>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Tired of superficial dating apps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Thoughtful Matching Section */}
      <div className="mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
              🎯 Thoughtful Matching
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
              Designed to reduce ghosting and awkwardness. The Dating Suite prioritizes people, not profiles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                    Quality over Quantity
                  </h3>
                  <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                    Fewer, more meaningful matches based on genuine compatibility and shared values.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                    Conversation Starters
                  </h3>
                  <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                    AI-powered prompts that go beyond "Hey" to spark real, engaging conversations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                    Mutual Interest Required
                  </h3>
                  <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                    Both people must show genuine interest before connecting, reducing one-sided interactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 text-center">
              <div className="text-6xl mb-4">💝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                Connect with people, not just profiles.
              </h3>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                Our matching algorithm considers personality, values, and relationship goals — not just photos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why We Built This Section */}
      <div className="mt-32 bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12" style={{fontFamily: 'Inter, sans-serif'}}>
            Why We Built The Dating Suite
          </h2>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
            <p>
              We kept hearing the same stories from friends, family, and workmates — dating apps that felt more like catalogues than communities. Swipe after swipe. Ghosting. Awkward small talk that never led anywhere. Everything felt rushed, surface-level, and exhausting.
            </p>
            
            <p>
              It made us think: dating deserves better. What if we created something that actually encouraged real connection? A space where people felt supported, not judged — where personality, kindness, and conversation mattered more than perfect photos or algorithms chasing clicks?
            </p>
            
            <p className="text-xl font-semibold text-gray-900">
              The Dating Suite is our answer. A dating app and community that genuinely cares — where real conversations come first, and something meaningful can actually begin.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Founders Section */}
      <div className="mt-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12" style={{fontFamily: 'Inter, sans-serif'}}>
            Meet the Founders
          </h2>
          
          <p className="text-xl text-gray-600 mb-16" style={{fontFamily: 'Inter, sans-serif'}}>
            Founded in Manchester by Stephen and Hayley
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <img
                src={stephenPhoto}
                alt="Stephen - Co-founder"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-6 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                Stephen
              </h3>
              <p className="text-gray-600 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                Co-founder & Product
              </p>
              <p className="text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                Passionate about creating technology that brings people together authentically. Believes that the best relationships start with genuine conversation.
              </p>
            </div>

            <div className="text-center">
              <img
                src={hayleyPhoto}
                alt="Hayley - Co-founder"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-6 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                Hayley
              </h3>
              <p className="text-gray-600 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                Co-founder & Community
              </p>
              <p className="text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                Dedicated to building supportive communities where people feel valued and understood. Champions authentic connection over superficial matching.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8">
            <p className="text-lg text-gray-700 italic" style={{fontFamily: 'Inter, sans-serif'}}>
              "We're building the dating app we wish existed when we were single. A place where being yourself isn't just encouraged — it's celebrated."
            </p>
            <p className="text-gray-600 mt-4" style={{fontFamily: 'Inter, sans-serif'}}>
              — Stephen & Hayley
            </p>
          </div>
        </div>
      </div>

      {/* Privacy & Safety Section */}
      <div className="mt-32 bg-gradient-to-r from-green-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
            🔒 Your Privacy & Safety Matter
          </h2>
          <p className="text-xl text-gray-600 mb-12" style={{fontFamily: 'Inter, sans-serif'}}>
            We're committed to creating a safe, respectful environment for everyone.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                Privacy First
              </h3>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                Your data is yours. We never sell personal information and give you full control over your privacy settings.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">✋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                Zero Tolerance
              </h3>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                Harassment, hate speech, and inappropriate behavior result in immediate removal from our community.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                Community Guidelines
              </h3>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                Clear, fair rules that promote respect, kindness, and authentic connection for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-32">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16" style={{fontFamily: 'Inter, sans-serif'}}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                When will The Dating Suite be available?
              </h3>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                We're currently in BETA and working hard to launch soon. Join our waiting list to be among the first to experience The Dating Suite when we go live.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                How is this different from other dating apps?
              </h3>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                We focus on quality connections over quantity. Our AI coaches provide personalized support, MicroDates encourage real conversation, and our community features create a supportive environment for meaningful relationships.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                Will it cost money?
              </h3>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                The Dating Suite will offer both free and premium features. Our core matching and community features will always be accessible to everyone, with optional premium features for enhanced experiences.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                What are MicroDates?
              </h3>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                MicroDates are our signature 2-minute AI-guided video conversations. They're designed to help you connect authentically without the pressure of long video calls, giving you a real sense of chemistry and compatibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="mt-32 bg-gradient-to-r from-[#7ED6A7] to-[#D8B4E2] py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
            Real connection is closer than you think.
          </h2>
          <p className="text-xl text-white/90 mb-12" style={{fontFamily: 'Inter, sans-serif'}}>
            Join a dating community built around support, not swiping. Because meaningful relationships deserve better tools.
          </p>
          
          <a 
            href="https://tally.so/r/nPNMV5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            style={{fontFamily: 'Inter, sans-serif'}}
          >
            👋 Start Your Journey
          </a>
          
          <p className="text-white/80 mt-8 text-lg" style={{fontFamily: 'Inter, sans-serif'}}>
            See you on the other side.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
            The Dating Suite
          </h3>
          <p className="text-gray-400 mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
            A dating community built on support, honesty, and real conversation.
          </p>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>
              © 2024 The Dating Suite. Made with ❤️ in Manchester.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;    
