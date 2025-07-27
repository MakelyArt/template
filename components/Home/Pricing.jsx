import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      monthlyPrice: 0,
      yearlyPrice: 0,
      popular: false,
      features: {
        domain: "yourname.makely.art",
        templates: "Basic Theme",
        artworks: "Up to 5 artworks",
        blog: "1 Blog post",
        ecommerce: false,
        support: "Community",
        analytics: false,
      },
    },
    {
      name: "Premium",
      monthlyPrice: 12,
      yearlyPrice: 120,
      popular: true,
      features: {
        domain: "Custom Domain",
        templates: "Premium Templates",
        artworks: "Up to 100 artworks",
        blog: "Up to 100 blog posts",
        ecommerce: false,
        support: "Email Support",
        analytics: true,
      },
    },
    {
      name: "Pro",
      monthlyPrice: 25,
      yearlyPrice: 250,
      popular: false,
      comingSoon: true,
      features: {
        domain: "Custom Domain",
        templates: "Premium/Pro Templates",
        artworks: "Unlimited Artworks",
        blog: "Unlimited Blog Posts",
        ecommerce: true,
        support: "Priority Support",
        analytics: true,
      },
    },
  ];

  const featureLabels = {
    domain: "Domain",
    templates: "Templates",
    artworks: "Artwork Uploads",
    blog: "Blog Posts",
    ecommerce: "E-commerce",
    support: "Support",
    analytics: "Analytics",
  };

  const formatPrice = (plan) => {
    if (plan.monthlyPrice === 0) return "Free";
    if (plan.comingSoon) return "Coming Soon";

    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    const period = isYearly ? "year" : "month";
    return `$${price}/${period}`;
  };

  const getSavings = (plan) => {
    if (plan.monthlyPrice === 0 || plan.comingSoon) return null;
    const yearlyMonthly = plan.yearlyPrice / 12;
    const savings = (((plan.monthlyPrice - yearlyMonthly) / plan.monthlyPrice) * 100).toFixed(0);
    return `Save ${savings}%`;
  };

  return (
    <motion.section
      className='py-24 px-4'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      id="pricing"
      transition={{ duration: 0.6 }}>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-[800] tracking-tight mb-6 text-[#1a202c]'>
            PRICING
          </h2>
          <p className='text-xl text-[#4a5568] mb-8'>
            Choose the perfect plan for your creative journey
          </p>

          {/* Toggle Switch */}
          <motion.div
            className='flex items-center justify-center gap-4 mb-2'
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <span
              className={`text-lg font-[600] transition-colors ${
                !isYearly ? "text-[#1a202c]" : "text-[#4a5568]"
              }`}>
              Monthly
            </span>
            <motion.button
              className='relative w-16 h-8 bg-gray-200 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
              style={{ backgroundColor: isYearly ? "#1a202c" : "#e2e8f0" }}
              onClick={() => setIsYearly(!isYearly)}
              whileTap={{ scale: 0.95 }}>
              <motion.div
                className='w-6 h-6 bg-white rounded-full shadow-md'
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span
              className={`text-lg font-[600] transition-colors ${
                isYearly ? "text-[#1a202c]" : "text-[#4a5568]"
              }`}>
              Yearly
            </span>
          </motion.div>
          {isYearly && (
            <motion.p
              className='text-sm text-green-600 font-[600]'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}>
              Save up to 17% with yearly billing
            </motion.p>
          )}
        </motion.div>

        {/* Mobile Cards */}
        <div className='lg:hidden space-y-6'>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative border-2 rounded-2xl overflow-hidden ${
                plan.popular ? "border-black bg-black text-white" : "border-gray-200 bg-white"
              }`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}>
              {plan.popular && (
                <div className='absolute -top-0 left-0 right-0 flex justify-center'>
                  <span className='bg-white text-black px-4 py-2 text-sm font-[700] border-2 border-black border-t-0 rounded-b-lg'>
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className={`text-center ${plan.popular ? "pt-12 pb-6 px-6" : "p-6"}`}>
                <h3
                  className={`text-2xl font-[800] mb-2 ${
                    plan.popular ? "text-white" : "text-[#1a202c]"
                  }`}>
                  {plan.name}
                  {plan.comingSoon && (
                    <span className='text-sm ml-2 opacity-70'>(Coming Soon)</span>
                  )}
                </h3>
                <div className='mb-3'>
                  <span
                    className={`text-4xl font-[800] ${
                      plan.popular ? "text-white" : "text-[#1a202c]"
                    }`}>
                    {formatPrice(plan)}
                  </span>
                </div>
                {isYearly && getSavings(plan) && (
                  <span className='inline-block text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-[600] mb-4'>
                    {getSavings(plan)}
                  </span>
                )}
              </div>

              <div className='px-6 pb-6'>
                <div className='space-y-3 mb-6'>
                  {Object.entries(plan.features).map(([key, value]) => (
                    <div
                      key={key}
                      className='flex justify-between items-center py-2 border-b border-opacity-20'
                      style={{ borderColor: plan.popular ? "rgba(255,255,255,0.2)" : "#e2e8f0" }}>
                      <span
                        className={`font-[600] text-sm ${
                          plan.popular ? "text-white" : "text-[#1a202c]"
                        }`}>
                        {featureLabels[key]}:
                      </span>
                      <span
                        className={`font-[500] text-sm ${
                          plan.popular ? "text-white" : "text-[#4a5568]"
                        }`}>
                        {typeof value === "boolean" ? (value ? "✓" : "✗") : value}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-3 px-6 rounded-xl font-[700] text-lg transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-800"
                  } ${plan.comingSoon ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={plan.comingSoon}
                  whileHover={!plan.comingSoon ? { scale: 1.02 } : {}}
                  whileTap={!plan.comingSoon ? { scale: 0.98 } : {}}>
                  {plan.comingSoon
                    ? "Coming Soon"
                    : plan.monthlyPrice === 0
                    ? "Get Started"
                    : "Choose Plan"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Table */}
        <motion.div
          className='hidden lg:block'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <div className='bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg'>
            {/* Header */}
            <div className='grid grid-cols-4'>
              <div className='p-8 bg-gray-50'></div>
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`relative text-center border-l-2 border-gray-200 ${
                    plan.popular ? "bg-black text-white" : "bg-gray-50"
                  } ${plan.popular ? "pt-12 pb-8 px-6" : "p-8"}`}
                  initial={{ y: -10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}>
                  {plan.popular && (
                    <div className='absolute top-0 left-0 right-0 flex justify-center'>
                      <span className='bg-white text-black px-4 py-2 text-xs font-[700] border-2 border-black border-t-0 rounded-b-lg'>
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <h3
                    className={`text-2xl font-[800] mb-3 ${
                      plan.popular ? "text-white" : "text-[#1a202c]"
                    }`}>
                    {plan.name}
                    {plan.comingSoon && (
                      <span className='text-sm ml-2 opacity-70'>(Coming Soon)</span>
                    )}
                  </h3>
                  <div className='mb-3'>
                    <span
                      className={`text-3xl font-[800] ${
                        plan.popular ? "text-white" : "text-[#1a202c]"
                      }`}>
                      {formatPrice(plan)}
                    </span>
                  </div>
                  {isYearly && getSavings(plan) && (
                    <div className='mb-4'>
                      <span className='inline-block text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-[600]'>
                        {getSavings(plan)}
                      </span>
                    </div>
                  )}

                  <motion.button
                    className={`w-full py-3 px-6 rounded-xl font-[700] text-sm transition-all duration-300 ${
                      plan.popular
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-800"
                    } ${plan.comingSoon ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={plan.comingSoon}
                    whileHover={!plan.comingSoon ? { scale: 1.02 } : {}}
                    whileTap={!plan.comingSoon ? { scale: 0.98 } : {}}>
                    {plan.comingSoon
                      ? "Coming Soon"
                      : plan.monthlyPrice === 0
                      ? "Get Started"
                      : "Choose Plan"}
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Feature Rows */}
            {Object.entries(featureLabels).map(([key, label], rowIndex) => (
              <motion.div
                key={key}
                className='grid grid-cols-4 border-t-2 border-gray-200 hover:bg-gray-50 transition-colors duration-300'
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: rowIndex * 0.05 }}>
                <div className='p-6 font-[700] text-[#1a202c] text-lg bg-gray-50'>{label}</div>
                {plans.map((plan, planIndex) => (
                  <div
                    key={`${plan.name}-${key}`}
                    className={`p-6 text-center border-l-2 border-gray-200 font-[500] ${
                      plan.popular ? "bg-gray-50" : "bg-white"
                    }`}>
                    <span className='text-[#4a5568] break-words'>
                      {typeof plan.features[key] === "boolean" ? (
                        plan.features[key] ? (
                          <span className='text-green-600 text-xl'>✓</span>
                        ) : (
                          <span className='text-red-500 text-xl'>✗</span>
                        )
                      ) : (
                        plan.features[key]
                      )}
                    </span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className='text-center mt-16'
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <p className='text-lg text-[#4a5568] mb-6'>
            Need a custom solution?{" "}
            <Link href='#' className='text-black font-[700] underline hover:no-underline'>
              Contact us
            </Link>
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href='#'
              className='inline-block bg-black text-white text-lg sm:text-xl font-[700] uppercase px-12 sm:px-16 py-4 sm:py-5 rounded-full transition-all duration-300 tracking-wide hover:bg-gray-800'>
              Start Your Journey
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Pricing;
