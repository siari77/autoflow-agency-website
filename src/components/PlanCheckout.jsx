import { useState } from 'react';
import { ArrowLeft, Check, CreditCard, Building, User, Mail, Phone } from 'lucide-react';

const PlanCheckout = ({ onBack, selectedPlan = 'pro', billingCycle = 'monthly' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    teamSize: '',
    billingCycle: billingCycle,
    paymentMethod: 'card'
  });

  const plans = {
    basic: {
      name: 'Basic',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Basic chatbot functionality',
        'Up to 1,000 conversations/month',
        'Email support',
        '2 integrations',
        'Basic analytics'
      ]
    },
    pro: {
      name: 'Pro',
      monthlyPrice: 599,
      yearlyPrice: 5990,
      features: [
        'Advanced chatbot with AI',
        'Up to 10,000 conversations/month',
        'Priority support',
        '10 integrations',
        'Advanced analytics',
        'Custom workflows',
        'API access'
      ]
    },
    advanced: {
      name: 'Advanced',
      monthlyPrice: 1299,
      yearlyPrice: 12990,
      features: [
        'Custom AI automation agents',
        'Unlimited conversations',
        'Dedicated account manager',
        'Unlimited integrations',
        'Enterprise analytics',
        'Custom development',
        'White-label solution',
        '24/7 phone support'
      ]
    }
  };

  const currentPlan = plans[selectedPlan];
  const price = formData.billingCycle === 'yearly' ? currentPlan.yearlyPrice : currentPlan.monthlyPrice;
  const savings = formData.billingCycle === 'yearly' ? Math.round(((currentPlan.monthlyPrice * 12 - currentPlan.yearlyPrice) / (currentPlan.monthlyPrice * 12)) * 100) : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only - no backend processing
    alert(`Plan checkout submitted! (Frontend only - no payment processing yet)\n\nPlan: ${currentPlan.name}\nPrice: $${price}/${formData.billingCycle === 'yearly' ? 'year' : 'month'}`);
    console.log('Checkout data:', { ...formData, plan: selectedPlan, price });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="mr-4 p-2 hover:bg-white hover:shadow-md rounded-full transition-all"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Order</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="border rounded-lg p-4 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{currentPlan.name} Plan</h3>
                  <p className="text-gray-600">Perfect for growing businesses</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    ${price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    /{formData.billingCycle === 'yearly' ? 'year' : 'month'}
                  </div>
                  {savings > 0 && (
                    <div className="text-sm text-green-600 font-medium">
                      Save {savings}%
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Billing Cycle
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="billingCycle"
                    value="monthly"
                    checked={formData.billingCycle === 'monthly'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Monthly</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="billingCycle"
                    value="yearly"
                    checked={formData.billingCycle === 'yearly'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Yearly <span className="text-green-600 font-medium">(Save 17%)</span>
                  </span>
                </label>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total</span>
                <span>${price.toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {formData.billingCycle === 'yearly' ? 'Billed annually' : 'Billed monthly'}
              </p>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Company Inc."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="CEO, CTO, etc."
                  />
                </div>
                
                <div>
                  <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Team Size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <CreditCard className="h-5 w-5 ml-3 mr-2 text-gray-400" />
                    <span className="text-sm font-medium">Credit/Debit Card</span>
                  </label>
                  
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="invoice"
                      checked={formData.paymentMethod === 'invoice'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <Building className="h-5 w-5 ml-3 mr-2 text-gray-400" />
                    <span className="text-sm font-medium">Invoice (Net 30)</span>
                  </label>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">14-day free trial included</p>
                    <p>Start using AutoFlow immediately. Cancel anytime during the trial period with no charges.</p>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Start Free Trial
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                By clicking "Start Free Trial", you agree to our Terms of Service and Privacy Policy. 
                You will not be charged until your trial period ends.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCheckout;

