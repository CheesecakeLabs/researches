use diesel::r2d2::{self, ConnectionManager};
use dotenvy::dotenv;
use diesel::{
    pg::PgConnection, RunQueryDsl, SelectableHelper,
};
use crate::models::{CreateMessageRequest, Message};
use crate::schema::messages;
use crate::repository::MessageRepository;

pub type DBPool = r2d2::Pool<ConnectionManager<PgConnection>>;

#[derive(Clone)]
pub struct Database {
    pub pool: DBPool,
}



impl Database { 
    pub fn new() -> Self {
        dotenv().ok();
        let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");
        
        let manager = ConnectionManager::<PgConnection>::new(database_url);
        let result = r2d2::Pool::builder()
            .build(manager)
            .expect("Failed to create pool.");
        
        Database { pool: result }
    }

    
}

impl MessageRepository for Database{
    fn create_message(&self,new_message:CreateMessageRequest)->Result<Message,anyhow::Error>{
        Ok(diesel::insert_into(messages::table)
        .values(&new_message)
        .returning(Message::as_returning())
        .get_result(&mut self.pool.get().unwrap())?)
    }

    /* 

    pub fn get_messages(&self) -> Vec<Message> {
        
        messages
            .load::<Message>(&mut self.pool.get().unwrap())
            .expect("Failed to get events.")
    }

    pub fn get_message(&self, find_id:i32) -> Option<Message> {
        messages
            .find(find_id)
            .first::<Message>(&mut self.pool.get().unwrap())
            .ok()
    }

    

    pub fn delete_message(&self,find_id:i32)->Result<usize,diesel::result::Error>{
        diesel::delete(messages.filter(id.eq(find_id))).execute(&mut self.pool.get().unwrap())
    }

    pub fn update_message(&self,message:Message)->Result<Message,diesel::result::Error>{
        diesel::update(messages.filter(id.eq(message.id))).set(&message).get_result(&mut self.pool.get().unwrap())
    }
    */
}
