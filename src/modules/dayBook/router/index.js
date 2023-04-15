export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "DayBook" */ '@/modules/dayBook/layouts/DayBookLayout'),
    children: [
        
    ]
}