
/* 
use crate::http::AppState;
use crate::{ repository::MessageRepository, models::CreateMessageRequest};
use axum::{http::StatusCode, response::IntoResponse,  routing::post, Json, Router};
use std::sync::Arc;
use axum::extract::State;


pub async fn create_message<MR: MessageRepository>(
    State(state): State<AppState<MR>>,
    Json(payload): Json<CreateMessageRequest>,
) ->Result<impl IntoResponse, StatusCode> {
    let message = state
        .db
        .create_message(payload)
        .unwrap();
    Ok(Json(message))
}
// Como buscar DB from state


async fn create_message(State(db): State<Arc<AppState>>,Json(payload): Json<CreateMessageRequest>)->Result<impl IntoResponse, StatusCode>{
    let message = db.create_message(payload);
    Ok(Json(message))
}
#[get("/events")]
async fn get_events(db:web::Data<Database>)->HttpResponse{
    let events = db.get_events();
    HttpResponse::Ok().json(events)
}

#[get("/events/{id}")]
async fn get_event(db:web::Data<Database>,path:web::Path<i32>)->HttpResponse{
    let event = db.get_event(path.into_inner());
    match event {
        Some(event)=>HttpResponse::Ok().json(event),
        None=>HttpResponse::NotFound().body("Not Found")
    }
}



#[delete("/events/{id}")]
async fn delete_event(db:web::Data<Database>,path:web::Path<i32>)->HttpResponse{
    let event = db.delete_event(path.into_inner());
    match event {
        Ok(event)=>HttpResponse::Ok().json(event),
        Err(_)=>HttpResponse::InternalServerError().body("Internal Server Error")
    }
}

#[put("/events")]
async fn update_event(db:web::Data<Database>,event:web::Json<Event>)->HttpResponse{
    let event = db.update_event(event.into_inner());
    match event {
        Ok(event)=>HttpResponse::Ok().json(event),
        Err(_)=>HttpResponse::InternalServerError().body("Internal Server Error")
    }
}

    */