use diesel::{Queryable, Insertable,AsChangeset};
use crate::schema::messages;
use diesel::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Queryable, Selectable, Serialize, Deserialize,Debug,Clone,AsChangeset,Insertable)]
#[diesel(table_name = messages)]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct Message {
    pub id: i32,
    pub message: String,
}

#[derive(Deserialize, Serialize,Debug,Clone,Insertable)]
#[diesel(table_name = messages)]
pub struct CreateMessageRequest {
    pub message: String,
}