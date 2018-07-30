export default {
  SelectedSports: [],
  MainTypes: [
    {id: 'T00001', ru_name: 'Сноубординг', en_name: 'Snowboarding', global_type: 'G001', synonims: ['Доска'], short_description: '', picto: 'fas fa-snowflake'},
    {id: 'T00002', ru_name: 'Горные лыжи', en_name: 'Mountain ski', global_type: 'G001', synonims: ['лыжный'], short_description: '', picto: 'fas fa-snowflake'},
    {id: 'T00003', ru_name: 'Сани', en_name: '', global_type: 'G001', synonims: ['Санки', 'Санный спорт'], short_description: '', picto: 'fas fa-snowflake'},

    {id: 'T00004', ru_name: 'Вэйкбординг', en_name: 'Wakeboarding', global_type: 'G002', synonims: ['Вейкбординг'], short_description: '', picto: 'fas fa-tint'},
    {id: 'T00005', ru_name: 'Плавание', en_name: 'Swimming', global_type: 'G002', synonims: [''], short_description: '', picto: 'fas fa-swimmer'},
    {id: 'T00006', ru_name: 'Дайвинг', en_name: 'Diving', global_type: 'G002', synonims: ['Погружение'], short_description: '', picto: 'fas fa-tint'},
    {id: 'T00007', ru_name: 'Водная гимнастика', en_name: '', global_type: 'G002', synonims: ['на воде'], short_description: '', picto: 'fas fa-tint'},

    {id: 'T00008', ru_name: 'Скейтбординг', en_name: 'Skateboarding', global_type: 'G003', synonims: [''], short_description: '', picto: 'fas fa-building'},
    {id: 'T00009', ru_name: 'Лонгбординг', en_name: 'Longboarding', global_type: 'G003', synonims: [''], short_description: '', picto: 'fas fa-building'},
    {id: 'T00010', ru_name: 'Поггинг', en_name: 'Pogging', global_type: 'G003', synonims: [''], short_description: '', picto: 'fas fa-building'},
    {id: 'T00011', ru_name: 'Руфинг', en_name: 'Roofing', global_type: 'G003', synonims: ['крыша'], short_description: '', picto: 'fas fa-building'},

    {id: 'T00012', ru_name: 'Айкидо', en_name: '', global_type: 'G004', synonims: [''], short_description: '', picto: 'fas fa-dumbbell'},
    {id: 'T00013', ru_name: 'Бокс', en_name: 'Boxing', global_type: 'G004', synonims: [''], short_description: '', picto: 'fas fa-dumbbell'},
    {id: 'T00014', ru_name: 'Джиу-Джитсу', en_name: '', global_type: 'G004', synonims: [''], short_description: '', picto: 'fas fa-dumbbell'},
    {id: 'T00015', ru_name: 'Карате', en_name: 'Karate', global_type: 'G004', synonims: [''], short_description: '', picto: 'fas fa-dumbbell'},

    {id: 'T00016', ru_name: 'Джаз', en_name: 'Jazz', global_type: 'G005', synonims: [''], short_description: '', picto: 'fas fa-dumbbell'},
    {id: 'T00017', ru_name: 'Твист', en_name: 'Twist', global_type: 'G005', synonims: [''], short_description: '', picto: 'fas fa-dumbbell'},
    {id: 'T00018', ru_name: 'Сальса', en_name: 'Salsa', global_type: 'G005', synonims: [''], short_description: '', picto: 'fas fa-dumbbell'},
    {id: 'T00019', ru_name: 'Зука', en_name: 'Zuka', global_type: 'G005', synonims: [''], short_description: '', picto: 'fas fa-dumbbell'},

    {id: 'T00020', ru_name: 'Фитнес', en_name: 'Fitness', global_type: 'G006', synonims: ['качалка'], short_description: '', picto: 'fas fa-dumbbell'},
    {id: 'T00021', ru_name: 'Йога', en_name: 'Yoga', global_type: 'G006', synonims: [''], short_description: '', picto: 'fas fa-dumbbell'},
    {id: 'T00022', ru_name: 'Воркаут', en_name: 'Workout', global_type: 'G006', synonims: ['турник'], short_description: '', picto: 'fas fa-dumbbell'},

    {id: 'T00023', ru_name: 'Шахматы', en_name: 'Fitness', global_type: 'G007', synonims: ['качалка'], short_description: '', picto: 'fas fa-chess-knight'},
    {id: 'T00024', ru_name: 'Шашки', en_name: 'Yoga', global_type: 'G007', synonims: [''], short_description: '', picto: 'fas fa-chess-knight'},
    {id: 'T00025', ru_name: 'Го', en_name: 'Workout', global_type: 'G007', synonims: ['турник'], short_description: '', picto: 'fas fa-chess-knight'},

    {id: 'T00026', ru_name: 'Dota', en_name: 'Dota', global_type: 'G008', synonims: ['дота'], short_description: '', picto: 'fas fa-desktop'},
    {id: 'T00027', ru_name: 'Counter Strike', en_name: 'Counter Strike', global_type: 'G008', synonims: ['контра'], short_description: '', picto: 'fas fa-desktop'},
    {id: 'T00028', ru_name: 'League of Legends', en_name: 'League of Legends', global_type: 'G008', synonims: ['лига'], short_description: '', picto: 'fas fa-desktop'}
  ],
  GlobalTypes: [
    {id: 'G001', ru_name: 'Зиний спорт', en_name: 'Winter sports', picto: 'fas fa-snowflake'},
    {id: 'G002', ru_name: 'Водный спорт', en_name: 'Water sports', picto: 'fas fa-tint'},
    {id: 'G003', ru_name: 'Городской спорт', en_name: 'Urban sports', picto: 'fas fa-building'},
    {id: 'G004', ru_name: 'Боевые искусства', en_name: 'Winter sports', picto: 'fas fa-dumbbell'},
    {id: 'G005', ru_name: 'Танцы', en_name: 'Dances', picto: 'fas fa-dumbbell'},
    {id: 'G006', ru_name: 'Развитие тела', en_name: 'Body improvement', picto: 'fas fa-dumbbell'},
    {id: 'G007', ru_name: 'Интеллектуальный спорт', en_name: '', picto: 'fas fa-chess-knight'},
    {id: 'G008', ru_name: 'Киберспорт', en_name: '', picto: 'fas fa-desktop'}
  ]
}
