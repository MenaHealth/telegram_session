# Telegram Authentication Script

This script is used to authenticate a Telegram account using the Telegram API and generate a `StringSession` for future API interactions.

## Purpose

The `StringSession` is a secure and reusable session string that allows you to interact with Telegram's API without re-authenticating every time. This script simplifies the process of logging in to Telegram and obtaining the `StringSession` string.

## Prerequisites

1. **Node.js and npm**: Ensure you have [Node.js](https://nodejs.org/) installed.
2. **Telegram Developer Account**: You must have a Telegram API ID and API Hash. Obtain these from the [Telegram Developer Portal](https://my.telegram.org/apps).

## Setup

1. Clone the repository or download the script.
2. fill out the info in the env file from your telegram dev account
3. run npm install 

## run 
1. to generate a StringSession variable run  `npm generate-session.js` and follow the prompts