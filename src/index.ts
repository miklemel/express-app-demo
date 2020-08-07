
const express = require("express");

const app = express();

// создаем парсер для данных в формате json
const jsonParser = express.json();

// настройка CORS
app.use((req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();  // передаем обработку запроса методу app.post("/postuser"...
});

// обработчик по маршруту localhost:3000/postuser
app.post("/forms/order", jsonParser, (request: { body: any; }, response: { sendStatus: (arg0: number) => any; json: (arg0: { status: string; }) => void; }) => {

    // если не переданы данные, возвращаем ошибку
    if(!request.body) return response.sendStatus(400);

    console.log(request.body)
    // получаем данные
    // let username = request.body.name;
    // let userage = request.body.age;
    // имитируем некоторую обработку данных, например, изменим значение userage


    // отправка данных обратно клиенту
    response.json({"status": "ok"});
});

app.get("/forms/kdd_list", jsonParser, (request: { body: any; }, response: { sendStatus: (arg0: number) => any; json: (arg0: { kdd: { id: number; full_description: string; name: string; }[]; }) => void; }) => {
    // если не переданы данные, возвращаем ошибку
    if(!request.body) return response.sendStatus(400);
    console.log('get kdd list ')
    response.json({"kdd":[
            {
                "id": 123,
                "full_description" : "fulldscr1",
                "name": "name1"
            },
            {
                "id": 2332,
                "full_description" : "fulldscr2",
                "name": "name2"
            },       {
                "id": 44,
                "full_description" : "fulldscr2",
                "name": "name2"
            },
        ]});
});
app.get("/forms/get_messages", jsonParser,  (request: { body: any; }, response: { sendStatus: (arg0: number) => any; json: (arg0: { message: string; }) => void; }) => {
    // если не переданы данные, возвращаем ошибку
    if(!request.body) return response.sendStatus(400);
    console.log('get messages ')
    response.json({"message": "good"});
});

app.get("/forms/extend_keepeng", jsonParser,  (request: { body: any; query: { uuid: any; }; }, response: { sendStatus: (arg0: number) => any; json: (arg0: { message: string; status: string; }) => void; }) => {
    // если не переданы данные, возвращаем ошибку
    if(!request.body) return response.sendStatus(400);
    let uuid = request.query.uuid;
    console.log('uid:', uuid)
    console.log('get extend keeping ')
    response.json({"message": `extension for ${uuid} was successfull`, "status": "success"});
    // response.json({"message": `extension for ${uuid} was interrupted, u have no more right for it`, "status": "fail"});
});

app.get("/forms/get_message", jsonParser,  (request: { body: any; query: { uid: any; }; }, response: { sendStatus: (arg0: number) => any; json: (arg0: { message: string; status: string; }) => void; }) =>{
    // если не переданы данные, возвращаем ошибку
    if(!request.body) return response.sendStatus(400);
    let uid = request.query.uid;
    console.log('uid:', uid)
    console.log('get message after download ')
    response.json({"message": `download for ${uid} was successfull`, "status": "success"});
    // response.json({"message": `download for ${uid} was interrupted`, "status": "fail"});
});

app.get("/forms/user_description", jsonParser,  (request: { body: any; }, response: {
        sendStatus: (arg0: number) => any; json: (arg0: {
            username: string; email: string; first_name: string; second_name: string; group: string;
            // "group": "user",
            users_list: string[];
        }) => void;
    }) =>{
    // если не переданы данные, возвращаем ошибку
    if(!request.body) return response.sendStatus(400);
    console.log('get user description ')
    // public username: string,
    //     public email: string,
    //     public first_name: string,
    //     public second_name: string,
    //     public group: string,
    //     public users_list: [],
    response.json(
        {
            "username": "1",
            "email": "1",
            "first_name": "1",
            "second_name": "1",
            "group": "elevatedUser",
            // "group": "user",
            "users_list": ["1",'1223'],
        });
});

// app.get("/forms/tasks", jsonParser,  (request, response) =>{
//     // если не переданы данные, возвращаем ошибку
//     if(!request.body) return response.sendStatus(400);
//     console.log('get tasks  ')
//     // public uid: string,
//     //     public name: string,
//     //     public datetimeStart: number | string,
//     //     public datetimeEnd: number | string,
//     //     public cam_id: number,
//     //     public status: string,
//     //     public requestDate: number,
//     //     public progress: {
//     //     percent,
//     //         size,
//     //         full_size
//     // },
//     response.json({tasks:
//             [
//                 {
//                     "uid": "1",
//                     "name": "1",
//                     "datetimeStart": 1596337870000,
//                     "datetimeEnd": 1596367870000,
//                     "cam_id": 1,
//                     "status": "processing",
//                     "requestDate": 1596367870000,
//                     "before_deleting_time": 86600,
//                     "progress": {
//                         percent: 1,
//                         size: 1,
//                         full_size: 1
//                     },
//                 },
//                 {
//                     "uid": "2",
//                     "name": "1",
//                     "datetimeStart": 1596337870000,
//                     "datetimeEnd": 1596367870000,
//                     "cam_id": 1,
//                     "status": "download",
//                     "requestDate": 1596367870000,
//                     "before_deleting_time": 10000,
//                     "progress": {
//                         percent: 1,
//                         size: 1,
//                         full_size: 1
//                     },
//                 } ,
//                 {
//                     "uid": "3",
//                     "name": "1",
//                     "datetimeStart": 1596337870000,
//                     "datetimeEnd": 1596367870000,
//                     "cam_id": 1,
//                     "status": "success",
//                     "requestDate": 1596367870000,
//                     "before_deleting_time": 172826,
//                     "download_times": 0,
//                     // "before_deleting_time": 36000,
//                     "progress": {
//                         percent: 1,
//                         size: 1,
//                         full_size: 1
//                     },
//                 },
//                 {
//                     "uid": "4",
//                     "name": "1",
//                     "datetimeStart": 1596337870000,
//                     "datetimeEnd": 1596367870000,
//                     "cam_id": 1,
//                     "status": "fail",
//                     "requestDate": 1596367870000,
//                     "before_deleting_time": 3600,
//                     "download_times": 0,
//                     "product_keeping_time": 1298,
//                     "progress": {
//                         percent: 1,
//                         size: 1,
//                         full_size: 1
//                     },
//                 },
//                 {
//                     "uid": "5",
//                     "name": "5",
//                     "datetimeStart": 1596337870000,
//                     "datetimeEnd": 1596367870000,
//                     "cam_id": 1,
//                     "status": "success",
//                     "requestDate": 1596367870000,
//                     "before_deleting_time": 431999,
//                     "download_times": 2,
//                     "product_keeping_time": 1290,
//                     "progress": {
//                         percent: 1,
//                         size: 1,
//                         full_size: 1
//                     },
//                 },
//                 {
//                     "uid": "5",
//                     "name": "6",
//                     "datetimeStart": 1596337870000,
//                     "datetimeEnd": 1596367870000,
//                     "cam_id": 44,
//                     "status": "success",
//                     "requestDate": 1596367870000,
//                     "before_deleting_time": 23332,
//                     "download_times": 1,
//                     "product_keeping_time": 1296000,
//                     "progress": {
//                         percent: 1,
//                         size: 1,
//                         full_size: 1
//                     },
//                 },
//                 {
//                     "uid": "6",
//                     "name": "1",
//                     "datetimeStart": 1596337870000,
//                     "datetimeEnd": 1596367870000,
//                     "cam_id": 1,
//                     "status": "history",
//                     "requestDate": 1596367870000,
//                     "before_deleting_time": 23332,
//                     "download_times": 2,
//                     "product_keeping_time": 1296000,
//                     "progress": {
//                         percent: 1,
//                         size: 1,
//                         full_size: 1
//                     },
//                 },
//
//             ]});
// });


app.listen(3000,()=> console.log('Started'));

