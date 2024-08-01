use crate::models::{CreateMessageRequest, Message};

//+ Clone + 'static 
pub trait MessageRepository: Send + Sync + Clone + 'static  {
    fn create_message(&self, req: CreateMessageRequest) -> Result<Message, anyhow::Error>;
    fn get_messages(&self) -> Result<Vec<Message>, anyhow::Error>;
    fn delete_message(&self, find_id: i32) -> Result<usize,anyhow::Error>;
    fn get_message(&self, find_id: i32) -> Result<Message, anyhow::Error>;
    fn update_message(&self, message: Message) -> Result<Message, anyhow::Error>;
}