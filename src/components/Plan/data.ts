export const PlanData = () => {
    return [
        {
            id: 'arcade',
            title: 'Arcade',
            price: { Monthly: 9, Yearly: 90 },
            icon: '/public/images/icon-arcade.svg',
            benefit: '2 months free'
        },
        {
            id: 'advanced',
            title: 'Advanced',
            price: { Monthly: 12, Yearly: 120 },
            icon: '/public/images/icon-advanced.svg',
            benefit: '2 months free'
        },
        {
            id: 'pro',
            title: 'Pro',
            price: { Monthly: 15, Yearly: 150 },
            icon: '/public/images/icon-pro.svg',
            benefit: '2 months free'
        },
    ];
}