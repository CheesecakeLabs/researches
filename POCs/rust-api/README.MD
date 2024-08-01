## Rust API Architecture



## Rust API Crate (libraries)

### Rust Diesel
ORM and query builder library
https://github.com/diesel-rs/diesel
https://docs.rs/diesel/latest/diesel/

### Rust Tokio
Async runtime
https://docs.rs/tokio/latest/tokio/


### Rust Axum
Web application framework
https://docs.rs/axum/latest/axum/


### Rust Arc
Arc(Atomically Reference Counted) to allow shared ownership between threads

### Rust Anyhow
Provides anyhow:Error, a trait object based error type for easy idiomatic error handling in Rust application.

With anyhow, there is no need to specify the type of the error that lies in an instance of the Result enum, that way we could create the abstraction for handlers and repository without need to create an error abstraction or attach the web app framewor (or database) with the trait.

https://docs.rs/anyhow/latest/anyhow/index.html