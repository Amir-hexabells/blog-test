const Data = {
  home: [
    {
      icon: "/assets/images/Healthcare.svg",
      title: "Healthcare",
      description: `Website design & development for healthcare, pharmacy, and wellness businesses`,
    },
    {
      icon: "/assets/images/Startup.svg",
      title: "Startup",
      description: `Proof of concept and MVP creation by a seasoned web design and development firm`,
    },
    {
      icon: "/assets/images/Airlines.svg",
      title: "Airlines",
      description: `Reshape the flight experience with a fully responsive, modern, and user-friendly interface for leading airline`,
    },
    {
      icon: "/assets/images/Travel.svg",
      title: "Travel",
      description: `Web design, branding, and travel and tourism software development services are provided to travel agencies`,
    },
    {
      icon: "/assets/images/Real-Estate.svg",
      title: "Real Estate",
      description: `Design and development of websites for real estate agents, estate agents, and other property professions`,
    },
    {
      icon: "/assets/images/EdTech.svg",
      title: "EdTech",
      description: `Learning management systems made to order for different businesses in education`,
    },
  ],
  expertise:[
    {
      icon: "/assets/images/Healthcare.svg",
      title: "Healthcare",
      description: `Website design & development for healthcare, pharmacy, and wellness businesses`,
    },
    {
      icon: "/assets/images/Startup.svg",
      title: "Startup",
      description: `Proof of concept and MVP creation by a seasoned web design and development firm`,
    },
    {
      icon: "/assets/images/Airlines.svg",
      title: "Airlines",
      description: `Reshape the flight experience with a fully responsive, modern, and user-friendly interface for leading airline`,
    },
    {
      icon: "/assets/images/Travel.svg",
      title: "Travel",
      description: `Web design, branding, and travel and tourism software development services are provided to travel agencies`,
    },
    {
      icon: "/assets/images/Real-Estate.svg",
      title: "Real Estate",
      description: `Design and development of websites for real estate agents, estate agents, and other property professions`,
    },
    {
      icon: "/assets/images/EdTech.svg",
      title: "EdTech",
      description: `learning management systems made to order for different businesses in education`,
    },
    {
      icon: "/assets/images/B2B.svg",
      title: "B2B",
      description: `B2B website services for providing timely and compassionate responses to your customers in need`,
    },
    {
      icon: "/assets/images/Insurance.svg",
      title: "Insurance",
      description: `Create great experience for your insurance firm`,
    },
    {
      icon: "/assets/images/Transportation.svg",
      title: "Transportation",
      description: `Development & Web design for car dealers and Trucking company`,
    },
    {
      icon:"/assets/images/E-Commerce.svg",
      title:"E-Commerce",
      description:`Allow people to buy and sell physical goods, services, and digital products over the internet`
    },
    {
      icon: "/assets/images/Law-Firms.svg",
      title: "Law Firms",
      description: `Law firms website design & development`
    },
    {
      icon: "/assets/images/Telecom.svg",
      title: "Telecom",
      description: `Website design and branding for telecommunications companies`
    },
    {
      icon: "/assets/images/Home-Builders.svg",
      title: "Home Builders",
      description: `Website design and developement for construction and home builder firms`
    },
    {
      icon: "/assets/images/Gym-Fitness.svg",
      title: "Gym & Fitness",
      description: `Website is a great way to reach people who may not know about you`
    },
    {
      icon: "/assets/images/Restaurant.svg",
      title: "Restaurant",
      description: `Develop an online presence for your customers`
    },
  ],
  services:[
    {
      icon: "/assets/images/Healthcare.svg",
      title: "Healthcare",
      description: `Website design & development for healthcare, pharmacy, and wellness businesses`
    },
    {
      icon: "/assets/images/Startup.svg",
      title: "Startup",
      description: `Proof of concept and MVP creation by a seasoned web design and development firm`
    },
    {
      icon: "/assets/images/Airlines.svg",
      title: "Airlines",
      description: `Reshape the flight experience with a fully responsive, modern, and user-friendly interface for leading airline`
    },
    {
      icon: "/assets/images/Travel.svg",
      title: "Travel",
      description: `Web design, branding, and travel and tourism software development services are provided to travel agencies`
    },
    {
      icon: "/assets/images/Real-Estate.svg",
      title: "Real Estate",
      description: `Design and development of websites for real estate agents, estate agents, and other property professions`
    },
    {
      icon: "/assets/images/EdTech.svg",
      title: "EdTech",
      description: `learning management systems made to order for different businesses in education`
    },
  ]
};

export default function getIndustriesData(page) {
  if (Data[page] != undefined){
    return Data[page];
  }else{
    return [];
  }
}
