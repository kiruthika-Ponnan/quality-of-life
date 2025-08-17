import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageCircle, 
  Send, 
  Bot, 
  Clock,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

const AIMentor: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hello! I\'m your AI Health Mentor. I\'m here to help you with personalized health advice, wellness tips, and answer any questions you might have. How can I assist you today?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: chatHistory.length + 1,
        type: 'user' as const,
        message: message.trim(),
        timestamp: new Date().toLocaleTimeString()
      };
      
      setChatHistory([...chatHistory, newMessage]);
      setMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: chatHistory.length + 2,
          type: 'bot' as const,
          message: 'Thank you for your message! I\'m processing your request and will provide you with personalized health guidance based on your needs.',
          timestamp: new Date().toLocaleTimeString()
        };
        setChatHistory(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const features = [
    {
      icon: Brain,
      title: 'Personalized Guidance',
      description: 'Get health advice tailored to your specific needs and goals.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access health mentorship whenever you need it, day or night.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your health information is kept secure and confidential.'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your health journey and see your improvements over time.'
    }
  ];

  const healthTopics = [
    'Nutrition & Diet',
    'Exercise & Fitness',
    'Mental Health',
    'Sleep & Recovery',
    'Stress Management',
    'Preventive Care'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your AI Health Mentor
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Experience personalized health guidance powered by advanced AI technology. 
              Get expert advice, wellness tips, and support for your health journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Health Mentorship?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI mentor combines cutting-edge technology with comprehensive health knowledge 
              to provide you with the guidance you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Chat Interface */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Health Mentor</h3>
                  <p className="text-sm text-gray-500">Online • Ready to help</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto mb-4 space-y-4">
                {chatHistory.map((chat) => (
                  <div
                    key={chat.id}
                    className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        chat.type === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{chat.message}</p>
                      <p className={`text-xs mt-1 ${
                        chat.type === 'user' ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        {chat.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about health and wellness..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Health Topics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Popular Health Topics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {healthTopics.map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                        {topic}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Pro Tip</h4>
                <p className="text-gray-700 text-sm">
                  Start with a specific question or health goal. The more specific you are, 
                  the better I can tailor my advice to your needs!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your AI health mentor is ready to guide you towards better health and wellness. 
              Start the conversation today!
            </p>
            <button
              onClick={() => document.getElementById('chat-input')?.focus()}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Start Chatting Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIMentor; 