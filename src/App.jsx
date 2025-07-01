import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Menu, X, MessageCircle, Zap, DollarSign, Users, ArrowRight, Check, Star } from 'lucide-react'
import './App.css'

// Import images
import heroImage from './assets/images/hero_automation_agency.png'
import efficiencyIcon from './assets/images/efficiency_icon.png'
import costSavingsIcon from './assets/images/cost_savings_icon.png'
import customerServiceIcon from './assets/images/customer_service_icon.png'
import businessAutomation from './assets/images/business_automation.jpeg'
import chatbotExample from './assets/images/chatbot_ui_example.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isYearly, setIsYearly] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! I\'m your AI assistant. How can I help you today?' }
  ])
  const [userInput, setUserInput] = useState('')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (!userInput.trim()) return

    const newMessages = [
      ...chatMessages,
      { type: 'user', message: userInput },
      { type: 'bot', message: 'Thanks for your message! This is a demo chatbot. In a real implementation, I would provide intelligent responses based on your business needs.' }
    ]
    setChatMessages(newMessages)
    setUserInput('')
  }

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      description: 'Perfect for small businesses getting started with automation',
      features: [
        'Basic chatbot functionality',
        'Up to 1,000 conversations/month',
        'Email support',
        '2 integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Pro',
      monthlyPrice: 599,
      yearlyPrice: 5990,
      description: 'Ideal for growing businesses with advanced automation needs',
      features: [
        'Advanced chatbot with AI',
        'Up to 10,000 conversations/month',
        'Priority support',
        '10 integrations',
        'Advanced analytics',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Advanced',
      monthlyPrice: 1299,
      yearlyPrice: 12990,
      description: 'Enterprise solution with unlimited possibilities',
      features: [
        'Custom AI automation agents',
        'Unlimited conversations',
        'Dedicated account manager',
        'Unlimited integrations',
        'Enterprise analytics',
        'Custom development',
        'White-label solution',
        '24/7 phone support'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">AutoFlow</div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
              <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">Demo</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline">Login</Button>
              <Button>Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
                <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">Demo</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline">Login</Button>
                  <Button>Get Started</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Automate Your Business with 
                <span className="text-blue-600"> AI Agents</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your customer service, streamline workflows, and boost productivity with our intelligent automation solutions. Available 24/7, scalable, and tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-4">
                  Try Our Demo <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI Automation Dashboard" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Automation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI automation agents can transform your business operations and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <img src={efficiencyIcon} alt="Efficiency" className="w-16 h-16 mx-auto mb-4" />
                <CardTitle className="text-2xl">Increased Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automate repetitive tasks and free up your team to focus on strategic initiatives. Our AI agents work 24/7 without breaks.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <img src={costSavingsIcon} alt="Cost Savings" className="w-16 h-16 mx-auto mb-4" />
                <CardTitle className="text-2xl">Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reduce operational costs by up to 60% while improving service quality. Scale your operations without proportional cost increases.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <img src={customerServiceIcon} alt="Customer Service" className="w-16 h-16 mx-auto mb-4" />
                <CardTitle className="text-2xl">Better Customer Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Provide instant, personalized responses to customer inquiries. Improve satisfaction rates and build stronger relationships.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Industry Examples */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Real-World Impact</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Zap className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">E-commerce</h4>
                    <p className="text-gray-600">Handle customer inquiries, process orders, and manage returns automatically.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Users className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Healthcare</h4>
                    <p className="text-gray-600">Schedule appointments, send reminders, and provide basic health information.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <DollarSign className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Finance</h4>
                    <p className="text-gray-600">Process loan applications, answer account questions, and detect fraud.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={businessAutomation} 
                alt="Business Automation" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              See Our AI in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Try our interactive demo to experience how our chatbot can transform your customer interactions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Live Chat Demo */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="mr-2 text-blue-600" />
                  Interactive Chatbot Demo
                </CardTitle>
                <CardDescription>
                  Try chatting with our AI assistant below
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg h-80 flex flex-col">
                  <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs px-4 py-2 rounded-lg ${
                          msg.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {msg.message}
                        </div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleChatSubmit} className="border-t p-4 flex space-x-2">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button type="submit">Send</Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Features Showcase */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="text-green-600" size={20} />
                    <span>Natural Language Processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="text-green-600" size={20} />
                    <span>Multi-language Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="text-green-600" size={20} />
                    <span>Integration with CRM Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="text-green-600" size={20} />
                    <span>Real-time Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="text-green-600" size={20} />
                    <span>Custom Workflows</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Success Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Response Time</span>
                    <Badge variant="secondary">&lt; 2 seconds</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Customer Satisfaction</span>
                    <Badge variant="secondary">95%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cost Reduction</span>
                    <Badge variant="secondary">60%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Availability</span>
                    <Badge variant="secondary">24/7</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Flexible pricing options to fit businesses of all sizes. Start small and scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`${!isYearly ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isYearly ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`${isYearly ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
                Yearly <Badge variant="secondary" className="ml-1">Save 17%</Badge>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative p-6 ${plan.popular ? 'border-blue-500 border-2 shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="text-green-600 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom solution?</p>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechStart Inc.",
                quote: "AutoFlow transformed our customer service. We've seen a 40% reduction in response time and our customers love the instant support.",
                rating: 5
              },
              {
                name: "Michael Chen",
                company: "E-commerce Plus",
                quote: "The automation agents handle 80% of our customer inquiries automatically. It's like having a 24/7 support team that never sleeps.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                company: "HealthCare Solutions",
                quote: "Implementation was seamless and the ROI was immediate. Our staff can now focus on more complex patient care instead of routine inquiries.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses already using our automation solutions. Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">AutoFlow</div>
              <p className="text-gray-400">
                Empowering businesses with intelligent automation solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AutoFlow Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

