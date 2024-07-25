// src/lib.rs
pub mod schema;
#[path="core/entities/Message.rs"] pub mod models;
#[path="core/repositories/MessageRepository.rs"] pub mod repository;
#[path="interfaces/postgres.rs"] pub mod pg_database;
#[path="core/middlewares/handler.rs"] pub mod handler;
#[path="interfaces/http.rs"] pub mod http;


