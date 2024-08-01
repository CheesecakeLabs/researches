use rust_api::{ pg_database::Database};
use rust_api::http::HttpServer;

#[tokio::main]
async fn main() -> anyhow::Result<()>  {

    let message_repo =  Database::new();


    let http_server = HttpServer::new(message_repo).await?;
    http_server.run().await
}
