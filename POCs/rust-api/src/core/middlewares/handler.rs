use crate::http::AppState;
use crate::{ repository::MessageRepository, models::CreateMessageRequest, models::Message};
use axum::{http::StatusCode, response::IntoResponse, Json};
use axum::extract::{Path, State};


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

pub async fn get_messages<MR: MessageRepository>(State(state): State<AppState<MR>>,) ->Result<impl IntoResponse, StatusCode>{
    let all_message = state
        .db
        .get_messages()
        .unwrap();
    Ok(Json(all_message))
}

pub async fn delete_message<MR: MessageRepository>(State(state): State<AppState<MR>>, Path(id): Path<i32>,)-> Result<impl IntoResponse, StatusCode>{
    let delete_message = state
        .db
        .delete_message(id)
        .unwrap();
    Ok(Json(delete_message))

}
pub async fn get_message<MR: MessageRepository>(State(state): State<AppState<MR>>, Path(id): Path<i32>,)-> Result<impl IntoResponse, StatusCode>{
    let delete_message = state
        .db
        .get_message(id)
        .unwrap();
    Ok(Json(delete_message))

}

pub async fn update_message<MR: MessageRepository>(
    State(state): State<AppState<MR>>,
    Json(payload): Json<Message>, 
   // Path(id): Path<i32>,
) ->Result<impl IntoResponse, StatusCode> {
    let message = state
        .db
        //.update_message(id, payload)
        .update_message(payload)
        .unwrap();
    Ok(Json(message))
}
