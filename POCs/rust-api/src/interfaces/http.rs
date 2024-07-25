/* 
use std::sync::Arc;

use anyhow::Context;
use axum::{Router, routing::post};
use tokio::net;

use crate::{ repository::MessageRepository, handler::create_message};



#[derive(Clone)]
pub struct AppState <MR: MessageRepository>{
   pub db: Arc<MR>,
}

pub struct HttpServer {
    router: axum::Router,
}

impl HttpServer {
    pub async fn new(
        pool: impl MessageRepository,
    ) -> anyhow::Result<Self> {

        let app_state = AppState { db: Arc::new(pool) };

        let router = axum::Router::new()
            .nest("/api", api_routes())
            .with_state(app_state);


        Ok(Self { router })
    }

    /// Runs the HTTP server.
    pub async fn run(self) -> anyhow::Result<()> {
        println!("✅ Server started successfully at 0.0.0.0:9093");

        axum::Server::bind(&"0.0.0.0:9093".parse().unwrap())
        .serve(self.router.into_make_service())
        .await
        .unwrap();
        Ok(())
    }
}

fn api_routes<MR: MessageRepository>() -> Router<AppState<MR>> {
    Router::new().route("/", post(create_message::<MR>))
}

    */