const img = (n) => `/images/expimg${n}.jfif`;
 
// Categories are placeholders - adjust to match your designs.
export const designs = [
  { id: 1, title: "Daniel Photos", image: img(1), category: "Illustration" },
  { id: 2, title: "TLC", image: img(2), category: "Illustration" },
  { id: 3, title: "Apple Airmax", image: img(3), category: "Branding" },
  { id: 4, title: "Rivoijanishni ortga", image: img(4), category: "Branding" },
  { id: 5, title: "Po not Shifu Design", image: img(5), category: "Web Design" },
  { id: 6, title: "Frosted Glass", image: img(6), category: "Web Design" },
  { id: 7, title: "Digital Product", image: img(21), category: "Typography" },
  { id: 8, title: "Style Design", image: img(8), category: "Generic" },
  { id: 9, title: "Retro", image: img(9), category: "Typography" },
  { id: 10, title: "Static Designs", image: img(10), category: "Generic" },
  { id: 11, title: "Arin Design", image: img(11), category: "Illustration" },
  { id: 12, title: "MUSIC", image: img(12), category: "Branding" },
  { id: 13, title: "Jazz Do It", image: img(13), category: "Typography" },
  { id: 14, title: "Popular", image: img(14), category: "Typography" },
  { id: 15, title: "Billie Eillish", image: img(15), category: "Typography" },
  { id: 16, title: "Fontes Design", image: img(16), category: "Typography" },
  { id: 17, title: "Winetone Canada", image: img(17), category: "Branding" },
  { id: 18, title: "Tale Design", image: img(18), category: "Generic" },
  { id: 19, title: "Damn Design", image: img(19), category: "Illustration" },
  { id: 20, title: "Peak", image: img(20), category: "Typography" },
];
 
export const categories = ["Animation", "Branding", "Generic", "Mobile", "Illustration", "Web Design", "Typography"];
 
export const steps = [
  { icon: "upload", title: "Upload Brief", text: "Share your project details and let our AI grasp your vision." },
  { icon: "wand", title: "Generate Designs", text: "Watch as our AI crafts unique design ideas tailored to you." },
  { icon: "rocket", title: "Refine Creation", text: "Perfect your chosen concept with easy-to-use AI tools." },
];
 
export const plans = [
  { name: "FREE", price: "$0/m", note: "Free forever", featured: false,
    features: ["Basic AI-generated designs", "Access to customization tools", "Standard templates library", "5 projects per month"] },
  { name: "BASIC", price: "$14.99/m", note: "Billed Monthly", featured: true,
    features: ["Advanced AI-generated designs", "Full access to customization tools", "Premium templates library", "Unlimited projects", "Real-time collaboration", "Priority email support"] },
  { name: "PRO", price: "$29.99/m", note: "Billed Monthly", featured: false,
    features: ["All features included in Pro Plan", "Dedicated account manager", "Custom AI solutions and designs", "Onboarding and training sessions", "24/7 priority support", "Advanced analytics and reporting", "Secure cloud storage"] },
];