export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "DayBook" */ '@/modules/dayBook/layouts/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "NoEntry" */ '@/modules/dayBook/views/NoEntrySelected'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "EntryView" */ '@/modules/dayBook/views/EntryView'),
        },
    ]
}