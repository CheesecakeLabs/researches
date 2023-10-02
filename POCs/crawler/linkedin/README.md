
# Linkedin Crawler

The Linkedin Crawler is a utility designed to fetch information from Linkedin based on provided URLs. This README will guide you through the setup and execution process.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Clone the Repository](#clone-the-repository)
- [Setup & Installation](#setup--installation)
- [Running the Crawler](#running-the-crawler)
- [Extracting Linkedin Cookies](#extracting-linkedin-cookies)
- [Contributing](#contributing)

## Prerequisites

1. **Node.js**: You should have Node.js installed on your computer. If not, download and install it from the [official Node.js website](https://nodejs.org/).

## Clone the Repository

1. **Clone with HTTPS**:
   ```bash
   git clone git@github.com:CheesecakeLabs/researches.git
   ```

## Setup & Installation

1. Navigate to the project directory:
   ```bash
   cd researches/POCs/crawler/linkedin
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Running the Crawler

1. Start the crawler:
   ```bash
   node index.js
   ```

2. The program will prompt you for your Linkedin authentication cookies: `LI_A` and `LI_AT`. [See below for extraction steps](#extracting-linkedin-cookies).

3. Input the Linkedin Recruiter lite Search URL you wish to crawl.

4. Do not minimize or put your browser in the background during the initial crawling process.

5. Once the program starts retrieving public URLs, you can minimize the browser but don't close it.

6. Upon completion, navigate to the project folder to retrieve your CSV file with the fetched data.

## Extracting Linkedin Cookies

1. Go to [Linkedin](https://www.linkedin.com/) and log in.

2. Open the browser's Developer Tools (typically `F12` or `Right-click > Inspect`).

3. Navigate to the 'Application' or 'Storage' tab.

4. Under the 'Cookies' section, look for the Linkedin domain.

5. Find the cookies named `LI_A` and `LI_AT` and copy their values.

## Contributing

We welcome contributions! Please fork this repository and create a pull request with your changes.
