import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    otp: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleSendOTP = () => {
    if (formData.email) {
      setOtpSent(true);
    }
  };

  const handleVerifyOTP = () => {
    if (formData.otp) {
      setEmailVerified(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailVerified) {
      alert("Please verify your email first");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms & Conditions");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12 pt-[88px] sm:pt-[96px]">
        <div className="w-full max-w-xl">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <a href="/" className="flex items-center">
              <img
                src="/edu_logo.svg"
                alt="Edutainer"
                className="h-10 sm:h-12 w-auto"
              />
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            {/* Header */}
            <div className="mb-8 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Create your account
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Start your journey with curated editorial learning.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email Address with Send OTP */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 flex-1"
                    required
                    disabled={emailVerified}
                  />
                  <Button
                    type="button"
                    onClick={handleSendOTP}
                    disabled={!formData.email || emailVerified}
                    className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium whitespace-nowrap"
                  >
                    Send OTP
                  </Button>
                </div>
              </div>

              {/* OTP Field */}
              {otpSent && !emailVerified && (
                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-sm font-medium text-gray-700">
                    OTP
                  </Label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={formData.otp}
                      onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 flex-1"
                      maxLength={6}
                      required
                    />
                    <Button
                      type="button"
                      onClick={handleVerifyOTP}
                      disabled={!formData.otp}
                      className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium whitespace-nowrap"
                    >
                      Verify
                    </Button>
                  </div>
                </div>
              )}

              {/* Mobile Number */}
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                  Mobile Number
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Password and Confirm Password - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start space-x-3 pt-2">
                <input
                  id="terms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{" "}
                  <Link to="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                    Terms & Conditions
                  </Link>
                  {" "}and understand how my data is protected.
                </label>
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 mt-8"
              >
                Register
              </Button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
