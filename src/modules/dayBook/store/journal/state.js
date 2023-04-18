export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Ullamco duis enim labore eu amet id irure laboris minim. Est labore veniam enim laboris mollit ea consectetur in eu elit ex reprehenderit adipisicing. Proident quis veniam irure laborum incididunt enim in nostrud eu anim ullamco duis. Irure consequat est ut commodo velit veniam.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Est labore veniam enim laboris mollit ea consectetur in eu elit ex reprehenderit adipisicing. Proident quis veniam irure laborum incididunt enim in nostrud eu anim ullamco duis. Irure consequat est ut commodo velit veniam.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Consectetur in eu elit ex reprehenderit adipisicing. Proident quis veniam irure laborum incididunt enim in nostrud eu anim ullamco duis. Irure consequat est ut commodo velit veniam.',
            picture: null
        },
    ]
})