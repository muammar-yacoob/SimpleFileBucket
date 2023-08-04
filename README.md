# Simple File Bucket

A simple node express server for uploading and downloading files.

## Setup

1. Clone this repo.
2. Install dependencies by running `npm install`.
3. Run the server using `npm run dev`.

## Usage

1. Open your browser and navigate to `localhost:3000` to see the instruction page.
2. Send a POST request to `localhost:3000/upload` to upload a file.
3. Send a GET request to `localhost:3000/download/{filename}` to download a file.

For POST requests, please use the `form-data` format and name your file input as `file`.

## File Storage

Uploaded files are stored in a folder named `bucket` in the root directory. If the folder does not exist, please create one.

## Logs

The server logs every upload and download request, including the filename and timestamp.
