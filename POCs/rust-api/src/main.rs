
use rust_api::{ repository::MessageRepository, models::CreateMessageRequest,pg_database::Database};
use axum::{http::StatusCode, response::IntoResponse,  routing::post, Json, Router};
use std::sync::Arc;
use axum::extract::State;
/* 
use rust_api::{ pg_database::Database, repository::MessageRepository, models::CreateMessageRequest};
use std::sync::Arc;
use axum::extract::State;

use rust_api::http::HttpServer;

#[tokio::main]
async fn main() {

    let message_repo =  Database::new();


    let http_server = HttpServer::new(message_repo).await.unwrap();
    http_server.run().await;
}
*/

pub struct AppState {
    db: Arc<dyn MessageRepository>,
}

#[tokio::main]
async fn main() {

    let pool = Database::new();

    let app_state = Arc::new(AppState { db: Arc::new(pool) });

    println!("✅ Server started successfully at 0.0.0.0:9093");

    let app = Router::new()
        .route("/", post(create_message))
        .with_state(app_state);
        //.route("/messages", get(messages));
    println!("booting up server");

    
    axum::Server::bind(&"0.0.0.0:9093".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn create_message(State(state): State<Arc<AppState>>,Json(payload): Json<CreateMessageRequest>)->Result<impl IntoResponse, StatusCode>{
    let message = state.db.create_message(payload).unwrap();
    Ok(Json(message))
}


/* 
async fn messages() -> Result<impl IntoResponse, StatusCode> {
    let conn = &mut establish_connection().unwrap();
    match get_messages(conn) {
        Ok(messages) => Ok(Json(messages).into_response()),
        Err(e) => {
            let error_response = ErrorResponse { error: e.to_string() };
            Ok((StatusCode::INTERNAL_SERVER_ERROR, Json(error_response)).into_response())
        }
    }
}

    */