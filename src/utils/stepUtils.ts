export const STEP_INFO = [
    {
        id: 1,
        title: "Your info",
        heading: "Personal info",
        subheading: "Please provide your name, email address and phone number."
    },
    {
        id: 2,
        title: "Select Plan",
        heading: "Select your plan",
        subheading: "You have the option of monthly or yearly billing."
    },
    {
        id: 3,
        title: "Add-ons",
        heading: "Pick add-ons",
        subheading: "Add-ons help enhance your gaming experience."
    },
    {
        id: 4,
        title: "Summary",
        heading: "Finishing up",
        subheading: "Double check everything looks OK before confirming."
    }
]

export const PLANS = [
    {
        id: "1",
        icon: "/styles/icon-arcade.svg",
        title: "Arcade",
        monthlyCost: "9",
        yearlyCost: "90",
    },
    {
        id: "2",
        icon: "/styles/icon-advanced.svg",
        title: "Advanced",
        monthlyCost: "12",
        yearlyCost: "120",
    },
    {
        id: "3",
        icon: "/styles/icon-pro.svg",
        title: "Pro",
        monthlyCost: "15",
        yearlyCost: "150",
    },
]

export const AddOns = [
    {
        id: "1",
        title: "Online service",
        subtitle: "Access to multiplayer games",
        monthlyCost: "1",
        yearlyCost: "10",
    },
    {
        id: "2",
        title: "Larger Storage",
        subtitle: "Extra 1TB of cloud save",
        monthlyCost: "2",
        yearlyCost: "20",
    },
    {
        id: "3",
        title: "Customizable profile",
        subtitle: "Custom theme on your profile",
        monthlyCost: "2",
        yearlyCost: "20",
    },
];

function guid() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16);
}

export function generateID() {
    return guid() + "-" + guid();
}