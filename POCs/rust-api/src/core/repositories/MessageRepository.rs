use crate::models::{CreateMessageRequest, Message};

//+ Clone + 'static 
pub trait MessageRepository: Send + Sync {
    fn create_message(&self, req: CreateMessageRequest) -> Result<Message, anyhow::Error>;

    //fn get_messages(&self) -> Result<Vec<Message>, MessageError>;
}