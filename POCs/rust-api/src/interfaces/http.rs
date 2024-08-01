use std::sync::Arc;

use anyhow::Context;
use axum::{Router, routing::post, routing::get, routing::delete, routing::put};
use tokio::net;

use crate::{ repository::MessageRepository, handler::create_message, handler::get_messages,  handler::delete_message, handler::get_message, handler::update_message};



#[derive(Clone)]
pub struct AppState <MR: MessageRepository>{
   pub db: Arc<MR>,
}

pub struct HttpServer {
    router: axum::Router,
    listener: net::TcpListener,
}

impl HttpServer {
    pub async fn new(
        pool: impl MessageRepository,
    ) -> anyhow::Result<Self> {

        let app_state = AppState { db: Arc::new(pool) };

        let router = axum::Router::new()
            .nest("/api", api_routes())
            .with_state(app_state);

        let listener = net::TcpListener::bind("0.0.0.0:9093")
            .await?;

        Ok(Self { router, listener })
    }

    pub async fn run(self) -> anyhow::Result<()> {
        println!("✅ Server started successfully at 0.0.0.0:9093");

        axum::serve(self.listener, self.router)
            .await
            .context("received error from running server")?;
        Ok(())
    }
}

fn api_routes<MR: MessageRepository>() -> Router<AppState<MR>> {
    Router::new()
    .route("/", post(create_message::<MR>))
    .route("/", get(get_messages::<MR>))
    .route("/", put(update_message::<MR>))
    .route("/:id", delete(delete_message::<MR>))
    .route("/:id", get(get_message::<MR>))
    
}
